"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const ZONE = "Asia/Kolkata";
const OPEN_HOUR = 9;
const CLOSE_HOUR = 21;

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
  label: "Open all 7 days",
  detail: "9am to 9pm",
  clock: "",
};

function readIst() {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone: ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const hour = Number(parts.find((p) => p.type === "hour")?.value ?? "0");
  const minute = Number(parts.find((p) => p.type === "minute")?.value ?? "0");
  return { hour: hour === 24 ? 0 : hour, minute };
}

function describe(hour: number, minute: number): ClinicState {
  const minutes = hour * 60 + minute;
  const opens = OPEN_HOUR * 60;
  const closes = CLOSE_HOUR * 60;
  const open = minutes >= opens && minutes < closes;
  const clock = `${`${hour}`.padStart(2, "0")}:${`${minute}`.padStart(2, "0")} IST`;

  if (open) {
    const left = closes - minutes;
    if (left <= 60) {
      return {
        ready: true,
        open: true,
        closingSoon: true,
        label: "Closing soon",
        detail: `${left} min left today`,
        clock,
      };
    }
    return {
      ready: true,
      open: true,
      closingSoon: false,
      label: "Open now",
      detail: "Until 9:00 pm",
      clock,
    };
  }

  if (minutes < opens) {
    const until = opens - minutes;
    const hours = Math.floor(until / 60);
    return {
      ready: true,
      open: false,
      closingSoon: false,
      label: "Closed now",
      detail: hours >= 1 ? `Opens in ${hours}h` : `Opens in ${until} min`,
      clock,
    };
  }

  const until = 24 * 60 - minutes + opens;
  const hours = Math.floor(until / 60);
  return {
    ready: true,
    open: false,
    closingSoon: false,
    label: "Closed now",
    detail: `Opens tomorrow 9am, in ${hours}h`,
    clock,
  };
}

export function useClinicStatus() {
  const [state, setState] = useState<ClinicState>(IDLE);

  useEffect(() => {
    const tick = () => {
      const { hour, minute } = readIst();
      setState(describe(hour, minute));
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
      <span className={tone}>{state.ready ? state.label : "Open all 7 days"}</span>
      <span className="text-mist-500">|</span>
      <span className="text-mist-400">
        {state.ready ? state.detail : "9am to 9pm"}
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
        {state.ready ? state.label : "Open all 7 days"}
      </span>
      <span className="text-mist-400">
        {state.ready ? state.detail : "9am to 9pm"}
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
          {state.ready ? state.label : "Open all 7 days"}
        </p>
        {state.clock ? (
          <span className="ml-auto font-[family-name:var(--font-mark)] text-[0.72rem] tracking-widest text-mist-400">
            {state.clock}
          </span>
        ) : null}
      </div>
      <p className="mt-1.5 text-lg font-medium text-mist-50">Monday to Sunday</p>
      <p className="text-sm text-gold-200">
        {SITE.hours.opens.slice(0, 5)} to 21:00, all 7 days
      </p>
      <p className="mt-1 text-xs text-mist-400">
        {state.ready ? state.detail : "Reception answers until 9pm"}
      </p>
    </div>
  );
}
