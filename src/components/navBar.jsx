import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav id="navbar">
        <ul>
          <li>
            <NavLink id="logo" to="/">
              Pop-Stack
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
