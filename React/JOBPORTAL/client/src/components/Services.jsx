import React from 'react'
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
        <div id="text" className='headings text-center grid gap-6 mt-[30vh] mb-30'>
            <span className='text-pink-500'>FEATURED TOURS PACKAGES</span>
            <h2 className='text-5xl font-mulish'>Browse Top Categories </h2>
        </div>
        <div id="components" className='flex flex-wrap justify-center mx-[10vw]'>
            <div id="comp" className='flex border border-[#dafcef] rounded-2xl hover:text-pink-500 flex-col p-[3vw] m-[2vw] gap-3 text-center'>
                <FaUserGraduate className=' text-5xl mx-auto' />
                <a href="#">Design & Creative</a>
                <span>(630)</span>
            </div>
            <div id="comp" className='flex  border border-[#dafcef] rounded-2xl hover:text-pink-500 flex-col p-[3vw] m-[2vw] gap-3 text-center'>
                <MdOutlineDesignServices className=' text-5xl mx-auto' />
                <a href="#">Design & Development</a>
                <span>(630)</span>
            </div>
            <div id="comp" className='flex  border border-[#dafcef] rounded-2xl hover:text-pink-500 flex-col p-[3vw] m-[2vw] gap-3 text-center'>
                <IoBagHandle className=' text-5xl mx-auto' />
                <a href="#">Sales & Marketing</a>
                <span>(630)</span>
            </div>
            <div id="comp" className='flex  border border-[#dafcef] rounded-2xl hover:text-pink-500 flex-col p-[3vw] m-[2vw] gap-3 text-center'>
                <FaMobileScreenButton className=' text-5xl mx-auto' />
                <a href="#">Mobile Application</a>
                <span>(630)</span>
            </div>
            <div id="comp" className='flex border border-[#dafcef] rounded-2xl hover:text-pink-500 flex-col p-[3vw] m-[2vw] gap-3 text-center'>
                <LuConstruction className=' text-5xl mx-auto' />
                <a href="#">Construction</a>
                <span>(630)</span>
            </div>
            <div id="comp" className='flex  border border-[#dafcef] rounded-2xl hover:text-pink-500 flex-col p-[3vw] m-[2vw] gap-3 text-center'>
                <GrTechnology className=' text-5xl mx-auto' />
                <a href="#">Information Technology</a>
                <span>(630)</span>
            </div>
            <div id="comp" className='flex  border border-[#dafcef] rounded-2xl hover:text-pink-500 flex-col p-[3vw] m-[2vw] gap-3 text-center'>
                <MdOutlineRealEstateAgent className=' text-5xl mx-auto' />
                <a href="#">Real Estate</a>
                <span>(630)</span>
            </div>
            <div id="comp" className='flex  border border-[#dafcef] rounded-2xl hover:text-pink-500 flex-col p-[3vw] m-[2vw] gap-3 text-center'>
                <TbWriting className=' text-5xl mx-auto' />
                <a href="#">Content Writer</a>
                <span>(630)</span>
            </div>
        </div>
        <div id="btn"></div>
    </div>
    </>
  )
}

export default Services