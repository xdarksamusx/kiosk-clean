import { Link } from "react-router-dom";

export const ThankYouPage = () => {
  return (
    <>
      <div className="  min-h-screen  items-center justify-center  text-center flex flex-col ">
        <div className="w-[min(25vw,520px)] rounded-2xl bg-[#e9e9ea] p-8 md:p-10  shadow-lg flex flex-col gap-y-3       ">
          <p className="">Thank You</p>
          <p className="tile">Your booking</p>
          <p className="tile">is confirmed</p>
          <button className="bg-green-600 rounded-lg "> Print Receipt</button>
        </div>
      </div>
    </>
  );
};
