import type { Metadata } from "next";
import Link from "next/link";
import SearchBox from "@/components/SearchBox";
import EntityCard from "@/components/EntityCard";
import BindRune from "@/components/BindRune";
import { allEntities, categories, getEntitiesByCategory, getEntity, searchIndex } from "@/data";

const FEATURED = ["odin", "thor", "loki", "freyja", "ragnarok", "yggdrasil"];

export const metadata: Metadata = {
  alternates: {
    canonical: "https://norsegods.org",
    types: { "application/rss+xml": "https://norsegods.org/feed.xml" },
  },
};

export default function HomePage() {
  const featured = FEATURED.map((slug) => getEntity(slug)).filter(
    (e): e is NonNullable<typeof e> => Boolean(e)
  );

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero-mark">
            <BindRune size={84} ring />
          </div>
          <h1>
            The <span className="gilded">Norse Mythology</span> Database
          </h1>
          <p className="lede">
            Every god, giant, creature, realm, artifact, myth, and primary source of the Norse
            world — searchable, cross-referenced, and cited back to the Eddas.
          </p>
          <SearchBox records={searchIndex()} />
          <div className="stats-strip">
            <div className="stat">
              <div className="stat-num">{allEntities.length}</div>
              <div className="stat-label">Entries</div>
            </div>
            <div className="stat">
              <div className="stat-num">{categories.length}</div>
              <div className="stat-label">Collections</div>
            </div>
            <div className="stat">
              <div className="stat-num">9</div>
              <div className="stat-label">Realms</div>
            </div>
            <div className="stat">
              <div className="stat-num">800+</div>
              <div className="stat-label">Years of sources</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Explore the Nine Worlds</h2>
          <p className="section-sub">
            The database is organised into eight collections, every entry linked to its kin.
          </p>
          <div className="category-grid">
            {categories.map((c) => (
              <Link key={c.slug} href={`/${c.slug}`} className="category-card">
                <span className="cat-rune">{c.rune}</span>
                <h3>{c.title}</h3>
                <p>{c.blurb}</p>
                <span className="cat-count">
                  {getEntitiesByCategory(c.slug).length} entries →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Link href="/stories" className="category-card" style={{ display: "block" }}>
            <span className="cat-rune">☾</span>
            <h3>Bedtime Stories — myths read aloud</h3>
            <p>
              The making of the world, Thor&apos;s stolen hammer, Odin at the well of wisdom —
              retold softly, with a built-in narrator. Press play and drift off among the nine
              worlds.
            </p>
            <span className="cat-count">Listen tonight →</span>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Begin with the Great Names</h2>
          <p className="section-sub">
            The figures every thread of the mythology runs through.
          </p>
          <div className="entity-grid">
            {featured.map((e) => (
              <EntityCard key={e.slug} entity={e} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
