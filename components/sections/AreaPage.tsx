"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { type ServiceArea } from "@/lib/areas";
import { treatmentBySlug } from "@/lib/treatments";
import { useBooking } from "@/components/booking/BookingProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Motion";
import {
  SERVICE_ICONS,
  IconArrow,
  IconCheck,
  IconChevron,
  IconClock,
  IconPhone,
  IconPin,
} from "@/components/ui/Icons";

export default function AreaPage({ area }: { area: ServiceArea }) {
  const { openBooking } = useBooking();
  const treatments = area.commonTreatments
    .map((slug) => treatmentBySlug(slug))
    .filter(Boolean);

  return (
    <main className="relative z-10">
      <section className="relative overflow-hidden pt-10 pb-12 sm:pt-14 lg:pt-20 lg:pb-16">
        <div className="absolute -top-[18%] left-[4%] -z-10 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(195,150,69,0.16),transparent_64%)]" />

        <div className="shell">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-mist-400">
              <li>
                <Link href="/" className="inline-flex min-h-9 items-center transition hover:text-gold-200">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-mist-500">
                /
              </li>
              <li>
                <Link
                  href="/dental-clinic"
                  className="inline-flex min-h-9 items-center transition hover:text-gold-200"
                >
                  Areas we serve
                </Link>
              </li>
              <li aria-hidden="true" className="text-mist-500">
                /
              </li>
              <li className="text-gold-300">{area.name}</li>
            </ol>
          </nav>

          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <Reveal>
                <p className="eyebrow">Serving {area.name}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="display mt-4 text-4xl text-mist-50 sm:text-5xl lg:text-[3.4rem]">
                  {area.heading}
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-[53ch] text-[1.02rem] leading-relaxed text-mist-300">
                  {area.intro[0]}
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() => openBooking(`area-${area.slug}`)}
                    className="group inline-flex items-center gap-2.5 rounded-full bg-gold-sheen px-7 py-3.5 text-sm font-semibold text-ink-950 transition hover:shadow-[0_16px_40px_-12px_rgba(195,150,69,0.8)]"
                  >
                    Book an appointment
                    <IconArrow className="h-4 w-4 transition group-hover:translate-x-1" />
                  </button>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="inline-flex items-center gap-2.5 rounded-full border border-gold-500/28 px-6 py-3.5 text-sm font-medium text-gold-100 transition hover:bg-gold-500/10"
                  >
                    <IconPhone className="h-4 w-4" />
                    {SITE.phoneDisplay}
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <dl className="surface rounded-[1.4rem] p-7">
                <div className="flex items-start gap-3 border-b border-gold-500/10 pb-4">
                  <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <div>
                    <dt className="text-xs tracking-[0.14em] text-mist-400 uppercase">
                      From {area.name}
                    </dt>
                    <dd className="mt-1 text-sm text-mist-100">
                      {area.distance}, {area.travel}
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3 border-b border-gold-500/10 py-4">
                  <IconClock className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                  <div>
                    <dt className="text-xs tracking-[0.14em] text-mist-400 uppercase">
                      Opening hours
                    </dt>
                    <dd className="mt-1 text-sm text-mist-100">{SITE.hours.days}</dd>
                    <dd className="text-sm text-gold-200">{SITE.hours.short}</dd>
                  </div>
                </div>
                <div className="pt-4">
                  <dt className="text-xs tracking-[0.14em] text-mist-400 uppercase">
                    Clinic address
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-mist-100">
                    {SITE.address.display}
                  </dd>
                  <dd className="mt-3">
                    <a
                      href={SITE.mapsShortLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center gap-2 text-[0.72rem] font-semibold tracking-[0.16em] text-gold-400 uppercase transition hover:text-gold-200"
                    >
                      Open in maps
                      <IconArrow className="h-3.5 w-3.5" />
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {area.photo ? (
        <section aria-label={`${area.name} in pictures`} className="relative pb-2 lg:pb-4">
          <div className="shell">
            <Reveal>
              <figure className="relative">
                <div className="relative aspect-[3/2] overflow-hidden rounded-[1.6rem] border border-gold-500/20 sm:aspect-[21/9]">
                  <Image
                    src={area.photo.src}
                    alt={area.photo.alt}
                    fill
                    quality={78}
                    sizes="(max-width: 1024px) 94vw, 1240px"
                    className="object-cover"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/72 via-transparent to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <span className="block text-sm font-medium text-mist-50 sm:text-base">
                      {area.photo.caption}
                    </span>
                  </figcaption>
                </div>
                <p className="mt-2.5 text-[0.7rem] leading-relaxed text-mist-500">
                  Photograph by {area.photo.author},{" "}
                  <a
                    href={area.photo.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 transition hover:text-gold-300"
                  >
                    {area.photo.licence}
                  </a>
                  , via Wikimedia Commons
                </p>
              </figure>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section aria-label={`Getting here from ${area.name}`} className="relative py-12 lg:py-16">
        <div className="shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <Reveal>
              <p className="eyebrow">Getting here</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="display mt-4 text-3xl text-mist-50 sm:text-4xl">
                The route from {area.name}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-[53ch] leading-relaxed text-mist-300">{area.route}</p>
            </Reveal>
            {area.intro.slice(1).map((paragraph, index) => (
              <Reveal key={index} delay={0.14 + index * 0.04}>
                <p className="mt-4 max-w-[53ch] leading-relaxed text-mist-300">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <div className="space-y-4">
            <Reveal delay={0.12}>
              <div className="surface rounded-2xl p-6">
                <p className="text-xs tracking-[0.16em] text-gold-400 uppercase">
                  Landmarks in {area.name}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {area.landmarks.map((landmark) => (
                    <li key={landmark} className="flex max-w-[48ch] items-start gap-2.5 text-sm text-mist-300">
                      <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-500" />
                      {landmark}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.16}>
              <div className="surface rounded-2xl p-6">
                <p className="text-xs tracking-[0.16em] text-gold-400 uppercase">
                  Public transport
                </p>
                <ul className="mt-4 space-y-2.5">
                  {area.transport.map((item) => (
                    <li key={item} className="flex max-w-[48ch] items-start gap-2.5 text-sm text-mist-300">
                      <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-label={`Why patients from ${area.name} come here`} className="relative py-12 lg:py-16">
        <div className="shell">
          <Reveal>
            <div className="rounded-3xl border border-gold-500/22 bg-gradient-to-br from-gold-500/[0.12] via-ink-800 to-ink-950 p-8 sm:p-10">
              <p className="eyebrow">Why the trip is worth it</p>
              <p className="mt-4 max-w-[58ch] leading-relaxed text-mist-200">{area.why}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {treatments.length ? (
        <section aria-label="Treatments" className="relative py-12 lg:py-16">
          <div className="shell">
            <Reveal>
              <p className="eyebrow">Most asked for from {area.name}</p>
            </Reveal>
            <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {treatments.map((treatment) => {
                if (!treatment) return null;
                const Icon = SERVICE_ICONS[treatment.icon];
                return (
                  <StaggerItem key={treatment.slug} className="h-full">
                    <Link
                      href={`/treatments/${treatment.slug}`}
                      className="surface group flex h-full flex-col rounded-2xl p-6 transition hover:border-gold-500/35"
                    >
                      <Icon className="h-6 w-6 text-gold-400" />
                      <h3 className="display mt-4 text-lg text-mist-50 transition group-hover:text-gold-100">
                        {treatment.name}
                      </h3>
                      <p className="mt-2 max-w-[52ch] flex-1 text-sm leading-relaxed text-mist-400">
                        {treatment.summary}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.16em] text-gold-400 uppercase">
                        Read more
                        <IconArrow className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                      </span>
                    </Link>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </section>
      ) : null}

      <section aria-label={`Questions from ${area.name}`} className="relative py-12 lg:py-16">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Questions we get from {area.name}</p>
          </Reveal>
          <div className="mt-8 space-y-3">
            {area.faqs.map((faq) => (
              <Reveal key={faq.q} delay={0.04}>
                <div className="surface rounded-2xl p-6">
                  <h3 className="display text-lg text-mist-50">{faq.q}</h3>
                  <p className="mt-3 max-w-[56ch] text-sm leading-relaxed text-mist-300">
                    {faq.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <Link
              href="/dental-clinic"
              className="group mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-gold-300 transition hover:text-gold-100"
            >
              <IconChevron className="h-4 w-4 rotate-90" />
              Every area we serve
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
