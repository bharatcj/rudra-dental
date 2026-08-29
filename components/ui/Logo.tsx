import Image from "next/image";

type MarkProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function LogoMark({ className, priority = false, sizes = "56px" }: MarkProps) {
  return (
    <span className={`relative block ${className ?? "h-10 w-8"}`}>
      <Image
        src="/brand/logo-mark.png"
        alt=""
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain"
      />
    </span>
  );
}

export function LogoLockup({
  className,
  priority = false,
  sizes = "220px",
}: MarkProps) {
  return (
    <span className={`relative block ${className ?? "h-24 w-20"}`}>
      <Image
        src="/brand/logo-full.png"
        alt="Rudra Dental"
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain"
      />
    </span>
  );
}

export function LogoWordmark({
  className,
  priority = false,
  sizes = "180px",
}: MarkProps) {
  return (
    <span className={`relative block ${className ?? "h-4 w-40"}`}>
      <Image
        src="/brand/logo-wordmark.png"
        alt="Rudra Dental"
        fill
        priority={priority}
        sizes={sizes}
        className="object-contain"
      />
    </span>
  );
}

export default function BrandLogo({
  className,
  markClassName = "h-11 w-9",
  priority = false,
}: {
  className?: string;
  markClassName?: string;
  priority?: boolean;
}) {
  return (
    <span className={`flex items-center gap-3 ${className ?? ""}`}>
      <LogoMark className={markClassName} priority={priority} sizes="64px" />
      <span className="leading-none">
        <span className="block font-[family-name:var(--font-mark)] text-[1.02rem] font-bold tracking-[0.2em] text-gold-sheen">
          RUDRA
        </span>
        <span className="mt-1 block text-[0.58rem] font-medium tracking-[0.46em] text-mist-400 uppercase">
          Dental
        </span>
      </span>
    </span>
  );
}
