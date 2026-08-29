import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ToothMark({ className, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 48 56" className={className} aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="rdToothGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fff7d6" />
          <stop offset="30%" stopColor="#f0d783" />
          <stop offset="60%" stopColor="#d4af37" />
          <stop offset="100%" stopColor="#8a6b1c" />
        </linearGradient>
      </defs>
      <path
        d="M24 4.5c-4.6 0-6.9 2.1-11 2.1C7.6 6.6 4 10 4 17c0 4.7 1.4 8.3 2.5 12.3.9 3.4 1.5 6.8 1.9 10.6.4 3.4 1.3 6.1 3.7 6.1 2.6 0 3.3-2.9 3.9-7 .6-4 1.3-8.3 3.3-10.4.9-.9 2-1.4 3.3-1.4h2.8c1.3 0 2.4.5 3.3 1.4 2 2.1 2.7 6.4 3.3 10.4.6 4.1 1.3 7 3.9 7 2.4 0 3.3-2.7 3.7-6.1.4-3.8 1-7.2 1.9-10.6C42.6 25.3 44 21.7 44 17c0-7-3.6-10.4-9-10.4-4.1 0-6.4-2.1-11-2.1Z"
        fill="none"
        stroke="url(#rdToothGrad)"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 33.5c.4 3.4.9 6.9 1.2 9.6"
        stroke="url(#rdToothGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        opacity="0.55"
      />
    </svg>
  );
}

export function IconRct(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <path d="M16 4c-3 0-4.4 1.4-7 1.4C5.6 5.4 3.5 7.6 3.5 12c0 3 .9 5.3 1.6 7.8.6 2.2 1 4.4 1.2 6.8.3 2.2.9 3.9 2.4 3.9 1.7 0 2.1-1.9 2.5-4.5.4-2.6.9-5.3 2.1-6.7.6-.6 1.3-.9 2.1-.9h1.2c.8 0 1.5.3 2.1.9 1.2 1.4 1.7 4.1 2.1 6.7.4 2.6.8 4.5 2.5 4.5 1.5 0 2.1-1.7 2.4-3.9.2-2.4.6-4.6 1.2-6.8.7-2.5 1.6-4.8 1.6-7.8 0-4.4-2.1-6.6-5.5-6.6-2.6 0-4 -1.4-7-1.4Z" />
      <path d="M16 11v9" />
      <path d="M13.4 13.6 16 11l2.6 2.6" />
    </svg>
  );
}

export function IconImplant(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <path d="M9 7.5h14" />
      <path d="M10.5 11.5h11" />
      <path d="M16 11.5v15" />
      <path d="m12.6 15.4 6.8 1.4" />
      <path d="m12.6 19.4 6.8 1.4" />
      <path d="M13.6 23.6 16 27l2.4-3.4" />
      <path d="M11.6 4.2c1.6-1 3-1.2 4.4-1.2s2.8.2 4.4 1.2" />
    </svg>
  );
}

export function IconOrtho(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <path d="M4 12c0-2.2 1.5-3.6 4-3.6 2.3 0 3.3 1.1 4.6 1.1h6.8c1.3 0 2.3-1.1 4.6-1.1 2.5 0 4 1.4 4 3.6 0 5-3.8 11.6-12 11.6S4 17 4 12Z" />
      <path d="M3.5 14.5h25" />
      <path d="M10 13v3.4" />
      <path d="M16 13.2v4" />
      <path d="M22 13v3.4" />
    </svg>
  );
}

export function IconExtraction(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <path d="M13 5.6c-2.2 0-3.3 1-5.2 1-2.5 0-4.1 1.6-4.1 4.9 0 2.2.7 3.9 1.2 5.8.5 1.6.8 3.3.9 5 .2 1.6.7 2.9 1.8 2.9 1.3 0 1.6-1.4 1.9-3.3.3-1.9.7-3.9 1.6-4.9.4-.4 1-.7 1.6-.7h.9c.6 0 1.2.3 1.6.7.9 1 1.3 3 1.6 4.9.3 1.9.6 3.3 1.9 3.3" />
      <path d="m21 20 7-7" />
      <path d="m19.4 26.6 3-3" />
      <path d="M25.4 8.6 28 6" />
      <path d="m18.6 15.4 8-8" />
    </svg>
  );
}

export function IconLaser(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <path d="M17 3 6 18h8l-1 11 11-15h-8l1-11Z" />
      <path d="M27 8h2.5" />
      <path d="M25.5 13.5H29" />
      <path d="M2.5 21H5" />
      <path d="M3 26h3.5" />
    </svg>
  );
}

export function IconKids(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <circle cx="16" cy="16" r="12.5" />
      <path d="M11 13.5h.02" strokeWidth="2.6" />
      <path d="M21 13.5h.02" strokeWidth="2.6" />
      <path d="M10.5 19.5c1.4 2.2 3.3 3.3 5.5 3.3s4.1-1.1 5.5-3.3" />
      <path d="M10.5 19.5h11" />
    </svg>
  );
}

export function IconFullMouth(props: IconProps) {
  return (
    <svg viewBox="0 0 32 32" {...base} {...props}>
      <path d="M3.5 15.5c0-4.4 2.4-7.5 6-7.5 2.4 0 4 1.3 6.5 1.3s4.1-1.3 6.5-1.3c3.6 0 6 3.1 6 7.5 0 6-5.6 11.5-12.5 11.5S3.5 21.5 3.5 15.5Z" />
      <path d="M12 9.4v16.8" />
      <path d="M20 9.4v16.8" />
      <path d="M4.4 18.5h23.2" />
      <path d="M16 4.5v4.6" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M15.5 21c-6.6 0-12-5.4-12-12V6.6c0-1.1.9-2 2-2h2.1c.9 0 1.7.6 1.9 1.5l.7 2.6c.2.8-.1 1.6-.8 2l-1.3.8a12.4 12.4 0 0 0 5.4 5.4l.8-1.3c.4-.7 1.2-1 2-.8l2.6.7c.9.2 1.5 1 1.5 1.9V19c0 1.1-.9 2-2 2h-2.9Z" />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="m3.5 6.5 7.3 5.4c.7.5 1.7.5 2.4 0l7.3-5.4" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 21.5s7.2-6 7.2-11.4A7.2 7.2 0 0 0 4.8 10c0 5.4 7.2 11.5 7.2 11.5Z" />
      <circle cx="12" cy="10" r="2.7" />
    </svg>
  );
}

export function IconClock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.4 2" />
    </svg>
  );
}

export function IconWhatsapp(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.17c-.25-.13-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.13.17 1.73 2.64 4.19 3.7.59.26 1.04.41 1.4.52.59.19 1.12.16 1.55.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.12-.23-.18-.48-.31Z" />
    </svg>
  );
}

export function IconFacebook(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.8 3.8 0 0 1-1.38-.9c-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 1.98c-3.15 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17-.06 1.24-.07 1.59-.07 4.74s.01 3.5.07 4.74c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.59.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.59.07-4.74s-.01-3.5-.07-4.74c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4-1.24-.06-1.59-.07-4.74-.07Zm0 3.37a4.49 4.49 0 1 1 0 8.98 4.49 4.49 0 0 1 0-8.98Zm0 7.4a2.91 2.91 0 1 0 0-5.82 2.91 2.91 0 0 0 0 5.82Zm5.72-7.6a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Z" />
    </svg>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function IconChevron(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function IconPlus(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="m6 6 12 12" />
      <path d="m18 6-12 12" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  );
}

export function IconShield(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 2.8 4.5 5.9v5.7c0 4.6 3.1 8.4 7.5 9.6 4.4-1.2 7.5-5 7.5-9.6V5.9L12 2.8Z" />
      <path d="m8.8 12 2.3 2.3 4.1-4.6" />
    </svg>
  );
}

export function IconSparkle(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M12 3.2 13.9 9l5.9 1.9-5.9 1.9L12 18.7l-1.9-5.9L4.2 11 10.1 9 12 3.2Z" />
      <path d="M19 3.5v3" />
      <path d="M17.5 5h3" />
    </svg>
  );
}

export function IconQuote(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M9.4 5.6C6.2 7 4.2 10 4.2 13.6c0 2.9 1.7 4.8 4.1 4.8 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .1.4-1.6 1.9-3.3 3.8-4.2l-2.2-1.5Zm9.5 0C15.7 7 13.7 10 13.7 13.6c0 2.9 1.7 4.8 4.1 4.8 2.2 0 3.8-1.6 3.8-3.7 0-2-1.4-3.5-3.3-3.5-.4 0-.8.1-1 .1.4-1.6 1.9-3.3 3.8-4.2l-2.2-1.5Z" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2.6l2.9 5.88 6.49.95-4.7 4.58 1.11 6.46L12 17.42 6.2 20.47l1.11-6.46-4.7-4.58 6.49-.95L12 2.6Z" />
    </svg>
  );
}

export function IconPlay(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.3-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
    </svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h10" />
    </svg>
  );
}

export function IconCalendar(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M3.5 9.5h17" />
      <path d="M8 3v4" />
      <path d="M16 3v4" />
    </svg>
  );
}

export function IconMicroscope(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" {...base} {...props}>
      <path d="M7 20h13" />
      <path d="M9.5 20a5.5 5.5 0 0 0 5.5-5.5" />
      <path d="M8 15h3" />
      <path d="M9.5 15V7.8" />
      <rect x="7.6" y="3.5" width="3.9" height="4.3" rx="1.9" />
      <path d="M13 6.5h2.2a3.8 3.8 0 0 1 3.8 3.8v1.2" />
    </svg>
  );
}

export const SERVICE_ICONS: Record<
  string,
  (props: IconProps) => React.JSX.Element
> = {
  rct: IconRct,
  implant: IconImplant,
  ortho: IconOrtho,
  extraction: IconExtraction,
  laser: IconLaser,
  kids: IconKids,
  fullmouth: IconFullMouth,
};
