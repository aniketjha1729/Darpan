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
        <Button variant="outlined">Github</Button>
        <Button variant="contained">Demo</Button>
      </div>
    </div>
  );
};

export default ProjectCard;
