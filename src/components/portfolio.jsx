import { Component } from 'react';
import { Link } from 'react-router-dom';

class Portfolio extends Component {
  render() {
    return (
      <div>
        <h1>Portfolio</h1>
        <p>This site: <Link to="/">pop-stack.org</Link>, <a href="http://github.com/r1ri/website">Github</a></p>
      </div>
    );
  }
}

export default Portfolio;
