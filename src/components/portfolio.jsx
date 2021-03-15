import { Component } from "react";
import { Link } from "react-router-dom";
import "./portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1 className="portfolio__header">Portfolio</h1>
        <div className="portfolio__container">
          <div
            className="
            portfolio__card
            portfolio__card--pop-stack
            shadow"
          >
            <div className="portfolio__card__hero shadow--light">
              <span
                className="
                badge
                badge--secondary
                portfolio__card__title
                shadow--light"
              >
                This site!
              </span>
              <a
                className="
                portfolio__card__repo
                badge
                text--skin
                shadow--light
                "
                href="http://github.com/r1ri/website"
                target="_blanck"
              >
                Github
              </a>
              <Link className="portfolio__card__link" to="/home" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
