import React from "react";
import Avtar from "../assets/Avtar.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-name">Aniket Kumar</div>
      <div className="hero-intro">
        <div>
          CSE graduate served fresh with a delicious topping of Web Development,
          flavored strongly with love for fast growing startups.
        </div>
      </div>
      <div className="hero-buttons">
        <div>
          <Button variant="outlined">Download CV</Button>
          <Button variant="contained">Let's Talk</Button>
        </div>
      </div>
      <div className="hero-social">
        <div className="hero-social-left">
          <FacebookIcon
            sx={{ fontSize: 45 }}
            style={{ marginBottom: "10px" }}
          />
          <LinkedInIcon
            sx={{ fontSize: 45 }}
            style={{ marginBottom: "10px" }}
          />
          <InstagramIcon
            sx={{ fontSize: 45 }}
            style={{ marginBottom: "10px" }}
          />
          <TwitterIcon sx={{ fontSize: 45 }} style={{ marginBottom: "10px" }} />
          <GitHubIcon sx={{ fontSize: 45 }} style={{ marginBottom: "10px" }} />
        </div>
        <div className="hero-social-middle">
          <div className="avtar-container">
            <img src={Avtar} alt="" srcset="" />
          </div>
        </div>
        <div className="hero-social-right">
          <KeyboardArrowDownIcon
            sx={{ fontSize: 45 }}
            style={{ marginBottom: "10px" }}
          />
          <KeyboardArrowDownIcon
            sx={{ fontSize: 45 }}
            style={{ marginBottom: "10px" }}
          />
          <KeyboardArrowDownIcon
            sx={{ fontSize: 45 }}
            style={{ marginBottom: "10px" }}
          />
          <KeyboardArrowDownIcon
            sx={{ fontSize: 45 }}
            style={{ marginBottom: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
