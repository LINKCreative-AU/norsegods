import type { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guides to Norse Mythology",
  description:
    "Plain-English guides to Norse mythology — the gods list, the family tree, the nine realms, Norse symbols, the afterlife, and more.",
  alternates: { canonical: `${SITE_URL}/guides` },
  openGraph: {
    title: "Guides to Norse Mythology",
    description:
      "Plain-English guides to Norse mythology — the gods, the realms, the symbols, and the world they belong to.",
    url: `${SITE_URL}/guides`,
    type: "website",
  },
};

export default function GuidesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Guides to Norse Mythology",
    description: "Plain-English guides to Norse mythology.",
    url: `${SITE_URL}/guides`,
    isPartOf: { "@type": "WebSite", name: "Norse Gods", url: SITE_URL },
    hasPart: guides.map((g) => ({
      "@type": "Article",
      name: g.title,
      url: `${SITE_URL}/guides/${g.slug}`,
    })),
  };

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="category-header">
        <span className="cat-rune-big">ᛦ</span>
        <h1>Guides</h1>
        <p>
          Start here. Plain-English walkthroughs of the big questions — who the gods are, how
          they&rsquo;re related, what the symbols mean, and where the dead go — each linking deep
          into the database.
        </p>
      </header>
      <div className="entity-grid" style={{ paddingBottom: 64 }}>
        {guides.map((g) => (
          <Link key={g.slug} href={`/guides/${g.slug}`} className="entity-card">
            <h3>{g.title}</h3>
            <span className="kind">{g.kicker}</span>
            <p>{g.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
