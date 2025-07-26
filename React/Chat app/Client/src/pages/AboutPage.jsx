import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-200">
      <h1 className="text-3xl font-bold mb-4">About This App</h1>
      <p className="text-lg max-w-xl text-center">
        This chat application is built using the MERN stack (MongoDB, Express.js, React, Node.js) with Tailwind CSS and daisyUI for a modern, responsive UI. Enjoy real-time messaging and seamless user experience!
      </p>
    </div>
  );
};

export default AboutPage;
