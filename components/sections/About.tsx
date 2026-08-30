"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TRUST_MARKERS, STATS, PROCESS } from "@/lib/site";
import { useBooking } from "@/components/booking/BookingProvider";
import { Counter, Reveal, Stagger, StaggerItem } from "@/components/ui/Motion";
import {
  IconArrow,
  IconCheck,
  IconMicroscope,
  IconShield,
  IconOrtho,
} from "@/components/ui/Icons";

export function About() {
  const { openBooking } = useBooking();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" aria-label="About Rudra Dental" className="relative py-16 sm:py-20 lg:py-32">
      <div className="shell">
        <div ref={ref} className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <motion.div style={{ y: imageY }} className="relative">
            <div className="relative overflow-hidden rounded-[2rem] border border-gold-500/20">
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/12 via-transparent to-aqua-400/8" />
              <Image
                src="/gallery/logo-wall.jpg"
                alt="The Rudra Dental reception lounge in Anakaputhur, Chennai"
                width={1500}
                height={1187}
                quality={82}
                className="relative w-full object-cover"
                sizes="(max-width: 1024px) 92vw, 620px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="surface absolute -right-2 -bottom-6 w-56 rounded-2xl p-5 lg:-right-8"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-500/15 text-gold-300">
                  <IconShield className="h-5 w-5" />
                </span>
                <div>
                  <p className="display text-xl text-gold-sheen">100%</p>
                  <p className="text-[0.75rem] text-mist-400">Sterile protocols</p>
                </div>
              </div>
            </motion.div>

            <div className="absolute -top-8 -left-6 h-32 w-32 rounded-full bg-gold-500/10" />
          </motion.div>

          <div>
            <Reveal>
              <p className="eyebrow">About Us</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-4 text-4xl text-mist-50 sm:text-5xl lg:text-[3.4rem]">
                We care for your{" "}
                <span className="text-gold-sheen">dental health</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 leading-relaxed text-mist-300">
                Rudra Dental began in Anakaputhur with a simple idea. Dentistry should
                not be something people postpone out of fear or confusion about cost. Two
                years and thousands of patients later, that idea still runs the clinic.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 leading-relaxed text-mist-300">
                Five specialists share one operatory floor, so a case that begins as a
                filling and turns out to need endodontics, orthodontics or surgery never
                leaves the building. You get one diagnosis, one plan and one team
                accountable for the outcome.
              </p>
            </Reveal>

            <Stagger className="mt-9 grid gap-3 sm:grid-cols-2">
              {TRUST_MARKERS.map((marker) => (
                <StaggerItem key={marker} y={14}>
                  <div className="flex items-start gap-3 rounded-xl border border-gold-500/12 bg-white/[0.02] px-4 py-3">
                    <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                    <span className="text-[0.85rem] leading-snug text-mist-200">
                      {marker}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>

            <Reveal delay={0.24}>
              <button
                type="button"
                onClick={() => openBooking("about")}
                className="group mt-9 inline-flex items-center gap-2.5 rounded-full bg-gold-sheen px-7 py-3.5 text-sm font-semibold text-ink-950 transition hover:shadow-[0_16px_40px_-12px_rgba(195,150,69,0.8)]"
              >
                Book appointment
                <IconArrow className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Stats() {
  return (
    <section aria-label="Rudra Dental by the numbers" className="relative py-12 lg:py-16">
      <div className="shell">
        <div className="surface relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-12">
          <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-gold-500/10" />
          <Stagger className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, index) => (
              <StaggerItem key={stat.label} className="relative text-center">
                {index > 0 ? (
                  <span className="absolute top-1/2 -left-4 hidden h-12 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-gold-500/25 to-transparent lg:block" />
                ) : null}
                <p className="display text-4xl text-gold-sheen sm:text-5xl">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-2 text-xs tracking-[0.18em] text-mist-400 uppercase">
                  {stat.label}
                </p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      aria-label="How treatment works at Rudra Dental"
      className="relative py-16 sm:py-20 lg:py-32"
    >
      <div className="shell">
        <div className="mb-10 max-w-2xl lg:mb-14">
          <Reveal>
            <p className="eyebrow">The Rudra Method</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-4 text-4xl text-mist-50 sm:text-5xl lg:text-[3.4rem]">
              Five steps, <span className="text-gold-sheen">zero surprises</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-mist-300">
              Every patient moves through the same clear sequence, whether it is a
              routine cleaning or a full mouth rehabilitation spread over months.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative">
          <div className="absolute top-0 bottom-0 left-[1.45rem] w-px bg-mist-400/12 lg:left-1/2 lg:-translate-x-1/2">
            <motion.div
              style={{ height }}
              className="w-full bg-gradient-to-b from-gold-300 via-gold-500 to-gold-600"
            />
          </div>

          <div className="space-y-10 lg:space-y-16">
            {PROCESS.map((item, index) => (
              <Reveal
                key={item.step}
                delay={index * 0.05}
                className={`relative pl-16 lg:w-1/2 lg:pl-0 ${
                  index % 2 === 0
                    ? "lg:ml-0 lg:pr-14 lg:text-right"
                    : "lg:ml-auto lg:pl-14"
                }`}
              >
                <span
                  className={`absolute top-1 left-0 grid h-12 w-12 place-items-center rounded-full border border-gold-500/30 bg-ink-800 font-[family-name:var(--font-mark)] text-sm font-semibold text-gold-300 lg:top-0 ${
                    index % 2 === 0
                      ? "lg:right-0 lg:left-auto lg:translate-x-1/2"
                      : "lg:left-0 lg:-translate-x-1/2"
                  }`}
                >
                  {item.step}
                </span>
                <div className="surface rounded-2xl p-6">
                  <h3 className="display text-xl text-mist-50">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-mist-300">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-16">
            {[
              {
                icon: IconMicroscope,
                title: "Digital diagnostics",
                body: "Intraoral scanning and digital radiography replace guesswork with measurable data.",
              },
              {
                icon: IconShield,
                title: "Infection control",
                body: "Autoclaved instruments, single use consumables and documented sterilisation cycles.",
              },
              {
                icon: IconOrtho,
                title: "Predictable aesthetics",
                body: "Smile design previews let you approve the result before the first preparation.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="surface rounded-2xl p-6 transition hover:border-gold-500/30"
              >
                <card.icon className="h-6 w-6 text-gold-400" />
                <h3 className="mt-4 text-base font-semibold text-mist-50">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-400">{card.body}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
