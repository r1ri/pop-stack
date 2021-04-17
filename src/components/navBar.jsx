import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar__spacer" />
      <nav className="navbar shadow">
        <div className="navbar__content">
          <span>
            <NavLink className="navbar__logo navbar__anchor--active" to="/home">
              Pop-Stack
            </NavLink>
          </span>
          <ul className="navbar__list">
            <li className="navbar__listItem">
              <NavLink
                className="navbar__anchor"
                activeClassName="navbar__anchor--active"
                to="/portfolio"
              >
                Portfolio
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
