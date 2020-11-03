import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { NavHashLink as HLink } from "react-router-hash-link";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { useMediaQuery } from "react-responsive";

function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 1100px)" });
  const [sidebar, setSidebar] = useState(isMobile ? false : true);
  function showSidebar() {
    return setSidebar(!sidebar);
  }

  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose onClick={showSidebar} />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <HLink
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={1000}
                  to={item.path}
                  activeClassName="selected"
                >
                  {item.icon}
                  <span>{item.title}</span>
                </HLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
