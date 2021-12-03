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
        <Badge
          dataComplete={40}
          dataLeft={60}
          badgeFillColor="rgb(40,76,91)"
          skillName="Springboot"
        />
        <Badge
          dataComplete={85}
          dataLeft={15}
          badgeFillColor="rgb(37,68,80)"
          skillName="NodeJs"
        />
        <Badge
          dataComplete={80}
          dataLeft={20}
          badgeFillColor="rgb(33,60,70)"
          skillName="ReactJs"
        />
        <Badge
          dataComplete={57}
          dataLeft={43}
          badgeFillColor="rgb(28,52,60)"
          skillName="Python"
        />
        <Badge
          dataComplete={87}
          dataLeft={13}
          badgeFillColor="rgb(22,43,51)"
          skillName="Javascript"
        />
      </div>
    </div>
  );
};

export default Skils;
