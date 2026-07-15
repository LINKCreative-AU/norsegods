/**
 * Generate story narration MP3s with James's cloned voice via ElevenLabs.
 *
 * Usage:
 *   ELEVENLABS_API_KEY=... ELEVENLABS_VOICE_ID=... npm run narrate           # all stories missing audio
 *   ... npm run narrate -- --slug how-the-world-was-made                     # one story
 *   ... npm run narrate -- --force                                          # regenerate even if file exists
 *
 * Keys can also live in norsegods-site/.env.local (never committed).
 * Output: public/audio/<slug>.mp3 — the story pages auto-detect these at build.
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

const API_KEY = process.env.ELEVENLABS_API_KEY;
const VOICE_ID = process.env.ELEVENLABS_VOICE_ID;

if (!API_KEY || !VOICE_ID) {
  console.error(
    "Missing ELEVENLABS_API_KEY or ELEVENLABS_VOICE_ID.\n" +
      "Put them in norsegods-site/.env.local:\n\n" +
      '  ELEVENLABS_API_KEY="sk_..."\n' +
      '  ELEVENLABS_VOICE_ID="..."\n'
  );
  process.exit(1);
}

const args = process.argv.slice(2);
const force = args.includes("--force");
const slugArg = args.includes("--slug") ? args[args.indexOf("--slug") + 1] : null;

/**
 * Keep each request comfortably under ElevenLabs' per-request character limits.
 * Paragraphs are joined with an SSML break so the narrator breathes between them
 * instead of running on — the main fix for "robotic" transitions.
 */
function batchParagraphs(paragraphs: string[], maxChars = 4000): string[] {
  const joiner = ' <break time="0.9s" /> ';
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
  const outDir = join(root, "public", "audio");
  mkdirSync(outDir, { recursive: true });

  const targets = stories.filter((s) => (slugArg ? s.slug === slugArg : true));
  if (targets.length === 0) {
    console.error(`No story matches slug "${slugArg}".`);
    process.exit(1);
  }

  for (const story of targets) {
    const outFile = join(outDir, `${story.slug}.mp3`);
    if (existsSync(outFile) && !force && !slugArg) {
      console.log(`— ${story.slug}: audio exists, skipping (use --force to regenerate)`);
      continue;
    }
    const batches = batchParagraphs(story.paragraphs);
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
