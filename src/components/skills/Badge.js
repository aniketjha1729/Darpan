import React from "react";
import "./skills.css";
import { Doughnut, Bar, Line } from "react-chartjs-2";

const Badge = (props) => {
  return (
    <div className="donut">
      <div>
        <Doughnut
          data={{
            datasets: [
              {
                data: [props.dataComplete, props.dataLeft],
                backgroundColor: ["rgb(240,248,255)", props.badgeFillColor],
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
