import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [comment, setComment] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const {value, name} = e.target;

    setComment((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Comment: ", comment);

    setComment({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Login
          </h2>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={comment.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={comment.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="********"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 transition-colors font-semibold"
            >
              Login
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600 text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-pink-500 hover:underline">
              Register now
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
