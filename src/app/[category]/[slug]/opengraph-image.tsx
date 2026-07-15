import { brandOgImage, OG_SIZE } from "@/lib/og";
import { allEntities, getEntity } from "@/data";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Norse Gods entity card";

export function generateStaticParams() {
  return allEntities.map((e) => ({ category: e.category, slug: e.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { slug } = await params;
  const entity = getEntity(slug);
  return brandOgImage({
    kicker: entity?.kind ?? "Norse Mythology",
    title: entity?.name ?? "Norse Gods",
    subtitle: entity?.summary ?? "The Norse mythology database.",
  });
}
