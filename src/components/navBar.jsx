import React from 'react';
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="nav-spacer" />
      <nav id="navbar">
        <ul>
          <li>
            <NavLink activeClassName="active" className="logo" to="/home">
              Pop-Stack
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/portfolio">
              Portfolio
            </NavLink>
          </li>
        </ul>
      </nav>
    </React.Fragment>
      );
};

export default Navbar;
