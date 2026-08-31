"use client";

import Image from "next/image";
import Link from "next/link";
import { POSTS_BY_DATE } from "@/lib/blog";
import { useBooking } from "@/components/booking/BookingProvider";
import { Stagger, StaggerItem } from "@/components/ui/Motion";
import { IconArrow, IconCalendar, IconClock } from "@/components/ui/Icons";

export default function BlogGrid() {
  const { openBooking } = useBooking();
  const [lead, ...rest] = POSTS_BY_DATE;

  return (
    <div>
      <Stagger className="grid gap-5">
        <StaggerItem>
          <article className="surface group grid overflow-hidden rounded-3xl transition duration-500 hover:border-gold-500/35 lg:grid-cols-[1.05fr_0.95fr]">
            <Link
              href={`/blog/${lead.slug}`}
              className="relative block aspect-[16/10] overflow-hidden bg-ink-900 lg:aspect-auto lg:min-h-[22rem]"
            >
              <Image
                src={lead.image}
                alt={lead.imageAlt}
                fill
                priority
                quality={82}
                sizes="(max-width: 1024px) 94vw, 580px"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink-950/60 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 rounded-full border border-gold-500/30 bg-ink-950/80 px-3 py-1 text-[0.65rem] tracking-[0.14em] text-gold-300 uppercase">
                {lead.tag}
              </span>
            </Link>

            <div className="flex flex-col justify-center p-7 sm:p-9">
              <div className="flex flex-wrap items-center gap-4 text-[0.72rem] text-mist-400">
                <span className="flex items-center gap-1.5">
                  <IconCalendar className="h-3 w-3 text-gold-500" />
                  <time dateTime={lead.date}>{lead.dateDisplay}</time>
                </span>
                <span className="flex items-center gap-1.5">
                  <IconClock className="h-3 w-3 text-gold-500" />
                  {lead.readMinutes} min read
                </span>
              </div>

              <h2 className="display mt-4 text-2xl text-mist-50 transition group-hover:text-gold-100 sm:text-[2rem]">
                <Link href={`/blog/${lead.slug}`}>{lead.title}</Link>
              </h2>
              <p className="mt-4 max-w-[58ch] text-sm leading-relaxed text-mist-300">
                {lead.excerpt}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2">
                <Link
                  href={`/blog/${lead.slug}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-sheen px-6 text-xs font-semibold tracking-[0.14em] text-ink-950 uppercase transition hover:shadow-[0_12px_32px_-12px_rgba(195,150,69,0.85)]"
                >
                  Read article
                  <IconArrow className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </Link>
                <button
                  type="button"
                  onClick={() => openBooking("blog-index")}
                  className="inline-flex min-h-11 items-center text-xs font-semibold tracking-[0.14em] text-gold-400 uppercase transition hover:text-gold-200"
                >
                  Book appointment
                </button>
              </div>
            </div>
          </article>
        </StaggerItem>
      </Stagger>

      <Stagger className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <StaggerItem key={post.slug} className="h-full">
            <article className="surface group flex h-full flex-col overflow-hidden rounded-3xl transition duration-500 hover:border-gold-500/35">
              <Link
                href={`/blog/${post.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-ink-900"
              >
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  quality={80}
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, 380px"
                  className="object-cover transition duration-700 group-hover:scale-[1.05]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                <span className="absolute top-4 left-4 rounded-full border border-gold-500/30 bg-ink-950/80 px-3 py-1 text-[0.65rem] tracking-[0.14em] text-gold-300 uppercase">
                  {post.tag}
                </span>
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-4 text-[0.7rem] text-mist-400">
                  <span className="flex items-center gap-1.5">
                    <IconCalendar className="h-3 w-3 text-gold-500" />
                    <time dateTime={post.date}>{post.dateDisplay}</time>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <IconClock className="h-3 w-3 text-gold-500" />
                    {post.readMinutes} min
                  </span>
                </div>

                <h2 className="display mt-3 text-xl text-mist-50 transition group-hover:text-gold-100">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-400">
                  {post.excerpt}
                </p>

                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex min-h-11 items-center gap-2 self-start text-[0.72rem] font-semibold tracking-[0.16em] text-gold-400 uppercase transition hover:text-gold-200"
                >
                  Read article
                  <IconArrow className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </div>
  );
}
