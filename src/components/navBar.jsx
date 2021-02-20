import { Component } from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

class Navbar extends Component {
  render() {
    return (
      <nav id="navbar">
        <NavLink id="logo" to="/">Pop-Stack</NavLink>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </nav>
    );
  }
}

export default Navbar;
