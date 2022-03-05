import React from "react";
import Button from "@mui/material/Button";

const ProjectCard = (props) => {
  return (
    <div className="portfolio-card">
      <div className="projectImg">
        <img src={props.img} alt="" srcset="" />
      </div>
      <div className="projectTitle">{props.title}</div>
      <div className="projectCode">
        <a href={props.github}>
          <Button variant="outlined">Github</Button>
        </a>
        <Button variant="contained">Demo</Button>
      </div>
    </div>
  );
};

export default ProjectCard;
