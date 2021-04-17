import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";

class VisAction extends Component {
  state = {
    visibility: false,
  };

  render() {
    return (
      <VisibilitySensor
        onChange={(isVisable) => {
          this.setState({ visibility: isVisable });
        }}
      >
          {this.props.passedComp(this.state.visibility)}
      </VisibilitySensor>
    );
  }
}

export default VisAction;
