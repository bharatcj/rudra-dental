import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";
import { POSTS, postBySlug } from "@/lib/blog";
import { postSchema, postBreadcrumb } from "@/lib/schema";
import BookingProvider from "@/components/booking/BookingProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  BackToTop,
  FloatingWhatsapp,
  MobileDock,
  ScrollProgress,
} from "@/components/layout/Chrome";
import BlogArticle from "@/components/sections/BlogArticle";

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) return {};

  const url = `${SITE.url}/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url,
      siteName: "Rudra Dental Clinic",
      locale: "en_IN",
      publishedTime: post.date,
      images: [{ url: `${SITE.url}${post.image}`, alt: post.imageAlt }],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = postBySlug(slug);
  if (!post) notFound();

  const graph = [postSchema(post), postBreadcrumb(post)];

  return (
    <BookingProvider>
      {graph.map((node, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
      <ScrollProgress />
      <Header />
      <BlogArticle post={post} />
      <Footer />
      <BackToTop />
      <FloatingWhatsapp />
      <MobileDock />
    </BookingProvider>
  );
}
