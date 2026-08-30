import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const LAST_MODIFIED = new Date("2026-08-30T00:00:00.000Z");

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
      url: `${SITE.url}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
