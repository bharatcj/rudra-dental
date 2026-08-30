"use client";

import { SERVICES, STRUCTURED_SERVICES } from "@/lib/site";
import { useBooking } from "@/components/booking/BookingProvider";
import { Reveal, Spotlight, Stagger, StaggerItem } from "@/components/ui/Motion";
import { SERVICE_ICONS, IconArrow, IconCheck } from "@/components/ui/Icons";

const MARQUEE = STRUCTURED_SERVICES.map((item) => item.name);

export function ServiceMarquee() {
  return (
    <div className="group relative border-y border-gold-500/12 bg-ink-900/50 py-4 lg:py-5">
      <div className="mask-fade-x flex overflow-hidden">
        <div className="anim-marquee flex shrink-0 items-center gap-6 pr-6 lg:gap-10 lg:pr-10">
          {[...MARQUEE, ...MARQUEE].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="flex shrink-0 items-center gap-6 text-[0.75rem] tracking-[0.18em] whitespace-nowrap text-mist-400 uppercase lg:gap-10 lg:text-[0.78rem] lg:tracking-[0.22em]"
            >
              {item}
              <span className="h-1 w-1 rotate-45 bg-gold-500/70" />
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
      className="relative py-16 sm:py-20 lg:py-32"
    >
      <div className="shell">
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow">Our Services</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-4 text-4xl text-mist-50 sm:text-5xl lg:text-[3.4rem]">
                What we <span className="text-gold-sheen">provide</span>
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
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-gold-500/30 px-6 py-3.5 text-sm font-medium text-gold-200 transition hover:border-gold-400/60 hover:bg-gold-500/10"
            >
              Discuss your case
              <IconArrow className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>

        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[service.icon];
            return (
              <StaggerItem key={service.slug} className="h-full">
                <Spotlight className="surface group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition duration-500 sm:p-7 hover:border-gold-500/40">
                  <span
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(340px circle at var(--spot-x) var(--spot-y), rgba(195,150,69,0.16), transparent 68%)",
                    }}
                  />
                  <span className="pointer-events-none absolute top-6 right-7 font-[family-name:var(--font-mark)] text-[2.6rem] leading-none text-gold-500/10 transition duration-500 group-hover:text-gold-500/22">
                    {`${index + 1}`.padStart(2, "0")}
                  </span>

                  <div className="relative mb-6 inline-grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-gold-500/25 bg-gradient-to-br from-gold-500/18 to-transparent text-gold-300 transition duration-500 group-hover:scale-105 group-hover:border-gold-400/60 group-hover:text-gold-200">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="display relative pr-12 text-[1.4rem] text-mist-50">
                    {service.title}
                  </h3>
                  <p className="relative mt-2.5 text-sm leading-relaxed text-mist-300">
                    {service.short}
                  </p>

                  <ul className="relative mt-5 space-y-2 border-t border-gold-500/10 pt-5">
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

                  <button
                    type="button"
                    onClick={() => openBooking(service.slug)}
                    className="relative mt-auto flex min-h-11 items-center gap-2 pt-6 text-[0.72rem] font-semibold tracking-[0.18em] text-gold-400 uppercase transition hover:text-gold-200"
                  >
                    Book this treatment
                    <IconArrow className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </button>
                </Spotlight>
              </StaggerItem>
            );
          })}

          <StaggerItem className="h-full sm:col-span-2 lg:col-span-2">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-gold-500/28 bg-gradient-to-br from-gold-500/[0.16] via-ink-800 to-ink-900 p-8">
              <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-gold-500/14" />
              <div className="relative">
                <p className="eyebrow flex items-center gap-2.5">
                  <span className="h-px w-6 bg-gold-400/70" />
                  Beyond the seven
                </p>
                <h3 className="display mt-3 max-w-xl text-2xl text-mist-50 sm:text-[1.75rem]">
                  Cosmetic dentistry, periodontics, TMJ care, prosthodontics and
                  emergency treatment
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-mist-300">
                  Veneers, smile design, teeth whitening, zirconia crowns, gum grafting,
                  gingivitis treatment, nightguards, dentures, oral cancer screening and
                  same day emergency care are all available in house.
                </p>
              </div>
              <div className="relative mt-7 flex flex-wrap gap-2">
                {STRUCTURED_SERVICES.slice(3).map((item) => (
                  <span
                    key={item.name}
                    className="rounded-full border border-gold-500/22 bg-ink-950/45 px-3.5 py-1.5 text-[0.78rem] text-mist-300 transition hover:border-gold-400/50 hover:text-gold-200"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
