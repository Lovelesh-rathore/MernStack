import React, { useState } from "react";

const Contact = () => {
  const [comment, setComment] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setComment((prev) => ({ ...prev, [name]: value }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();

    console.log("comment: ", comment);
    

    setComment({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="cont-out d-flex justify-content-center bg-light rounded-4 h-75 m-5 p-5">
        <form className="d-flex flex-column gap-2 p-2" onSubmit={handelSubmit}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            className=" form-control"
            value={comment.name}
            onChange={handleChange}
          />

          <label>Email: </label>
          <input
            type="email"
            name="email"
            className=" form-control"
            value={comment.email}
            onChange={handleChange}
          />

          <label>Message: </label>
          <input
            type="text"
            name="message"
            className=" form-control"
            value={comment.message}
            onChange={handleChange}
          />

          <button className="btn btn-outline-dark mt-3">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
