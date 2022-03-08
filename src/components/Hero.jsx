import React from "react";
import Avtar from "../assets/Avtar.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import resume from "../assets/resume.pdf";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./hero.scss";
import Typical from "react-typical";

const Hero = () => {
  return (
    <div data-aos="fade-up" className="hero-container">
      <div className="hero-name">
        <div> Hello, I'm</div> <div> Aniket Kumar</div>
      </div>
      <div className="hero-intro">
        <div className="typical">
          <Typical
            loop={Infinity}
            steps={[
              "A Full Stack Developer 👨‍💻",
              1000,
              "Tech Enthusiast 🕵️‍♂️ ",
              1000,
              "A Photographer 📸",
              1000,
              "Cross Platform Developer",
              1000,
            ]}
          />
        </div>
        <div className="intro-content">
          CSE graduate served fresh with a delicious topping of Web Development,
          flavored strongly with love for fast growing startups.
        </div>
      </div>
      <div className="hero-buttons">
        <div>
          <a href={resume} download>
            <Button variant="outlined">Download CV</Button>
          </a>
          <Button variant="contained">Let's Talk</Button>
        </div>
      </div>
      <div className="hero-social">
        <div className="hero-social-left">
          <a href="https://www.facebook.com/aniketjha1729/">
            <FacebookIcon
              sx={{ fontSize: 45 }}
              style={{ marginBottom: "10px" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/aniketjha1729/">
            <LinkedInIcon
              sx={{ fontSize: 45 }}
              style={{ marginBottom: "10px" }}
            />
          </a>
          <a href="https://www.instagram.com/aniketjha1729/">
            <InstagramIcon
              sx={{ fontSize: 45 }}
              style={{ marginBottom: "10px" }}
            />
          </a>
          <a href="https://twitter.com/aniketjha1729">
            <TwitterIcon
              sx={{ fontSize: 45 }}
              style={{ marginBottom: "10px" }}
            />
          </a>
          <a href="https://github.com/aniketjha1729">
            <GitHubIcon
              sx={{ fontSize: 45 }}
              style={{ marginBottom: "10px" }}
            />
          </a>
        </div>
        <div className="hero-social-middle">
          <div className="avtar-container">
            <img src={Avtar} alt="" srcset="" />
          </div>
        </div>
        <div className="hero-social-right">
          {["", "", "", ""].map((data) => (
            <KeyboardArrowDownIcon
              sx={{ fontSize: 45 }}
              style={{ marginBottom: "10px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
