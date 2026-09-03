import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { AREAS } from "@/lib/areas";
import {
  areaIndexSchema,
  areaIndexBreadcrumb,
  areaItemList,
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
import AreaGrid from "@/components/sections/AreaGrid";

const TITLE = "Areas We Serve Around Anakaputhur, Chennai";
const DESCRIPTION =
  "Rudra Dental sits on Kamaraj Street in Anakaputhur and treats patients from Pallavaram, Pammal, Chromepet, Kundrathur, Tambaram, Porur and the rest of south west Chennai.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/dental-clinic` },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/dental-clinic`,
    siteName: "Rudra Dental",
    locale: "en_IN",
  },
};

export default function AreaIndex() {
  return (
    <BookingProvider>
      {[areaIndexSchema, areaIndexBreadcrumb, areaItemList].map((node, index) => (
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
                <li className="text-gold-300">Areas we serve</li>
              </ol>
            </nav>

            <Reveal>
              <p className="eyebrow">Where our patients come from</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="display mt-4 max-w-3xl text-4xl text-mist-50 sm:text-5xl lg:text-[3.6rem]">
                {AREAS.length} areas around{" "}
                <span className="text-gold-sheen">Anakaputhur</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-[58ch] leading-relaxed text-mist-300">
                The clinic is one building on Kamaraj Street. Patients drive in from
                across the south west of the city, and the honest answer to how far it
                is depends entirely on where you start. Each page below sets out the
                distance, the roads, and what people from that area usually come for.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <a
                href={`tel:${SITE.phone}`}
                className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-gold-500/28 px-6 py-3.5 text-sm font-medium text-gold-100 transition hover:bg-gold-500/10"
              >
                <IconPhone className="h-4 w-4" />
                Ask for directions, {SITE.phoneDisplay}
              </a>
            </Reveal>
          </div>
        </section>

        <section aria-label="All areas" className="relative pb-14 lg:pb-16">
          <div className="shell">
            <AreaGrid />
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
