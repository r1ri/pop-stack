import { Component } from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1>Portfolio</h1>
        <div id="portfolio-container">
          <div className="portfolio-item-card">
            <Link className="link" to="/home" />
            <p>This site!</p>
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
