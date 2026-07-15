import { brandOgImage, OG_SIZE } from "@/lib/og";
import { categories, getCategory } from "@/data";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "Norse Gods collection";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = getCategory(category);
  return brandOgImage({
    kicker: "Collection",
    title: meta?.title ?? "Norse Gods",
    subtitle: meta?.blurb ?? "The Norse mythology database.",
  });
}
