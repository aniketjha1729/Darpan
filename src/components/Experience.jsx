import React, { useState } from "react";
import "./experience.scss";
import SkillCard from "./SkillCard";

const Experience = () => {
  const [frontEnd, setFrontEnd] = useState([
    {
      name: "HTML",
      rating: 9,
    },
    {
      name: "CSS",
      rating: 8,
    },
    {
      name: "JavaScript",
      rating: 8,
    },
    {
      name: "Bootstrap",
      rating: 7,
    },
    {
      name: "MaterialUI",
      rating: 6,
    },
    {
      name: "React",
      rating: 7,
    },
  ]);
  const [backEnd, setBackEnd] = useState([
    {
      name: "NodeJs",
      rating: 8,
    },
    {
      name: "MongoDB",
      rating: 7,
    },
    {
      name: "MySQL",
      rating: 8,
    },
    {
      name: "Pyhon",
      rating: 8,
    },
    {
      name: "SpringBoot",
      rating: 8,
    },
  ]);
  return (
    <div className="sectionEx-container">
      <div className="title-header">
        <div>What Skills I Have</div>
        <div>My Skills & Experience</div>
      </div>
      <div className="expCard-container">
        <SkillCard heading="FrontEnd Development" data={frontEnd} />
        <SkillCard heading="BackEnd Development" data={backEnd} />
      </div>
    </div>
  );
};

export default Experience;
