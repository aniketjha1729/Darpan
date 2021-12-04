import React, { useContext } from "react";
import "./skills.css";
import { Doughnut, Bar, Line } from "react-chartjs-2";
import { DarkContext } from "../../App";

const Badge = (props) => {
  const { state } = useContext(DarkContext);
  return (
    <div className="donut">
      <div>
        <Doughnut
          data={{
            datasets: [
              {
                data: [props.dataComplete, props.dataLeft],
                backgroundColor: [
                  "rgb(240,248,255)",
                  state?.darkMode ? "rgb(32,59,68)" : "rgb(0, 130, 200)",
                ],
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
        <b>{props.skillName}</b>
      </div>
    </div>
  );
};

export default Badge;
