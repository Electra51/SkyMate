import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import AuthInstruction from "../../Components/Common/AuthInstruction";
import BreadCrum from "../../Components/Common/BreadCrum";

const LoginPage = () => {
  return (
    <div>
      <p className="font-medium text-xl uppercase  text-center tracking-[5px]  py-6 mt-40">
        Login
      </p>

      <div className=" border border-gray-200 shadow-sm rounded justify-center align-middle w-full grid grid-cols-2 gap-3 max-w-[350px] lg:max-w-[800px] mx-auto  py-6 ">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="" className="w-[120px] lg:w-[150px] mx-auto" />
          <BreadCrum prev={"Home"} still={"Login"} link={"/"} />
        </div>
        <form className="bg-white  border-0 border-l border-gray-200  px-8 pt-8 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-[15px] font-semibold mb-1"
              htmlFor="email">
              Email
            </label>
            <input
              className="appearance-none border rounded-[5px] w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[14px]"
              id="email"
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-[15px] font-semibold mb-1"
              htmlFor="password">
              Password
            </label>
            <input
              className="appearance-none border rounded-[5px] w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[14px]"
              id="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="flex justify-end mb-4">
            <Link
              to="/forgot-password"
              className="text-[14px] text-blue-600 cursor-pointer">
              Forgot Password?
            </Link>
          </div>
          <div className="flex flex-col items-center justify-center mt-5">
            <button
              className="bg-[#0077B6] hover:bg-[#C5A4EB] text-white font-medium py-1.5 px-4 rounded-[5px] focus:outline-none focus:shadow-outline w-full text-[15px]"
              type="submit">
              Log In
            </button>
            <AuthInstruction
              title={"Don't have an account?"}
              link={"/signup"}
              route_name={"Sign Up"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
