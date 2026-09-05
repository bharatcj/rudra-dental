"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { DOCTORS } from "@/lib/site";
import { useBooking } from "@/components/booking/BookingProvider";
import { Reveal, Tilt } from "@/components/ui/Motion";
import { IconArrow, IconChevron } from "@/components/ui/Icons";

export default function Doctors() {
  const { openBooking } = useBooking();
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollBy = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-doctor-card]") as HTMLElement | null;
    const amount = card ? card.offsetWidth + 20 : 340;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  };

  return (
    <section
      id="doctors"
      aria-label="Meet the dentists at Rudra Dental"
      className="relative py-12 sm:py-14 lg:py-16"
    >
      <div className="shell">
        <div className="mb-9 flex flex-col gap-6 lg:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow">Our Doctors</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-4 text-4xl text-mist-50 sm:text-5xl lg:text-[3.4rem]">
                Best <span className="text-gold-sheen">expert dentists</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-mist-300">
                Five specialists, one floor. Endodontics, oral surgery, prosthodontics
                and orthodontics under a single roof in Anakaputhur.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                aria-label="Previous doctors"
                className="grid h-11 w-11 place-items-center rounded-full border border-gold-500/25 text-gold-200 transition hover:bg-gold-500/10"
              >
                <IconChevron className="h-4 w-4 rotate-90" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                aria-label="Next doctors"
                className="grid h-11 w-11 place-items-center rounded-full border border-gold-500/25 text-gold-200 transition hover:bg-gold-500/10"
              >
                <IconChevron className="h-4 w-4 -rotate-90" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="shell">
        <div
          ref={trackRef}
          className="scroll-x -mr-[var(--gutter)] flex snap-x snap-proximity gap-5 overflow-x-auto pr-[var(--gutter)] pb-4"
          onScroll={(event) => {
            const track = event.currentTarget;
            const card = track.querySelector("[data-doctor-card]") as HTMLElement | null;
            const width = card ? card.offsetWidth + 20 : 340;
            setActiveIndex(Math.round(track.scrollLeft / width));
          }}
        >
        {DOCTORS.map((doctor, index) => (
          <motion.div
            key={doctor.name}
            data-doctor-card
            initial={{ y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="w-[76vw] shrink-0 snap-start sm:w-[19rem]"
          >
            <Tilt max={6}>
              <article className="group surface relative overflow-hidden rounded-3xl transition duration-500 hover:border-gold-500/40">
                <div className="relative aspect-[46/50] overflow-hidden bg-gradient-to-b from-ink-700 to-ink-950">
                  <Image
                    src={doctor.image}
                    alt={`${doctor.name}, ${doctor.role} at Rudra Dental`}
                    fill
                    quality={82}
                    sizes="(max-width: 640px) 78vw, 320px"
                    className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/25 to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full border border-gold-500/30 bg-ink-950/70 px-3 py-1 text-[0.65rem] tracking-[0.16em] text-gold-300 uppercase">
                    {doctor.credentials}
                  </span>
                </div>

                <div className="relative -mt-14 p-6">
                  <h3 className="display text-2xl text-mist-50">{doctor.name}</h3>
                  <p className="mt-1 text-xs tracking-[0.14em] text-gold-400 uppercase">
                    {doctor.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-mist-400">
                    {doctor.focus}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      openBooking(`doctor-${doctor.name}`, { doctor: doctor.name })
                    }
                    className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-gold-sheen px-5 text-xs font-semibold tracking-[0.12em] whitespace-nowrap text-ink-950 uppercase transition hover:shadow-[0_12px_32px_-12px_rgba(195,150,69,0.85)]"
                  >
                    Book with {doctor.name.replace("Dr. ", "").split(" ")[0]}
                    <IconArrow className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                  </button>
                </div>
              </article>
            </Tilt>
          </motion.div>
        ))}
        </div>
      </div>

      <div className="shell mt-6 flex justify-center gap-1.5">
        {DOCTORS.map((doctor, index) => (
          <span
            key={doctor.name}
            className={`h-1 rounded-full transition-all duration-300 ${
              index === activeIndex ? "w-7 bg-gold-500" : "w-3 bg-mist-400/25"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
