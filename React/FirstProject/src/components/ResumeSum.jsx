import React from "react";

export default function ResumeSum() {
  return (
    <div id="about" className="m-4">
      <div id="cont-in" className="bg-light rounded-3 p-5">
        <div id="ci-head">
          <h3 className="bg-dark p-2 text-white rounded">About Me</h3>
        </div>
        <div id="ci-cont" className="bg-white border p-3 rounded-2">
          <p>Address: Bhopal, Madhya Pradesh</p>
          <p>Contact number: 8770274164</p>
          <p>Gmail: rathorelovlesh@gmail.com</p>
          <a className="text-decoration-none" href="https://www.linkedin.com/in/loveleshrathore/">Linkedln  <i class="bi bi-linkedin"></i></a>
          <br />
          <a className="text-decoration-none" href="https://github.com/Lovelesh-rathore">Github  <i class="bi bi-github"></i></a>
        </div>
      </div>
    </div>
  );
}
