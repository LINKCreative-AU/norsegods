import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import type { CategorySlug } from "@/data/types";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Article {
  /** Rendered HTML for the long-form body (FAQ section excluded). */
  html: string;
  /** Parsed FAQ entries, used for both rendering and FAQPage JSON-LD. */
  faq: FaqItem[];
  wordCount: number;
}

function escapeHtml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/** Inline markdown: links, bold, italics — applied after HTML-escaping. */
function inline(s: string): string {
  return escapeHtml(s)
    .replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, '<a href="$2">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*\n]+)\*/g, "<em>$1</em>");
}

function slugifyHeading(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Strip markdown syntax for plain-text contexts (JSON-LD answers). */
function plain(s: string): string {
  return s
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\*([^*\n]+)\*/g, "$1")
    .trim();
}

function renderBlocks(md: string): string {
  const out: string[] = [];
  let list: string[] | null = null;
  const flushList = () => {
    if (list) {
      out.push(`<ul>${list.map((li) => `<li>${inline(li)}</li>`).join("")}</ul>`);
      list = null;
    }
  };
  for (const block of md.split(/\n{2,}/)) {
    const lines = block.split("\n").map((l) => l.trim()).filter(Boolean);
    if (lines.length === 0) continue;
    if (lines.every((l) => /^[-*] /.test(l))) {
      list = list ?? [];
      list.push(...lines.map((l) => l.replace(/^[-*] /, "")));
      continue;
    }
    flushList();
    if (lines[0].startsWith("## ")) {
      const heading = lines[0].slice(3).trim();
      out.push(`<h2 id="${slugifyHeading(heading)}">${inline(heading)}</h2>`);
      const rest = lines.slice(1).join(" ").trim();
      if (rest) out.push(`<p>${inline(rest)}</p>`);
      continue;
    }
    out.push(`<p>${inline(lines.join(" "))}</p>`);
  }
  flushList();
  return out.join("\n");
}

function parseFaq(md: string): FaqItem[] {
  const items: FaqItem[] = [];
  let q: string | null = null;
  let a: string[] = [];
  const push = () => {
    if (q && a.length) items.push({ question: plain(q), answer: plain(a.join(" ")) });
    q = null;
    a = [];
  };
  for (const raw of md.split("\n")) {
    const line = raw.trim();
    if (!line) continue;
    const bold = line.match(/^\*\*(.+?)\*\*:?\s*(.*)$/);
    if (bold) {
      push();
      q = bold[1].trim().replace(/^Q[:.]?\s*/i, "");
      if (bold[2]) a.push(bold[2]);
    } else if (q) {
      a.push(line.replace(/^[-*] /, ""));
    }
  }
  push();
  return items;
}

/**
 * Load the long-form article for an entity from content/<category>/<slug>.md.
 * Returns null when no article exists, in which case pages fall back to the
 * entity's built-in description paragraphs.
 */
export function getArticle(category: CategorySlug, slug: string): Article | null {
  const path = join(process.cwd(), "content", category, `${slug}.md`);
  if (!existsSync(path)) return null;
  const rawFile = readFileSync(path, "utf8");
  const m = rawFile.match(/^---\n[\s\S]*?\n---\n([\s\S]*)$/);
  if (!m) return null;
  const body = m[1].trim();

  // Split the FAQ section off; everything before it is the article body.
  const faqSplit = body.split(/\n## FAQ\s*\n/);
  const main = faqSplit[0];
  const faq = faqSplit[1] ? parseFaq(faqSplit[1]) : [];

  return {
    html: renderBlocks(main),
    faq,
    wordCount: main.split(/\s+/).length,
  };
}
