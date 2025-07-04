import React from "react";

const Certification = () => {
  return (
    <>
      <div id="Certifications" className="m-4 h-75 d-flex flex-column justify-content-center">
        <div id="c-i" className="bg-light rounded-3 p-5">
          <div id="c-head">
            <h3 className="bg-dark p-2 text-white rounded">Certifications</h3>
          </div>
          <div id="c-cont" className="bg-white border p-3 rounded-2">
            <ul>
              <li>Infosys- Java Programming Fundamentals</li>
              <li> Infosys- Database Management System</li>
              <li>GDSC- Web Development (Frontend Mastery)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certification;
