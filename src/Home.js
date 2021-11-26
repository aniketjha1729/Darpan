import React from "react";
import "./home.css";
import Avtar from "./static/Avtar.png";
import Skils from "./components/Skils";
import Project from "./components/Project";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
const Home = () => {
  const myname = "Aniket";
  const myNameAnnimation = myname.split("");

  return (
    <div className="introContainer">
      <div className="avtarContainer">
        <img
          className="imageAvtart"
          src={Avtar}
          alt=""
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            marginTop: "60px",
          }}
        />
      </div>
      <div className="nameIntroContainer">
        <p className="nameIntro">Hi, I'm&nbsp;</p>

        {myNameAnnimation.map((n, key) => (
          <div key={key} className="nameIntroAnimate">
            {n}
          </div>
        ))}
      </div>
      <div className="briefIntro">
        <div>
          CSE graduate served fresh with a delicious topping of Web Development,
        </div>
        <div style={{ marginLeft: "13%" }}>
          flavored strongly with love for fast growing startups.
        </div>
      </div>

      <div className="briefIntroMobile">
        <div style={{ display: "flex", justifyContent: "center" }}>
          CSE graduate served fresh with a delicious topping
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          of Web Development,flavored strongly
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          with love for fast growing startups.
        </div>
      </div>

      <br />
      <div className="socialContainer">
        <div className="socialIconContainer">
          <div>
            <a href="https://www.facebook.com/aniketjha1729/">
              {" "}
              <FaFacebook size="55px" color="aliceblue" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/aniketjha1729/">
              <FaLinkedin size="55px" color="aliceblue" />
            </a>
          </div>
          <div>
            <a href="https://github.com/aniketjha1729/">
              <FaGithub size="55px" color="aliceblue" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/aniketjha1729/">
              <FaInstagram size="55px" color="aliceblue" />
            </a>
          </div>
        </div>
      </div>
      <Skils />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
