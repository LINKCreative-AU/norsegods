import { allEntities, categories, getEntitiesByCategory } from "@/data";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

/**
 * llms-full.txt — the emerging convention for a full-content companion to
 * llms.txt: the complete database as clean markdown for AI consumption.
 */
export function GET() {
  const lines: string[] = [
    "# Norse Gods (norsegods.org) — full content",
    "",
    "> The Norse mythology database: every entry in full. Structured JSON: " +
      `${SITE_URL}/api/db`,
    "",
    `Entries: ${allEntities.length}.`,
    "",
  ];

  for (const cat of categories) {
    lines.push(`# ${cat.title}`, "");
    for (const e of getEntitiesByCategory(cat.slug)) {
      lines.push(`## ${e.name}${e.oldNorse && e.oldNorse !== "—" ? ` (Old Norse: ${e.oldNorse})` : ""}`);
      lines.push("");
      lines.push(`- URL: ${SITE_URL}/${e.category}/${e.slug}`);
      lines.push(`- Type: ${e.kind}`);
      if (e.epithets?.length) lines.push(`- Epithets: ${e.epithets.join(", ")}`);
      if (e.facts?.length) {
        for (const f of e.facts) lines.push(`- ${f.label}: ${f.value}`);
      }
      if (e.attestations?.length) lines.push(`- Primary sources: ${e.attestations.join("; ")}`);
      lines.push("");
      for (const p of e.description) lines.push(p, "");
    }
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
