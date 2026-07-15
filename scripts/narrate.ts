/**
 * Generate story narration MP3s with James's cloned voice via ElevenLabs.
 *
 * Usage:
 *   ELEVENLABS_API_KEY=... ELEVENLABS_VOICE_ID=... npm run narrate           # all stories missing audio
 *   ... npm run narrate -- --slug how-the-world-was-made                     # one story
 *   ... npm run narrate -- --force                                          # regenerate even if file exists
 *   npm run narrate -- --analyze                                            # no API key needed: print the pause
 *                                                                           # plan (which full stops get longer
 *                                                                           # breaks, and why) without synthesizing
 *
 * Keys can also live in norsegods-site/.env.local (never committed).
 * Output: public/audio/<slug>.mp3 — the story pages auto-detect these at build.
 *
 * BEDTIME PACING
 * Every sentence boundary gets an explicit SSML break, sized by what the
 * sentence is doing (override any of these via env, in seconds):
 *   PAUSE_SENTENCE  (0.6)  ordinary full stop
 *   PAUSE_DRAMATIC  (1.1)  a beat: short punchy sentences, sleepy/heavy
 *                          endings, questions, and stops right before a
 *                          scene turn ("Then…", "Suddenly…", "At last…")
 *   PAUSE_PARAGRAPH (1.4)  between paragraphs
 */
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { stories } from "../src/data/stories";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

// Minimal .env.local loader so the script works without extra deps
const envFile = join(root, ".env.local");
if (existsSync(envFile)) {
  for (const line of readFileSync(envFile, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*"?([^"\r\n]*)"?\s*$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
  }
}

const args = process.argv.slice(2);
const force = args.includes("--force");
const analyze = args.includes("--analyze");
const slugArg = args.includes("--slug") ? args[args.indexOf("--slug") + 1] : null;

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID;

if (!analyze && (!API_KEY || !VOICE_ID)) {
  console.error(
    "Missing ELEVENLABS_API_KEY or ELEVENLABS_VOICE_ID.\n" +
      "Put them in norsegods-site/.env.local:\n\n" +
      '  ELEVENLABS_API_KEY="sk_..."\n' +
      '  ELEVENLABS_VOICE_ID="..."\n\n' +
      "(Or run with --analyze to preview the pause plan without keys.)"
  );
  process.exit(1);
}

const PAUSE = {
  sentence: Number(process.env.PAUSE_SENTENCE ?? 0.6),
  dramatic: Number(process.env.PAUSE_DRAMATIC ?? 1.1),
  paragraph: Number(process.env.PAUSE_PARAGRAPH ?? 1.4),
};

/* ------------------------------------------------------------------ */
/* Sentence-level pause planning                                       */
/* ------------------------------------------------------------------ */

/**
 * Split a paragraph into sentences. A boundary is . ! ? or … (optionally
 * inside a closing quote) followed by whitespace and an opening capital,
 * quote, or dash. Em-dashes and mid-sentence commas never split.
 */
function splitSentences(paragraph: string): string[] {
  return paragraph
    .split(/(?<=[.!?…]["'”’]?)\s+(?=["'“‘]?[A-ZÆØÅÞÐÓÍ—])/u)
    .map((s) => s.trim())
    .filter(Boolean);
}

/** Sentence endings that deserve a lingering beat at bedtime pace. */
const SLEEPY_ENDING =
  /\b(waited|waiting|listened|listening|slept|sleep|sleeps|asleep|silence|silent|still|quiet|quietly|dark|darkness|night|dream|dreams|dreaming|dreamed|breath|breathed|breathing|embers?|ashes?|cold|alone|gone|done|over|ended?|rest|resting|home|peace|eyes|yet|forever|always|nothing|no one|word|world)[.!?…]*["'”’]?$/i;

/** Openers that mark a scene turn — the stop *before* them gets the beat. */
const TURN_OPENER =
  /^["'“‘]?(Then|Suddenly|At last|At first|Now|But|So|One day|One night|In the morning|When at last|And that|And so|And then)\b/;

type Reason = "short" | "sleepy-end" | "question" | "turn-next" | null;

/** Decide the pause AFTER sentence i (i.e. between i and i+1). */
function classifyBoundary(sentence: string, next: string | undefined): Reason {
  const words = sentence.split(/\s+/).length;
  if (words <= 6) return "short";
  if (/[?]["'”’]?$/.test(sentence)) return "question";
  if (SLEEPY_ENDING.test(sentence)) return "sleepy-end";
  if (next && TURN_OPENER.test(next)) return "turn-next";
  return null;
}

interface PausePlan {
  text: string;
  boundaries: { after: string; reason: Reason; seconds: number }[];
}

const breakTag = (s: number) => ` <break time="${s}s" /> `;

/** Weave sentence-level break tags through one paragraph. */
function planParagraph(paragraph: string): PausePlan {
  const sentences = splitSentences(paragraph);
  const boundaries: PausePlan["boundaries"] = [];
  let text = "";
  for (let i = 0; i < sentences.length; i++) {
    text += sentences[i];
    if (i < sentences.length - 1) {
      const reason = classifyBoundary(sentences[i], sentences[i + 1]);
      const seconds = reason ? PAUSE.dramatic : PAUSE.sentence;
      boundaries.push({ after: sentences[i], reason, seconds });
      text += breakTag(seconds);
    }
  }
  return { text, boundaries };
}

/**
 * Keep each request comfortably under ElevenLabs' per-request character limits.
 * Paragraphs are joined with the paragraph break so the narrator breathes
 * between them instead of running on.
 */
function batchParagraphs(paragraphs: string[], maxChars = 4000): string[] {
  const joiner = breakTag(PAUSE.paragraph);
  const batches: string[] = [];
  let buf = "";
  for (const p of paragraphs) {
    if (buf && buf.length + p.length > maxChars) {
      batches.push(buf);
      buf = p;
    } else {
      buf = buf ? `${buf}${joiner}${p}` : p;
    }
  }
  if (buf) batches.push(buf);
  return batches;
}

/* ------------------------------------------------------------------ */
/* Analysis mode: show the pause plan without synthesizing             */
/* ------------------------------------------------------------------ */

function runAnalysis(targets: typeof stories) {
  const label: Record<Exclude<Reason, null>, string> = {
    short: "short dramatic sentence",
    "sleepy-end": "sleepy/heavy ending",
    question: "question — let it hang",
    "turn-next": "scene turn coming next",
  };
  for (const story of targets) {
    const plans = story.paragraphs.map(planParagraph);
    const all = plans.flatMap((p) => p.boundaries);
    const dramatic = all.filter((b) => b.reason);
    const addedSeconds =
      all.reduce((s, b) => s + b.seconds, 0) +
      (story.paragraphs.length - 1) * PAUSE.paragraph;
    console.log(`\n═══ ${story.slug} ═══`);
    console.log(
      `${story.paragraphs.length} paragraphs, ${all.length + plans.length} sentences · ` +
        `${all.length - dramatic.length} standard stops @${PAUSE.sentence}s · ` +
        `${dramatic.length} weighted stops @${PAUSE.dramatic}s · ` +
        `${story.paragraphs.length - 1} paragraph breaks @${PAUSE.paragraph}s · ` +
        `≈${Math.round(addedSeconds)}s of deliberate pause`
    );
    for (const b of dramatic) {
      const tail = b.after.length > 64 ? `…${b.after.slice(-64)}` : b.after;
      console.log(`  ${b.seconds}s  [${label[b.reason!]}]  ${tail}`);
    }
  }
}

/* ------------------------------------------------------------------ */
/* Synthesis                                                           */
/* ------------------------------------------------------------------ */

async function tts(text: string): Promise<Buffer> {
  const res = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}?output_format=mp3_44100_128`,
    {
      method: "POST",
      headers: { "xi-api-key": API_KEY!, "Content-Type": "application/json" },
      body: JSON.stringify({
        text,
        model_id: "eleven_multilingual_v2",
        voice_settings: {
          stability: 0.6, // steadier bedtime delivery
          similarity_boost: 0.8, // stay close to James's timbre
          style: 0.12, // a touch of storytelling warmth
          use_speaker_boost: true,
          speed: 0.9, // unhurried — eases the word-to-word transitions
        },
      }),
    }
  );
  if (!res.ok) {
    throw new Error(`ElevenLabs ${res.status}: ${await res.text()}`);
  }
  return Buffer.from(await res.arrayBuffer());
}

async function main() {
  const targets = stories.filter((s) => (slugArg ? s.slug === slugArg : true));
  if (targets.length === 0) {
    console.error(`No story matches slug "${slugArg}".`);
    process.exit(1);
  }

  if (analyze) {
    runAnalysis(targets);
    return;
  }

  const outDir = join(root, "public", "audio");
  mkdirSync(outDir, { recursive: true });

  for (const story of targets) {
    const outFile = join(outDir, `${story.slug}.mp3`);
    if (existsSync(outFile) && !force && !slugArg) {
      console.log(`— ${story.slug}: audio exists, skipping (use --force to regenerate)`);
      continue;
    }
    const paced = story.paragraphs.map((p) => planParagraph(p).text);
    const batches = batchParagraphs(paced);
    const chars = story.paragraphs.join(" ").length;
    console.log(`▶ ${story.slug}: ${chars} chars in ${batches.length} request(s)…`);
    const parts: Buffer[] = [];
    for (let i = 0; i < batches.length; i++) {
      parts.push(await tts(batches[i]));
      console.log(`  part ${i + 1}/${batches.length} done`);
    }
    writeFileSync(outFile, Buffer.concat(parts));
    console.log(`✓ wrote ${outFile}`);
  }
  console.log(
    "\nDone. Run `npm run build` and deploy — story pages pick up the new audio automatically."
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
