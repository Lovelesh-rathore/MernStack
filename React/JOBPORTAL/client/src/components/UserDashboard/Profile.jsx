import React from "react";

const Profile = () => {
  return (
    <>
      <h1 className="m-7 font-bold text-2xl">My Profile</h1>
      <div id="out-container" className="bg-white p-5 m-5 grid gap-10 rounded-3xl ">
        <div id="inter-cont-1" className=" flex gap-10 items-center">
          <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
          <div id="cont-text" className="flex flex-col">
            <h3>Lovelesh Rathore</h3>
            <p>Frontend Developer</p>
          </div>
        </div>
        <div id="inner-cont-2" className="grid grid-cols-2 gap-4">
          <div className="cont-1">
            <h4 className="font-semibold mb-2">Contact Information</h4>
            <p className="text-gray-600">Email: Love@gmail.com</p>
            <p className="text-gray-600">Phone: 8770274164</p>
          </div>
          <div className="cont-2">
            <h4 className="font-semibold mb-2">Location</h4>
            <p className="text-gray-600">San Francisco, CA</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
