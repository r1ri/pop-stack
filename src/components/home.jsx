import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import About from "./about.jsx";

class Home extends Component {
  state = {
    visibility: false,
  };

  render() {
    return (
      <React.Fragment>
        <div className="banner shadow">
          <h1 className="text--skin glow__text--secondary">Need a website?</h1>
          <Link to="/contactme">
            <button className="btn btn--primary glow__box--secondary">
              <p>Contact me</p>
            </button>
          </Link>
        </div>
        <About />
      </React.Fragment>
    );
  }
}

export default Home;
