import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/meta";
import { AREAS, areaBySlug } from "@/lib/areas";
import { areaSchema, areaBreadcrumb, areaFaqSchema } from "@/lib/schema";
import BookingProvider from "@/components/booking/BookingProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  BackToTop,
  FloatingWhatsapp,
  MobileDock,
  ScrollProgress,
} from "@/components/layout/Chrome";
import AreaPage from "@/components/sections/AreaPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return AREAS.map((area) => ({ area: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ area: string }>;
}): Promise<Metadata> {
  const { area: slug } = await params;
  const area = areaBySlug(slug);
  if (!area) return {};
  return pageMeta({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/dental-clinic/${area.slug}`,
  });
}

export default async function AreaRoute({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: slug } = await params;
  const area = areaBySlug(slug);
  if (!area) notFound();

  const graph = [areaSchema(area), areaFaqSchema(area), areaBreadcrumb(area)];

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
      <AreaPage area={area} />
      <Footer />
      <BackToTop />
      <FloatingWhatsapp />
      <MobileDock />
    </BookingProvider>
  );
}
