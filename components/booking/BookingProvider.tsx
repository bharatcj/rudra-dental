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

type BookingContextValue = {
  open: boolean;
  openBooking: (source?: string) => void;
  closeBooking: () => void;
  source: string;
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

  const openBooking = useCallback((from = "site") => {
    setSource(from);
    setOpen(true);
    if (typeof window !== "undefined") {
      const layer = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
      if (Array.isArray(layer)) {
        layer.push({ event: "booking_modal_open", booking_source: from });
      }
    }
  }, []);

  const closeBooking = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, openBooking, closeBooking, source }),
    [open, openBooking, closeBooking, source],
  );

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingModal />
    </BookingContext.Provider>
  );
}
