import React from "react";

const Application = () => {
  return (
    <>
      <div id="main-cont" className="grid gap-[5vh] m-5">
        <div id="appliedJobs-cont" className="flex flex-col gap-10 ">
          <h3 className=" font-bold text-2xl">Applied Jobs</h3>
          <div id="job-list" className=" flex flex-col gap-[3vh]">
            <div id="items" className=" bg-white rounded-2xl p-4 flex">
              <div id="content" className=" w-9/10">
                <p className="font-medium">Senior Frontend Devloper</p>
                <p className=" text-gray-500">Google inc.</p>
                <p className=" text-gray-500">Applied on : 15 july 2025</p>
              </div>
              <div id="button" className=" flex items-center">
                <button className=" bg-indigo-200 text-indigo-800 px-3 py-1.5 rounded-2xl">
                    In Review
                </button>
              </div>
            </div>
            <div id="items" className=" bg-white rounded-2xl p-4 flex">
              <div id="content" className=" w-9/10">
                <p className="font-medium">Senior Frontend Devloper</p>
                <p className=" text-gray-500">Google inc.</p>
                <p className=" text-gray-500">Applied on : 15 july 2025</p>
              </div>
              <div id="button" className=" flex items-center">
                <button className=" bg-indigo-200 text-indigo-800 px-3 py-1.5 rounded-2xl">
                    In Review
                </button>
              </div>
            </div>
            <div id="items" className=" bg-white rounded-2xl p-4 flex">
              <div id="content" className=" w-9/10">
                <p className="font-medium">Senior Frontend Devloper</p>
                <p className=" text-gray-500">Google inc.</p>
                <p className=" text-gray-500">Applied on : 15 july 2025</p>
              </div>
              <div id="button" className=" flex items-center">
                <button className=" bg-indigo-200 text-indigo-800 px-3 py-1.5 rounded-2xl">
                    In Review
                </button>
              </div>
            </div>
            <div id="items" className=" bg-white rounded-2xl p-4 flex">
              <div id="content" className=" w-9/10">
                <p className="font-medium">Senior Frontend Devloper</p>
                <p className=" text-gray-500">Google inc.</p>
                <p className=" text-gray-500">Applied on : 15 july 2025</p>
              </div>
              <div id="button" className=" flex items-center">
                <button className=" bg-indigo-200 text-indigo-800 px-3 py-1.5 rounded-2xl">
                    In Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Application;
