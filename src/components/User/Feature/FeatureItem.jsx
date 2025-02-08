import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const FeatureCard = ({ title, description, slug }) => {
  
  const navigate = useNavigate();
  const isAuth = Cookies.get("connect.sid");

  return (
    <div onClick={() => navigate(isAuth ? '/explore/'+slug : '/auth/login')} className="min-h-[300px] hover:rotate-3 flex-1 transition-all border-mainColor border-2 p-5 bg-white flex flex-col gap-6 items-start justify-center">
      <h2 className="text-xl font-unbounded leading-6 font-bold mt-4 pointer-events-none">{title}</h2>
      <p className="text-sm text-gray-500 mt-4 break-words pb-3 pointer-events-none">{description}</p>
      <button className="flex hover:translate-y-1 transition-all gap-1 items-center text-sm px-3 mt-2 py-2 border-2 border-black">
        <img src="/images/User/run.svg" className="h-6 w-6" alt="Run" />
        run it!
      </button>
    </div>
  );
};

export default FeatureCard;