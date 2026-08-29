"use client";

import { useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { REVIEWS, REVIEW_TOPICS, SITE } from "@/lib/site";
import { Reveal, Counter } from "@/components/ui/Motion";
import { IconArrow, IconChevron, IconQuote, IconStar } from "@/components/ui/Icons";

const BARS = [
  { stars: 5, share: 100 },
  { stars: 4, share: 3 },
  { stars: 3, share: 1 },
  { stars: 2, share: 0 },
  { stars: 1, share: 1 },
];

function Stars({ value, className }: { value: number; className?: string }) {
  return (
    <span
      className={`flex items-center gap-0.5 ${className ?? ""}`}
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <IconStar
          key={index}
          className={`h-3.5 w-3.5 ${index < value ? "text-gold-400" : "text-mist-500/40"}`}
        />
      ))}
    </span>
  );
}

export default function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<string | null>(null);

  const shown = useMemo(
    () => (filter ? REVIEWS.filter((r) => r.tag === filter) : REVIEWS),
    [filter],
  );

  const tags = useMemo(() => Array.from(new Set(REVIEWS.map((r) => r.tag))), []);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-review]") as HTMLElement | null;
    track.scrollBy({ left: (card ? card.offsetWidth + 16 : 360) * direction, behavior: "smooth" });
  };

  return (
    <section
      id="reviews"
      aria-label="Google reviews for Rudra Dental"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <div className="absolute inset-x-0 top-1/2 -z-10 h-[32rem] -translate-y-1/2 bg-[radial-gradient(ellipse_58%_50%_at_50%_50%,rgba(195,150,69,0.09),transparent_70%)]" />

      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div>
            <Reveal>
              <p className="eyebrow">Patient Reviews</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-4 text-4xl text-mist-50 sm:text-5xl">
                Rated <span className="text-gold-sheen anim-sheen">5.0</span> by
                Anakaputhur
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="surface mt-8 rounded-2xl p-6">
                <div className="flex items-end gap-5">
                  <div>
                    <p className="display text-6xl leading-none text-gold-sheen">
                      {SITE.rating.value.toFixed(1)}
                    </p>
                    <Stars value={5} className="mt-2" />
                    <p className="mt-2 text-xs text-mist-400">
                      <Counter to={SITE.rating.count} /> Google reviews
                    </p>
                  </div>

                  <div className="flex-1 space-y-1.5 pb-1">
                    {BARS.map((bar) => (
                      <div key={bar.stars} className="flex items-center gap-2">
                        <span className="w-2 text-[0.65rem] text-mist-400">
                          {bar.stars}
                        </span>
                        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-mist-500/20">
                          <motion.span
                            initial={{ width: 0 }}
                            whileInView={{ width: `${bar.share}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="block h-full rounded-full bg-gold-sheen"
                          />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5 border-t border-gold-500/12 pt-5">
                  {REVIEW_TOPICS.map((topic) => (
                    <span
                      key={topic.label}
                      className="rounded-full border border-gold-500/18 px-3 py-1 text-[0.68rem] text-mist-300"
                    >
                      {topic.label}
                      <span className="ml-1.5 text-gold-400">{topic.count}</span>
                    </span>
                  ))}
                </div>

                <a
                  href={SITE.social.googleReviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold tracking-[0.16em] text-gold-400 uppercase transition hover:text-gold-200"
                >
                  Read all on Google
                  <IconArrow className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="min-w-0">
            <Reveal delay={0.1}>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setFilter(null)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
                    filter === null
                      ? "border-gold-400/60 bg-gold-500/12 text-gold-200"
                      : "border-mist-400/16 text-mist-300 hover:border-gold-500/40"
                  }`}
                >
                  All
                </button>
                {tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setFilter(tag === filter ? null : tag)}
                    className={`rounded-full border px-3.5 py-1.5 text-xs transition ${
                      filter === tag
                        ? "border-gold-400/60 bg-gold-500/12 text-gold-200"
                        : "border-mist-400/16 text-mist-300 hover:border-gold-500/40"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
                <span className="ml-auto hidden gap-2 sm:flex">
                  <button
                    type="button"
                    onClick={() => scrollBy(-1)}
                    aria-label="Previous reviews"
                    className="grid h-9 w-9 place-items-center rounded-full border border-gold-500/28 text-gold-200 transition hover:bg-gold-500/12"
                  >
                    <IconChevron className="h-4 w-4 rotate-90" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollBy(1)}
                    aria-label="Next reviews"
                    className="grid h-9 w-9 place-items-center rounded-full border border-gold-500/28 text-gold-200 transition hover:bg-gold-500/12"
                  >
                    <IconChevron className="h-4 w-4 -rotate-90" />
                  </button>
                </span>
              </div>
            </Reveal>

            <div
              ref={trackRef}
              className="scroll-x flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3"
            >
              {shown.map((review, index) => (
                <motion.figure
                  key={review.author}
                  data-review
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: Math.min(index, 4) * 0.06 }}
                  className="surface grain group relative flex w-[82vw] shrink-0 snap-start flex-col rounded-2xl p-6 transition duration-500 hover:border-gold-500/35 sm:w-[21rem]"
                >
                  <div className="flex items-start justify-between gap-3">
                    <Stars value={review.rating} />
                    <IconQuote className="h-6 w-6 shrink-0 text-gold-500/25 transition group-hover:text-gold-500/50" />
                  </div>

                  <blockquote className="mt-4 flex-1 text-[0.9rem] leading-relaxed text-mist-200">
                    {review.text}
                  </blockquote>

                  <figcaption className="mt-5 flex items-center gap-3 border-t border-gold-500/12 pt-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-gold-500/28 bg-gold-500/10 font-[family-name:var(--font-mark)] text-xs text-gold-300">
                      {review.author.charAt(0)}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-mist-50">
                        {review.author}
                      </span>
                      <span className="block truncate text-[0.7rem] text-mist-400">
                        {review.meta} <span className="text-mist-500">|</span>{" "}
                        {review.when}
                      </span>
                    </span>
                    <span className="shrink-0 rounded-full border border-gold-500/18 px-2.5 py-1 text-[0.62rem] whitespace-nowrap text-gold-400">
                      {review.tag}
                    </span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>

            <Reveal delay={0.12}>
              <p className="mt-4 text-xs text-mist-400">
                Reviews shown are real, published on the Rudra Dental Google Business
                Profile. Ratings and counts current as of the last update.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
