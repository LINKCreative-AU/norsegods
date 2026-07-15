import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EntityCard from "@/components/EntityCard";
import { categories, getCategory, getEntitiesByCategory } from "@/data";
import type { CategorySlug } from "@/data";
import { SITE_URL } from "@/lib/site";

interface Props {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const meta = getCategory(category);
  if (!meta) return {};
  return {
    title: `${meta.title} of Norse Mythology`,
    description: meta.blurb,
    alternates: { canonical: `${SITE_URL}/${meta.slug}` },
    openGraph: {
      title: `${meta.title} of Norse Mythology`,
      description: meta.blurb,
      url: `${SITE_URL}/${meta.slug}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const meta = getCategory(category);
  if (!meta) notFound();
  const entities = getEntitiesByCategory(category as CategorySlug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${meta.title} of Norse Mythology`,
    description: meta.blurb,
    url: `${SITE_URL}/${meta.slug}`,
    isPartOf: { "@type": "WebSite", name: "Norse Gods", url: SITE_URL },
    hasPart: entities.map((e) => ({
      "@type": "WebPage",
      name: e.name,
      url: `${SITE_URL}/${e.category}/${e.slug}`,
    })),
  };

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="category-header">
        <span className="cat-rune-big">{meta.rune}</span>
        <h1>{meta.title}</h1>
        <p>{meta.blurb}</p>
      </header>
      <div className="entity-grid" style={{ paddingBottom: 64 }}>
        {entities.map((e) => (
          <EntityCard key={e.slug} entity={e} />
        ))}
      </div>
    </div>
  );
}
