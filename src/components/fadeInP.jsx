import VisAction from "./visAction.jsx";

const FadeInP = (props) => {
  return (
    <VisAction
      passedComp={(visable) => {
        return (
          <p
            className="about__text"
            style={{ color: visable ? "#333" : "hsla(0,0%,0%,0%)" }}
          >
            {props.text}
          </p>
        );
      }}
    />
  );
};

export default FadeInP;
