import React from "react";

const Home = () => {
  return (
    <>
      <div
        id="about"
        className="m-4 h-75 d-flex flex-column justify-content-center"
      >
        <div id="cont-in" className="bg-light rounded-3 p-5">
          <div id="ci-head">
            <h3 className="bg-dark p-2 text-white rounded">Home</h3>
          </div>
          <div id="ci-cont" className="bg-white border p-3 rounded-2">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis,
              soluta minima perspiciatis itaque rerum natus. Porro, maxime vitae
              exercitationem, similique dolores inventore repellat aut
              repellendus sequi nam laborum? Minima, incidunt.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
