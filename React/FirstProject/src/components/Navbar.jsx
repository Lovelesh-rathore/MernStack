import React from "react";

// function Navbar() {
//   return (
//     <>
//       {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
//         <a className="navbar-brand" href="#">
//           Resume
//         </a>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav mr-auto">
//             <li className="nav-item active">
//               <a className="nav-link" href="#">
//                 Education
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Skills
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Certifications
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Project
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link" href="#">
//                 Languages
//               </a>
//             </li>
//           </ul>
//         </div>
//       </nav> */}

      
//     </>
//   );
// }

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 px-3 sticky-top top-0" style={{fontSize:"2.5vh"}}>
        <a className="navbar-brand" href="#">
          Resume
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#about">
                About <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Education">
                Education
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Certifications">
                Certifications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Project">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Languages">
                Languages
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
