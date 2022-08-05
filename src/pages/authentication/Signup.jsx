import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { signUpUser } from "./authSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userIpt, setUserIpt] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const iptHandler = (e) => {
    const { id, value } = e.target;
    setUserIpt((prev) => ({ ...prev, [id]: value }));
  };

  const checkInputFields = () => {
    return (
      userIpt.email !== "" &&
      userIpt.password !== "" &&
      userIpt.confirmPassword !== ""
    );
  };

  const checkPassword = () => {
    if (userIpt.password !== userIpt.confirmPassword) {
    } else {
      return true;
    }
  };

  const signUpHandler = async (e) => {
    e.preventDefault();
    if (checkInputFields()) {
      if (checkPassword()) {
        const { payload } = await dispatch(signUpUser(userIpt));
        if (payload.status === 201) {
          navigate("/");
        }
      } else {
        toast.warning("Password doesn't match");
      }
    } else {
      toast.warning("Enter all fields");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center bg-sky-50 ">
      <div className="w-2/5 sm:max-w-xl mx-auto text-center sm:w-11/12 py-3 flex justify-center">
        <div className="mt-4 bg-white w-3/4 shadow-md rounded-lg text-left">
          <div className="h-2 bg-blue-400 rounded-t-md"></div>
          <div className="flex flex-col justify-center py-2 gap-2 items-center">
            <p className="text-blue-400 title text-3xl font-bold font-serif">
              Make Friends
            </p>
          </div>
          <div className="px-5 py-2 pb-7 sm:px-6">
            <h2 className="text-2xl flex justify-center font-semibold border-b-2 border-blue-400 pb-2 sm:text-xl">
              Sign Up
            </h2>
            <div className="pt-5">
              <div>
                <label htmlFor="firstName" className="block font-semibold">
                  First Name:
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={userIpt.firstName}
                  onChange={iptHandler}
                  className=" border w-full h-5 px-3 py-5 mb-2 mt-1 hover:outline-none focus:outline-none rounded-md sm:py-4"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block font-semibold ">
                  Last Name:
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={userIpt.lastName}
                  onChange={iptHandler}
                  className=" border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none rounded-md sm:py-4"
                />
              </div>
              <div>
                <label htmlFor="username" className="block font-semibold mt-5">
                  Username or Email:
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={userIpt.username}
                  onChange={iptHandler}
                  className=" border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none rounded-md sm:py-4"
                />
              </div>
              <div>
                <label htmlFor="password" className="block font-semibold mt-5">
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={userIpt.password}
                  onChange={iptHandler}
                  className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none rounded-md sm:py-4"
                />
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block font-semibold mt-5"
                  >
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    value={userIpt.confirmPassword}
                    onChange={iptHandler}
                    className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none rounded-md sm:py-4"
                  />
                </div>
              </div>
              <button
                onClick={signUpHandler}
                className="font-semibold w-full my-6 bg-blue-400 text-white px-7 rounded-lg hover:bg-slate-300 hover:text-black  py-2"
              >
                Sign Up
              </button>
              <div className="font-semibold text-center">
                <NavLink to="/login">
                  <button>Already have an account</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Signup };
