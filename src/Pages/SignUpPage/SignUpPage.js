import React, { useState } from "react";
import BreadCrum from "../../Components/Common/BreadCrum";
import AuthInstruction from "../../Components/Common/AuthInstruction";
import logo from "../../Assets/logo.svg";
const SignUpPage = () => {
  const [loading, setLoading] = useState(false);

  return (
    <div className="">
      <p className="font-medium text-xl uppercase  text-center tracking-[5px] py-6 mt-32">
        SignUp
      </p>
      <div className=" border border-gray-200 shadow-sm rounded justify-center align-middle w-full grid grid-cols-2 gap-3 max-w-[350px] lg:max-w-[800px] mx-auto  py-6 ">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="" className="w-[120px] lg:w-[150px] mx-auto" />
          <BreadCrum prev={"Home"} still={"SignUp"} link={"/"} />
        </div>
        <form className="bg-white  border-0 border-l border-gray-200  px-8 pt-8 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-[15px] font-semibold mb-1"
              htmlFor="name">
              Name
            </label>
            <input
              className="appearance-none border rounded-full w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[14px]"
              id="name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-[15px] font-semibold mb-1"
              htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[14px]"
              id="email"
              type="text"
              placeholder="Email"
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-[15px] font-semibold mb-1"
              htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded-full w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[14px]"
              id="password"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-[15px] font-semibold mb-1"
              htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              className="appearance-none border rounded-full w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[14px]"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
            />
          </div>

          <div className="flex flex-col items-center justify-center mt-5">
            <button
              className={`bg-[#0077B6] hover:bg-[#C5A4EB] text-white font-medium py-1.5 px-4 rounded-full focus:outline-none focus:shadow-outline w-full text-[15px] ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner loading-xs">
                  Loading{" "}
                </span>
              ) : (
                "Sign Up"
              )}
            </button>
            <AuthInstruction
              title={"Already have an account?"}
              link={"/login"}
              route_name={"Login"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
