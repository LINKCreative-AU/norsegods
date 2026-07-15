import type { Metadata } from "next";
import { Suspense } from "react";
import SearchPageClient from "./SearchPageClient";
import { searchIndex } from "@/data";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Search the Norse Mythology Database",
  description:
    "Search every god, giant, creature, realm, artifact, myth, and source in the Norse Gods database.",
  alternates: { canonical: `${SITE_URL}/search` },
};

export default function SearchPage() {
  return (
    <div className="container">
      <header className="category-header">
        <span className="cat-rune-big">⌕</span>
        <h1>Search the Nine Worlds</h1>
        <p>Names match with or without Old Norse accents — thor finds Þórr.</p>
      </header>
      <div style={{ paddingBottom: 80 }}>
        <Suspense fallback={null}>
          <SearchPageClient records={searchIndex()} />
        </Suspense>
      </div>
    </div>
  );
}
