import { Component } from "react";
import "./contactMe.css";

class ContactMe extends Component {
  state = {
    buttonText: <p>liam@pop-stack.org</p>,
  };

  copyText = () => {
    this.textArea.select();
    document.execCommand("copy");
    this.indicateCopy();
  };

  indicateCopy = () => {
    setTimeout(() => {
      this.setState({
        buttonText: (
          <p style={{ marginLeft: "2rem", marginRight: "2rem" }}>copied</p>
        ),
      });
    }, 150);

    setTimeout(() => {
      this.setState({
        buttonText: <p>liam@pop-stack.org</p>,
      });
    }, 700);
  };

  render() {
    return (
      <div>
        <div className="centeredItems">
          <h1>My Email is</h1>
          <button onClick={this.copyText}>{this.state.buttonText}</button>
        </div>
        <textarea
          ref={(textarea) => (this.textArea = textarea)}
          value="liam@pop-stack.org"
        />
      </div>
    );
  }
}

export default ContactMe;
