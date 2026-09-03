"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
  type Variants,
} from "framer-motion";
import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: EASE, delay: i * 0.075 },
  }),
};

const MOTION_TAGS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  span: motion.span,
  p: motion.p,
} as const;

export type RevealTag = keyof typeof MOTION_TAGS;

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
  const MotionTag = MOTION_TAGS[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({
  children,
  className,
  gap = 0.08,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-70px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function SplitHeading({
  text,
  className,
  delay = 0,
  trailingSpace = false,
}: {
  text: string;
  className?: string;
  delay?: number;
  trailingSpace?: boolean;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.055, delayChildren: delay } } }}
      style={{ display: "inline-block" }}
    >
      {words.map((word, index) => (
        <Fragment key={`${word}-${index}`}>
          <span
            style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
          >
            <motion.span
              style={{ display: "inline-block" }}
              variants={{
                hidden: { y: "110%", opacity: 0 },
                show: { y: "0%", opacity: 1, transition: { duration: 0.95, ease: EASE } },
              }}
            >
              {word}
            </motion.span>
          </span>
          {index < words.length - 1 || trailingSpace ? " " : ""}
        </Fragment>
      ))}
    </motion.span>
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

export function Parallax({
  children,
  distance = 60,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}

export function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

export function GoldRule({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className ?? ""}`}>
      <motion.span
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, ease: EASE }}
        className="hairline w-full origin-center"
      />
      <motion.span
        initial={{ scale: 0, rotate: 0 }}
        whileInView={{ scale: 1, rotate: 45 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
        className="absolute h-1.5 w-1.5 bg-gradient-to-br from-gold-200 to-gold-700"
      />
    </div>
  );
}

export function useParallaxEnabled() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
    );
    const apply = () => setEnabled(query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  return enabled;
}
