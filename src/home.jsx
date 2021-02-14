import { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Call To Action</h1>
        <Link to="/contactme">Contact me</Link>

        <hr/>

        <h1>About</h1>
        <p>This is the first draft of my home page</p>
        <a href="http://github.com/r1ri">Github</a>
      </div>
    );
  }
}

export default Home;
