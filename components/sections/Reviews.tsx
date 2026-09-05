"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { REVIEWS, SITE, type Review } from "@/lib/site";
import { Reveal, Counter } from "@/components/ui/Motion";
import { IconArrow, IconChevron, IconQuote, IconStar } from "@/components/ui/Icons";

const PAGE = 9;

const BARS = [
  { stars: 5, share: 100 },
  { stars: 4, share: 2 },
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

export default function Reviews({
  reviews = REVIEWS,
  rating = SITE.rating.value,
  count = SITE.rating.count,
}: {
  reviews?: Review[];
  rating?: number;
  count?: number;
}) {
  const [filter, setFilter] = useState<string | null>(null);
  const [shownCount, setShownCount] = useState(PAGE);

  const filtered = useMemo(
    () => (filter ? reviews.filter((item) => item.tag === filter) : reviews),
    [filter, reviews],
  );

  const visible = filtered.slice(0, shownCount);
  const remaining = filtered.length - visible.length;

  const topics = useMemo(() => {
    const counts = new Map<string, number>();
    reviews.forEach((item) => counts.set(item.tag, (counts.get(item.tag) ?? 0) + 1));
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [reviews]);

  const pick = (tag: string | null) => {
    setFilter(tag);
    setShownCount(PAGE);
  };

  return (
    <section
      id="reviews"
      aria-label="Google reviews for Rudra Dental"
      className="relative overflow-hidden py-12 sm:py-14 lg:py-16"
    >
      <div className="absolute inset-x-0 top-1/2 -z-10 h-[34rem] -translate-y-1/2 bg-[radial-gradient(ellipse_58%_50%_at_50%_50%,rgba(195,150,69,0.09),transparent_70%)]" />

      <div className="shell">
        <div className="mb-9 grid gap-7 lg:mb-12 lg:gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-14">
          <div>
            <Reveal>
              <p className="eyebrow">Patient Reviews</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-4 text-4xl text-mist-50 sm:text-5xl lg:text-[3.3rem]">
                Rated{" "}
                <span className="text-gold-sheen">{rating.toFixed(1)}</span>{" "}
                by Anakaputhur
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-mist-300">
                Every review below is a real, published review from the Rudra Dental
                Google Business Profile. Nothing here is written by us.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="surface rounded-2xl p-6">
              <div className="flex items-end gap-6">
                <div className="shrink-0">
                  <p className="display text-6xl leading-none text-gold-sheen">
                    {rating.toFixed(1)}
                  </p>
                  <Stars value={5} className="mt-2" />
                  <p className="mt-2 text-xs text-mist-400">
                    <Counter to={count} /> Google reviews
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

                <a
                  href={SITE.social.googleReviews}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group hidden shrink-0 items-center gap-2 self-center rounded-full border border-gold-500/30 px-5 py-3 text-[0.75rem] font-semibold tracking-[0.14em] text-gold-300 uppercase transition hover:bg-gold-500/10 sm:inline-flex"
                >
                  On Google
                  <IconArrow className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => pick(null)}
              className={`inline-flex min-h-9 items-center rounded-full border px-3.5 py-1.5 text-xs transition ${
                filter === null
                  ? "border-gold-400/60 bg-gold-500/12 text-gold-200"
                  : "border-mist-400/16 text-mist-300 hover:border-gold-500/40"
              }`}
            >
              All
              <span className="ml-1.5 text-gold-400">{reviews.length}</span>
            </button>
            {topics.map(([tag, total]) => (
              <button
                key={tag}
                type="button"
                onClick={() => pick(tag === filter ? null : tag)}
                className={`inline-flex min-h-9 items-center rounded-full border px-3.5 py-1.5 text-xs transition ${
                  filter === tag
                    ? "border-gold-400/60 bg-gold-500/12 text-gold-200"
                    : "border-mist-400/16 text-mist-300 hover:border-gold-500/40"
                }`}
              >
                {tag}
                <span className="ml-1.5 text-gold-400">{total}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {visible.map((review, index) => (
            <figure
              key={`${review.author}-${index}`}
              className="surface group relative flex break-inside-avoid flex-col rounded-2xl p-6 transition duration-500 hover:border-gold-500/35"
            >
              <div className="flex items-start justify-between gap-3">
                <Stars value={review.rating} />
                <IconQuote className="h-6 w-6 shrink-0 text-gold-500/25 transition group-hover:text-gold-500/55" />
              </div>

              <blockquote className="mt-4 text-[0.9rem] leading-relaxed text-mist-200">
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
                  <span className="block truncate text-[0.75rem] text-mist-400">
                    {review.meta} <span className="text-mist-500">|</span> {review.when}
                  </span>
                </span>
              </figcaption>

              <span className="absolute top-6 right-14 rounded-full border border-gold-500/18 px-2.5 py-1 text-[0.6rem] whitespace-nowrap text-gold-400 opacity-0 transition group-hover:opacity-100">
                {review.tag}
              </span>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          {remaining > 0 ? (
            <button
              type="button"
              onClick={() => setShownCount((current) => current + PAGE * 2)}
              className="group inline-flex items-center gap-2.5 rounded-full border border-gold-500/30 px-7 py-3.5 text-sm font-medium text-gold-200 transition hover:border-gold-400/60 hover:bg-gold-500/10"
            >
              Show {Math.min(remaining, PAGE * 2)} more
              <IconChevron className="h-4 w-4 transition group-hover:translate-y-0.5" />
            </button>
          ) : null}

          <p className="text-xs text-mist-400">
            Showing {visible.length} of {filtered.length} written reviews. The remaining{" "}
            {count - reviews.length} of {count} are star ratings without text.
          </p>

          <a
            href={SITE.social.googleReviews}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-11 items-center gap-2 text-[0.75rem] font-semibold tracking-[0.16em] text-gold-400 uppercase transition hover:text-gold-200"
          >
            Read them all on Google
            <IconArrow className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
