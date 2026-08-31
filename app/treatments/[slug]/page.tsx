import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";
import { TREATMENTS, treatmentBySlug } from "@/lib/treatments";
import { treatmentSchema, treatmentFaqSchema } from "@/lib/schema";
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

  const url = `${SITE.url}/treatments/${treatment.slug}`;
  return {
    title: treatment.metaTitle,
    description: treatment.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: treatment.metaTitle,
      description: treatment.metaDescription,
      url,
      siteName: "Rudra Dental Clinic",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: treatment.metaTitle,
      description: treatment.metaDescription,
    },
  };
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
