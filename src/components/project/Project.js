import React, { useState } from "react";
import { SliderData } from "./Slider";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./project.css";
const Project = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="projectContainer container">
      <div className="projectHeading">
        <b>
          <u>Projects & Open Source</u>
        </b>
      </div>
      <div className="sliderContainer">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && (
                <div className="cardContainer">
                  <div className="projectTitle text-center">
                    <strong>{slide.projectTile}</strong>
                  </div>
                  <div className="projectInfo">
                    <div className="projectPic">
                      <img src={slide.image} alt="" />
                    </div>
                    <div className="projectDescription text-center">
                      {slide.projectDecription}
                    </div>
                  </div>
                  <div className="githubLink text-center">
                    <a href={slide.github}>{slide.github}</a>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        <div className="dotContainer">
          {SliderData.map((grid, index) => (
            <div className="dotWrapper">
              <div className={index === current ? "dot fill" : "dot"}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
