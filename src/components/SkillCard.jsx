import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import Rating from "@mui/material/Rating";
import "./experience.scss";

const SkillCard = ({ data, heading }) => {
  return (
    <div className="expCard">
      <div className="expCard-body">
        <div className="skillsHeading">{heading}</div>
        <div className="skills-container">
          {data.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skillsName-container">
                <VerifiedIcon style={{ color: "#4285f4" }} /> &nbsp; &nbsp;
                <div className="skillName">{skill.name}</div>
              </div>
              <div className="skillCoverage">
                <Rating
                  name="customized-10"
                  size="small"
                  defaultValue={skill.rating}
                  max={10}
                  precision={0.5}
                  readOnly
                />
              </div>
              <div className="skillCoverageMobile">
                <Rating
                  name="customized-10"
                  size="small"
                  defaultValue={skill.mRating}
                  max={5}
                  precision={0.5}
                  readOnly
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
