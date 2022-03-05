import React from "react";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
const Badge = (props) => {
  return (
    <div>
      <div>
        {props.icon === "LocalPoliceIcon" ? <LocalPoliceIcon /> : ""}
        {props.icon === "AccountTreeIcon" ? <AccountTreeIcon /> : ""}
        {props.icon === "PeopleAltIcon" ? <PeopleAltIcon /> : ""}
        <div>{props.title}</div>
        <div>{props.body}</div>
      </div>
    </div>
  );
};

export default Badge;
