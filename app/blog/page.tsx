import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { POSTS } from "@/lib/blog";
import {
  blogIndexSchema,
  blogIndexBreadcrumb,
  postItemList,
} from "@/lib/schema";
import BookingProvider from "@/components/booking/BookingProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  BackToTop,
  FloatingWhatsapp,
  MobileDock,
  ScrollProgress,
} from "@/components/layout/Chrome";
import { Reveal } from "@/components/ui/Motion";
import { IconPhone } from "@/components/ui/Icons";
import BlogGrid from "@/components/sections/BlogGrid";

const TITLE = "Dental Blog from Anakaputhur, Chennai";
const DESCRIPTION =
  "Straight answers on root canals, bleeding gums, wisdom teeth, whitening and children's dentistry, written by the dentists at Rudra Dental in Anakaputhur.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/blog` },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/blog`,
    siteName: "Rudra Dental Clinic",
    locale: "en_IN",
  },
};

export default function BlogIndex() {
  return (
    <BookingProvider>
      {[blogIndexSchema, blogIndexBreadcrumb, postItemList].map((node, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
        />
      ))}
      <ScrollProgress />
      <Header />

      <main className="relative z-10">
        <section className="relative overflow-hidden pt-10 pb-10 sm:pt-14 lg:pt-20 lg:pb-14">
          <div className="absolute -top-[16%] left-[8%] -z-10 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(195,150,69,0.15),transparent_64%)]" />
          <div className="shell">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-mist-400">
                <li>
                  <Link
                    href="/"
                    className="inline-flex min-h-9 items-center transition hover:text-gold-200"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-mist-500">
                  /
                </li>
                <li className="text-gold-300">Blog</li>
              </ol>
            </nav>

            <Reveal>
              <p className="eyebrow">Our Blog</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="display mt-4 max-w-3xl text-4xl text-mist-50 sm:text-5xl lg:text-[3.6rem]">
                Dentistry, explained{" "}
                <span className="text-gold-sheen">plainly</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl leading-relaxed text-mist-300">
                Everything here is written by the dentists who see patients on
                Kamaraj Street. No scare tactics, no filler, and nothing that ends
                with a treatment you did not need. If a question keeps coming up in
                the chair, it ends up here.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <a
                href={`tel:${SITE.phone}`}
                className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-gold-500/28 px-6 py-3.5 text-sm font-medium text-gold-100 transition hover:bg-gold-500/10"
              >
                <IconPhone className="h-4 w-4" />
                Ask us directly, {SITE.phoneDisplay}
              </a>
            </Reveal>
          </div>
        </section>

        <section aria-label="All articles" className="relative pb-16 lg:pb-24">
          <div className="shell">
            <BlogGrid />

            <Reveal delay={0.1}>
              <div className="mt-10 rounded-2xl border border-gold-500/12 bg-white/[0.02] px-6 py-6">
                <p className="text-xs tracking-[0.16em] text-gold-400 uppercase">
                  {POSTS.length} articles and counting
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-mist-300">
                  Looking for something we have not covered yet, or want a straight
                  answer about your own case? Ask at your next appointment, or send
                  the question through WhatsApp and one of the team will reply.
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <BackToTop />
      <FloatingWhatsapp />
      <MobileDock />
    </BookingProvider>
  );
}
