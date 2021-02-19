import { Component } from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav id="navbar">
        <div>
          <ul>
            <li>
              <NavLink to="/">Pop-Stack</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
