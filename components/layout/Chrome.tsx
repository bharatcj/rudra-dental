"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { useBooking } from "@/components/booking/BookingProvider";
import {
  IconCalendar,
  IconChevron,
  IconPhone,
  IconWhatsapp,
} from "@/components/ui/Icons";
import { LogoLockup } from "@/components/ui/Logo";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 34,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[130] h-[2px] origin-left bg-gradient-to-r from-gold-700 via-gold-200 to-gold-500"
      aria-hidden="true"
    />
  );
}

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setDone(true), 1250);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = done ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          className="fixed inset-0 z-[300] grid place-items-center bg-ink-950"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <span className="absolute inset-0 -m-10 rounded-full bg-gold-500/14" />
              <LogoLockup className="relative h-28 w-24" priority sizes="120px" />
            </motion.div>
            <div className="h-px w-40 overflow-hidden bg-mist-400/15">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-full w-full bg-gradient-to-r from-transparent via-gold-300 to-gold-500"
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let queued = false;
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        setVisible(window.scrollY > 600);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="surface fixed right-5 bottom-[9.5rem] z-[110] grid h-11 w-11 place-items-center rounded-full text-gold-300 transition hover:border-gold-500/40 hover:text-gold-100 lg:bottom-24"
        >
          <IconChevron className="h-4 w-4 rotate-180" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}

export function MobileDock() {
  const { openBooking } = useBooking();
  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-gold-500/15 bg-ink-950 px-3 py-2.5 lg:hidden">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${SITE.phone}`}
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gold-500/25 py-3 text-sm font-medium text-gold-200"
        >
          <IconPhone className="h-4 w-4" />
          Call
        </a>
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border border-gold-500/30 py-3 text-sm font-medium text-gold-200"
        >
          <IconWhatsapp className="h-4 w-4" />
          Chat
        </a>
        <button
          type="button"
          onClick={() => openBooking("mobile-dock")}
          className="flex flex-[1.4] items-center justify-center gap-2 rounded-full bg-gold-sheen py-3 text-sm font-semibold text-ink-950"
        >
          <IconCalendar className="h-4 w-4" />
          Book now
        </button>
      </div>
    </div>
  );
}

export function FloatingWhatsapp() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
        "Hi Rudra Dental, I would like to know more about your treatments.",
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Rudra Dental on WhatsApp"
      className="anim-pulse-ring fixed right-5 bottom-24 z-[110] grid h-12 w-12 place-items-center rounded-full bg-gold-sheen text-ink-950 shadow-[0_14px_36px_-10px_rgba(195,150,69,0.75)] transition hover:scale-105 lg:bottom-6 lg:h-14 lg:w-14"
    >
      <IconWhatsapp className="h-6 w-6 lg:h-7 lg:w-7" />
    </a>
  );
}

