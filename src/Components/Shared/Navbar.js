import React, { useState } from "react";
import logo from "../../Assets/logo.svg";
import { MdOutlineAccountCircle, MdSearch, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userDetails = localStorage.getItem("user");
  const menus = (
    <>
      <li>
        <a>Home</a>
      </li>

      <li>
        <a>Blogs</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );

  return (
    <div className="border border-green-50 py-1.5 shadow-sm">
      <div className="navbar lg:container container-small">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <MdMenu className="text-xl" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {menus}
            </ul>
          </div>
          <img src={logo} alt="" className="w-[100px] lg:w-[150px]" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menus}</ul>
        </div>
        <div className="navbar-end gap-6">
          <div className="justify-normal items-center relative  hidden lg:flex">
            <input
              type="text"
              className="px-2 py-1 h-9 border border-gray-200 rounded-full"
            />
            <MdSearch className="absolute top-2 right-3 text-xl" />
          </div>
          {/* <Link
            to="/login"
            className="flex justify-normal items-center gap-1 border border-gray-300 rounded-full px-3 py-1 shadow-sm cursor-pointer hover:bg-[#0077B6] hover:text-white hover:font-medium">
            <MdOutlineAccountCircle className="text-xl" />
            Login
          </Link> */}
          {!userDetails ? (
            <Link
              to="/login"
              className="flex justify-normal items-center gap-1 border border-gray-300 rounded-full px-3 py-1 shadow-sm cursor-pointer hover:bg-[#0077B6] hover:text-white hover:font-medium">
              <MdOutlineAccountCircle className="text-xl" />
              Login
            </Link>
          ) : (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="avatar placeholder cursor-pointer">
                {/* <div className="bg-[#FFF6D8] border border-[#e8cd75] rounded-full w-8">
                  <span className="text-xs">
                    {auth?.user?.name.substring(0, 1)}
                  </span>
                </div> */}
                <div className="flex justify-normal gap-2 items-center">
                  {" "}
                  <div className="h-[36px] w-[36px] rounded-full bg-[#FFF6D8] border border-[#e8cd75] flex justify-center items-center shadow-md">
                    {userDetails?.profileImage ? (
                      <img
                        src={userDetails?.profileImage}
                        alt=""
                        className="h-full w-full object-fill rounded-full"
                      />
                    ) : (
                      <p>{userDetails?.nickname?.substring(0, 1)}</p>
                    )}
                  </div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 py-2 shadow dropdown-content bg-base-100 rounded-md w-52">
                <li className="hover:bg-[#76C4EB] px-5 py-1 rounded-[4px]">
                  <Link to="/dashboard/profile" className="justify-between">
                    Profile
                  </Link>
                </li>
                <li className="hover:bg-[#76C4EB] px-5 py-1 rounded-[4px]">
                  <Link to="/dashboard/dashboard">Dashboard</Link>
                </li>
                <li
                  className="hover:bg-[#76C4EB] px-5 py-1 rounded-[4px]"
                  //   onClick={handleLogout}
                >
                  <Link to="/">Logout</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
