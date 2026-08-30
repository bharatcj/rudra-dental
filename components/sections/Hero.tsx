"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SITE, SERVICE_AREAS } from "@/lib/site";
import { useBooking } from "@/components/booking/BookingProvider";
import { SplitHeading, useParallaxEnabled } from "@/components/ui/Motion";
import {
  IconArrow,
  IconPhone,
  IconPin,
  IconShield,
  IconStar,
} from "@/components/ui/Icons";

const HIGHLIGHTS = [
  { value: "5.0", label: "Rated on Google" },
  { value: "275", label: "Patient reviews" },
  { value: "7 days", label: "Open every week" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { openBooking } = useBooking();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const parallax = useParallaxEnabled();
  const bgShift = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentShift = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);
  const bgY = parallax ? bgShift : undefined;
  const contentY = parallax ? contentShift : undefined;

  return (
    <section
      ref={ref}
      id="home"
      aria-label="Rudra Dental, best dental clinic in Anakaputhur Chennai"
      className="grain relative isolate overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-24 lg:pb-32"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute -top-[22%] left-[6%] h-[46rem] w-[46rem] rounded-full bg-[radial-gradient(circle,rgba(195,150,69,0.22),transparent_62%)] anim-aurora" />
        <div
          className="absolute top-[12%] right-[-8%] h-[40rem] w-[40rem] rounded-full bg-[radial-gradient(circle,rgba(79,209,197,0.14),transparent_65%)] anim-aurora"
          style={{ animationDelay: "-8s" }}
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-ink-950 to-transparent" />
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(195,150,69,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(195,150,69,0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 35%, #000 20%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 35%, #000 20%, transparent 75%)",
          }}
        />
      </motion.div>

      <motion.div style={{ y: contentY }} className="shell relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-5 inline-flex items-center rounded-full border border-gold-500/25 bg-gold-500/[0.07] px-4 py-1.5 lg:mb-7"
            >
              <span className="text-xs tracking-wide text-gold-200">
                Two years of brighter smiles in Anakaputhur
              </span>
            </motion.div>

            <h1 className="display text-[2.7rem] leading-[1.03] text-mist-50 sm:text-6xl lg:text-[4.4rem]">
              <SplitHeading text="We are the best" />
              <br />
              <span className="text-gold-sheen">
                <SplitHeading text="dental service" delay={0.18} />
              </span>
              <br />
              <SplitHeading text="in Chennai" delay={0.34} />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-xl text-[1.02rem] leading-relaxed text-mist-300 lg:mt-7 lg:text-[1.05rem]"
            >
              Root canals, implants, braces, aligners and full mouth rehabilitation
              delivered by five in-house specialists. Sterile protocols, digital
              diagnostics and written estimates before anything begins.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-7 flex flex-wrap items-center gap-2.5 lg:mt-9 lg:gap-3"
            >
              <button
                type="button"
                onClick={() => openBooking("hero")}
                className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gold-sheen px-7 py-3.5 text-sm font-semibold text-ink-950 transition hover:shadow-[0_16px_40px_-12px_rgba(195,150,69,0.8)]"
              >
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
              className="mt-9 grid max-w-lg grid-cols-3 gap-4 border-t border-gold-500/12 pt-6 lg:mt-12 lg:pt-7"
            >
              {HIGHLIGHTS.map((item) => (
                <div key={item.label}>
                  <dt className="display text-2xl text-gold-sheen sm:text-3xl">
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
            className="relative mx-auto aspect-square w-full max-w-[22rem] sm:max-w-[26rem] lg:max-w-[30rem]"
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(195,150,69,0.2),transparent_66%)]" />

            <div
              className="anim-orbit absolute inset-0 rounded-full"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, rgba(195,150,69,0.05) 40deg, rgba(224,203,133,0.65) 96deg, rgba(239,227,169,0.9) 118deg, rgba(195,150,69,0.28) 150deg, transparent 210deg, transparent 360deg)",
                mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
                WebkitMask:
                  "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
              }}
            />
            <div className="absolute inset-0 rounded-full border border-gold-500/20" />

            <div className="absolute inset-[7%]">
              {Array.from({ length: 60 }).map((_, index) => (
                <span
                  key={index}
                  className="absolute top-1/2 left-1/2 origin-left"
                  style={{ transform: `rotate(${index * 6}deg) translateX(calc(50% - 1px))` }}
                >
                  <span
                    className={
                      index % 5 === 0
                        ? "block h-px w-2.5 bg-gold-400/70"
                        : "block h-px w-1 bg-gold-500/25"
                    }
                  />
                </span>
              ))}
            </div>

            <div className="absolute inset-[13%] overflow-hidden rounded-full border border-gold-500/30 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.9)]">
              <Image
                src="/gallery/logo-wall.jpg"
                alt="The Rudra Dental reception lounge in Anakaputhur"
                fill
                priority
                quality={82}
                sizes="(max-width: 1024px) 74vw, 460px"
                className="scale-[1.02] object-cover"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-ink-950/72 via-transparent to-ink-950/20" />
              <span className="absolute inset-0 rounded-full shadow-[inset_0_0_70px_22px_rgba(6,8,14,0.55)]" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.95, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="surface absolute bottom-[3%] left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-full px-4 py-2 whitespace-nowrap shadow-[0_16px_40px_-16px_rgba(0,0,0,0.95)]"
            >
              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <IconStar key={index} className="h-3 w-3 text-gold-400" />
                ))}
              </span>
              <span className="text-[0.78rem] font-medium text-mist-100">5.0</span>
              <span className="h-3 w-px bg-gold-500/30" />
              <span className="text-[0.78rem] text-mist-400">275 reviews</span>
            </motion.div>

            {[
              { text: "Single sitting RCT", top: "7%", left: "-1%", delay: 1.0 },
              { text: "Same day emergency", top: "24%", right: "-3%", delay: 1.15 },
              { text: "Digital X-ray", top: "52%", right: "-6%", delay: 1.3 },
              { text: "Clear aligners", bottom: "24%", left: "-5%", delay: 1.45 },
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
                className="surface absolute rounded-full px-3 py-1.5 text-[0.78rem] font-medium whitespace-nowrap text-mist-100 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.9)]"
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
          className="mt-12 border-t border-gold-500/10 pt-6 lg:mt-16 lg:pt-7"
        >
          <span className="flex items-center gap-2 text-xs text-gold-300">
            <IconShield className="h-4 w-4" />
            Serving
          </span>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {SERVICE_AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-gold-500/14 px-2.5 py-1 text-[0.75rem] text-mist-400 transition hover:border-gold-500/35 hover:text-gold-200"
              >
                {area}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
