import { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="box-1">
          <h1>Call To Action</h1>
          <Link to="/contactme">Contact me</Link>
        </div>
        <div className="box-2">
          <h1>About</h1>
          <p>This is the first draft of my home page</p>
          <a href="http://github.com/r1ri">Github</a>
        </div>
      </div>
    );
  }
}

export default Home;
