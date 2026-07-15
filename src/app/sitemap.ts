import type { MetadataRoute } from "next";
import { allEntities, categories } from "@/data";
import { stories } from "@/data/stories";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/stories`, changeFrequency: "weekly", priority: 0.9 },
    ...stories.map((s) => ({
      url: `${SITE_URL}/stories/${s.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...categories.map((c) => ({
      url: `${SITE_URL}/${c.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...allEntities.map((e) => ({
      url: `${SITE_URL}/${e.category}/${e.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
