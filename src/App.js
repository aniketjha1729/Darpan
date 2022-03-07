import React, { useEffect } from "react";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="container">
      <div className="container-wrapper">
        <Hero />
        <AboutMe />
        <Experience />
        <Portfolio />
        <ContactMe />
      </div>
    </div>
  );
};

export default App;
