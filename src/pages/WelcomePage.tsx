import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="  min-h-screen flex items-center justify-center">
        <div className="w-[min(25vw,520px)] rounded-2xl bg-[#e9e9ea] p-8 md:p-10 text-center shadow-lg flex flex-col gap-y-3">
          <h4 className=""> Welcome</h4>
          <button
            onClick={() => navigate("/date")}
            className="rounded-md py-3 bg-green-400"
          >
            {" "}
            <Link to="/date"> New </Link>{" "}
          </button>
          <button className="rounded-md  py-3 bg-green-400">
            I have an account
          </button>
        </div>
      </div>
    </>
  );
};
