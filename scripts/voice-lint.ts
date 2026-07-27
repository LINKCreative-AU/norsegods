/**
 * Human-voice lint for norsegods.org — the gate all automated copy must pass.
 * Same standard as RenoGuide's scripts/voice_lint.mjs, tuned for mythology prose.
 *
 * Usage:
 *   npm run voice-lint                 # scan everything, exit 1 on hard errors
 *   npm run voice-lint -- --slug odin  # strict mode for one entry (bots use this)
 *
 * Hard errors (always): stock AI phrases/words, superlative overload,
 * exclamation overuse. Strict mode adds: em-dash density, rule-of-three
 * triplets, monotone sentence rhythm. Never weaken the lists — redraft.
 */
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { allEntities } from "../src/data";
import { stories } from "../src/data/stories";

const here = dirname(fileURLToPath(import.meta.url));
const tells = JSON.parse(readFileSync(join(here, "voice-tells.json"), "utf8")) as {
  phrases: string[];
  words: string[];
  superlatives: string[];
};

const args = process.argv.slice(2);
const slugArg = args.includes("--slug") ? args[args.indexOf("--slug") + 1] : null;
const strict = Boolean(slugArg) || args.includes("--strict");

const wordRe = (w: string) => new RegExp(`\\b${w}\\b(?!['’])`, "gi");

function coefVar(nums: number[]): number | null {
  if (nums.length < 2) return null;
  const m = nums.reduce((a, b) => a + b, 0) / nums.length;
  if (!m) return null;
  const sd = Math.sqrt(nums.reduce((a, b) => a + (b - m) ** 2, 0) / nums.length);
  return sd / m;
}

function lint(text: string, opts: { strict: boolean; isStory: boolean }) {
  const words = text.split(/\s+/).filter(Boolean).length || 1;
  const lower = text.toLowerCase();
  const errors: string[] = [];
  const warnings: string[] = [];

  for (const p of tells.phrases) if (lower.includes(p)) errors.push(`stock AI phrase: "${p}"`);
  for (const w of tells.words) if (wordRe(w).test(text)) errors.push(`stock AI word: "${w}"`);

  const superRe = new RegExp(`\\b(${tells.superlatives.join("|")})\\b`, "gi");
  const supers = text.match(superRe) || [];
  if (supers.length > 2)
    errors.push(`superlative overload (${supers.length}): ${[...new Set(supers.map((s) => s.toLowerCase()))].join(", ")}`);

  const exclaims = (text.match(/!/g) || []).length;
  if (exclaims > (opts.isStory ? 3 : 1)) errors.push(`exclamation overuse (${exclaims})`);

  // Density tells — hard in strict mode (new bot copy), advisory otherwise.
  const emDashes = (text.match(/—/g) || []).length;
  const dashLimit = Math.max(4, Math.round(words / (opts.isStory ? 90 : 60)));
  if (emDashes > dashLimit)
    (opts.strict ? errors : warnings).push(`em-dash heavy (${emDashes} in ${words} words; limit ${dashLimit})`);

  const triplets = (text.match(/\b\w+, \w+,? and \w+\b/g) || []).length;
  if (triplets >= 3 && (triplets / words) * 1000 > 4)
    (opts.strict ? errors : warnings).push(`rule-of-three triplet overuse (${triplets})`);

  const sentLens = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.split(/\s+/).filter(Boolean).length)
    .filter((n) => n > 2);
  const cv = coefVar(sentLens);
  if (opts.strict && sentLens.length >= 12 && cv !== null && cv < 0.28)
    errors.push(`monotone sentence rhythm (CV ${cv.toFixed(2)}) — vary short and long sentences`);

  return { errors, warnings };
}

let hardFails = 0;
let warned = 0;

function report(kind: string, slug: string, text: string, isStory: boolean) {
  if (slugArg && slug !== slugArg) return;
  const { errors, warnings } = lint(text, { strict, isStory });
  if (errors.length) {
    hardFails++;
    console.log(`✗ ${kind}/${slug}`);
    for (const e of errors) console.log(`    ERROR ${e}`);
  }
  if (warnings.length) {
    warned++;
    console.log(`~ ${kind}/${slug}`);
    for (const w of warnings) console.log(`    warn  ${w}`);
  }
}

for (const e of allEntities) {
  report(e.category, e.slug, [e.summary, ...e.description].join(" "), false);
}
for (const s of stories) {
  report("stories", s.slug, s.paragraphs.join(" "), true);
}

if (slugArg && hardFails === 0) console.log(`✓ ${slugArg} passes strict voice lint`);
if (!slugArg) console.log(`\nScanned ${allEntities.length} entries + ${stories.length} stories: ${hardFails} with errors, ${warned} with warnings.`);
process.exit(hardFails > 0 ? 1 : 0);
