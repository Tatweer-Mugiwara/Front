import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import API from "../../../utils/api-client";
import Spinner from "react-spinner-material";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const submitFN = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      await API.post("users/login/", {
        ...data,
      });

      toast.success("Welcome back!", {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });

      navigate("/");
      
    } catch (error) {
      toast.error(error?.response?.message ?? "Error", {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={submitFN}
      className="flex items-center justify-center flex-col p-4 gap-4 w-[100%] max-w-[550px] bg-white"
    >
      <img src="/Logo.svg" alt="Logo" />
      <div className="flex flex-col gap-4 w-full">
        <div className="w-full flex flex-col justify-center">
          <label
            htmlFor="email"
            className="font-unbounded text-lg text-mainColor"
          >
            Email
          </label>
          <input
            value={data.email}
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
            id="email"
            type="text"
            className="w-full px-3 py-4 border-2 border-white-gray font-poppins"
            placeholder="Email"
          />
        </div>
        <div className="w-full flex flex-col justify-center">
          <div className="w-full flex items-center justify-between">
            <label
              htmlFor="password"
              className="font-unbounded text-lg text-mainColor"
            >
              Password
            </label>
            <Link
              to={"/auth/reset-password"}
              className="underline hover:no-underline"
            >
              Reset password?
            </Link>
          </div>
          <input
            value={data.password}
            onChange={(e) =>
              setData((prev) => ({ ...prev, password: e.target.value }))
            }
            id="password"
            type="password"
            className="w-full px-3 py-4 border-2 border-white-gray font-poppins"
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer transition-all flex items-center justify-center hover:bg-white hover:text-mainColor border border-transparent hover:border-mainColor px-3 py-4 w-full mt-4 text-white font-unbounded bg-mainColor"
        >
          {!isLoading ? (
            "Login"
          ) : (
            <Spinner style={{ height: "28px", width: "28px" }} color="white" className="hover:text-black" />
          )}
        </button>
        <h4 className="text-center">
          You don’t have an account?{" "}
          <Link to="/auth/register" className="hover:underline">
            Register!
          </Link>
        </h4>
      </div>
    </form>
  );
};

export default Login;
