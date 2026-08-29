import Link from "next/link";
import { IconArrow, IconPhone, ToothMark } from "@/components/ui/Icons";
import { SITE } from "@/lib/site";

export default function NotFound() {
  return (
    <div className="relative grid min-h-screen place-items-center overflow-hidden px-6 text-center">
      <div className="absolute top-1/4 left-1/2 -z-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />
      <div>
        <ToothMark className="anim-float mx-auto h-16 w-auto" />
        <p className="eyebrow mt-8">Page not found</p>
        <h1 className="display mt-4 text-5xl text-mist-50 sm:text-7xl">
          <span className="text-gold-gradient">404</span>
        </h1>
        <p className="mx-auto mt-5 max-w-md text-mist-300">
          This page has been extracted. Head back to the clinic and we will take care of
          the rest.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-600 px-7 py-3.5 text-sm font-semibold text-ink-900"
          >
            Back to home
            <IconArrow className="h-4 w-4 transition group-hover:translate-x-1" />
          </Link>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2.5 rounded-full border border-gold-500/25 px-6 py-3.5 text-sm text-gold-100 transition hover:bg-gold-500/10"
          >
            <IconPhone className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
