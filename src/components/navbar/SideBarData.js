import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Resume",
    path: "/resume",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  // {
  //   title: "Clock",
  //   path: "/watch",
  //   icon: <FaIcons.FaClock />,
  //   cName: "nav-text",
  // },
  // {
  //   title: "Calculator",
  //   path: "/calculator",
  //   icon: <FaIcons.FaCalculator />,
  //   cName: "nav-text",
  // }
];
