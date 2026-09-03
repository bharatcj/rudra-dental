"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const ZONE = "Asia/Kolkata";
const CLOSED_DAY = 0;
const DAY_KEYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const SESSIONS = SITE.hours.sessions.map((session) => ({
  opens: toMinutes(session.opens),
  closes: toMinutes(session.closes),
  label: session.label,
}));

function toMinutes(value: string) {
  const [hour, minute] = value.split(":").map(Number);
  return hour * 60 + minute;
}

function clockLabel(minutes: number) {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  const suffix = hour >= 12 ? "pm" : "am";
  const display = hour % 12 === 0 ? 12 : hour % 12;
  return minute ? `${display}:${`${minute}`.padStart(2, "0")}${suffix}` : `${display}${suffix}`;
}

export type ClinicState = {
  ready: boolean;
  open: boolean;
  closingSoon: boolean;
  label: string;
  detail: string;
  clock: string;
};

const IDLE: ClinicState = {
  ready: false,
  open: true,
  closingSoon: false,
  label: SITE.hours.days,
  detail: SITE.hours.short,
  clock: "",
};

function readIst() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: ZONE,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  const weekday = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const day = DAY_KEYS.indexOf(weekday);
  return { hour: hour === 24 ? 0 : hour, minute, day: day < 0 ? 1 : day };
}

function describe(hour: number, minute: number, day: number): ClinicState {
  const minutes = hour * 60 + minute;
  const clock = `${`${hour}`.padStart(2, "0")}:${`${minute}`.padStart(2, "0")} IST`;
  const shut = { ready: true, open: false, closingSoon: false, label: "Closed now", clock };

  if (day === CLOSED_DAY) {
    return { ...shut, detail: `Opens Monday ${clockLabel(SESSIONS[0].opens)}` };
  }

  const current = SESSIONS.find((s) => minutes >= s.opens && minutes < s.closes);
  if (current) {
    const left = current.closes - minutes;
    if (left <= 45) {
      return {
        ready: true,
        open: true,
        closingSoon: true,
        label: "Closing soon",
        detail: `${left} min left this session`,
        clock,
      };
    }
    return {
      ready: true,
      open: true,
      closingSoon: false,
      label: "Open now",
      detail: `Until ${clockLabel(current.closes)}`,
      clock,
    };
  }

  const next = SESSIONS.find((s) => minutes < s.opens);
  if (next) {
    const until = next.opens - minutes;
    const hours = Math.floor(until / 60);
    return {
      ...shut,
      detail: hours >= 1 ? `Opens ${clockLabel(next.opens)}, in ${hours}h` : `Opens in ${until} min`,
    };
  }

  if (day === DAY_KEYS.length - 1) {
    return { ...shut, detail: `Opens Monday ${clockLabel(SESSIONS[0].opens)}` };
  }
  return { ...shut, detail: `Opens tomorrow ${clockLabel(SESSIONS[0].opens)}` };
}

export function useClinicStatus() {
  const [state, setState] = useState<ClinicState>(IDLE);

  useEffect(() => {
    const tick = () => {
      const { hour, minute, day } = readIst();
      setState(describe(hour, minute, day));
    };
    tick();
    const timer = window.setInterval(tick, 30000);
    return () => window.clearInterval(timer);
  }, []);

  return state;
}

export function StatusDot({ state }: { state: ClinicState }) {
  const tone = !state.ready
    ? "bg-mist-400"
    : state.open
      ? state.closingSoon
        ? "bg-amber-400"
        : "bg-emerald-400"
      : "bg-red-500";

  return (
    <span className="relative flex h-1.5 w-1.5 shrink-0">
      {state.ready ? (
        <span
          className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-70 ${tone}`}
        />
      ) : null}
      <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${tone}`} />
    </span>
  );
}

export function StatusInline({ className }: { className?: string }) {
  const state = useClinicStatus();
  const tone = !state.ready
    ? "text-mist-400"
    : state.open
      ? state.closingSoon
        ? "text-amber-300"
        : "text-emerald-300"
      : "text-red-400";

  return (
    <span className={`flex items-center gap-2 ${className ?? ""}`}>
      <StatusDot state={state} />
      <span className={tone}>{state.ready ? state.label : SITE.hours.days}</span>
      <span className="text-mist-500">|</span>
      <span className="text-mist-400">
        {state.ready ? state.detail : SITE.hours.short}
      </span>
    </span>
  );
}

export function StatusPill({ className }: { className?: string }) {
  const state = useClinicStatus();
  const ring = !state.ready
    ? "border-mist-400/25"
    : state.open
      ? state.closingSoon
        ? "border-amber-400/45 bg-amber-400/[0.08]"
        : "border-emerald-400/40 bg-emerald-400/[0.07]"
      : "border-red-500/45 bg-red-500/[0.08]";
  const tone = !state.ready
    ? "text-mist-300"
    : state.open
      ? state.closingSoon
        ? "text-amber-200"
        : "text-emerald-200"
      : "text-red-300";

  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-xs transition-colors duration-500 ${ring} ${className ?? ""}`}
    >
      <StatusDot state={state} />
      <span className={`font-medium ${tone}`}>
        {state.ready ? state.label : SITE.hours.days}
      </span>
      <span className="text-mist-400">
        {state.ready ? state.detail : SITE.hours.short}
      </span>
    </span>
  );
}

export function StatusCard({ className }: { className?: string }) {
  const state = useClinicStatus();
  const tone = !state.ready
    ? "text-mist-300"
    : state.open
      ? state.closingSoon
        ? "text-amber-200"
        : "text-emerald-200"
      : "text-red-300";

  return (
    <div className={className}>
      <div className="flex items-center gap-2.5">
        <StatusDot state={state} />
        <p className={`text-sm font-medium ${tone}`}>
          {state.ready ? state.label : SITE.hours.days}
        </p>
        {state.clock ? (
          <span className="ml-auto font-[family-name:var(--font-mark)] text-[0.72rem] tracking-widest text-mist-400">
            {state.clock}
          </span>
        ) : null}
      </div>
      <p className="mt-1.5 text-lg font-medium text-mist-50">{SITE.hours.days}</p>
      <p className="text-sm text-gold-200">
        {SITE.hours.short}, closed {SITE.hours.closedDay}
      </p>
      <p className="mt-1 text-xs text-mist-400">
        {state.ready ? state.detail : SITE.hours.short}
      </p>
    </div>
  );
}
