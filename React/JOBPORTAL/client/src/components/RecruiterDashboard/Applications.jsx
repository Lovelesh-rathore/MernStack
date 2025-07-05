import React from "react";

const Applications = () => {
  const jobItems = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div id="main-cont" className="grid gap-[5vh] m-5">
        <div id="appliedJobs-cont" className="flex flex-col gap-10">
          <h3 className="font-bold text-2xl">Applied Jobs</h3>
          <div id="job-list" className="flex flex-col gap-[3vh]">
            {jobItems.map((items) => (
              <div
                key={items}
                id="items"
                className="bg-white rounded-2xl p-4 flex"
              >
                <div id="content" className="w-9/10">
                  <p className="font-medium">Senior Frontend Developer</p>
                  <p className="text-gray-500">Google Inc.</p>
                  <p className="text-gray-500">Applied on: 15 July 2025</p>
                </div>
                <div id="button" className="flex items-center">
                  <button className="bg-indigo-200 text-indigo-800 px-3 py-1.5 rounded-2xl">
                    In Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Applications;
