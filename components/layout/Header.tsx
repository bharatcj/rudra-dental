"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { useBooking } from "@/components/booking/BookingProvider";
import {
  IconClose,
  IconFacebook,
  IconInstagram,
  IconMail,
  IconMenu,
  IconPhone,
  IconWhatsapp,
} from "@/components/ui/Icons";
import BrandLogo, { LogoMark } from "@/components/ui/Logo";
import { StatusInline, StatusPill } from "@/components/ui/ClinicStatus";

const NAV = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Clinic", href: "#gallery" },
  { label: "Doctors", href: "#doctors" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const { openBooking } = useBooking();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useMotionValueEvent(scrollY, "change", (value) => {
    setScrolled(value > 40);
  });

  useEffect(() => {
    const sections = NAV.map((item) => document.querySelector(item.href)).filter(
      Boolean,
    ) as Element[];
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="relative z-50 hidden border-b border-gold-500/10 bg-ink-950/85 backdrop-blur lg:block">
        <div className="shell flex h-11 items-center justify-between text-xs">
          <div className="flex items-center gap-6 text-mist-300">
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-2 py-2 transition hover:text-gold-300"
            >
              <IconMail className="h-3.5 w-3.5" />
              {SITE.email}
            </a>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 py-2 transition hover:text-gold-300"
            >
              <IconPhone className="h-3.5 w-3.5" />
              {SITE.phoneDisplay}
            </a>
            <StatusInline />
          </div>
          <div className="flex items-center gap-3">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rudra Dental on Facebook"
              className="p-2 text-mist-400 transition hover:text-gold-300"
            >
              <IconFacebook className="h-4 w-4" />
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rudra Dental on Instagram"
              className="p-2 text-mist-400 transition hover:text-gold-300"
            >
              <IconInstagram className="h-4 w-4" />
            </a>
            <span className="h-3 w-px bg-mist-400/20" />
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 py-2 text-mist-400 transition hover:text-gold-300"
            >
              <IconWhatsapp className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-gold-500/12 bg-ink-950/90 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-[var(--header-h)] items-center justify-between gap-6">
          <Link href="/" aria-label="Rudra Dental home">
            <BrandLogo markClassName="h-11 w-9 shrink-0" priority />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm transition ${
                  active === item.href
                    ? "text-gold-200"
                    : "text-mist-300 hover:text-mist-50"
                }`}
              >
                {active === item.href ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-gold-500/25 bg-gold-500/10"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span className="relative">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${SITE.phone}`}
              className="hidden items-center gap-2 rounded-full border border-gold-500/25 px-4 py-2.5 text-sm text-gold-200 transition hover:bg-gold-500/10 sm:inline-flex"
            >
              <IconPhone className="h-4 w-4" />
              Call now
            </a>
            <button
              type="button"
              onClick={() => openBooking("header")}
              className="group relative hidden overflow-hidden rounded-full bg-gold-sheen px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:shadow-[0_10px_30px_-10px_rgba(195,150,69,0.75)] sm:inline-flex"
            >
              <span className="shimmer-line" />
              <span className="relative">Book appointment</span>
            </button>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="grid h-10 w-10 place-items-center rounded-full border border-gold-500/25 text-gold-200 lg:hidden"
            >
              <IconMenu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            className="fixed inset-0 z-[120] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className="absolute inset-0 bg-ink-950/92 backdrop-blur-lg"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="surface absolute top-0 right-0 flex h-full w-[86%] max-w-sm flex-col border-l border-gold-500/20 p-6"
              aria-label="Mobile"
            >
              <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <LogoMark className="h-10 w-8" sizes="48px" />
                  <span className="font-[family-name:var(--font-mark)] text-sm tracking-[0.2em] text-gold-sheen">
                    RUDRA DENTAL
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="grid h-10 w-10 place-items-center rounded-full border border-gold-500/25 text-gold-200"
                >
                  <IconClose className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {NAV.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + index * 0.05, duration: 0.4 }}
                    className="display border-b border-gold-500/10 py-4 text-2xl text-mist-100 transition hover:text-gold-300"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto space-y-3 pt-8">
                <button
                  type="button"
                  onClick={() => {
                    setMenuOpen(false);
                    openBooking("mobile-menu");
                  }}
                  className="w-full rounded-full bg-gold-sheen py-3.5 text-sm font-semibold text-ink-950"
                >
                  Book appointment
                </button>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-gold-500/25 py-3.5 text-sm text-gold-200"
                >
                  <IconPhone className="h-4 w-4" />
                  {SITE.phoneDisplay}
                </a>
                <div className="flex justify-center pt-1">
                  <StatusPill />
                </div>
                <div className="flex items-center justify-center gap-4 pt-2">
                  <a
                    href={SITE.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="text-mist-400 transition hover:text-gold-300"
                  >
                    <IconFacebook className="h-5 w-5" />
                  </a>
                  <a
                    href={SITE.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="text-mist-400 transition hover:text-gold-300"
                  >
                    <IconInstagram className="h-5 w-5" />
                  </a>
                  <a
                    href={`https://wa.me/${SITE.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="text-mist-400 transition hover:text-gold-300"
                  >
                    <IconWhatsapp className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
