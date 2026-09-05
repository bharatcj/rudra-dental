"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { GALLERY, SITE, type GalleryItem } from "@/lib/site";
import { useBooking } from "@/components/booking/BookingProvider";
import { Reveal } from "@/components/ui/Motion";
import { LogoMark } from "@/components/ui/Logo";
import {
  IconArrow,
  IconChevron,
  IconClose,
  IconPin,
} from "@/components/ui/Icons";


type TileEntry = { item: GalleryItem; index: number };

const GAP_WEIGHT = 0.04;

function balance(items: GalleryItem[], columns: number): TileEntry[][] {
  const weight = items.map((item) => item.height / item.width + GAP_WEIGHT);
  const lanes: number[][] = Array.from({ length: columns }, () => []);
  const totals: number[] = Array.from({ length: columns }, () => 0);

  items
    .map((_, index) => index)
    .sort((a, b) => weight[b] - weight[a])
    .forEach((index) => {
      let target = 0;
      for (let lane = 1; lane < columns; lane += 1) {
        if (totals[lane] < totals[target]) target = lane;
      }
      lanes[target].push(index);
      totals[target] += weight[index];
    });

  const spread = () => Math.max(...totals) - Math.min(...totals);

  for (let pass = 0; pass < 40; pass += 1) {
    let gain = 1e-6;
    let best: [number, number, number, number] | null = null;
    const before = spread();

    for (let from = 0; from < columns; from += 1) {
      for (let to = 0; to < columns; to += 1) {
        if (from === to) continue;
        for (let i = 0; i < lanes[from].length; i += 1) {
          const moved = weight[lanes[from][i]];

          totals[from] -= moved;
          totals[to] += moved;
          const shifted = spread();
          totals[from] += moved;
          totals[to] -= moved;
          if (before - shifted > gain) {
            gain = before - shifted;
            best = [from, to, i, -1];
          }

          for (let j = 0; j < lanes[to].length; j += 1) {
            const delta = moved - weight[lanes[to][j]];
            totals[from] -= delta;
            totals[to] += delta;
            const swapped = spread();
            totals[from] += delta;
            totals[to] -= delta;
            if (before - swapped > gain) {
              gain = before - swapped;
              best = [from, to, i, j];
            }
          }
        }
      }
    }

    if (!best) break;

    const [from, to, i, j] = best;
    if (j < 0) {
      const [index] = lanes[from].splice(i, 1);
      lanes[to].push(index);
      totals[from] -= weight[index];
      totals[to] += weight[index];
    } else {
      const outgoing = lanes[from][i];
      const incoming = lanes[to][j];
      lanes[from][i] = incoming;
      lanes[to][j] = outgoing;
      totals[from] += weight[incoming] - weight[outgoing];
      totals[to] += weight[outgoing] - weight[incoming];
    }
  }

  return lanes.map((lane) =>
    lane
      .slice()
      .sort((a, b) => a - b)
      .map((index) => ({ item: items[index], index })),
  );
}


function Tile({
  item,
  index,
  onOpen,
}: {
  item: GalleryItem;
  index: number;
  onOpen: (index: number) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(index)}
      aria-label={`Open photo: ${item.caption}`}
      className="group relative block w-full overflow-hidden rounded-2xl border border-gold-500/14 bg-ink-800"
    >
      <Image
        src={item.src}
        alt={item.alt}
        width={item.width}
        height={item.height}
        quality={78}
        sizes="(max-width: 768px) 46vw, (max-width: 1280px) 31vw, 300px"
        className="w-full transition duration-700 group-hover:scale-[1.05]"
      />

      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/10 to-transparent opacity-70 transition duration-500 group-hover:opacity-95" />

      <span className="pointer-events-none absolute inset-3 opacity-0 transition duration-500 group-hover:opacity-100">
        <span className="absolute top-0 left-0 h-5 w-5 border-t border-l border-gold-300/80" />
        <span className="absolute top-0 right-0 h-5 w-5 border-t border-r border-gold-300/80" />
        <span className="absolute bottom-0 left-0 h-5 w-5 border-b border-l border-gold-300/80" />
        <span className="absolute right-0 bottom-0 h-5 w-5 border-r border-b border-gold-300/80" />
      </span>

      <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4">
        <span className="translate-y-1 text-left text-[0.78rem] font-medium tracking-wide text-mist-100 transition duration-500 group-hover:translate-y-0">
          {item.caption}
        </span>
        <span className="grid h-7 w-7 shrink-0 translate-y-2 place-items-center rounded-full border border-gold-400/50 bg-ink-950/70 text-gold-300 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <IconArrow className="h-3.5 w-3.5 -rotate-45" />
        </span>
      </span>
    </button>
  );
}

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const step = useCallback((delta: number) => {
    setActive((current) =>
      current === null ? null : (current + delta + GALLERY.length) % GALLERY.length,
    );
  }, []);

  useEffect(() => {
    if (active === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, step]);

  return (
    <section
      id="gallery"
      aria-label="Inside the Rudra Dental clinic"
      className="relative py-12 sm:py-14 lg:py-16"
    >
      <div className="shell">
        <div className="mb-9 flex flex-col gap-6 lg:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow">The Clinic</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-4 text-4xl text-mist-50 sm:text-5xl lg:text-[3.4rem]">
                Step <span className="text-gold-sheen">inside</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-mist-300">
                No stock photography. This is the actual clinic on Kamaraj Street,
                Anakaputhur, where every treatment happens.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.18} className="shrink-0">
            <a
              href={SITE.mapsShortLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2.5 rounded-full border border-gold-500/30 px-6 py-3.5 text-sm font-medium whitespace-nowrap text-gold-200 transition hover:border-gold-400/60 hover:bg-gold-500/10"
            >
              <IconPin className="h-4 w-4" />
              See it on Google Maps
              <IconArrow className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-3 md:hidden">
          {balance(GALLERY, 2).map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-3">
              {column.map((entry) => (
                <Tile
                  key={entry.item.src}
                  item={entry.item}
                  index={entry.index}
                  onOpen={setActive}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="hidden gap-3 md:grid md:grid-cols-3 xl:hidden">
          {balance(GALLERY, 3).map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-3">
              {column.map((entry) => (
                <Tile
                  key={entry.item.src}
                  item={entry.item}
                  index={entry.index}
                  onOpen={setActive}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="hidden gap-3 xl:grid xl:grid-cols-4">
          {balance(GALLERY, 4).map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-3">
              {column.map((entry) => (
                <Tile
                  key={entry.item.src}
                  item={entry.item}
                  index={entry.index}
                  onOpen={setActive}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {mounted
        ? createPortal(
            <AnimatePresence>
              {active !== null ? (
              <motion.div
                className="fixed inset-0 z-[220] flex items-center justify-center p-4 sm:p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                role="dialog"
                aria-modal="true"
                aria-label={GALLERY[active].caption}
              >
                <div
                  className="absolute inset-0 bg-ink-950/94 backdrop-blur-md"
                  onClick={() => setActive(null)}
                />
                <motion.div
                  initial={{ scale: 0.94, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.96, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 flex max-h-full w-full max-w-4xl flex-col"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-gold-500/25 bg-ink-900">
                    <Image
                      src={GALLERY[active].src}
                      alt={GALLERY[active].alt}
                      width={GALLERY[active].width}
                      height={GALLERY[active].height}
                      quality={86}
                      sizes="(max-width: 1024px) 92vw, 900px"
                      className="max-h-[62vh] w-full object-contain sm:max-h-[74vh]"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="text-sm text-mist-300">
                      <span className="text-gold-300">{GALLERY[active].caption}</span>
                      <span className="mx-2 text-mist-500">|</span>
                      {active + 1} of {GALLERY.length}
                    </p>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => step(-1)}
                        aria-label="Previous photo"
                        className="grid h-11 w-11 place-items-center rounded-full border border-gold-500/30 text-gold-200 transition hover:bg-gold-500/12"
                      >
                        <IconChevron className="h-4 w-4 rotate-90" />
                      </button>
                      <button
                        type="button"
                        onClick={() => step(1)}
                        aria-label="Next photo"
                        className="grid h-11 w-11 place-items-center rounded-full border border-gold-500/30 text-gold-200 transition hover:bg-gold-500/12"
                      >
                        <IconChevron className="h-4 w-4 -rotate-90" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setActive(null)}
                        aria-label="Close photo"
                        className="grid h-11 w-11 place-items-center rounded-full border border-gold-500/30 text-gold-200 transition hover:bg-gold-500 hover:text-ink-950"
                      >
                        <IconClose className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </section>
  );
}

export function Story() {
  const { openBooking } = useBooking();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const node = videoRef.current;
    if (!node) return;
    if (node.paused) {
      node.play();
      setPlaying(true);
    } else {
      node.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      id="story"
      aria-label="The Rudra Dental story"
      className="relative overflow-hidden py-12 sm:py-14 lg:py-16"
    >
      <div className="absolute inset-0 -z-10">
        <video
          className="hidden h-full w-full object-cover opacity-[0.14] lg:block"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/gallery/reception.jpg"
        >
          <source src="/media/loop-interior.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/70 to-ink-950" />
      </div>

      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="edge-gold relative overflow-hidden rounded-[1.6rem] p-2">
                <div className="relative overflow-hidden rounded-[1.1rem] bg-ink-950">
                  <video
                    ref={videoRef}
                    className="aspect-video w-full object-cover"
                    poster="/media/launch-2023-poster.jpg"
                    preload="metadata"
                    playsInline
                    controls={playing}
                    onEnded={() => setPlaying(false)}
                    onPause={() => setPlaying(false)}
                  >
                    <source src="/media/launch-2023.mp4" type="video/mp4" />
                  </video>

                  {!playing ? (
                    <button
                      type="button"
                      onClick={toggle}
                      aria-label="Play the Rudra Dental launch film"
                      className="group absolute inset-0 grid place-items-center bg-ink-950/45 transition hover:bg-ink-950/30"
                    >
                      <span className="anim-pulse-ring grid h-16 w-16 place-items-center rounded-full bg-gold-sheen text-ink-950 transition group-hover:scale-105">
                        <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6" fill="currentColor">
                          <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.3-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
                        </svg>
                      </span>
                    </button>
                  ) : null}
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between px-2">
                <span className="text-[0.75rem] tracking-[0.2em] text-mist-400 uppercase">
                  Launch film
                </span>
                <span className="text-[0.75rem] tracking-[0.2em] text-gold-400 uppercase">
                  Anakaputhur, 2023
                </span>
              </div>

              <div className="absolute -top-8 -left-8 -z-10 h-32 w-32 rounded-full bg-[radial-gradient(circle,rgba(195,150,69,0.21),transparent_70%)]" />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">Our Story</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="display mt-4 text-4xl text-mist-50 sm:text-5xl lg:text-[3.3rem]">
                Two years of{" "}
                <span className="text-gold-sheen">brighter smiles</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-6 leading-relaxed text-mist-300">
                Dr. Gopinath opened Rudra Dental on Kamaraj Street in Anakaputhur with
                one idea. Dentistry should not be something people postpone out of fear or
                confusion about cost.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 leading-relaxed text-mist-300">
                Two years and 275 five star reviews later, that idea still runs the
                clinic. Five dentists share one operatory floor, three of them
                specialists in oral surgery, prosthodontics and orthodontics, so a case
                that starts as a filling and turns out to need a root canal, braces or
                surgery never leaves the building.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => openBooking("story")}
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gold-sheen px-7 py-3.5 text-sm font-semibold text-ink-950 transition hover:shadow-[0_16px_44px_-12px_rgba(195,150,69,0.75)]"
                >
                                    <span className="relative">Book your visit</span>
                  <IconArrow className="relative h-4 w-4 transition group-hover:translate-x-1" />
                </button>
                <a
                  href={SITE.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full border border-gold-500/30 px-6 py-3.5 text-sm font-medium text-gold-200 transition hover:bg-gold-500/10"
                >
                  <LogoMark className="h-5 w-4" sizes="24px" />
                  {SITE.social.instagramHandle}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
