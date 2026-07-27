"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getCategory } from "@/data";
import type { CategorySlug } from "@/data";
import WanderButton from "@/components/WanderButton";

const NAV_GROUPS: { label: string; slugs: CategorySlug[] }[] = [
  { label: "Beings", slugs: ["gods", "giants", "creatures"] },
  { label: "Cosmos", slugs: ["realms", "concepts"] },
  { label: "Lore", slugs: ["events", "heroes", "artifacts"] },
];

export default function SiteNav({ wanderPaths }: { wanderPaths: string[] }) {
  const [open, setOpen] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const hoverCapable = useRef(false);

  useEffect(() => {
    // Only wire hover-to-open on devices that actually hover (desktop mice).
    // Touch devices toggle by tap instead, so the dropdown is reachable.
    hoverCapable.current = window.matchMedia("(hover: hover)").matches;
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDocPointer = (e: Event) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    document.addEventListener("click", onDocPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="site-nav" aria-label="Categories" ref={navRef}>
      {NAV_GROUPS.map((group) => {
        const isOpen = open === group.label;
        return (
          <div
            key={group.label}
            className="nav-group"
            onMouseEnter={() => {
              if (hoverCapable.current) setOpen(group.label);
            }}
            onMouseLeave={() => {
              if (hoverCapable.current) setOpen((cur) => (cur === group.label ? null : cur));
            }}
          >
            <button
              className="nav-trigger"
              type="button"
              aria-haspopup="true"
              aria-expanded={isOpen}
              onClick={(e) => {
                e.stopPropagation();
                setOpen((cur) => (cur === group.label ? null : group.label));
              }}
            >
              {group.label} <span className="caret" aria-hidden="true">▾</span>
            </button>
            <div className={isOpen ? "nav-menu open" : "nav-menu"}>
              {group.slugs.map((slug) => {
                const c = getCategory(slug)!;
                return (
                  <Link key={slug} href={`/${slug}`} onClick={() => setOpen(null)}>
                    <span className="menu-rune" aria-hidden="true">
                      {c.rune}
                    </span>{" "}
                    {c.title}
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
      <Link href="/texts" className="nav-link">
        Sources
      </Link>
      <Link href="/stories" className="nav-link">
        ☾ Stories
      </Link>
      <Link href="/search" className="nav-link nav-search">
        ⌕ Search
      </Link>
      <WanderButton paths={wanderPaths} />
    </nav>
  );
}
