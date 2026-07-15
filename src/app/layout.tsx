import type { Metadata } from "next";
import { Cinzel, EB_Garamond } from "next/font/google";
import Link from "next/link";
import { allEntities, categories, getCategory } from "@/data";
import type { CategorySlug } from "@/data";
import { SITE_URL } from "@/lib/site";
import BindRune from "@/components/BindRune";
import WanderButton from "@/components/WanderButton";
import "./globals.css";

const NAV_GROUPS: { label: string; slugs: CategorySlug[] }[] = [
  { label: "Beings", slugs: ["gods", "giants", "creatures"] },
  { label: "Cosmos", slugs: ["realms", "concepts"] },
  { label: "Lore", slugs: ["events", "heroes", "artifacts"] },
];

const display = Cinzel({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
});

const body = EB_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Norse Gods — The Norse Mythology Database | norsegods.org",
    template: "%s | Norse Gods",
  },
  description:
    "The definitive database of Norse mythology: every god, giant, creature, realm, artifact, myth, and primary source — searchable, cross-referenced, and cited.",
  keywords: [
    "Norse mythology",
    "Norse gods",
    "Odin",
    "Thor",
    "Loki",
    "Ragnarok",
    "Yggdrasil",
    "Valhalla",
    "Vikings",
    "Poetic Edda",
    "Prose Edda",
  ],
  openGraph: {
    type: "website",
    siteName: "Norse Gods",
    url: SITE_URL,
    title: "Norse Gods — The Norse Mythology Database",
    description:
      "Every god, giant, creature, realm, artifact, myth, and source of Norse mythology — searchable and cross-referenced.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Norse Gods — The Norse Mythology Database",
    description:
      "Every god, giant, creature, realm, artifact, myth, and source of Norse mythology — searchable and cross-referenced.",
  },
  robots: { index: true, follow: true },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Norse Gods",
  alternateName: "norsegods.org",
  url: SITE_URL,
  description:
    "The definitive database of Norse mythology: gods, giants, creatures, realms, artifacts, myths, and primary sources.",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <header className="site-header">
          <div className="container">
            <Link href="/" className="logo">
              <span className="logo-mark">
                <BindRune size={26} />
              </span>
              NORSE GODS<span className="tld">.org</span>
            </Link>
            <nav className="site-nav" aria-label="Categories">
              {NAV_GROUPS.map((group) => (
                <div key={group.label} className="nav-group">
                  <button className="nav-trigger" type="button" aria-haspopup="true">
                    {group.label} <span className="caret">▾</span>
                  </button>
                  <div className="nav-menu">
                    {group.slugs.map((slug) => {
                      const c = getCategory(slug)!;
                      return (
                        <Link key={slug} href={`/${slug}`}>
                          <span className="menu-rune">{c.rune}</span> {c.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
              <Link href="/texts" className="nav-link">
                Sources
              </Link>
              <Link href="/stories" className="nav-link">
                ☾ Stories
              </Link>
              <Link href="/search" className="nav-link nav-search">
                ⌕ Search
              </Link>
              <WanderButton paths={allEntities.map((e) => `/${e.category}/${e.slug}`)} />
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container footer-cols">
            <div>
              <div className="footer-mark">
                <BindRune size={34} ring />
              </div>
              <div>
                <strong style={{ color: "var(--text-dim)" }}>norsegods.org</strong> — the Norse
                mythology database.
              </div>
              <div style={{ marginTop: 6 }}>
                Compiled from the Poetic Edda, the Prose Edda, the sagas, and the scholarship
                around them.
              </div>
            </div>
            <div>
              <div className="footer-heading">Browse</div>
              <nav>
                {categories.slice(0, 4).map((c) => (
                  <Link key={c.slug} href={`/${c.slug}`}>
                    {c.title}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <div className="footer-heading">More</div>
              <nav>
                {categories.slice(4).map((c) => (
                  <Link key={c.slug} href={`/${c.slug}`}>
                    {c.title}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <div className="footer-heading">For machines</div>
              <nav>
                <a href="/api/db">Full database (JSON)</a>
                <a href="/llms.txt">llms.txt</a>
                <a href="/llms-full.txt">llms-full.txt</a>
                <a href="/feed.xml">RSS feed</a>
                <a href="/sitemap.xml">Sitemap</a>
              </nav>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
