import logo from "../../Assets/Friends.png";
const Signup = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center bg-slate-100">
      <div className="w-full px-5 mx-auto text-center sm:max-w-xl">
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="h-2 bg-blue-500 rounded-t-md"></div>
          <div className="flex justify-center py-5 gap-4 items-center">
            <img src={logo} className="h-10" />
            <p className="text-blue-400 title text-3xl font-bold font-serif">
              Make Friends
            </p>
          </div>
          <div className="px-12 py-4 pb-8 sm:px-6">
            <h2 className="text-2xl flex justify-center font-semibold border-b-2 border-blue-400 pb-2 sm:text-xl">
              Sign Up
            </h2>
            <div className="pt-8">
              <div className="flex flex-col gap-5">
                <div>
                  <label htmlFor="" className="block font-semibold">
                    First Name:
                  </label>
                  <input
                    type="text"
                    className=" border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md sm:py-4"
                  />
                </div>
                <div>
                  <label htmlFor="" className="block font-semibold ">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    className=" border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md sm:py-4"
                  />
                </div>
              </div>
              <label htmlFor="" className="block font-semibold mt-5">
                Username or Email:
              </label>
              <input
                type="text"
                name=""
                id=""
                className=" border w-full h-5 px-3 py-5 mt-1 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md sm:py-4"
              />
              <label htmlFor="" className="block font-semibold mt-5">
                Password:
              </label>
              <input
                type="text"
                name=""
                id=""
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md sm:py-4"
              />

              <label htmlFor="" className="block font-semibold mt-5">
                Confirm Password:
              </label>
              <input
                type="text"
                name=""
                id=""
                className=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-400 rounded-md sm:py-4"
              />
            </div>

            <div>
              <button className="font-semibold w-full my-6 bg-blue-400 text-white px-7 rounded-lg hover:bg-blue-500 py-2">
                Sign in with Text Credential
              </button>
            </div>
            <div className="font-semibold text-center">
              <button>Create New Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Signup };
