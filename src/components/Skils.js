import React from "react";
import "./skills.css";
const Skils = () => {
  return (
    <div className="skillContainer container">
      <div className="skillHeading">
        <b>
          <u>Skills & Technology</u>
        </b>{" "}
      </div>
      <div className="badgeContainer">
        <div className="box">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle
                cx="70"
                cy="70"
                r="70"
                style={{ strokeDashoffset: "calc(440 - (440 * 40) / 100)" }}
              ></circle>
            </svg>
            <div className="number" style={{ color: "aliceblue" }}>
              <h2>40%</h2>
            </div>
          </div>
          <h2 className="text" style={{ color: "aliceblue" }}>
            SpringBoot
          </h2>
        </div>
        <div className="box">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle
                cx="70"
                cy="70"
                r="70"
                style={{ strokeDashoffset: "calc(440 - (440 * 85) / 100)" }}
              ></circle>
            </svg>
            <div className="number" style={{ color: "aliceblue" }}>
              <h2>85%</h2>
            </div>
          </div>
          <h2 className="text" style={{ color: "aliceblue" }}>
            NodeJS
          </h2>
        </div>
        <div className="box">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle
                cx="70"
                cy="70"
                r="70"
                style={{ strokeDashoffset: "calc(440 - (440 * 80) / 100)" }}
              ></circle>
            </svg>
            <div className="number" style={{ color: "aliceblue" }}>
              <h2>80%</h2>
            </div>
          </div>
          <h2 className="text" style={{ color: "aliceblue" }}>
            ReactJs
          </h2>
        </div>
        <div className="box">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle
                cx="70"
                cy="70"
                r="70"
                style={{ strokeDashoffset: "calc(440 - (440 * 57) / 100)" }}
              ></circle>
            </svg>
            <div className="number" style={{ color: "aliceblue" }}>
              <h2>57%</h2>
            </div>
          </div>
          <h2 className="text" style={{ color: "aliceblue" }}>
            Python
          </h2>
        </div>
        <div className="box">
          <div className="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle
                cx="70"
                cy="70"
                r="70"
                style={{ strokeDashoffset: "calc(440 - (440 * 87) / 100)" }}
              ></circle>
            </svg>
            <div className="number" style={{ color: "aliceblue" }}>
              <h2>87%</h2>
            </div>
          </div>
          <h2 className="text" style={{ color: "aliceblue" }}>
            Javascript
          </h2>
        </div>
      </div>
      <div className="mobilebadgeContainer">
        <label htmlFor="">SpringBoot</label>
        <div
          className="progress"
          style={{ height: "40px", marginBottom: "15px" }}
        >
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "40%" }}
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            45%
          </div>
        </div>
        <label htmlFor="">NodeJs</label>
        <div
          className="progress"
          style={{ height: "40px", marginBottom: "15px" }}
        >
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "85%" }}
            aria-valuenow="85"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            85%
          </div>
        </div>
        <label htmlFor="">ReactJs</label>
        <div
          className="progress"
          style={{ height: "40px", marginBottom: "15px" }}
        >
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "80%" }}
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            80%
          </div>
        </div>
        <label htmlFor="">Python</label>
        <div
          className="progress"
          style={{ height: "40px", marginBottom: "15px" }}
        >
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "57%" }}
            aria-valuenow="57"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            57%
          </div>
        </div>
        <label htmlFor="">Javascript</label>
        <div
          className="progress"
          style={{ height: "40px", marginBottom: "15px" }}
        >
          <div
            className="progress-bar"
            role="progressbar"
            style={{ width: "87%" }}
            aria-valuenow="87"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            87%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
