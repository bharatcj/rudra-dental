import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/meta";
import { TREATMENTS, treatmentBySlug } from "@/lib/treatments";
import {
  treatmentSchema,
  treatmentFaqSchema,
  treatmentBreadcrumb,
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
import TreatmentPage from "@/components/sections/TreatmentPage";

export function generateStaticParams() {
  return TREATMENTS.map((treatment) => ({ slug: treatment.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const treatment = treatmentBySlug(slug);
  if (!treatment) return {};

  return pageMeta({
    title: treatment.metaTitle,
    description: treatment.metaDescription,
    path: `/treatments/${treatment.slug}`,
    type: "article",
    image: { url: treatment.image, alt: treatment.imageAlt },
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = treatmentBySlug(slug);
  if (!treatment) notFound();

  return (
    <BookingProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(treatmentSchema(treatment)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(treatmentFaqSchema(treatment)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(treatmentBreadcrumb(treatment)),
        }}
      />
      <ScrollProgress />
      <Header />
      <TreatmentPage treatment={treatment} />
      <Footer />
      <BackToTop />
      <FloatingWhatsapp />
      <MobileDock />
    </BookingProvider>
  );
}
