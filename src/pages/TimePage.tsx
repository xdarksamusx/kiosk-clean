import React from "react";
import { format, parseISO } from "date-fns";
import { LeftArrow } from "../components/LeftArrow";
import { RightArrow } from "../components/RightArrow";

import { useBooking } from "../context/BookingContext";

export const TimePage = () => {
  const { state, setField } = useBooking();

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-[420px] px-4">
          <label htmlFor="" className="block mb-2 text-sm">
            {" "}
            Pick a time
          </label>
          <input
            type="time"
            value={state.time ?? ""}
            onChange={(e) => setField({ time: e.target.value })}
            className="w-full rounded-md border px-3 py-2"
          />

          <div className="mt-6 w-full flex justify-between">
            <LeftArrow to="/date" />
            <RightArrow to="/weight" />
          </div>
        </div>
      </div>
    </>
  );
};
