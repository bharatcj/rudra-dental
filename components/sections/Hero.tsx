"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE, SERVICE_AREAS } from "@/lib/site";
import { useBooking } from "@/components/booking/BookingProvider";
import { SplitHeading } from "@/components/ui/Motion";
import {
  IconArrow,
  IconPhone,
  IconPin,
  IconShield,
  IconSparkle,
  ToothMark,
} from "@/components/ui/Icons";

const HIGHLIGHTS = [
  { value: "12,000+", label: "Smiles restored" },
  { value: "5", label: "In-house specialists" },
  { value: "7 days", label: "Open every week" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { openBooking } = useBooking();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      aria-label="Rudra Dental, best dental clinic in Anakaputhur Chennai"
      className="grain relative isolate overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute -top-[22%] left-[6%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.20),transparent_62%)] blur-[70px] anim-aurora" />
        <div
          className="absolute top-[12%] right-[-8%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(79,209,197,0.14),transparent_65%)] blur-[80px] anim-aurora"
          style={{ animationDelay: "-8s" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ink-900 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 35%, #000 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 35%, #000 20%, transparent 75%)",
          }}
        />
      </motion.div>

      <motion.div style={{ y: contentY, opacity: fade }} className="shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-gold-500/25 bg-gold-500/[0.07] py-1.5 pr-4 pl-1.5"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-gold-500/15">
                <IconSparkle className="h-3.5 w-3.5 text-gold-300" />
              </span>
              <span className="text-xs tracking-wide text-gold-200">
                Two years of brighter smiles in Anakaputhur
              </span>
            </motion.div>

            <h1 className="display text-[2.7rem] leading-[1.03] text-mist-50 sm:text-6xl lg:text-[4.4rem]">
              <SplitHeading text="We are the best" />
              <br />
              <span className="text-gold-gradient">
                <SplitHeading text="dental service" delay={0.18} />
              </span>
              <br />
              <SplitHeading text="in Chennai" delay={0.34} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-mist-300"
            >
              Root canals, implants, braces, aligners and full mouth rehabilitation
              delivered by five in-house specialists. Sterile protocols, digital
              diagnostics and written estimates before anything begins.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <button
                type="button"
                onClick={() => openBooking("hero")}
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 px-7 py-3.5 text-sm font-semibold text-ink-900 transition hover:shadow-[0_16px_40px_-12px_rgba(212,175,55,0.8)]"
              >
                <span className="shimmer-line" />
                <span className="relative">Book appointment</span>
                <IconArrow className="relative h-4 w-4 transition group-hover:translate-x-1" />
              </button>

              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2.5 rounded-full border border-gold-500/25 px-6 py-3.5 text-sm font-medium text-gold-100 transition hover:bg-gold-500/10"
              >
                <IconPhone className="h-4 w-4" />
                Call us
              </a>

              <a
                href={SITE.mapsShortLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border border-mist-400/15 px-6 py-3.5 text-sm font-medium text-mist-200 transition hover:border-gold-500/30 hover:text-gold-100"
              >
                <IconPin className="h-4 w-4" />
                Locate us
              </a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.9 }}
              className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-gold-500/12 pt-7"
            >
              {HIGHLIGHTS.map((item) => (
                <div key={item.label}>
                  <dt className="display text-2xl text-gold-gradient sm:text-3xl">
                    {item.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-mist-400">
                    {item.label}
                  </dd>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.35, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto aspect-square w-full max-w-[30rem]"
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.16),transparent_65%)] blur-2xl" />

            <div className="anim-orbit absolute inset-[6%] rounded-full border border-dashed border-gold-500/20">
              <span className="absolute top-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-gradient-to-br from-gold-100 to-gold-600" />
              <span className="absolute bottom-[8%] left-[12%] h-1.5 w-1.5 rounded-full bg-gold-400/80" />
            </div>
            <div className="anim-orbit-slow absolute inset-[17%] rounded-full border border-gold-500/12">
              <span className="absolute top-1/2 right-0 h-2 w-2 translate-x-1/2 -translate-y-1/2 rotate-45 bg-aqua-400/70" />
            </div>

            <div className="anim-float absolute inset-[26%] grid place-items-center rounded-full border border-gold-500/25 bg-gradient-to-br from-ink-700/90 to-ink-900/90 backdrop-blur">
              <ToothMark className="h-[58%] w-auto" />
            </div>

            {[
              { text: "Single sitting RCT", top: "6%", left: "-2%", delay: 1.0 },
              { text: "Digital X-ray", top: "40%", right: "-6%", delay: 1.15 },
              { text: "Clear aligners", bottom: "16%", left: "-6%", delay: 1.3 },
              { text: "Same day emergency", bottom: "2%", right: "2%", delay: 1.45 },
            ].map((chip) => (
              <motion.span
                key={chip.text}
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: chip.delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  top: chip.top,
                  left: chip.left,
                  right: chip.right,
                  bottom: chip.bottom,
                }}
                className="surface absolute rounded-full px-3.5 py-2 text-[0.7rem] font-medium whitespace-nowrap text-mist-100 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.9)]"
              >
                {chip.text}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="mt-16 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-gold-500/10 pt-7 text-xs text-mist-400"
        >
          <span className="flex items-center gap-2 text-gold-300">
            <IconShield className="h-4 w-4" />
            Serving
          </span>
          {SERVICE_AREAS.map((area) => (
            <span key={area} className="transition hover:text-gold-200">
              {area}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
