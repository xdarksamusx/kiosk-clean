import { useState } from "react";
import { format } from "date-fns";
import { useRef } from "react";
import { useEffect } from "react";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useBooking } from "../context/BookingContext";

export const DatePage = () => {
  const { state, setField } = useBooking();
  const selected = state.date ? new Date(state.date) : undefined;
  const footer = selected ? (
    <p>You picked {format(selected, "PPP")}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={(d) => setField({ date: d ? d.toISOString() : null })}
      footer={footer}
    />
  );
};
