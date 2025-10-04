import React from "react";
import { useBooking } from "../context/BookingContext";
import { format, parseISO } from "date-fns";
import { combineDateTimeISO } from "../utils/when";

export const ReceiptPage = () => {
  const { state, setField } = useBooking();

  const whenISO =
    state.date && state.time
      ? combineDateTimeISO(state.date, state.time)
      : null;
  return (
    <>
      <div>
        <p className="">Thank You!! Your drop off</p>
        <p className="tile">has been booked !</p>
        <p className="tile">
          {" "}
          Date: {whenISO ? format(parseISO(whenISO), "PPP") : "--"}{" "}
        </p>
        <p className="tile">
          {" "}
          Time: {whenISO ? format(parseISO(whenISO), "p") : "--"}{" "}
        </p>

        <p>Click link for a reminder</p>
        <p> some link </p>
      </div>
    </>
  );
};
