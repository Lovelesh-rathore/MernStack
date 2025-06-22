import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import UserDashboard from "./pages/Dashboard/userDashboard"
import RecruiterDashboard from "./pages/Dashboard/RecruiterDashboard";
import AdminDashboard from "./pages/Dashboard/adminDashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/userDashboard" element={<UserDashboard />}/>
            <Route path="/recruiterDashboard" element={<RecruiterDashboard />}/>
            <Route path="/admindashboard" element={<AdminDashboard />}/>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
