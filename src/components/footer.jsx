import React from "react";
import "./footer.css";

const PageFooter = () => {
  return (
    <React.Fragment>
      <div className="footer__spacer" />
      <div className="footer shadow">
        <a
          className="text--skin"
          href="http://github.com/r1ri"
          target="_blank"
        >
          Github
        </a>
      </div>
    </React.Fragment>
  );
};

export default PageFooter;
