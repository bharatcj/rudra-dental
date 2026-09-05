"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type RevealTag = "div" | "section" | "article" | "li" | "span" | "p";

export function Reveal({
  children,
  delay = 0,
  y = 26,
  className,
  as = "div",
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: RevealTag;
  once?: boolean;
}) {
  const Tag = as;
  return <Tag className={className}>{children}</Tag>;
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function SplitHeading({
  text,
  className,
  trailingSpace = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  trailingSpace?: boolean;
}) {
  return (
    <span className={className} style={{ display: "inline-block" }}>
      {trailingSpace ? `${text} ` : text}
    </span>
  );
}

export function Counter({
  to,
  suffix = "",
  duration = 2000,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let started = false;

    const play = () => {
      if (started) return;
      started = true;
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setValue(Math.round(eased * to));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        play();
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function Magnetic({
  children,
  strength = 0.28,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: sx, y: sy, display: "inline-block" }}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        x.set((event.clientX - (rect.left + rect.width / 2)) * strength);
        y.set((event.clientY - (rect.top + rect.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

export function Spotlight({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className={className}
      onPointerMove={(event) => {
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        node.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
        node.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
      }}
      onPointerLeave={() => {
        const node = ref.current;
        if (!node) return;
        node.style.setProperty("--spot-x", "-400px");
        node.style.setProperty("--spot-y", "-400px");
      }}
    >
      {children}
    </div>
  );
}

export function Tilt({
  children,
  className,
  max = 8,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const smx = useSpring(mx, { stiffness: 160, damping: 20 });
  const smy = useSpring(my, { stiffness: 160, damping: 20 });
  const rotateX = useTransform(smy, [0, 1], [max, -max]);
  const rotateY = useTransform(smx, [0, 1], [-max, max]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      onPointerMove={(event) => {
        if (event.pointerType !== "mouse") return;
        const node = ref.current;
        if (!node) return;
        const rect = node.getBoundingClientRect();
        mx.set((event.clientX - rect.left) / rect.width);
        my.set((event.clientY - rect.top) / rect.height);
      }}
      onPointerLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
    >
      {children}
    </motion.div>
  );
}


export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

export function useMinWidth(px: number) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(`(min-width: ${px}px)`);
    const apply = () => setMatches(query.matches);
    apply();
    query.addEventListener("change", apply);
    window.addEventListener("resize", apply, { passive: true });
    return () => {
      query.removeEventListener("change", apply);
      window.removeEventListener("resize", apply);
    };
  }, [px]);

  return matches;
}

export function GoldRule({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className ?? ""}`}>
      <span className="hairline w-full origin-center" />
      <span className="absolute h-1.5 w-1.5 rotate-45 bg-gradient-to-br from-gold-200 to-gold-700" />
    </div>
  );
}

