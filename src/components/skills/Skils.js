import React from "react";
import "./skills.css";
import Badge from "./Badge";

const Skils = () => {
  return (
    <div className="skillContainer container">
      <div className="skillHeading">
        <b>
          <u>Skills & Technology</u>
        </b>
      </div>
      <div className="donutContainer">
        <Badge dataComplete={40} dataLeft={60} skillName="Springboot" />
        <Badge dataComplete={85} dataLeft={15} skillName="NodeJs" />
        <Badge dataComplete={80} dataLeft={20} skillName="ReactJs" />
        <Badge dataComplete={57} dataLeft={43} skillName="Python" />
        <Badge dataComplete={87} dataLeft={13} skillName="Javascript" />
      </div>
    </div>
  );
};

export default Skils;
