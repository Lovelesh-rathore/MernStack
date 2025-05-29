import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Home from "./Components/Home";

const App = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="d-flex">
        <section className="sidebar">
          <Sidebar />
        </section>
        <section className="homePage">
          <Home />
        </section>
      </main>
    </>
  );
};

export default App;
