import { existsSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getStory, stories } from "@/data/stories";
import { getEntity } from "@/data";
import StoryReader from "./StoryReader";
import { SITE_URL } from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) return {};
  const url = `${SITE_URL}/stories/${story.slug}`;
  return {
    title: `${story.title} — a Norse bedtime story`,
    description: `${story.subtitle}. A ${story.minutes}-minute Norse myth retold softly, with built-in narration.`,
    alternates: { canonical: url },
    openGraph: { title: story.title, description: story.subtitle, url, type: "article" },
  };
}

export default async function StoryPage({ params }: Props) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: story.title,
    description: story.subtitle,
    url: `${SITE_URL}/stories/${story.slug}`,
    isPartOf: { "@type": "WebSite", name: "Norse Gods", url: SITE_URL },
  };

  const related = story.related
    .map((slug) => getEntity(slug))
    .filter((e): e is NonNullable<typeof e> => Boolean(e));

  // Narration MP3s (from `npm run narrate` or manual recordings) are picked up
  // automatically at build — no code change needed to publish new audio.
  const generatedAudio = `/audio/${story.slug}.mp3`;
  const audioUrl =
    story.audioUrl ??
    (existsSync(join(process.cwd(), "public", generatedAudio)) ? generatedAudio : undefined);

  return (
    <div className="container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link> ᛫ <Link href="/stories">Bedtime Stories</Link> ᛫ {story.title}
      </nav>
      <header className="story-header">
        <div className="kind-line">☾ A {story.minutes}-minute bedtime story</div>
        <h1>{story.title}</h1>
        <p className="story-subtitle">{story.subtitle}</p>
      </header>

      <StoryReader
        paragraphs={story.paragraphs}
        audioUrl={audioUrl}
        narrator={audioUrl ? story.narrator ?? "☾ Narrated by James" : undefined}
      />

      {related.length > 0 && (
        <section className="story-related">
          <h2>Meet everyone from the story</h2>
          <div className="story-related-links">
            {related.map((e) => (
              <Link key={e.slug} href={`/${e.category}/${e.slug}`} className="epithet">
                {e.name}
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
