import { Component } from "react";
import { Link } from "react-router-dom";
import './home.css';

class Home extends Component {
  render() {
    return (
      <div id="home-page">
        <div id="banner">
          <h1 id="banner-call">Need a cheap website?</h1>
          <Link id="banner-link"to="/contactme">
            <button>
              <p>Contact me</p>
            </button>
          </Link>
        </div>
        <div className="about">
          <h1>About</h1>
          <p>This is the first draft of my home page</p>
          <a href="http://github.com/r1ri">Github</a>
        </div>
        <div className="spacer"></div>
      </div>
    );
  }
}

export default Home;
