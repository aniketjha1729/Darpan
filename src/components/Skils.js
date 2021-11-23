import React from "react";
import "./skills.css";
import { Doughnut, Bar, Line } from "react-chartjs-2";

const Skils = () => {
  return (
    <div className="skillContainer container">
      <div className="skillHeading">
        <b>
          <u>Skills & Technology</u>
        </b>
      </div>
      <div className="donutContainer">
        <div className="donut">
          <div>
            <Doughnut
              data={{
                datasets: [
                  {
                    data: [40, 60],
                    backgroundColor: ["rgb(240,248,255)", "rgb(40,76,91)"],
                    borderColor: [
                      "rgba(240, 248, 255, 1)",
                      "rgba(240, 248, 255, 1)",
                    ],
                    borderWidth: 2,
                  },
                ],
              }}
            />
          </div>
          <div className="text-center">
            <b>Springboot</b>
          </div>
        </div>
        <div className="donut">
          <div>
            <Doughnut
              data={{
                datasets: [
                  {
                    data: [85, 15],
                    backgroundColor: ["rgb(240,248,255)", "rgb(37,68,80)"],
                    borderColor: [
                      "rgba(240, 248, 255, 1)",
                      "rgba(240, 248, 255, 1)",
                    ],
                    borderWidth: 2,
                  },
                ],
              }}
            />
          </div>
          <div className="text-center">
            <b>NodeJs</b>
          </div>
        </div>
        <div className="donut">
          <div>
            <Doughnut
              data={{
                datasets: [
                  {
                    data: [80, 20],
                    backgroundColor: ["rgb(240,248,255)", "rgb(33,60,70)"],
                    borderColor: [
                      "rgba(240, 248, 255, 1)",
                      "rgba(240, 248, 255, 1)",
                    ],

                    borderWidth: 2,
                  },
                ],
              }}
            />
          </div>
          <div className="text-center">
            <b>ReactJs</b>
          </div>
        </div>
        <div className="donut">
          <div>
            <Doughnut
              data={{
                datasets: [
                  {
                    data: [57, 43],
                    backgroundColor: ["rgb(240,248,255)", "rgb(28,52,60)"],
                    borderColor: [
                      "rgba(240, 248, 255, 1)",
                      "rgba(240, 248, 255, 1)",
                    ],

                    borderWidth: 2,
                  },
                ],
              }}
            />
          </div>
          <div className="text-center">
            <b>Python</b>
          </div>
        </div>
        <div className="donut">
          <div>
            <Doughnut
              data={{
                datasets: [
                  {
                    data: [87, 13],
                    backgroundColor: ["rgb(240,248,255)", "rgb(22,43,51)"],
                    borderColor: [
                      "rgba(240, 248, 255, 1)",
                      "rgba(240, 248, 255, 1)",
                    ],
                    borderWidth: 2,
                  },
                ],
              }}
            />
          </div>
          <div className="text-center">
            <b>Javascript</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skils;
