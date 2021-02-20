import { Component } from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1>Portfolio</h1>
        <div id="porfolio-container">
          <div className="portfolio-item-card">
            <p>This site!</p>
            <Link className="live" to="/">
              pop-stack.org
            </Link>
            <a
              className="repo"
              href="http://github.com/r1ri/website"
              target="_blanck"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
