"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";

export interface SearchRecord {
  slug: string;
  name: string;
  oldNorse: string;
  category: string;
  kind: string;
  summary: string;
  epithets: string[];
  tags: string[];
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/ð/g, "d")
    .replace(/þ/g, "th")
    .replace(/æ/g, "ae")
    .replace(/ø|ö/g, "o");
}

function score(record: SearchRecord, query: string): number {
  const q = normalize(query);
  if (!q) return 0;
  const name = normalize(record.name);
  const on = normalize(record.oldNorse);
  let s = 0;
  if (name === q || on === q) s += 100;
  else if (name.startsWith(q) || on.startsWith(q)) s += 60;
  else if (name.includes(q) || on.includes(q)) s += 40;
  if (record.epithets.some((e) => normalize(e).includes(q))) s += 25;
  if (record.tags.some((t) => normalize(t).includes(q))) s += 18;
  if (normalize(record.kind).includes(q)) s += 12;
  if (normalize(record.summary).includes(q)) s += 8;
  return s;
}

export default function SearchBox({
  records,
  autoFocus = false,
  initialQuery = "",
  variant = "overlay",
}: {
  records: SearchRecord[];
  autoFocus?: boolean;
  initialQuery?: string;
  variant?: "overlay" | "page";
}) {
  const [query, setQuery] = useState(initialQuery);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    return records
      .map((r) => ({ r, s: score(r, query) }))
      .filter((x) => x.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, variant === "page" ? 24 : 8)
      .map((x) => x.r);
  }, [query, records, variant]);

  if (variant === "page") {
    return (
      <div className="search-wrap search-wrap-page">
        <input
          className="search-input"
          type="search"
          placeholder="Search the mythology — Odin, Ragnarök, Mjölnir, Yggdrasil…"
          value={query}
          autoFocus={autoFocus}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search the Norse mythology database"
        />
        {query.trim() && (
          <div className="search-page-results">
            {results.length === 0 && (
              <div className="search-empty">
                Nothing found — the ravens report no such name in the nine worlds.
              </div>
            )}
            {results.map((r) => (
              <Link key={r.slug} href={`/${r.category}/${r.slug}`} className="search-result">
                <span className="sr-name">{r.name}</span>
                <span className="sr-kind">{r.kind}</span>
                <span className="sr-summary">{r.summary}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className="search-wrap"
      ref={wrapRef}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <input
        className="search-input"
        type="search"
        placeholder="Search the mythology — Odin, Ragnarök, Mjölnir, Yggdrasil…"
        value={query}
        autoFocus={autoFocus}
        onChange={(e) => {
          setQuery(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        aria-label="Search the Norse mythology database"
      />
      {open && query.trim() && (
        <div className="search-results" role="listbox">
          {results.length === 0 && (
            <div className="search-empty">
              Nothing found — the ravens report no such name in the nine worlds.
            </div>
          )}
          {results.map((r) => (
            <Link
              key={r.slug}
              href={`/${r.category}/${r.slug}`}
              className="search-result"
              onClick={() => setOpen(false)}
            >
              <span className="sr-name">{r.name}</span>
              <span className="sr-kind">{r.kind}</span>
              <span className="sr-summary">{r.summary}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
