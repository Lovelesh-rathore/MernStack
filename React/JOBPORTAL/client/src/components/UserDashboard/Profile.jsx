import React, { useEffect, useState  } from "react";

const Profile = () => {
  const [data, setData] = useState(JSON.parse(sessionStorage.getItem("user")));

  return (
    <>
      <h1 className="m-7 font-bold text-2xl">My Profile</h1>
      <div
        id="out-container"
        className="bg-white p-5 m-5 grid gap-10 rounded-3xl "
      >
        <div id="inter-cont-1" className=" flex gap-10 items-center">
          <div>
            <img src={data.photo} className=" w-20 h-20 rounded-full object-cover" alt="" />
          </div>
          <div id="cont-text" className="flex flex-col">
            <h3>{data.firstName} {data.lastName}</h3>
            <p>Frontend Developer</p>
          </div>
        </div>
        <div id="inner-cont-2" className="grid grid-cols-2 gap-4">
          <div className="cont-1">
            <h4 className="font-semibold mb-2">Contact Information</h4>
            <p className="text-gray-600">Email: {data.email}</p>
            <p className="text-gray-600">Phone: {data.phone}</p>
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
