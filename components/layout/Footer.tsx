"use client";

import Link from "next/link";
import { SITE, FOOTER_SERVICES, SERVICE_AREAS } from "@/lib/site";
import { useBooking } from "@/components/booking/BookingProvider";
import {
  IconClock,
  IconFacebook,
  IconInstagram,
  IconMail,
  IconPhone,
  IconPin,
  IconPlus,
  IconWhatsapp,
} from "@/components/ui/Icons";
import BrandLogo from "@/components/ui/Logo";

const OTHER_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Our Team", href: "/#doctors" },
  { label: "Latest Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

export default function Footer() {
  const { openBooking } = useBooking();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gold-500/12 bg-ink-900/60 pb-24 lg:pb-0">
      <div className="absolute -top-32 left-1/4 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(195,150,69,0.11),transparent_70%)]" />

      <div className="shell relative grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-8 lg:py-20">
        <div>
          <Link href="/" className="inline-flex" aria-label="Rudra Dental home">
            <BrandLogo markClassName="h-14 w-11" />
          </Link>

          <p className="mt-6 max-w-sm text-sm leading-relaxed text-mist-400">
            The best dental clinic in Anakaputhur, serving Pallavaram, Pammal,
            Chromepet, Kundrathur, Tambaram and greater Chennai with comprehensive
            dental care for adults and children.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rudra Dental on Facebook"
              className="grid h-10 w-10 place-items-center rounded-full border border-gold-500/20 text-mist-300 transition hover:border-gold-500/60 hover:bg-gold-500 hover:text-ink-950"
            >
              <IconFacebook className="h-4 w-4" />
            </a>
            <a
              href={SITE.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rudra Dental on Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-gold-500/20 text-mist-300 transition hover:border-gold-500/60 hover:bg-gold-500 hover:text-ink-950"
            >
              <IconInstagram className="h-4 w-4" />
            </a>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Rudra Dental on WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full border border-gold-500/20 text-mist-300 transition hover:border-gold-500/60 hover:bg-gold-500 hover:text-ink-950"
            >
              <IconWhatsapp className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => openBooking("footer")}
            className="mt-7 rounded-full bg-gold-sheen px-6 py-3 text-sm font-semibold text-ink-950 transition hover:shadow-[0_12px_32px_-10px_rgba(195,150,69,0.8)]"
          >
            Book appointment
          </button>
        </div>

        <div>
          <p className="font-[family-name:var(--font-mark)] text-sm tracking-[0.2em] text-gold-300 uppercase">
            Other Links
          </p>
          <ul className="mt-6 space-y-3">
            {OTHER_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-mist-400 transition hover:text-gold-200"
                >
                  <IconPlus className="h-3 w-3 text-gold-500/60 transition group-hover:rotate-90 group-hover:text-gold-400" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-[family-name:var(--font-mark)] text-sm tracking-[0.2em] text-gold-300 uppercase">
            Our Services
          </p>
          <ul className="mt-6 space-y-3">
            {FOOTER_SERVICES.map((service) => (
              <li key={service}>
                <Link
                  href="/treatments"
                  className="group flex items-start gap-2 text-sm text-mist-400 transition hover:text-gold-200"
                >
                  <IconPlus className="mt-1 h-3 w-3 shrink-0 text-gold-500/60 transition group-hover:rotate-90 group-hover:text-gold-400" />
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-[family-name:var(--font-mark)] text-sm tracking-[0.2em] text-gold-300 uppercase">
            Contact Us
          </p>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold-500/20 text-gold-400">
                <IconClock className="h-4 w-4" />
              </span>
              <span className="text-mist-400">
                Monday - Saturday
                <br />
                9:00am - 9:00pm
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold-500/20 text-gold-400">
                <IconPin className="h-4 w-4" />
              </span>
              <address className="not-italic">
                <a
                  href={SITE.mapsShortLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-mist-400 transition hover:text-gold-200"
                >
                  {SITE.address.shortDisplay}
                </a>
              </address>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold-500/20 text-gold-400">
                <IconPhone className="h-4 w-4" />
              </span>
              <a
                href={`tel:${SITE.phone}`}
                className="text-mist-400 transition hover:text-gold-200"
              >
                {SITE.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold-500/20 text-gold-400">
                <IconMail className="h-4 w-4" />
              </span>
              <a
                href={`mailto:${SITE.email}`}
                className="text-mist-400 transition hover:text-gold-200"
              >
                {SITE.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell relative border-t border-gold-500/10 py-6">
        <p className="text-[0.75rem] leading-relaxed text-mist-400/70">
          {SERVICE_AREAS.map((area) => `Dental clinic in ${area}`).join(" | ")}
        </p>
      </div>

      <div className="shell relative flex flex-col items-center justify-between gap-4 border-t border-gold-500/10 py-6 sm:flex-row">
        <p className="text-xs text-mist-400">
          &copy; {year} All Rights Reserved by {SITE.name}
        </p>
        <div className="flex items-center gap-5 text-xs text-mist-400">
          <Link href="/privacy-policy" className="transition hover:text-gold-200">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
