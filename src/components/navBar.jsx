import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
