"use client";

import { SITE, SERVICE_AREAS } from "@/lib/site";
import { useBooking } from "@/components/booking/BookingProvider";
import { Reveal } from "@/components/ui/Motion";
import {
  IconArrow,
  IconClock,
  IconMail,
  IconPhone,
  IconPin,
  IconWhatsapp,
} from "@/components/ui/Icons";

export default function Contact() {
  const { openBooking } = useBooking();

  const cards = [
    {
      icon: IconPhone,
      label: "Call the clinic",
      value: SITE.phoneDisplay,
      href: `tel:${SITE.phone}`,
      external: false,
    },
    {
      icon: IconWhatsapp,
      label: "WhatsApp us",
      value: "Chat with the front desk",
      href: `https://wa.me/${SITE.whatsapp}`,
      external: true,
    },
    {
      icon: IconMail,
      label: "Email",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      external: false,
    },
    {
      icon: IconPin,
      label: "Find us",
      value: SITE.address.shortDisplay,
      href: SITE.mapsShortLink,
      external: true,
    },
  ];

  return (
    <section id="contact" aria-label="Contact and find Rudra Dental" className="relative py-24 lg:py-32">
      <div className="shell">
        <div className="mb-14 max-w-2xl">
          <Reveal>
            <p className="eyebrow">Find Us</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-4 text-4xl text-mist-50 sm:text-5xl lg:text-[3.4rem]">
              Come see us in <span className="text-gold-sheen anim-sheen">Anakaputhur</span>
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mt-5 text-mist-300">
              Minutes from Pallavaram, Pammal, Chromepet and Kundrathur, with parking
              right outside the clinic.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1fr_1.25fr]">
          <div className="flex flex-col gap-4">
            <Reveal>
              <div className="surface rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-500/25 bg-gold-500/10 text-gold-300">
                    <IconClock className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs tracking-[0.16em] text-mist-400 uppercase">
                      Opening hours
                    </p>
                    <p className="mt-1.5 text-lg font-medium text-mist-50">
                      Monday to Sunday
                    </p>
                    <p className="text-sm text-gold-200">9:00 AM to 9:00 PM</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {cards.map((card, index) => (
                <Reveal key={card.label} delay={0.05 + index * 0.05}>
                  <a
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="group surface flex items-center gap-4 rounded-2xl p-5 transition hover:border-gold-500/35"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-gold-500/25 bg-gold-500/10 text-gold-300 transition group-hover:bg-gold-500 group-hover:text-ink-950">
                      <card.icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs tracking-[0.16em] text-mist-400 uppercase">
                        {card.label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-medium text-mist-50">
                        {card.value}
                      </span>
                    </span>
                    <IconArrow className="h-4 w-4 shrink-0 text-gold-400 transition group-hover:translate-x-1" />
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.25}>
              <button
                type="button"
                onClick={() => openBooking("contact")}
                className="group w-full rounded-2xl bg-gold-sheen px-6 py-4 text-sm font-semibold text-ink-950 transition hover:shadow-[0_16px_40px_-12px_rgba(195,150,69,0.8)]"
              >
                Book your appointment
              </button>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="surface relative h-full min-h-[26rem] overflow-hidden rounded-3xl p-1.5">
              <iframe
                src={SITE.mapEmbed}
                title="Rudra Dental clinic location on Google Maps"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-[25rem] w-full rounded-[1.35rem] border-0 grayscale-[0.35] transition duration-700 hover:grayscale-0"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 rounded-2xl border border-gold-500/12 bg-white/[0.02] px-6 py-6">
            <p className="text-xs tracking-[0.16em] text-gold-400 uppercase">
              Areas we serve
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {SERVICE_AREAS.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-mist-400/12 px-3.5 py-1.5 text-xs text-mist-300 transition hover:border-gold-500/30 hover:text-gold-200"
                >
                  Dental clinic in {area}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
