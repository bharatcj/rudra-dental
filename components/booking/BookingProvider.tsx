"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import BookingModal from "./BookingModal";
import { track } from "@/lib/track";

export type BookingPreset = {
  doctor?: string;
  treatment?: string;
};

type BookingContextValue = {
  open: boolean;
  openBooking: (source?: string, preset?: BookingPreset) => void;
  closeBooking: () => void;
  source: string;
  preset: BookingPreset;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used inside BookingProvider");
  }
  return context;
}

export default function BookingProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState("site");
  const [preset, setPreset] = useState<BookingPreset>({});

  const openBooking = useCallback((from = "site", next: BookingPreset = {}) => {
    setSource(from);
    setPreset(next);
    setOpen(true);
    track("booking_modal_open", { booking_source: from });
  }, []);

  const closeBooking = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, openBooking, closeBooking, source, preset }),
    [open, openBooking, closeBooking, source, preset],
  );

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingModal />
    </BookingContext.Provider>
  );
}
