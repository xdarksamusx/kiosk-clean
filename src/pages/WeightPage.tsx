import { Link } from "react-router-dom";
import { RightArrow } from "../components/RightArrow";
import { LeftArrow } from "../components/LeftArrow";

export const WeightPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-[420px] px-4 flex flex-col">
        {/* CARD */}
        <div className="w-full rounded-2xl bg-[#e9e9ea] p-8 md:p-10 text-center shadow-lg space-y-10">
          <h4 className="header">Weigh your box</h4>
          <div>
            <button className="weight-button text-sm bg-blue-300 rounded-lg w-32 py-4">
              Weight: 10 lbs
            </button>
          </div>
          <div className="flex justify-between">
            <button className="rounded-md w-24 py-2 text-xs bg-green-400">
              Domestic
            </button>
            <button className="rounded-md w-24 py-2 text-xs bg-green-400">
              International
            </button>
          </div>
        </div>

        {/* ARROWS (same width as card) */}
        <div className="mt-6 w-full flex justify-between">
          <LeftArrow to="/date" />
          <RightArrow to="/options" />
        </div>
      </div>
    </div>
  );
};
