import type { Metadata } from "next";
import Link from "next/link";
import { stories } from "@/data/stories";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Norse Bedtime Stories — Myths Told Softly, With Narration",
  description:
    "The great Norse myths retold as bedtime stories — the making of the world, Thor's stolen hammer, Odin at the well of wisdom — each with a built-in read-aloud voice.",
  alternates: { canonical: `${SITE_URL}/stories` },
  openGraph: {
    title: "Norse Bedtime Stories — Myths Told Softly, With Narration",
    description:
      "The great Norse myths retold as bedtime stories, each with a built-in read-aloud voice.",
    url: `${SITE_URL}/stories`,
    type: "website",
  },
};

export default function StoriesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Norse Bedtime Stories",
    description: "The great Norse myths retold softly, with narration.",
    url: `${SITE_URL}/stories`,
    hasPart: stories.map((s) => ({
      "@type": "Article",
      name: s.title,
      url: `${SITE_URL}/stories/${s.slug}`,
    })),
  };

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="category-header">
        <span className="cat-rune-big">ᚷ</span>
        <h1>Bedtime Stories</h1>
        <p>
          The old myths, told the old way — slowly, warmly, out loud. Press play, dim the
          lights, and let the nine worlds tuck you in.
        </p>
      </header>
      <div className="story-grid" style={{ paddingBottom: 64 }}>
        {stories.map((s) => (
          <Link key={s.slug} href={`/stories/${s.slug}`} className="story-card">
            <span className="story-minutes">☾ {s.minutes} min listen</span>
            <h3>{s.title}</h3>
            <p>{s.subtitle}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
