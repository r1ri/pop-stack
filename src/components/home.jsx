import { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div id="home-page">
        <div id="banner">
          <h1 id="">Need a cheap website?</h1>
          <Link id="banner-link" to="/contactme">
            <button>
              <p>Contact me</p>
            </button>
          </Link>
        </div>
        <div className="about">
          <h2>About</h2>
          <p>
            Hi, my name is Liam, I've created this site as a means to find projects to build out my 
            portfolio. If your looking for a website, you don't need much in terms of complexity, and you
            only have a couple hundred bucks to spare, then I might be your guy.
          </p>
          <a href="http://github.com/r1ri">Github</a>
        </div>
        <div className="spacer"></div>
      </div>
    );
  }
}

export default Home;
