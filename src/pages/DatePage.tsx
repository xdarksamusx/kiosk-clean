import { useState } from "react";
import { format } from "date-fns";
import { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useBooking } from "../context/BookingContext";
import { RightArrow } from "../components/RightArrow";
import { LeftArrow } from "../components/LeftArrow";

import { Link } from "react-router-dom";
export const DatePage = () => {
  const navigate = useNavigate();
  const { state, setField } = useBooking();
  const selected = state.date ? new Date(state.date) : undefined;
  const footer = selected ? (
    <p>You picked {format(selected, "PPP")}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-[520px] px-4 flex flex-col">
          <div className="w-fit mx-auto rounded-2xl bg-neutral-100 p-6 shadow-lg">
            <div className="flex justify-center">
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={(d) => setField({ date: d ? d.toISOString() : null })}
              />
            </div>
            <p className="mt-4 text-center text-sm">{footer}</p>
          </div>
          <div className="mt-6 w-full flex justify-between">
            <LeftArrow to="/" />
            <RightArrow to="/time" />
          </div>
        </div>
      </div>
    </>
  );
};
