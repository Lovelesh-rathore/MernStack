import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/jobs" element={<Jobs/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
