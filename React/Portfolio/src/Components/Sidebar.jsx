import React from "react";
import profile from "../assets/Profilep.JPG";

const Sidebar = () => {
  return (
    <>
      <div className="container-fluid bg-dark text-white w-100 h-100">  
        <div className="container text-center">
          <img
            src={profile}
            alt="Profile"
            width={"200px"}
            height={"200px"}
            className=" rounded-circle object-fit-cover border border-white p-1"
          />
        </div>
        <div>
            <ul className=" list-unstyled p-lg-5 fs-5 d-grid gap-3"> 
                <li><i class="bi bi-house"></i> Home</li>
                <li><i class="bi bi-person"></i> About</li>
                <li><i class="bi bi-mortarboard"></i> Education</li>
                <li><i class="bi bi-person-gear"></i> Projects</li>
                <li><i class="bi bi-patch-check"></i> Certifications</li>
                <li><i class="bi bi-telephone"></i> Contact</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
