import { Component } from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1 className="portfolio__header">Portfolio</h1>
        <div className="portfolio__container">
          <div className="portfolio__card portfolio__card--pop-stack">
            <div className="portfolio__card__hero">
              <Link className="link" to="/home" />
              <span className="badge badge--secondary">This site!</span>
              <a
                className="portfolio-card__repo badge text--skin"
                href="http://github.com/r1ri/website"
                target="_blanck"
              >
                Github
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
