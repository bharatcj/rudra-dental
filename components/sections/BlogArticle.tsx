"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { type BlogPost, postBySlug } from "@/lib/blog";
import { treatmentBySlug } from "@/lib/treatments";
import { useBooking } from "@/components/booking/BookingProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Motion";
import {
  IconArrow,
  IconCalendar,
  IconCheck,
  IconChevron,
  IconClock,
  IconPhone,
} from "@/components/ui/Icons";

export default function BlogArticle({ post }: { post: BlogPost }) {
  const { openBooking } = useBooking();
  const treatmentPage = treatmentBySlug(post.treatment);
  const related = post.related
    .map((slug) => postBySlug(slug))
    .filter((item): item is BlogPost => Boolean(item));

  return (
    <main className="relative z-10">
      <article>
        <section className="relative overflow-hidden pt-10 pb-10 sm:pt-14 lg:pt-20 lg:pb-14">
          <div className="absolute -top-[18%] left-[6%] -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(195,150,69,0.14),transparent_64%)]" />

          <div className="shell">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-mist-400">
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
                <li>
                  <Link
                    href="/blog"
                    className="inline-flex min-h-9 items-center transition hover:text-gold-200"
                  >
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true" className="text-mist-500">
                  /
                </li>
                <li className="text-gold-300">{post.tag}</li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <Reveal>
                <p className="eyebrow">{post.tag}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="display mt-4 text-3xl text-mist-50 sm:text-4xl lg:text-[3.2rem]">
                  {post.title}
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <div className="mt-6 flex flex-wrap items-center gap-5 text-xs text-mist-400">
                  <span className="flex items-center gap-1.5">
                    <IconCalendar className="h-3.5 w-3.5 text-gold-500" />
                    <time dateTime={post.date}>{post.dateDisplay}</time>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <IconClock className="h-3.5 w-3.5 text-gold-500" />
                    {post.readMinutes} min read
                  </span>
                  <span className="text-mist-500">Rudra Dental, Anakaputhur</span>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.16}>
              <div className="relative mt-9 overflow-hidden rounded-[1.6rem] border border-gold-500/20">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  width={1400}
                  height={875}
                  priority
                  quality={82}
                  sizes="(max-width: 1024px) 94vw, 1100px"
                  className="w-full object-cover"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink-950/50 via-transparent to-transparent" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="relative pb-12 lg:pb-14">
          <div className="shell">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-14">
              <div>
                {post.intro.map((paragraph, index) => (
                  <Reveal key={paragraph.slice(0, 24)} delay={index * 0.04}>
                    <p
                      className={`max-w-[56ch] text-[1.05rem] leading-relaxed text-mist-200 ${
                        index > 0 ? "mt-5" : ""
                      }`}
                    >
                      {paragraph}
                    </p>
                  </Reveal>
                ))}

                {post.sections.map((section) => (
                  <div key={section.heading} className="mt-12">
                    <Reveal>
                      <h2 className="display text-2xl text-mist-50 sm:text-[1.7rem]">
                        {section.heading}
                      </h2>
                    </Reveal>
                    {section.body.map((paragraph) => (
                      <Reveal key={paragraph.slice(0, 24)}>
                        <p className="mt-4 max-w-[56ch] leading-relaxed text-mist-300">
                          {paragraph}
                        </p>
                      </Reveal>
                    ))}
                    {section.points ? (
                      <Reveal>
                        <ul className="mt-6 max-w-[56ch] space-y-2.5 rounded-2xl border border-gold-500/14 bg-white/[0.02] p-6">
                          {section.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-3 text-sm text-mist-300"
                            >
                              <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </Reveal>
                    ) : null}
                  </div>
                ))}

                <Reveal>
                  <div className="mt-12 rounded-3xl border border-gold-500/22 bg-gradient-to-br from-gold-500/[0.12] via-ink-800 to-ink-950 p-8">
                    <p className="eyebrow">In short</p>
                    <ul className="mt-5 space-y-3">
                      {post.takeaways.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-sm leading-relaxed text-mist-200"
                        >
                          <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </div>

              <aside className="lg:sticky lg:top-28 lg:self-start">
                <div className="surface rounded-3xl p-7 sm:flex sm:items-center sm:justify-between sm:gap-8 lg:block">
                  <div className="max-w-[46ch]">
                    <p className="eyebrow">Talk to a dentist</p>
                    <p className="mt-4 text-sm leading-relaxed text-mist-300">
                      Reading only takes you so far. Five dentists sit on one floor
                      on Kamaraj Street, Monday to Saturday, mornings and evenings.
                    </p>
                  </div>
                  <div className="mt-6 flex flex-col gap-3 sm:mt-0 sm:shrink-0 lg:mt-6">
                    <button
                      type="button"
                      onClick={() => openBooking(`blog-${post.slug}`)}
                      className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gold-sheen px-6 py-3.5 text-sm font-semibold whitespace-nowrap text-ink-950 transition hover:shadow-[0_16px_40px_-12px_rgba(195,150,69,0.8)]"
                    >
                      Book appointment
                      <IconArrow className="h-4 w-4 transition group-hover:translate-x-1" />
                    </button>
                    <a
                      href={`tel:${SITE.phone}`}
                      className="inline-flex items-center justify-center gap-2.5 rounded-full border border-gold-500/28 px-6 py-3.5 text-sm font-medium whitespace-nowrap text-gold-100 transition hover:bg-gold-500/10"
                    >
                      <IconPhone className="h-4 w-4" />
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </article>

      {treatmentPage ? (
        <section aria-label="Related treatment" className="relative pb-12 lg:pb-14">
          <div className="shell">
            <Reveal>
              <Link
                href={`/treatments/${treatmentPage.slug}`}
                className="surface group flex flex-col gap-4 rounded-2xl p-7 transition hover:border-gold-500/35 sm:flex-row sm:items-center sm:justify-between"
              >
                <span className="max-w-[52ch]">
                  <span className="eyebrow">The treatment behind this article</span>
                  <span className="display mt-3 block text-xl text-mist-50 transition group-hover:text-gold-100">
                    {treatmentPage.name}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-mist-400">
                    {treatmentPage.summary}
                  </span>
                </span>
                <span className="inline-flex min-h-11 shrink-0 items-center gap-2 text-[0.72rem] font-semibold tracking-[0.16em] text-gold-400 uppercase">
                  Read the treatment page
                  <IconArrow className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section aria-label="More articles" className="relative pb-14 lg:pb-16">
        <div className="shell">
          <Reveal>
            <p className="eyebrow">Keep reading</p>
          </Reveal>
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
            {related.map((item) => (
              <StaggerItem key={item.slug} className="h-full">
                <Link
                  href={`/blog/${item.slug}`}
                  className="surface group flex h-full flex-col rounded-2xl p-6 transition hover:border-gold-500/35"
                >
                  <span className="text-[0.65rem] tracking-[0.16em] text-gold-400 uppercase">
                    {item.tag}
                  </span>
                  <h3 className="display mt-3 text-lg text-mist-50 transition group-hover:text-gold-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-mist-400">
                    {item.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[0.72rem] font-semibold tracking-[0.16em] text-gold-400 uppercase">
                    Read article
                    <IconArrow className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.12}>
            <Link
              href="/blog"
              className="group mt-8 inline-flex min-h-11 items-center gap-2 text-sm text-gold-300 transition hover:text-gold-100"
            >
              <IconChevron className="h-4 w-4 rotate-90" />
              All articles
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
