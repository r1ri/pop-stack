import React from "react";
import FadeInP from "./fadeInP.jsx";
import VisAction from "./visAction.jsx";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      <VisAction
        passedComp={(visable) => {
          return (
            <h1
              className="about__greating"
              style={{ color: visable ? "#333" : "hsla(0,0%,0%,0%)" }}
            >
              Hi
            </h1>
          );
        }}
      />
      <FadeInP text="Lets be honest." />
      <FadeInP text="I need money." />
      <FadeInP text="And if your here, then you probably need a website." />
      <FadeInP text="So, if your willing to bet on me:" />
      <FadeInP text="I'll make it work," />
      <FadeInP text="and I'm cheap." />
    </div>
  );
};

export default About;
