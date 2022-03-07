import React, { useState } from "react";
import "./experience.scss";
import SkillCard from "./SkillCard";

const Experience = () => {
  const [frontEnd, setFrontEnd] = useState([
    {
      name: "HTML",
      rating: 9,
      mRating:4.5
    },
    {
      name: "CSS",
      rating: 8,
      mRating:4
    },
    {
      name: "JavaScript",
      rating: 8.5,
      mRating:4
    },
    {
      name: "Bootstrap",
      rating: 7,
      mRating:3.5
    },
    {
      name: "MaterialUI",
      rating: 6,
      mRating:3
    },
    {
      name: "React",
      rating: 7,
      mRating:3.5
    },
  ]);
  const [backEnd, setBackEnd] = useState([
    {
      name: "NodeJs",
      rating: 8,
      mRating:4
    },
    {
      name: "MongoDB",
      rating: 7,
      mRating:3
    },
    {
      name: "MySQL",
      rating: 4,
      mRating: 3,
    },
    {
      name: "Pyhon",
      rating: 6,
      mRating: 3,
    },
    {
      name: "SpringBoot",
      rating: 7,
      mRating: 3.5,
    },
  ]);
  return (
    <div data-aos="fade-up" className="section-container ">
      <div className="title-header">
        <div>What Skills I Have</div>
        <div>My Skills & Experience</div>
      </div>
      <div className="expCard-container">
        <SkillCard heading="FrontEnd Development" data={frontEnd} setFrontEnd={setFrontEnd} />
        <SkillCard heading="BackEnd Development" data={backEnd} setBackEnd={setBackEnd} />
      </div>
    </div>
  );
};

export default Experience;
