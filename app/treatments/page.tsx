import type { Metadata } from "next";
import Link from "next/link";
import { SITE, SERVICE_AREAS, STRUCTURED_SERVICES } from "@/lib/site";
import {
  treatmentIndexSchema,
  treatmentIndexBreadcrumb,
  treatmentItemList,
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
import TreatmentGrid from "@/components/sections/TreatmentGrid";

const TITLE = "Dental Treatments in Anakaputhur, Chennai";
const DESCRIPTION =
  "Root canals, implants, braces, aligners, wisdom tooth surgery, laser gum treatment, children's dentistry and full mouth rehabilitation at Rudra Dental, Anakaputhur.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE.url}/treatments` },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.url}/treatments`,
    siteName: "Rudra Dental Clinic",
    locale: "en_IN",
  },
};

export default function TreatmentsIndex() {
  return (
    <BookingProvider>
      {[treatmentIndexSchema, treatmentIndexBreadcrumb, treatmentItemList].map(
        (node, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }}
          />
        ),
      )}
      <ScrollProgress />
      <Header />

      <main className="relative z-10">
        <section className="relative overflow-hidden pt-10 pb-12 sm:pt-14 lg:pt-20 lg:pb-16">
          <div className="absolute -top-[16%] left-[8%] -z-10 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(195,150,69,0.15),transparent_64%)]" />
          <div className="shell">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-mist-400">
                <li>
                  <Link href="/" className="inline-flex min-h-9 items-center transition hover:text-gold-200">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true" className="text-mist-500">
                  /
                </li>
                <li className="text-gold-300">Treatments</li>
              </ol>
            </nav>

            <Reveal>
              <p className="eyebrow">What we treat</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="display mt-4 max-w-3xl text-4xl text-mist-50 sm:text-5xl lg:text-[3.6rem]">
                Dental treatments in{" "}
                <span className="text-gold-sheen">Anakaputhur</span>
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-2xl leading-relaxed text-mist-300">
                Five specialists share one operatory floor on Kamaraj Street, so a case
                that starts as a filling and turns out to need endodontics, orthodontics
                or surgery never leaves the building. Each treatment below sets out what
                it involves, what it costs you in time, and what happens afterwards.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <a
                href={`tel:${SITE.phone}`}
                className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-gold-500/28 px-6 py-3.5 text-sm font-medium text-gold-100 transition hover:bg-gold-500/10"
              >
                <IconPhone className="h-4 w-4" />
                Talk to a dentist first, {SITE.phoneDisplay}
              </a>
            </Reveal>
          </div>
        </section>

        <section aria-label="All treatments" className="relative py-12 lg:py-16">
          <div className="shell">
            <TreatmentGrid />

            <Reveal delay={0.1}>
              <div className="mt-6 rounded-3xl border border-gold-500/22 bg-gradient-to-br from-gold-500/[0.12] via-ink-800 to-ink-950 p-8">
                <p className="eyebrow">Also available</p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-mist-300">
                  Cosmetic dentistry, teeth whitening, veneers, crowns and bridges, gum
                  surgery, dentures, nightguards, TMJ care, oral cancer screening and
                  same day emergency treatment are all handled in house. Ask at the
                  consultation and you will get a written estimate before anything
                  starts.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {STRUCTURED_SERVICES.slice(3).map((item) => (
                    <span
                      key={item.name}
                      className="rounded-full border border-gold-500/22 bg-ink-950/45 px-3.5 py-1.5 text-[0.78rem] text-mist-300"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-6 rounded-2xl border border-gold-500/12 bg-white/[0.02] px-6 py-6">
                <p className="text-xs tracking-[0.16em] text-gold-400 uppercase">
                  Patients travel to us from
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {SERVICE_AREAS.map((area) => (
                    <span
                      key={area}
                      className="rounded-full border border-mist-400/12 px-2.5 py-1 text-[0.75rem] text-mist-400"
                    >
                      {area}
                    </span>
                  ))}
                </div>
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
