import type { Metadata } from "next";
import { SITE } from "./site";

const SHARE_IMAGE = {
  url: `${SITE.url}/og.png`,
  width: 1200,
  height: 630,
  alt: "Rudra Dental, the dental clinic on Kamaraj Street in Anakaputhur, Chennai",
};

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: { url: string; alt: string };
  publishedTime?: string;
};

export function pageMeta(input: PageMetaInput): Metadata {
  const url = `${SITE.url}${input.path}`;
  const images = input.image
    ? [{ url: `${SITE.url}${input.image.url}`, alt: input.image.alt }]
    : [SHARE_IMAGE];
  const shared = {
    title: input.title,
    description: input.description,
    url,
    siteName: SITE.name,
    locale: "en_IN",
    images,
  };

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: url },
    openGraph:
      input.type === "article"
        ? { ...shared, type: "article", publishedTime: input.publishedTime }
        : { ...shared, type: "website" },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
      images,
    },
  };
}
