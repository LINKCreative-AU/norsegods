import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { guides, getGuideMeta } from "@/data/guides";
import { getGuide } from "@/lib/article";
import { SITE_URL } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = getGuideMeta(slug);
  if (!meta) return {};
  const url = `${SITE_URL}/guides/${meta.slug}`;
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url },
    openGraph: { title: meta.title, description: meta.description, url, type: "article" },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const meta = getGuideMeta(slug);
  if (!meta) notFound();
  const article = getGuide(slug);
  if (!article) notFound();
  const url = `${SITE_URL}/guides/${meta.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    url,
    isPartOf: { "@type": "WebSite", name: "Norse Gods", url: SITE_URL },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Norse Gods", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides` },
      { "@type": "ListItem", position: 3, name: meta.title, item: url },
    ],
  };

  const faqJsonLd =
    article.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: article.faq.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }
      : null;

  const others = guides.filter((g) => g.slug !== slug).slice(0, 3);

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link> ᛫ <Link href="/guides">Guides</Link> ᛫ {meta.title}
      </nav>

      <header className="entity-header">
        <div className="kind-line">{meta.kicker}</div>
        <h1>{meta.title}</h1>
      </header>

      <div className="entity-layout entity-layout-wide">
        <article className="entity-body">
          <div className="article-prose" dangerouslySetInnerHTML={{ __html: article.html }} />
          {article.faq.length > 0 && (
            <section className="article-faq">
              <h2 id="faq">Frequently asked questions</h2>
              {article.faq.map((f) => (
                <details key={f.question} className="faq-item">
                  <summary>{f.question}</summary>
                  <p>{f.answer}</p>
                </details>
              ))}
            </section>
          )}
        </article>
      </div>

      <section className="related-section">
        <h2 className="section-title">More guides</h2>
        <div className="entity-grid" style={{ paddingBottom: 64 }}>
          {others.map((g) => (
            <Link key={g.slug} href={`/guides/${g.slug}`} className="entity-card">
              <h3>{g.title}</h3>
              <span className="kind">{g.kicker}</span>
              <p>{g.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
