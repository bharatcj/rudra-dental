"use client";

import Link from "next/link";
import { TREATMENTS } from "@/lib/treatments";
import { useBooking } from "@/components/booking/BookingProvider";
import { Stagger, StaggerItem } from "@/components/ui/Motion";
import { SERVICE_ICONS, IconArrow } from "@/components/ui/Icons";

export default function TreatmentGrid() {
  const { openBooking } = useBooking();

  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {TREATMENTS.map((treatment, index) => {
        const Icon = SERVICE_ICONS[treatment.icon];
        return (
          <StaggerItem key={treatment.slug} className="h-full">
            <div className="surface group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 transition duration-500 hover:border-gold-500/40 sm:p-7">
              <span className="pointer-events-none absolute top-6 right-7 font-[family-name:var(--font-mark)] text-[2.6rem] leading-none text-gold-500/10 transition duration-500 group-hover:text-gold-500/22">
                {`${index + 1}`.padStart(2, "0")}
              </span>

              <span className="relative mb-6 inline-grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-gold-500/25 bg-gradient-to-br from-gold-500/18 to-transparent text-gold-300 transition duration-500 group-hover:border-gold-400/60">
                <Icon className="h-7 w-7" />
              </span>

              <h2 className="display relative pr-12 text-[1.4rem] text-mist-50">
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="transition hover:text-gold-100"
                >
                  {treatment.name}
                </Link>
              </h2>
              <p className="relative mt-3 flex-1 text-sm leading-relaxed text-mist-300">
                {treatment.summary}
              </p>

              <div className="relative mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
                <button
                  type="button"
                  onClick={() =>
                    openBooking(treatment.slug, { treatment: treatment.slug })
                  }
                  className="inline-flex min-h-11 items-center rounded-full bg-gold-sheen px-5 text-[0.72rem] font-semibold tracking-[0.18em] text-ink-950 uppercase transition hover:shadow-[0_12px_32px_-12px_rgba(195,150,69,0.85)]"
                >
                  Book
                </button>
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="inline-flex min-h-11 items-center gap-2 text-[0.72rem] font-semibold tracking-[0.18em] text-gold-400 uppercase transition hover:text-gold-200"
                >
                  Read more
                  <IconArrow className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
