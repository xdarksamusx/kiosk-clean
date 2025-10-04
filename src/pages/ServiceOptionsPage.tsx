import { useState } from "react";
import { RightArrow } from "../components/RightArrow";
import { LeftArrow } from "../components/LeftArrow";
import { useBooking } from "../context/BookingContext";

export const ServiceOptionsPage = () => {
  const [shipping, setShipping] = useState("domestic");
  const { setField } = useBooking();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-[420px] px-4 flex flex-col gap-8">
        <div className="w-full rounded-2xl bg-[#e9e9ea] p-8 md:p-10 text-center shadow-lg space-y-5">
          <h3 className="title">Service Selected</h3>

          <div className="service">
            <span className="service-label">DOMESTIC</span>
          </div>

          <div className="amount">Amount: $23.54</div>

          <button
            onClick={() => setField({ service: "domestic" })}
            className="rounded-md w-24 bg-green-400"
          >
            Buy Now
          </button>
        </div>

        <div className="w-full flex items-center justify-between">
          <LeftArrow to="/weight" />
          <RightArrow to="/confirmation" />
        </div>
      </div>
    </div>
  );
};
