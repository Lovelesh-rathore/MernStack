import React from "react";

const Projects = () => {
  return (
    <>
      <div id="Project" className="m-4 h-75 d-flex flex-column justify-content-center">
        <div id="c-i" className="bg-light rounded-3 p-5">
          <div id="c-head">
            <h3 className="bg-dark p-2 text-white rounded">Projects</h3>
          </div>
          <div id="c-cont" className="bg-white border p-3 rounded-2">
            <h6>
              <strong>Cupid’s Crew</strong>
            </h6>
            <ul>
              <li>
                Developed a fullstack responsive Online Wedding Planner website
                with a modern UI
              </li>
              <li>
                Focused on user experience (UX) and mobile optimization to
                ensure a seamless experience across devices.
              </li>
              <li>
                Integrated features like online booking, customer inquiry forms,
                and vendor management dashboards.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
