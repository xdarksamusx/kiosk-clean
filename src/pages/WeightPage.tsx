import { Link } from "react-router-dom";

export const WeightPage = () => {
  return (
    <>
      <div className="  min-h-screen flex items-center justify-center 	  ">
        <div className="w-[min(25vw,520px)] rounded-2xl bg-[#e9e9ea] p-8 md:p-10 text-center shadow-lg flex flex-col gap-y-3">
          <h4 className="header">Weigh your box</h4>

          <div>
            <button className="weight-button bg-blue-300 rounded-lg w-32 ">
              Weight: 10 lbs
            </button>
          </div>

          <div className="flex justify-between">
            <button className="rounded-md w-24 bg-green-400">Domestic</button>
            <button className="rounded-md w-24 bg-green-400">
              International
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
