"use client";

import Link from "next/link";
import { AREAS } from "@/lib/areas";
import { useBooking } from "@/components/booking/BookingProvider";
import { Stagger, StaggerItem } from "@/components/ui/Motion";
import { IconArrow, IconPin } from "@/components/ui/Icons";

export default function AreaGrid() {
  const { openBooking } = useBooking();

  return (
    <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {AREAS.map((area) => (
        <StaggerItem key={area.slug} className="h-full">
          <div className="surface group relative flex h-full flex-col rounded-3xl p-6 transition duration-500 hover:border-gold-500/40 sm:p-7">
            <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-gold-500/25 bg-gradient-to-br from-gold-500/18 to-transparent text-gold-300">
              <IconPin className="h-5 w-5" />
            </span>

            <h2 className="display mt-5 text-[1.3rem] text-mist-50">
              <Link
                href={`/dental-clinic/${area.slug}`}
                className="transition hover:text-gold-100"
              >
                {area.name}
              </Link>
            </h2>
            <p className="mt-1 text-xs tracking-[0.12em] text-gold-400 uppercase">
              {area.distance}, {area.travel}
            </p>
            <p className="mt-3 max-w-[52ch] flex-1 text-sm leading-relaxed text-mist-300">
              {area.why}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2">
              <button
                type="button"
                onClick={() => openBooking(`area-card-${area.slug}`)}
                className="inline-flex min-h-11 items-center rounded-full bg-gold-sheen px-5 text-[0.72rem] font-semibold tracking-[0.18em] text-ink-950 uppercase transition hover:shadow-[0_12px_32px_-12px_rgba(195,150,69,0.85)]"
              >
                Book
              </button>
              <Link
                href={`/dental-clinic/${area.slug}`}
                className="inline-flex min-h-11 items-center gap-2 text-[0.72rem] font-semibold tracking-[0.18em] text-gold-400 uppercase transition hover:text-gold-200"
              >
                Read more
                <span className="sr-only"> about our {area.name} patients</span>
                <IconArrow className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
