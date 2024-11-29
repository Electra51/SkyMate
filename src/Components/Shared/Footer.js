import React from "react";
import { FaFacebookF, FaMobile } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import logo from "../../Assets/logo.svg";
import { LuPhoneCall } from "react-icons/lu";

import { MdOutlineEmail } from "react-icons/md";
const Footer = () => {
  return (
    <div className="border-t border-[#ECECEC] pt-7">
      <div className="flex flex-col lg:flex-row justify-start items-center lg:items-start gap-[100px] max-w-[1400px] mx-auto pt-[79px] ">
        <div className="flex flex-col justify-center items-center lg:block">
          {/* <img src={navLogo} alt="" className="w-[120px] lg:w-[150px]" /> */}
          <img src={logo} alt="" className="w-[120px] lg:w-[150px]" />
          <h3 className="text-[#565656] text-[14px] mt-[27px] w-[333px] text-center lg:text-start mb-5">
            Departure defective arranging rapturous did believe him all had
            supported.
          </h3>
          <div className="flex justify-normal items-center gap-1 text-[#565656] text-[14px]">
            <LuPhoneCall /> +1234 568 963
          </div>
          <div className="flex justify-normal items-center gap-1 text-[#565656] text-[14px]">
            <MdOutlineEmail />
            example@gmail.com
          </div>
          <div className="flex justify-normal items-center gap-4 mt-[32px]">
            <div className="h-9 w-9 rounded-full bg-[#3B5998] flex justify-center items-center">
              <FaFacebookF className="text-white text-2xl" />
            </div>
            <div className="h-9 w-9 rounded-full bg-[#55acee] flex justify-center items-center">
              <FaTwitter className="text-white text-2xl" />
            </div>
            <div className="h-9 w-9 rounded-full bg-[#267ab9] flex justify-center items-center">
              <FaLinkedinIn className="text-white text-2xl" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 -mt-3 lg:mt-0 lg:flex gap-[50px] lg:gap-[80px]">
          <div className=" text-center lg:text-start">
            <h1 className="font-medium text-[18px] mt-1">Services</h1>
            <div className="leading-[30px] mt-[27px] font-normal text-[14px] text-[#4D5053]">
              <p>Flight Search</p>
              <p>Booking</p>
              <p>Management</p>
              <p>Plane Services</p>
              <p>Utility</p>
            </div>
          </div>
          <div className="text-center lg:text-start">
            <h1 className="font-medium text-[18px] mt-1">Pages</h1>
            <div className="leading-[30px] mt-[27px] font-normal text-[14px] text-[#4D5053]">
              <p>Home</p>
              <p>Flight</p>
              <p>Favorite</p>
              <p>Settings</p>
              <p>Profile</p>
            </div>
          </div>
          <div className="text-center lg:text-start">
            <h1 className="font-medium text-[18px] mt-1">Bookings</h1>
            <div className="leading-[30px] mt-[27px] font-normal text-[14px] text-[#4D5053]">
              <p>Hotal</p>
              <p>Flight</p>
              <p>Tour</p>
              <p>Cabs</p>
              <p>Location</p>
            </div>
          </div>
          <div className="w-[364px] sm:col-span-2 sm:mx-auto">
            {" "}
            <h1 className="font-medium text-[18px] mt-1">Newsletter</h1>
            <div className="leading-[30px] mt-[27px] font-normal text-[14px] text-[#4D5053]">
              <p>
                Skymate was founded in 1991 by a group of safety-focused
                professionals erators.
              </p>
              <input
                type="text"
                placeholder="Enter email"
                className="border border-gray-400 rounded-[5px] p-[7px] w-full mt-5"
              />
              <button className="bg-[#2D87C7] text-white rounded-[5px] p-[7px] w-full mt-4">
                Subscribe Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-[#A4A4A4] text-[14px] mt-[29px] lg:mt-[69px] border-t border-[#F4F4F4] pt-[15px] pb-6 text-center max-w-[1200px] mx-auto">
        Copyright © 2023 safayet
      </h3>
    </div>
  );
};

export default Footer;
