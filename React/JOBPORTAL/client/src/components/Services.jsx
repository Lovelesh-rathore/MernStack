import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoBagHandle } from "react-icons/io5";
import { FaMobileScreenButton } from "react-icons/fa6";
import { LuConstruction } from "react-icons/lu";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineRealEstateAgent } from "react-icons/md";
import { TbWriting } from "react-icons/tb";

const Services = () => {
  return (
    <>
      <div id="cont-main">
        <div
          id="text"
          className="headings text-center grid gap-6 mt-[30vh] mb-30"
        >
          <span className="text-pink-500">FEATURED TOURS PACKAGES</span>
          <h2 className="text-5xl font-mulish">Browse Top Categories </h2>
        </div>
        <div
          id="components"
          className="grid grid-cols-4 mx-[10vw]"
        >
          <div
            id="comp"
            className="flex border border-[#dafcef] rounded-2xl hover:text-pink-500 flex-col p-[3vw] m-[2vw] gap-3 text-center hover:shadow-xl"
          >
            <FaUserGraduate className=" text-5xl mx-auto" />
            <a href="#">Design & Creative</a>
            <span>(630)</span>
          </div>
          <div
            id="comp"
            className="flex  border border-[#dafcef] rounded-2xl hover:text-pink-500 flex-col p-[3vw] m-[2vw] gap-3 text-center hover:shadow-xl"
          >
            <MdOutlineDesignServices className=" text-5xl mx-auto" />
            <a href="#">Design & Development</a>
            <span>(630)</span>
          </div>
          <div
            id="comp"
            className="flex  border border-[#dafcef] rounded-2xl hover:text-pink-500 flex-col p-[3vw] m-[2vw] gap-3 text-center hover:shadow-xl"
          >
            <IoBagHandle className=" text-5xl mx-auto" />
            <a href="#">Sales & Marketing</a>
            <span>(630)</span>
          </div>
          <div
            id="comp"
            className="flex  border border-[#dafcef] rounded-2xl hover:text-pink-500 flex-col p-[3vw] m-[2vw] gap-3 text-center hover:shadow-xl"
          >
            <FaMobileScreenButton className=" text-5xl mx-auto" />
            <a href="#">Mobile Application</a>
            <span>(630)</span>
          </div>
          <div
            id="comp"
            className="flex border border-[#dafcef] rounded-2xl hover:text-pink-500 flex-col p-[3vw] m-[2vw] gap-3 text-center hover:shadow-xl"
          >
            <LuConstruction className=" text-5xl mx-auto" />
            <a href="#">Construction</a>
            <span>(630)</span>
          </div>
          <div
            id="comp"
            className="flex  border border-[#dafcef] rounded-2xl hover:text-pink-500 flex-col p-[3vw] m-[2vw] gap-3 text-center hover:shadow-xl"
          >
            <GrTechnology className=" text-5xl mx-auto" />
            <a href="#">Information Technology</a>
            <span>(630)</span>
          </div>
          <div
            id="comp"
            className="flex  border border-[#dafcef] rounded-2xl hover:text-pink-500 flex-col p-[3vw] m-[2vw] gap-3 text-center hover:shadow-xl"
          >
            <MdOutlineRealEstateAgent className=" text-5xl mx-auto" />
            <a href="#">Real Estate</a>
            <span>(630)</span>
          </div>
          <div
            id="comp"
            className="flex  border border-[#dafcef] rounded-2xl hover:text-pink-500 flex-col p-[3vw] m-[2vw] gap-3 text-center hover:shadow-xl"
          >
            <TbWriting className=" text-5xl mx-auto" />
            <a href="#">Content Writer</a>
            <span>(630)</span>
          </div>
        </div>
        <div id="btn" className="flex justify-center my-30">
            <button className="bg-white text-[#8b92dd] py-5 px-15 hover:bg-[#8b92dd] border border-[#8b92dd] hover:text-white">BROWSE ALL SECTORS</button>
        </div>
      </div>
    </>
  );
};

export default Services;
