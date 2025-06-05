import React from "react";

const Slider = () => {
  return (
    <>
      <div className=' bg-[url("h1_hero.jpg")] bg-cover bg-center h-[90vh]'>
          <div id="cont-out" className="flex flex-col h-[100%] justify-end gap-[10vh] pb-[15vh] pl-[20vh]">
            <div id="text" className="text-7xl w-[31.5vw] font-mulish text-blue-950">
              <h1>Find the most exciting startup jobs</h1>
            </div>
            <div id="srcBar" className=" text-1rem">
              <input type="text" className="bg-white p-4" placeholder="Job Tittle or keyword" />
              <select name="location" className="bg-white p-4 font-thin px-20">
                <option className=" font-thin">Location BD</option>
                <option className=" font-thin">Location UK</option>
                <option className=" font-thin">Location US</option>
                <option className=" font-thin">Location Pk</option>
              </select>
              <button className="bg-pink-500 text-white hover:bg-black p-4">
                Find Job
              </button>
            </div>
          </div>
      </div>
    </>
  );
};

export default Slider;
