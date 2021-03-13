import { Component } from "react";
import '../components/contactMe.css'

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
      <div className="container">
          <h1>My Email is</h1>
          <button className="btn btn--primary" onClick={this.copyText}>{this.state.buttonText}</button>
        <textarea
          className="contactMe__copy-area"
          ref={(textarea) => (this.textArea = textarea)}
          value="liam@pop-stack.org"
        />
      </div>
    );
  }
}

export default ContactMe;
