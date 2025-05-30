import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Certifications from "./Components/certification";
import Contact from "./Components/contact";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <main className="d-flex">
          <section className="sidebar">
            <Sidebar />
          </section>
          <section className="homePage">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/education" element={<Education/>}/>
              <Route path="/projects" element={<Projects/>}/>
              <Route path="/certifications" element={<Certifications/>}/>
              <Route path="/contact" element={<Contact/>}/>
            </Routes>
          </section>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
