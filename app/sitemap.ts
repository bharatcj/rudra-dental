import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { TREATMENTS } from "@/lib/treatments";
import { POSTS_BY_DATE } from "@/lib/blog";

const LAST_MODIFIED = new Date("2026-09-03T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const now = LAST_MODIFIED;
  return [
    {
      url: SITE.canonical,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.url}/treatments`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...TREATMENTS.map((treatment) => ({
      url: `${SITE.url}/treatments/${treatment.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${SITE.url}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    ...POSTS_BY_DATE.map((post) => ({
      url: `${SITE.url}/blog/${post.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.6,
    })),
    {
      url: `${SITE.url}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
