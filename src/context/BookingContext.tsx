// src/context/BookingContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import type { BookingState } from "./booking-types";

type Ctx = {
  state: BookingState;
  setField: (patch: Partial<BookingState>) => void;
  reset: () => void;
  getMissing: () => Array<keyof BookingState>;
};

const KEY = "booking:v1";
const initial: BookingState = {
  service: null,
  weight: null,
  date: null,
  confirmation: null,
};

const BookingContext = createContext<Ctx | null>(null);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  // lazy init from localStorage
  const [state, setState] = useState<BookingState>(() => {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? { ...initial, ...JSON.parse(raw) } : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(state));
  }, [state]);

  const setField: Ctx["setField"] = (patch) =>
    setState((s) => ({ ...s, ...patch }));
  const reset = () => {
    setState(initial);
    localStorage.removeItem(KEY);
  };
  const getMissing = () =>
    (["service", "weight", "date"] as const).filter((k) => !state[k]);

  console.log("[BookingProvider] mounted");

  return (
    <BookingContext.Provider value={{ state, setField, reset, getMissing }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within <BookingProvider>");
  return ctx;
}
