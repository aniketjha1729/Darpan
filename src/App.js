import React from "react";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import "./App.scss";
function App() {
  return (
    <div className="container">
      <div className="container-wrapper">
        <Hero />
        <AboutMe />
        <Experience />
        <Portfolio/>  
        <ContactMe/>
      </div>
    </div>
  );
}

export default App;
