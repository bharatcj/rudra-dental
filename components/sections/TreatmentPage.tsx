"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SITE, SERVICE_AREAS } from "@/lib/site";
import { type Treatment, treatmentBySlug } from "@/lib/treatments";
import { useBooking } from "@/components/booking/BookingProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Motion";
import {
  SERVICE_ICONS,
  IconArrow,
  IconCheck,
  IconChevron,
  IconClock,
  IconPhone,
  IconPlus,
} from "@/components/ui/Icons";

export default function TreatmentPage({ treatment }: { treatment: Treatment }) {
  const { openBooking } = useBooking();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const Icon = SERVICE_ICONS[treatment.icon];
  const related = treatment.related
    .map((slug) => treatmentBySlug(slug))
    .filter((item): item is Treatment => Boolean(item));

  return (
    <main className="relative z-10">
      <section className="relative overflow-hidden pt-10 pb-14 sm:pt-14 sm:pb-16 lg:pt-20 lg:pb-24">
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
                <Link href="/treatments" className="inline-flex min-h-9 items-center transition hover:text-gold-200">
                  Treatments
                </Link>
              </li>
              <li aria-hidden="true" className="text-mist-500">
                /
              </li>
              <li className="text-gold-300">{treatment.name}</li>
            </ol>
          </nav>

          <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
            <div>
              <Reveal>
                <span className="inline-grid h-14 w-14 place-items-center rounded-2xl border border-gold-500/25 bg-gradient-to-br from-gold-500/18 to-transparent text-gold-300">
                  <Icon className="h-7 w-7" />
                </span>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="display mt-6 text-4xl text-mist-50 sm:text-5xl lg:text-[3.4rem]">
                  {treatment.heading}
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-mist-300">
                  {treatment.summary}
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-wrap items-center gap-2.5">
                  <button
                    type="button"
                    onClick={() =>
                      openBooking(treatment.slug, { treatment: treatment.slug })
                    }
                    className="group inline-flex items-center gap-2.5 rounded-full bg-gold-sheen px-7 py-3.5 text-sm font-semibold text-ink-950 transition hover:shadow-[0_16px_40px_-12px_rgba(195,150,69,0.8)]"
                  >
                    Book a consultation
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
              <div className="relative overflow-hidden rounded-[1.6rem] border border-gold-500/20">
                <Image
                  src={treatment.image}
                  alt={treatment.imageAlt}
                  width={1500}
                  height={1000}
                  priority
                  quality={80}
                  sizes="(max-width: 1024px) 92vw, 520px"
                  className="w-full object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section aria-label="About the treatment" className="relative py-12 lg:py-16">
        <div className="shell grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            {treatment.intro.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 30)} delay={index * 0.05}>
                <p
                  className={`max-w-[58ch] leading-relaxed text-mist-300 ${
                    index > 0 ? "mt-5" : ""
                  } ${index === 0 ? "text-[1.05rem] text-mist-200" : ""}`}
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <dl className="surface rounded-2xl p-6">
              <p className="eyebrow mb-5">At a glance</p>
              {treatment.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="border-b border-gold-500/10 py-3 last:border-0 last:pb-0"
                >
                  <dt className="text-xs tracking-[0.14em] text-mist-400 uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm text-mist-100">{fact.value}</dd>
                </div>
              ))}
              <div className="mt-5 flex items-center gap-2.5 border-t border-gold-500/12 pt-5 text-xs text-mist-400">
                <IconClock className="h-4 w-4 shrink-0 text-gold-400" />
                Monday to Saturday, 9:00 AM to 9:00 PM
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      <section aria-label="When this treatment is needed" className="relative py-12 lg:py-16">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">When it is needed</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display mt-4 max-w-2xl text-3xl text-mist-50 sm:text-4xl">
              Signs we look for
            </h2>
          </Reveal>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2">
            {treatment.signs.map((sign) => (
              <StaggerItem key={sign.title} className="h-full">
                <div className="surface h-full rounded-2xl p-6 transition hover:border-gold-500/32">
                  <h3 className="display text-lg text-mist-50">{sign.title}</h3>
                  <p className="mt-2.5 max-w-[53ch] text-sm leading-relaxed text-mist-300">
                    {sign.body}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section aria-label="How the treatment works" className="relative py-12 lg:py-16">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Step by step</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display mt-4 max-w-2xl text-3xl text-mist-50 sm:text-4xl">
              What actually happens
            </h2>
          </Reveal>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2">
            {treatment.steps.map((step, index) => (
              <Reveal key={step.title} delay={index * 0.04}>
                <li className="surface flex h-full gap-5 rounded-2xl p-6">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold-500/28 font-[family-name:var(--font-mark)] text-sm text-gold-300">
                    {`${index + 1}`.padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="display text-lg text-mist-50">{step.title}</h3>
                    <p className="mt-2 max-w-[53ch] text-sm leading-relaxed text-mist-300">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section aria-label="Aftercare" className="relative py-12 lg:py-16">
        <div className="shell">
          <div className="rounded-[2rem] border border-gold-500/22 bg-gradient-to-br from-gold-500/[0.12] via-ink-800 to-ink-950 p-8 sm:p-12">
            <Reveal>
              <p className="eyebrow">Afterwards</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="display mt-4 max-w-2xl text-3xl text-mist-50 sm:text-4xl">
                Looking after it at home
              </h2>
            </Reveal>
            <Stagger className="mt-8 grid gap-3 sm:grid-cols-2">
              {treatment.aftercare.map((item) => (
                <StaggerItem key={item.slice(0, 30)} y={14}>
                  <div className="flex items-start gap-3 rounded-xl border border-gold-500/12 bg-ink-950/40 px-4 py-3.5">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    <span className="max-w-[53ch] text-sm leading-relaxed text-mist-200">
                      {item}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section aria-label="Questions about this treatment" className="relative py-12 lg:py-16">
        <div className="shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">Questions</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="display mt-4 text-3xl text-mist-50 sm:text-4xl">
                {treatment.name.toLowerCase()}, answered
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-mist-300">
                If your question is not here, call the clinic and a dentist will talk it
                through before you book anything.
              </p>
            </Reveal>
          </div>

          <div className="divide-y divide-gold-500/10 border-y border-gold-500/10">
            {treatment.faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-6 py-5 text-left"
                  >
                    <span
                      className={`display text-lg transition ${
                        isOpen ? "text-gold-200" : "text-mist-100 group-hover:text-gold-100"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition duration-300 ${
                        isOpen
                          ? "rotate-45 border-gold-500 bg-gold-500 text-ink-950"
                          : "border-gold-500/30 text-gold-300"
                      }`}
                    >
                      <IconPlus className="h-3.5 w-3.5" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-[58ch] pb-5 text-sm leading-relaxed text-mist-300">
                          {faq.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-label="Related treatments" className="relative py-12 lg:py-16">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Also relevant</p>
          </Reveal>
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => {
              const RelatedIcon = SERVICE_ICONS[item.icon];
              return (
                <StaggerItem key={item.slug} className="h-full">
                  <Link
                    href={`/treatments/${item.slug}`}
                    className="surface group flex h-full flex-col rounded-2xl p-6 transition hover:border-gold-500/35"
                  >
                    <RelatedIcon className="h-6 w-6 text-gold-400" />
                    <h3 className="display mt-4 text-lg text-mist-50 transition group-hover:text-gold-100">
                      {item.name}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-400">
                      {item.summary}
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

          <Reveal delay={0.1}>
            <div className="mt-10 rounded-2xl border border-gold-500/12 bg-white/[0.02] px-6 py-6">
              <p className="text-xs tracking-[0.16em] text-gold-400 uppercase">
                {treatment.name} for patients from
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

          <Reveal delay={0.14}>
            <Link
              href="/treatments"
              className="group mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-gold-300 transition hover:text-gold-100"
            >
              <IconChevron className="h-4 w-4 rotate-90" />
              All treatments
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
