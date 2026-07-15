"use client";

import { useSearchParams } from "next/navigation";
import SearchBox, { type SearchRecord } from "@/components/SearchBox";

export default function SearchPageClient({ records }: { records: SearchRecord[] }) {
  const params = useSearchParams();
  const q = params.get("q") ?? "";
  return <SearchBox records={records} variant="page" initialQuery={q} autoFocus />;
}
