import React, { useState, useContext } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SideBarData";
import "./navbar.css";
import { IconContext } from "react-icons";
import { DarkContext } from "../../App";

function Navbar() {
  const { state, dispatch } = useContext(DarkContext);
  const [sidebar, setSidebar] = useState(false);
  const [dark, setDark] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);

  const setDarkMode = () => {
    setDark(!dark);
    localStorage.setItem("DARKMODE", dark);
    dispatch({ type: "DARKMODE", payload: dark });
  };

  return (
    <>
      <IconContext.Provider value={{}}>
        <div className={state?.darkMode ? "navbar darkMode" : "navbar"}>
          <Link to="#" className="menu-bars" style={{ color: "aliceblue" }}>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="switchContainer">
            <label className="switch">
              <input
                type="checkbox"
                checked={state?.darkMode}
                onChange={setDarkMode}
              />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
