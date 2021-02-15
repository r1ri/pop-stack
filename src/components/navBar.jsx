import { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav id="navbar">
        <div className="">
          <ul className="">
            <li className="">
              <Link to="">Pop-Stack</Link>
            </li>
            <li className="">
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
