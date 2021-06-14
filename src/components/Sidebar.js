import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import SidebarContent from "./SidebarContent";
import { IconContext } from "react-icons";
import { Nav } from "react-bootstrap";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <style>
      {`
      .navbar {
        background-color: #211F21;
        height: 80px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        
      }
      
      .menu-bars {
        margin-left: 2rem;
        font-size: 2rem;
        background: none;
      }
      .nav-menu-items{
        padding-right: 2rem;
        color: antiquewhite;
      }
      
      .nav-menu {
        background-color:#201B20;
        width: 400px;
        height: 100vh;
        display: flex;
        justify-content: center;
        position: fixed;
        top: 0;
      }
      .navbar-toggle {visibility: hidden;}
      
      @media only screen and (max-width: 600px) {
        .nav-menu {
         
          left: -130%;
          transition: 850ms;
          z-index: 1;
        }
        .navbar-toggle {
          visibility: visible;
          background-color: #201B20;
          width: 100%;
          height: 80px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
        }
        
      }
      
      .nav-menu.active {
        left: 0;
        transition: 350ms;
      }
      
      
      `}
    </style>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>

        <Nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            <SidebarContent />
          </ul>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Sidebar;
