import { NavLink } from "react-router-dom";
import "./Auth.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "./authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({ username: "", password: "" });
  const guestCredential = {
    username: "savitaverma",
    password: "savitaverma123",
  };
  const iptHandler = (e) => {
    const { id, value } = e.target;
    setUser((prev) => ({ ...prev, [id]: value }));
  };

  const guestIptHandler = () => {
    setUser(guestCredential);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (user.email !== "" && user.password !== "") {
      const { payload } = await dispatch(loginUser(user));
      if (payload.status === 200) {
        navigate("/");
        toast.success("Logged In Successfully");
      }
    } else {
      toast.warning("Enter all fileds");
    }
  };

  return (
    <div className="w-full h-screen px-4 py-6 sm:px-0 flex flex-col justify-center bg-sky-100">
      <div className="w-2/5 py-3 sm:max-w-xl sm:w-10/12 mx-auto text-center md:w-96 flex justify-center">
        <div className="mt-4 bg-white w-3/4 shadow-md rounded-lg text-left">
          <div className="h-2 bg-rose-600 rounded-t-md"></div>
          <div className="flex justify-center py-2 gap-4 items-center">
            <p className="text-rose-600 title text-3xl font-bold font-serif">
              Make Friends
            </p>
          </div>
          <div className="px-5 py-2 pb-7 sm:px-6">
            <h2 className="text-2xl flex justify-center font-semibold border-b-2 border-rose-600 pb-2 sm:text-xl">
              Sign In
            </h2>
            <div className="pt-8">
              <label htmlFor="username" className="block font-semibold">
                Username or Email:
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={user.username}
                onChange={iptHandler}
                className=" border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md sm:py-4"
              />
              <label htmlFor="password" className="block font-semibold mt-5">
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={user.password}
                onChange={iptHandler}
                className=" border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md sm:py-4"
              />
            </div>

            <div className="mt-5">
              <button
                className="font-semibold w-full mt-5 mb-3 bg-rose-600 text-white px-7 rounded-lg hover:bg-slate-300 hover:text-black  py-2"
                onClick={guestIptHandler}
              >
                Add Guest Credential
              </button>
              <button
                className="font-semibold w-full mb-4 bg-rose-600 text-white px-7 rounded-lg hover:bg-slate-300 hover:text-black py-2"
                onClick={loginHandler}
              >
                Sign In
              </button>
            </div>

            <div className="font-semibold text-center ">
              <NavLink to="/signup">
                <button>Create New Account</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Login };
