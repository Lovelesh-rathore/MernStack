import React from "react";
import logo from "../assets/logo.png";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <>
      <nav className=" flex justify-between items-center w-[92%] mx-auto py-4">
        <div>
          <img src={logo} alt="logo" className="w-30" />
        </div>
        <div className=" md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] w-full flex items-center px-5 md:w-auto">
          <ul className=" flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className=" hover:text-pink-500" href="#">
                Home
              </a>
            </li>
            <li>
              <a className=" hover:text-pink-500" href="#">
                Find a Job
              </a>
            </li>
            <li>
              <a className=" hover:text-pink-500" href="#">
                About
              </a>
            </li>
            <li>
              <a className=" hover:text-pink-500" href="#">
                Page
              </a>
            </li>
            <li>
              <a className=" hover:text-pink-500" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-black">
            Sign in
          </button>
          <button className="bg-white text-pink-500 px-5 py-2 rounded-full hover:bg-pink-500 border border-pink-500 hover:text-white">
            Login
          </button>
          <MdMenu className=" text-3xl cursor-pointer md:hidden" />
        </div>
      </nav>
    </>
  );
};

export default Header;
