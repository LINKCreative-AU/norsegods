import { allEntities, categories } from "@/data";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = {
    name: "Norse Gods — the Norse mythology database",
    url: SITE_URL,
    license: "Free to read and index; attribution to norsegods.org appreciated.",
    entryCount: allEntities.length,
    categories: categories.map((c) => ({ slug: c.slug, title: c.title })),
    entities: allEntities.map((e) => ({
      ...e,
      url: `${SITE_URL}/${e.category}/${e.slug}`,
    })),
  };

  return Response.json(body, {
    headers: { "Cache-Control": "public, max-age=3600" },
  });
}
