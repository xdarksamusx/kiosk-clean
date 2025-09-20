import { Link } from "react-router-dom";

export const WelcomePage = () => {
  return (
    <>
      <div className="  min-h-screen flex items-center justify-center">
        <div className="w-[min(25vw,520px)] rounded-2xl bg-[#e9e9ea] p-8 md:p-10 text-center shadow-lg flex flex-col gap-y-3">
          <h4 className="">Welcome</h4>
          <button className="rounded-md py-3 bg-green-400">New</button>
          <button className="rounded-md  py-3 bg-green-400">
            I have an account
          </button>
        </div>
      </div>
    </>
  );
};
