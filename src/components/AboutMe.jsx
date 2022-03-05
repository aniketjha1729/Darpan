import React from "react";
import Avtar from "../assets/Avtar.png";
import Button from "@mui/material/Button";
import "./aboutMe.scss";
import Badge from "./Badge";

const AboutMe = () => {
  return (
    <div className="section-container">
      <div className="title-header">
        <div>Get To Know</div>
        <div>About Me</div>
      </div>
      <div className="about-body">
        <div className="about-leftContainer">
          <div className="backCard"></div>
          <div className="frontCard">
            <img src={Avtar} alt="" />
          </div>
        </div>
        <div className="about-rightContainer">
          <div className="badge-container">
            <Badge
              icon="LocalPoliceIcon"
              title="Experience"
              body="3+ Years Working"
            />
            <Badge
              icon="PeopleAltIcon"
              title="Clients"
              body="10+ Worldwide"
            />
            <Badge
              icon="AccountTreeIcon"
              title="Experience"
              body="30+ Completed"
            />
          </div>
          <div className="about-intro">
            Hi, I am Aniket Kumar, a Computer Science Engineer, graduate from
            NSEC (2021). My primary skills include coding in Python, Java, and
            JavaScript. I have a sound knowledge of web development and I have
            been in this field for around 3 years now. I have developed various
            web applications using the latest technologies such as React,
            NodeJs, MongoDB, and Firebase.
          </div>
          <div>
            <Button variant="contained">Let's Talk</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
