import { allEntities, getCategory } from "@/data";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export function GET() {
  const items = allEntities
    .map((e) => {
      const url = `${SITE_URL}/${e.category}/${e.slug}`;
      const cat = getCategory(e.category)?.title ?? e.category;
      return `    <item>
      <title>${escapeXml(`${e.name} — ${e.kind}`)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <category>${escapeXml(cat)}</category>
      <description>${escapeXml(e.summary)}</description>
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Norse Gods — The Norse Mythology Database</title>
    <link>${SITE_URL}</link>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml"/>
    <description>Every god, giant, creature, realm, artifact, myth, and source of Norse mythology — searchable, cross-referenced, and cited.</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
