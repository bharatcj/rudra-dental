"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { TESTIMONIALS, FAQS, ARTICLES, SITE } from "@/lib/site";
import { useBooking } from "@/components/booking/BookingProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Motion";
import {
  IconArrow,
  IconCalendar,
  IconPhone,
  IconPlus,
  IconQuote,
  ToothMark,
} from "@/components/ui/Icons";

export function Testimonials() {
  const column = (start: number) =>
    TESTIMONIALS.filter((_, index) => index % 3 === start);

  return (
    <section
      aria-label="What patients say about Rudra Dental"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div className="absolute inset-x-0 top-1/2 -z-10 h-[30rem] -translate-y-1/2 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(212,175,55,0.08),transparent_70%)]" />
      <div className="shell">
        <div className="mb-14 text-center">
          <Reveal>
            <p className="eyebrow">Patient Stories</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mx-auto mt-4 max-w-3xl text-4xl text-mist-50 sm:text-5xl lg:text-[3.4rem]">
              Trusted across <span className="text-gold-gradient">south Chennai</span>
            </h2>
          </Reveal>
        </div>

        <Stagger className="grid gap-4 md:grid-cols-3">
          {[0, 1, 2].map((columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-4">
              {column(columnIndex).map((item) => (
                <StaggerItem key={item.author}>
                  <figure className="surface grain group relative h-full rounded-2xl p-6 transition duration-500 hover:border-gold-500/30">
                    <IconQuote className="h-7 w-7 text-gold-500/35 transition group-hover:text-gold-500/60" />
                    <blockquote className="mt-4 text-[0.92rem] leading-relaxed text-mist-200">
                      {item.quote}
                    </blockquote>
                    <figcaption className="mt-5 flex items-center gap-3 border-t border-gold-500/10 pt-4">
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-gold-500/25 bg-gold-500/10 font-[family-name:var(--font-mark)] text-xs text-gold-300">
                        {item.author.charAt(0)}
                      </span>
                      <span>
                        <span className="block text-sm font-medium text-mist-50">
                          {item.author}
                        </span>
                        <span className="block text-xs text-mist-400">
                          {item.location}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                </StaggerItem>
              ))}
            </div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      className="relative py-24 lg:py-32"
    >
      <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="eyebrow">Questions</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-4 text-4xl text-mist-50 sm:text-5xl">
              Answers before you <span className="text-gold-gradient">sit down</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-mist-300">
              Still unsure about something? Call the clinic directly and a dentist will
              talk it through with you.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <a
              href={`tel:${SITE.phone}`}
              className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-gold-500/25 px-6 py-3.5 text-sm font-medium text-gold-100 transition hover:bg-gold-500/10"
            >
              <IconPhone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
          </Reveal>
        </div>

        <div className="divide-y divide-gold-500/10 border-y border-gold-500/10">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.q} delay={index * 0.04}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={`display text-lg transition sm:text-xl ${
                        isOpen ? "text-gold-200" : "text-mist-100 group-hover:text-gold-100"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border transition duration-300 ${
                        isOpen
                          ? "rotate-45 border-gold-500 bg-gold-500 text-ink-900"
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
                        transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-sm leading-relaxed text-mist-300">
                          {faq.a}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Blog() {
  const { openBooking } = useBooking();

  return (
    <section id="blog" aria-label="Latest blog and news" className="relative py-24 lg:py-32">
      <div className="shell">
        <div className="mb-14 text-center">
          <Reveal>
            <p className="eyebrow">Our Blog</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-4 text-4xl text-mist-50 sm:text-5xl lg:text-[3.4rem]">
              Latest blog <span className="text-gold-gradient">and news</span>
            </h2>
          </Reveal>
        </div>

        <Stagger className="grid gap-5 md:grid-cols-3">
          {ARTICLES.map((article) => (
            <StaggerItem key={article.title}>
              <article className="group surface grain flex h-full flex-col overflow-hidden rounded-3xl transition duration-500 hover:border-gold-500/35">
                <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.16),transparent_65%)] transition duration-700 group-hover:scale-125" />
                  <ToothMark className="relative h-24 w-auto opacity-70 transition duration-700 group-hover:scale-110 group-hover:opacity-100" />
                  <span className="absolute top-4 left-4 rounded-full border border-gold-500/25 bg-ink-900/70 px-3 py-1 text-[0.65rem] tracking-[0.14em] text-gold-300 uppercase backdrop-blur">
                    {article.tag}
                  </span>
                  <span className="absolute right-4 bottom-4 flex items-center gap-1.5 rounded-full bg-ink-900/75 px-3 py-1 text-[0.68rem] text-mist-300 backdrop-blur">
                    <IconCalendar className="h-3 w-3" />
                    <time dateTime={article.date}>{article.dateDisplay}</time>
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="display text-xl text-mist-50 transition group-hover:text-gold-100">
                    {article.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-400">
                    {article.excerpt}
                  </p>
                  <button
                    type="button"
                    onClick={() => openBooking("blog")}
                    className="mt-6 inline-flex items-center gap-2 self-start text-xs font-semibold tracking-[0.14em] text-gold-300 uppercase transition hover:text-gold-100"
                  >
                    Book appointment
                    <IconArrow className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

export function Cta() {
  const { openBooking } = useBooking();

  return (
    <section aria-label="Book a dental appointment" className="relative py-16 lg:py-24">
      <div className="shell">
        <div className="grain relative overflow-hidden rounded-[2.2rem] border border-gold-500/25 bg-gradient-to-br from-gold-500/[0.15] via-ink-800 to-ink-900 px-6 py-16 text-center sm:px-14">
          <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold-500/16 blur-3xl" />
          <div className="absolute -right-20 -bottom-24 h-64 w-64 rounded-full bg-aqua-400/10 blur-3xl" />

          <Reveal>
            <ToothMark className="anim-float mx-auto h-14 w-auto" />
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow mt-6">Book Dental Appointment</p>
          </Reveal>
          <Reveal delay={0.14}>
            <h2 className="display mx-auto mt-4 max-w-3xl text-4xl text-mist-50 sm:text-5xl lg:text-[3.6rem]">
              We are open and{" "}
              <span className="text-gold-gradient">welcoming patients</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-mist-300">
              Seven days a week, 9:00 AM to 9:00 PM. Emergency cases are given priority
              slots on the same day.
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => openBooking("cta")}
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 px-8 py-4 text-sm font-semibold text-ink-900 transition hover:shadow-[0_16px_44px_-12px_rgba(212,175,55,0.85)]"
              >
                <span className="shimmer-line" />
                <span className="relative">Book appointment</span>
                <IconArrow className="relative h-4 w-4 transition group-hover:translate-x-1" />
              </button>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-gold-500/30 px-7 py-4 text-sm font-medium text-gold-100 transition hover:bg-gold-500/10"
              >
                <IconPhone className="h-4 w-4" />
                Call us
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
