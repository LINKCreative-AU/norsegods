import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { allEntities, getCategory, getEntity } from "@/data";
import type { Entity } from "@/data";
import EntityCard from "@/components/EntityCard";
import { SITE_URL } from "@/lib/site";

/** Related entries: tag overlap first, then same-category neighbours. */
function relatedEntities(entity: Entity, count = 3): Entity[] {
  const tags = new Set(entity.tags ?? []);
  const linked = new Set((entity.relations ?? []).map((r) => r.slug).filter(Boolean));
  const scored = allEntities
    .filter((e) => e.slug !== entity.slug)
    .map((e) => {
      let s = 0;
      if (linked.has(e.slug)) s += 4;
      s += (e.tags ?? []).filter((t) => tags.has(t)).length * 2;
      if (e.category === entity.category) s += 1;
      return { e, s };
    })
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s);
  return scored.slice(0, count).map((x) => x.e);
}

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export function generateStaticParams() {
  return allEntities.map((e) => ({ category: e.category, slug: e.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entity = getEntity(slug);
  if (!entity) return {};
  const title = entity.oldNorse && entity.oldNorse !== entity.name && entity.oldNorse !== "—"
    ? `${entity.name} (${entity.oldNorse}) — ${entity.kind}`
    : `${entity.name} — ${entity.kind}`;
  const url = `${SITE_URL}/${entity.category}/${entity.slug}`;
  return {
    title,
    description: entity.summary,
    keywords: ["Norse mythology", entity.name, ...(entity.tags ?? [])],
    alternates: { canonical: url },
    openGraph: { title, description: entity.summary, url, type: "article" },
    twitter: { card: "summary_large_image", title, description: entity.summary },
  };
}

export default async function EntityPage({ params }: Props) {
  const { category, slug } = await params;
  const entity = getEntity(slug);
  if (!entity || entity.category !== category) notFound();
  const catMeta = getCategory(entity.category)!;
  const url = `${SITE_URL}/${entity.category}/${entity.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${entity.name} in Norse Mythology`,
    name: entity.name,
    alternativeHeadline: entity.oldNorse !== "—" ? entity.oldNorse : undefined,
    description: entity.summary,
    url,
    isPartOf: { "@type": "WebSite", name: "Norse Gods", url: SITE_URL },
    about: {
      "@type": "Thing",
      name: entity.name,
      alternateName: entity.oldNorse !== "—" ? entity.oldNorse : undefined,
      description: entity.kind,
    },
    keywords: (entity.tags ?? []).join(", "),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Norse Gods", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: catMeta.title, item: `${SITE_URL}/${catMeta.slug}` },
      { "@type": "ListItem", position: 3, name: entity.name, item: url },
    ],
  };

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link> ᛫ <Link href={`/${catMeta.slug}`}>{catMeta.title}</Link> ᛫{" "}
        {entity.name}
      </nav>

      <header className="entity-header">
        <div className="kind-line">{entity.kind}</div>
        <h1>{entity.name}</h1>
        {(entity.oldNorse || entity.pronunciation) && (
          <div className="name-meta">
            {entity.oldNorse && entity.oldNorse !== "—" && (
              <>Old Norse: <strong>{entity.oldNorse}</strong></>
            )}
            {entity.pronunciation && <> · pronounced {entity.pronunciation}</>}
          </div>
        )}
        {entity.epithets && entity.epithets.length > 0 && (
          <div className="epithets">
            {entity.epithets.map((e) => (
              <span key={e} className="epithet">
                {e}
              </span>
            ))}
          </div>
        )}
      </header>

      <div className="entity-layout">
        <article className="entity-body">
          {entity.description.map((p, i) => (
            <p key={i} className={i === 0 ? "lede-p" : undefined}>
              {p}
            </p>
          ))}
        </article>

        <aside>
          {entity.facts && entity.facts.length > 0 && (
            <div className="sidebar-panel">
              <h2>At a glance</h2>
              {entity.facts.map((f) => (
                <div key={f.label} className="fact-row">
                  <span className="fact-label">{f.label}</span>
                  {f.value}
                </div>
              ))}
            </div>
          )}

          {entity.relations && entity.relations.length > 0 && (
            <div className="sidebar-panel">
              <h2>Connections</h2>
              {entity.relations.map((r, i) => {
                const target = r.slug ? getEntity(r.slug) : undefined;
                return (
                  <div key={i} className="relation-row">
                    <span className="rel-type">{r.type}</span>
                    {target ? (
                      <Link href={`/${target.category}/${target.slug}`}>{r.name}</Link>
                    ) : (
                      r.name
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {entity.attestations && entity.attestations.length > 0 && (
            <div className="sidebar-panel">
              <h2>Primary sources</h2>
              <ul className="attestation-list">
                {entity.attestations.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <section className="related-section">
        <h2 className="section-title">Continue exploring</h2>
        <div className="entity-grid" style={{ paddingBottom: 64 }}>
          {relatedEntities(entity).map((e) => (
            <EntityCard key={e.slug} entity={e} />
          ))}
        </div>
      </section>
    </div>
  );
}
