import { Link } from "react-router-dom";
import { useState } from "react";

export const ServiceOptionsPage = () => {
  const [shipping, setShipping] = useState("domestic");

  return (
    <>
      <div className="  min-h-screen flex items-center justify-center">
        <div className="w-[min(25vw,520px)] rounded-2xl bg-[#e9e9ea] p-8 md:p-10 text-center shadow-lg">
          <h3 className="title">Service Selected</h3>

          <div className="service">
            <span className="service-label">DOMESTIC</span>
          </div>

          <div className="amount">Amount: $23.54</div>

          <button className=" rounded-md w-24 bg-green-400">Buy Now</button>
        </div>
      </div>
    </>
  );
};
