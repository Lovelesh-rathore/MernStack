import React from "react";
import logo from "../assets/logo2.png";
import { MdMenu } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();

  const {
    user,
    setUser,
    isLogin,
    isAdmin,
    isRecruiter,
    setIsLogin,
    setIsAdmin,
    setIsRecruiter,
  } = useAuth();

  const handleClick = () => {
    isRecruiter
      ? navigate("/recruiterDashboard")
      : isAdmin
      ? navigate("/adminDashboard")
      : navigate("/userDashboard");
  };

  return (
    <>
      <nav className=" flex justify-between items-center w-[92%] mx-auto py-4">
        <div>
          <img src={logo} alt="logo" className="w-30" />
        </div>
        <div className=" md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] w-full flex items-center px-5 md:w-auto">
          <ul className=" flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <Link to={"/"} className=" hover:text-pink-500">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/jobs"} className=" hover:text-pink-500">
                Find a Job
              </Link>
            </li>
            <li>
              <Link to={"/about"} className=" hover:text-pink-500">
                About
              </Link>
            </li>
            <li>
              <Link to={"/contacts"} className=" hover:text-pink-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {user ? (
          <button
            className="py-2 border px-4 text-black hover:bg-pink-300 hover:text-white rounded-xl flex gap-2 justify-center items-center"
            onClick={handleClick}
          >
            {" "}
            <img
              src={user.photo}
              alt=""
              className="h-10 w-10 object-cover rounded-full"
            />
            <span>My Profile</span>
          </button>
        ) : (
          <div className="flex items-center gap-6">
            <button
              className="bg-pink-500 text-white px-5 py-2 rounded-full hover:bg-pink-600"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
            <button
              className="bg-white text-pink-500 px-5 py-2 rounded-full hover:bg-pink-500 border border-pink-500 hover:text-white"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <MdMenu className=" text-3xl cursor-pointer md:hidden" />
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
