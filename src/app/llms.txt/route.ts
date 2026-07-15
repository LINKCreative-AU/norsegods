import { allEntities, categories, getEntitiesByCategory } from "@/data";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [
    "# Norse Gods (norsegods.org)",
    "",
    "> The Norse mythology database: every god, giant, creature, realm, artifact, myth, and primary source of Norse mythology — cross-referenced and cited back to the Poetic Edda, the Prose Edda, the sagas, and related sources.",
    "",
    `Entries: ${allEntities.length}. Full structured data: ${SITE_URL}/api/db (JSON).`,
    "",
  ];

  for (const cat of categories) {
    lines.push(`## ${cat.title}`, "");
    for (const e of getEntitiesByCategory(cat.slug)) {
      lines.push(`- [${e.name}](${SITE_URL}/${e.category}/${e.slug}): ${e.summary}`);
    }
    lines.push("");
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
