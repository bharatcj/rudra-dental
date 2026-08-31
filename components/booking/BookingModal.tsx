"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useBooking } from "./BookingProvider";
import { SITE, DOCTORS, SERVICES } from "@/lib/site";
import {
  IconArrow,
  IconCheck,
  IconChevron,
  IconClose,
  IconWhatsapp,
} from "@/components/ui/Icons";
import { LogoMark } from "@/components/ui/Logo";

const LEAD_HOURS = 12;
const MAX_DAYS = 30;
const OPEN_HOUR = 9;
const CLOSE_HOUR = 21;
const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function startOfDay(date: Date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function toKey(date: Date) {
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");
  return `${date.getFullYear()}-${month}-${day}`;
}

function buildSlots(selected: Date | null, earliest: Date) {
  if (!selected) return [] as string[];
  const slots: string[] = [];
  for (let hour = OPEN_HOUR; hour <= CLOSE_HOUR; hour += 1) {
    for (const minute of [0, 30]) {
      if (hour === CLOSE_HOUR && minute > 0) continue;
      const candidate = new Date(selected);
      candidate.setHours(hour, minute, 0, 0);
      if (candidate.getTime() < earliest.getTime()) continue;
      slots.push(
        `${`${hour}`.padStart(2, "0")}:${`${minute}`.padStart(2, "0")}`,
      );
    }
  }
  return slots;
}

function formatSlot(slot: string) {
  const [hourText, minuteText] = slot.split(":");
  const hour = Number(hourText);
  const suffix = hour >= 12 ? "PM" : "AM";
  const display = hour % 12 === 0 ? 12 : hour % 12;
  return `${display}:${minuteText} ${suffix}`;
}

export default function BookingModal() {
  const { open, closeBooking, source, preset } = useBooking();
  const [step, setStep] = useState(0);
  const [doctor, setDoctor] = useState("");
  const [concern, setConcern] = useState("");
  const [name, setName] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [slot, setSlot] = useState("");
  const [monthCursor, setMonthCursor] = useState(() => startOfDay(new Date()));
  const [error, setError] = useState("");

  const earliest = useMemo(
    () => new Date(Date.now() + LEAD_HOURS * 60 * 60 * 1000),
    [open],
  );
  const lastDate = useMemo(() => {
    const limit = new Date();
    limit.setDate(limit.getDate() + MAX_DAYS);
    return startOfDay(limit);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    setStep(0);
    setError("");
    if (preset.doctor) {
      const match = DOCTORS.find((item) => item.name === preset.doctor);
      if (match) setDoctor(match.name);
    }
    if (preset.treatment) {
      const match = SERVICES.find(
        (item) => item.slug === preset.treatment || item.title === preset.treatment,
      );
      if (match) setConcern(match.title);
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, preset]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeBooking();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, closeBooking]);

  const slots = useMemo(
    () => buildSlots(selectedDate, earliest),
    [selectedDate, earliest],
  );

  const days = useMemo(() => {
    const first = new Date(monthCursor.getFullYear(), monthCursor.getMonth(), 1);
    const total = new Date(
      monthCursor.getFullYear(),
      monthCursor.getMonth() + 1,
      0,
    ).getDate();
    const cells: (Date | null)[] = Array.from({ length: first.getDay() }, () => null);
    for (let day = 1; day <= total; day += 1) {
      cells.push(new Date(monthCursor.getFullYear(), monthCursor.getMonth(), day));
    }
    return cells;
  }, [monthCursor]);

  const minSelectable = startOfDay(earliest);
  const canGoBackMonth =
    monthCursor.getFullYear() > minSelectable.getFullYear() ||
    (monthCursor.getFullYear() === minSelectable.getFullYear() &&
      monthCursor.getMonth() > minSelectable.getMonth());
  const canGoForwardMonth =
    monthCursor.getFullYear() < lastDate.getFullYear() ||
    (monthCursor.getFullYear() === lastDate.getFullYear() &&
      monthCursor.getMonth() < lastDate.getMonth());

  const isDisabledDay = (date: Date) => {
    const day = startOfDay(date);
    return day < minSelectable || day > lastDate;
  };

  const submit = () => {
    if (!doctor) {
      setError("Please choose a dentist.");
      setStep(0);
      return;
    }
    if (!selectedDate) {
      setError("Please select a date for your appointment.");
      setStep(1);
      return;
    }
    if (!slot) {
      setError("Please select a time for your appointment.");
      setStep(1);
      return;
    }

    const [hour, minute] = slot.split(":").map(Number);
    const appointment = new Date(selectedDate);
    appointment.setHours(hour, minute, 0, 0);

    if (appointment.getTime() - Date.now() < LEAD_HOURS * 60 * 60 * 1000) {
      setError(`Please select a time at least ${LEAD_HOURS} hours from now.`);
      return;
    }

    const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const dateText = appointment.toLocaleDateString(undefined, { timeZone: zone });
    const timeText = appointment.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: zone,
    });

    let message = `I want an appointment with ${doctor} on ${dateText} at ${timeText}`;
    if (concern) message += `. Treatment needed: ${concern}`;
    if (name) message += `. My name is ${name}`;

    const layer = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
    if (Array.isArray(layer)) {
      layer.push({
        event: "appointment_request",
        booking_doctor: doctor,
        booking_treatment: concern || "not specified",
        booking_source: source,
      });
    }

    window.open(
      `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
    closeBooking();
  };

  const steps = ["Dentist", "Schedule", "Confirm"];

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[200] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Book an appointment at Rudra Dental"
        >
          <div
            className="absolute inset-0 bg-ink-950/88 backdrop-blur-md"
            onClick={closeBooking}
          />

          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 30, opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="surface relative z-10 flex max-h-[92vh] w-full max-w-2xl flex-col overflow-hidden rounded-t-3xl border-gold-500/25 sm:rounded-3xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-gold-500/12 px-6 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <LogoMark className="h-11 w-9 shrink-0" sizes="48px" />
                <div>
                  <p className="eyebrow">Appointment</p>
                  <h2 className="display text-2xl text-mist-50 sm:text-[1.7rem]">
                    Reserve your chair
                  </h2>
                </div>
              </div>
              <button
                type="button"
                onClick={closeBooking}
                aria-label="Close booking"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold-500/25 text-gold-300 transition hover:bg-gold-500 hover:text-ink-950"
              >
                <IconClose className="h-4 w-4" />
              </button>
            </div>

            <div className="flex items-center gap-2 px-6 pt-5 sm:px-8">
              {steps.map((label, index) => (
                <div key={label} className="flex flex-1 items-center gap-2">
                  <div
                    className={`flex items-center gap-2 text-[0.75rem] tracking-[0.18em] uppercase transition ${
                      index <= step ? "text-gold-300" : "text-mist-400/60"
                    }`}
                  >
                    <span
                      className={`grid h-6 w-6 place-items-center rounded-full border text-[0.65rem] ${
                        index < step
                          ? "border-gold-500 bg-gold-500 text-ink-950"
                          : index === step
                            ? "border-gold-400 text-gold-300"
                            : "border-mist-400/25 text-mist-400/60"
                      }`}
                    >
                      {index < step ? <IconCheck className="h-3 w-3" /> : index + 1}
                    </span>
                    <span className="hidden sm:inline">{label}</span>
                  </div>
                  {index < steps.length - 1 ? (
                    <span
                      className={`h-px flex-1 ${index < step ? "bg-gold-500/60" : "bg-mist-400/15"}`}
                    />
                  ) : null}
                </div>
              ))}
            </div>

            <div className="scroll-x flex-1 overflow-y-auto px-6 py-6 sm:px-8">
              {step === 0 ? (
                <div className="space-y-6">
                  <div>
                    <p className="mb-3 text-sm font-medium text-mist-200">
                      Choose your dentist
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {DOCTORS.map((item) => (
                        <button
                          key={item.name}
                          type="button"
                          onClick={() => {
                            setDoctor(item.name);
                            setError("");
                          }}
                          className={`group flex items-center gap-3 rounded-2xl border p-3 text-left transition ${
                            doctor === item.name
                              ? "border-gold-500/70 bg-gold-500/10"
                              : "border-mist-400/12 hover:border-gold-500/35 hover:bg-white/[0.03]"
                          }`}
                        >
                          <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full border border-gold-500/25 bg-ink-800">
                            <img
                              src={item.image}
                              alt=""
                              className="h-full w-full object-cover object-top"
                              loading="lazy"
                            />
                          </span>
                          <span className="min-w-0">
                            <span className="block truncate text-sm font-medium text-mist-50">
                              {item.name}
                            </span>
                            <span className="block truncate text-xs text-mist-400">
                              {item.role}
                            </span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-medium text-mist-200">
                      What do you need help with
                      <span className="ml-2 text-xs text-mist-400">optional</span>
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((item) => (
                        <button
                          key={item.slug}
                          type="button"
                          onClick={() =>
                            setConcern(concern === item.title ? "" : item.title)
                          }
                          className={`min-h-9 rounded-full border px-3.5 py-1.5 text-xs transition ${
                            concern === item.title
                              ? "border-gold-500/70 bg-gold-500/12 text-gold-200"
                              : "border-mist-400/15 text-mist-300 hover:border-gold-500/35"
                          }`}
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="booking-name"
                      className="mb-2 block text-sm font-medium text-mist-200"
                    >
                      Your name
                      <span className="ml-2 text-xs text-mist-400">optional</span>
                    </label>
                    <input
                      id="booking-name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      placeholder="So we can greet you properly"
                      className="w-full rounded-xl border border-mist-400/15 bg-ink-800/70 px-4 py-3 text-sm text-mist-100 outline-none transition placeholder:text-mist-400/60 focus:border-gold-500/60"
                    />
                  </div>
                </div>
              ) : null}

              {step === 1 ? (
                <div className="space-y-6">
                  <div>
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-sm font-medium text-mist-200">Pick a date</p>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          disabled={!canGoBackMonth}
                          onClick={() =>
                            setMonthCursor(
                              new Date(
                                monthCursor.getFullYear(),
                                monthCursor.getMonth() - 1,
                                1,
                              ),
                            )
                          }
                          aria-label="Previous month"
                          className="grid h-8 w-8 place-items-center rounded-full border border-mist-400/15 text-mist-300 transition enabled:hover:border-gold-500/50 enabled:hover:text-gold-300 disabled:opacity-25"
                        >
                          <IconChevron className="h-4 w-4 rotate-90" />
                        </button>
                        <span className="min-w-[9.5rem] text-center text-sm text-mist-100">
                          {MONTHS[monthCursor.getMonth()]} {monthCursor.getFullYear()}
                        </span>
                        <button
                          type="button"
                          disabled={!canGoForwardMonth}
                          onClick={() =>
                            setMonthCursor(
                              new Date(
                                monthCursor.getFullYear(),
                                monthCursor.getMonth() + 1,
                                1,
                              ),
                            )
                          }
                          aria-label="Next month"
                          className="grid h-8 w-8 place-items-center rounded-full border border-mist-400/15 text-mist-300 transition enabled:hover:border-gold-500/50 enabled:hover:text-gold-300 disabled:opacity-25"
                        >
                          <IconChevron className="h-4 w-4 -rotate-90" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                      {WEEKDAYS.map((day, index) => (
                        <div
                          key={`${day}-${index}`}
                          className="py-1 text-center text-[0.65rem] tracking-widest text-mist-400/70 uppercase"
                        >
                          {day}
                        </div>
                      ))}
                      {days.map((day, index) => {
                        if (!day) return <div key={`empty-${index}`} />;
                        const disabled = isDisabledDay(day);
                        const active = selectedDate && isSameDay(day, selectedDate);
                        return (
                          <button
                            key={toKey(day)}
                            type="button"
                            disabled={disabled}
                            onClick={() => {
                              setSelectedDate(day);
                              setSlot("");
                              setError("");
                            }}
                            className={`aspect-square rounded-lg text-sm transition ${
                              active
                                ? "bg-gold-500 font-semibold text-ink-950"
                                : disabled
                                  ? "cursor-not-allowed text-mist-400/25"
                                  : "text-mist-200 hover:bg-gold-500/15 hover:text-gold-200"
                            }`}
                          >
                            {day.getDate()}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <p className="mb-3 text-sm font-medium text-mist-200">
                      Pick a time
                      <span className="ml-2 text-xs text-mist-400">
                        clinic open 9:00 AM to 9:00 PM
                      </span>
                    </p>
                    {!selectedDate ? (
                      <p className="rounded-xl border border-dashed border-mist-400/15 px-4 py-6 text-center text-sm text-mist-400">
                        Select a date to see available times
                      </p>
                    ) : slots.length === 0 ? (
                      <p className="rounded-xl border border-dashed border-gold-500/25 px-4 py-6 text-center text-sm text-gold-200">
                        No slots left on this date. Please choose the next day.
                      </p>
                    ) : (
                      <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                        {slots.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => {
                              setSlot(item);
                              setError("");
                            }}
                            className={`min-h-11 rounded-xl border px-2 py-2.5 text-xs transition ${
                              slot === item
                                ? "border-gold-500/70 bg-gold-500/15 text-gold-100"
                                : "border-mist-400/12 text-mist-300 hover:border-gold-500/35"
                            }`}
                          >
                            {formatSlot(item)}
                          </button>
                        ))}
                      </div>
                    )}
                    <p className="mt-3 text-xs text-mist-400">
                      Requests need at least {LEAD_HOURS} hours notice and can be made up
                      to {MAX_DAYS} days ahead.
                    </p>
                  </div>
                </div>
              ) : null}

              {step === 2 ? (
                <div className="space-y-4">
                  <div className="rounded-2xl border border-gold-500/20 bg-gold-500/[0.06] p-5">
                    <p className="eyebrow mb-4">Your request</p>
                    <dl className="space-y-3 text-sm">
                      {[
                        ["Dentist", doctor || "Not selected"],
                        [
                          "Date",
                          selectedDate
                            ? selectedDate.toLocaleDateString(undefined, {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              })
                            : "Not selected",
                        ],
                        ["Time", slot ? formatSlot(slot) : "Not selected"],
                        ["Treatment", concern || "General consultation"],
                        ["Name", name || "Not shared"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="flex items-baseline justify-between gap-4 border-b border-gold-500/10 pb-2 last:border-0 last:pb-0"
                        >
                          <dt className="text-mist-400">{label}</dt>
                          <dd className="text-right font-medium text-mist-50">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                  <p className="text-xs leading-relaxed text-mist-400">
                    Continuing opens WhatsApp with this request pre-filled for our front
                    desk at {SITE.phoneDisplay}. A team member confirms your slot before
                    it is locked in.
                  </p>
                </div>
              ) : null}

              {error ? (
                <p className="mt-4 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-2.5 text-sm text-red-200">
                  {error}
                </p>
              ) : null}
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-gold-500/12 px-6 py-4 sm:px-8">
              <button
                type="button"
                onClick={() => (step === 0 ? closeBooking() : setStep(step - 1))}
                className="rounded-full px-4 py-2.5 text-sm text-mist-300 transition hover:text-gold-300"
              >
                {step === 0 ? "Cancel" : "Back"}
              </button>

              {step < 2 ? (
                <button
                  type="button"
                  onClick={() => {
                    if (step === 0 && !doctor) {
                      setError("Please choose a dentist to continue.");
                      return;
                    }
                    if (step === 1 && (!selectedDate || !slot)) {
                      setError("Please select both a date and a time.");
                      return;
                    }
                    setError("");
                    setStep(step + 1);
                  }}
                  className="group inline-flex items-center gap-2 rounded-full bg-gold-sheen px-6 py-3 text-sm font-semibold text-ink-950 transition hover:shadow-[0_10px_30px_-8px_rgba(195,150,69,0.65)]"
                >
                  Continue
                  <IconArrow className="h-4 w-4 transition group-hover:translate-x-1" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={submit}
                  className="group inline-flex items-center gap-2 rounded-full bg-gold-sheen px-6 py-3 text-sm font-semibold text-ink-950 transition hover:shadow-[0_10px_30px_-8px_rgba(195,150,69,0.65)]"
                >
                  <IconWhatsapp className="h-4 w-4" />
                  Send on WhatsApp
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
