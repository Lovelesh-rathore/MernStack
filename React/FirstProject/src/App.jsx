import react from "react";
import Navbar from "./components/Navbar";
import ResumeSum from "./components/ResumeSum";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Lang from "./components/Lang";
import Certifications from './components/Certifications'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';

function App(){
  return(
    <>
      <Navbar/>
      <ResumeSum/>
      <Education/>
      <Skills/>
      <Certifications/>
      <Projects/>
      <Lang/>
    </>
  )

}

export default App;