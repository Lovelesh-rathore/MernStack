import React from "react";
import profile from "../assets/Profilep.JPG";
import { Link } from "react-router-dom";

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
            <li>
              <Link to="/" className=" text-decoration-none text-light">
                <i class="bi bi-house"></i> Home
              </Link>
            </li>
            <li>
              <Link to="/about" className=" text-decoration-none text-light">
                <i class="bi bi-person"></i> About
              </Link>
            </li>
            <li>
              <Link to="/education" className=" text-decoration-none text-light">
                <i class="bi bi-mortarboard"></i> Education
              </Link>
            </li>
            <li>
              <Link to="/projects" className=" text-decoration-none text-light">
                <i class="bi bi-person-gear"></i> Projects
              </Link>
            </li>
            <li>
              <Link to="/certifications" className=" text-decoration-none text-light">
                <i class="bi bi-patch-check"></i> Certifications
              </Link>
            </li>
            <li>
              <Link to="/contact" className=" text-decoration-none text-light">
                <i class="bi bi-telephone"></i> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
