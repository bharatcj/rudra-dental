"use client";

import { motion } from "framer-motion";
import { SERVICES, STRUCTURED_SERVICES } from "@/lib/site";
import { useBooking } from "@/components/booking/BookingProvider";
import { Reveal, Spotlight, Stagger, StaggerItem } from "@/components/ui/Motion";
import { SERVICE_ICONS, IconArrow, IconCheck } from "@/components/ui/Icons";

const MARQUEE = STRUCTURED_SERVICES.map((item) => item.name);

export function ServiceMarquee() {
  return (
    <div className="group relative border-y border-gold-500/12 bg-ink-800/40 py-5">
      <div className="mask-fade-x flex overflow-hidden">
        <div className="anim-marquee flex shrink-0 items-center gap-10 pr-10">
          {[...MARQUEE, ...MARQUEE].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-10 text-sm tracking-[0.2em] whitespace-nowrap text-mist-400 uppercase"
            >
              {item}
              <span className="h-1 w-1 rotate-45 bg-gold-500/60" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const { openBooking } = useBooking();

  return (
    <section
      id="services"
      aria-label="Dental services at Rudra Dental"
      className="relative py-24 lg:py-32"
    >
      <div className="shell">
        <div className="mb-14 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow">Our Services</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-4 text-4xl text-mist-50 sm:text-5xl lg:text-[3.4rem]">
                What we <span className="text-gold-gradient">provide</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-mist-300">
                Fourteen specialities under one roof, from a single sitting root canal
                to full mouth reconstruction, delivered across Anakaputhur, Pallavaram,
                Pammal, Chromepet and Kundrathur.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <button
              type="button"
              onClick={() => openBooking("services")}
              className="group inline-flex items-center gap-2.5 rounded-full border border-gold-500/25 px-6 py-3.5 text-sm font-medium text-gold-100 transition hover:bg-gold-500/10"
            >
              Discuss your case
              <IconArrow className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.icon];
            const featured = index === 0;
            return (
              <StaggerItem
                key={service.slug}
                className={featured ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""}
              >
                <Spotlight
                  className={`surface grain group relative flex h-full flex-col overflow-hidden rounded-3xl p-7 transition duration-500 hover:border-gold-500/35 ${
                    featured ? "lg:justify-between" : ""
                  }`}
                >
                  <span
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(340px circle at var(--spot-x) var(--spot-y), rgba(212,175,55,0.14), transparent 68%)",
                    }}
                  />

                  <div className="relative">
                    <div className="mb-6 inline-grid h-14 w-14 place-items-center rounded-2xl border border-gold-500/25 bg-gradient-to-br from-gold-500/15 to-transparent text-gold-300 transition duration-500 group-hover:scale-105 group-hover:border-gold-500/50">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="display text-[1.45rem] text-mist-50">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-mist-300">
                      {service.short}
                    </p>

                    <ul className="mt-5 space-y-2">
                      {service.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-[0.82rem] text-mist-400"
                        >
                          <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gold-500" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {featured ? (
                    <div className="relative mt-8 hidden rounded-2xl border border-gold-500/15 bg-gold-500/[0.05] p-5 lg:block">
                      <p className="text-xs leading-relaxed text-mist-300">
                        {service.description}
                      </p>
                      <button
                        type="button"
                        onClick={() => openBooking(service.slug)}
                        className="mt-4 inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-gold-300 uppercase transition hover:text-gold-100"
                      >
                        Book this treatment
                        <IconArrow className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ) : null}

                  <span className="absolute right-6 bottom-6 font-[family-name:var(--font-mark)] text-5xl leading-none text-gold-500/[0.07] transition duration-500 group-hover:text-gold-500/15">
                    {`${index + 1}`.padStart(2, "0")}
                  </span>
                </Spotlight>
              </StaggerItem>
            );
          })}

          <StaggerItem className="sm:col-span-2 lg:col-span-2">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gold-500/25 bg-gradient-to-br from-gold-500/[0.14] via-ink-800 to-ink-900 p-8">
              <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-gold-500/12 blur-3xl" />
              <div className="relative">
                <p className="eyebrow">Beyond the seven</p>
                <h3 className="display mt-3 text-2xl text-mist-50 sm:text-[1.8rem]">
                  Cosmetic dentistry, periodontics, TMJ care, prosthodontics and
                  emergency treatment
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-mist-300">
                  Veneers, smile design, teeth whitening, zirconia crowns, gum grafting,
                  gingivitis treatment, nightguards, dentures, oral cancer screening and
                  same day emergency care are all available in house.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="relative mt-7 flex flex-wrap gap-2"
              >
                {STRUCTURED_SERVICES.slice(3).map((item) => (
                  <span
                    key={item.name}
                    className="rounded-full border border-gold-500/20 bg-ink-900/50 px-3.5 py-1.5 text-[0.72rem] text-mist-300"
                  >
                    {item.name}
                  </span>
                ))}
              </motion.div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
