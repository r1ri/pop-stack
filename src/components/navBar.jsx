import { Component } from "react";
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Pop-Stack</Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <il className="nav-item">
              <Link to="/portfolio" className="nav-link">Portfolio</Link>
            </il>
            <il className="nav-item">
              <Link className="nav-link">2</Link>
            </il>
            <il className="nav-item">
              <Link className="nav-link">3</Link>
            </il>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
