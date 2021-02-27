import { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div id="home-page">
        <div id="banner">
          <h1 id="">Need a website?</h1>
          <Link id="banner-link" to="/contactme">
            <button>
              <p>Contact me</p>
            </button>
          </Link>
        </div>
        <div className="about">
          <h2>About Me</h2>
          <p>
            I started messing around with code when I was about eleven, but I
            woulden't say that's when I got&nbsp;into coding.
          </p>
          <p>
            It's hard to say when I actually "got into it". I took a class in
            highschool, and tried to make post&nbsp;secondary work, but it all
            felt like a dead end.
          </p>
          <p>
            Ontop of that everyone in the industry who had a degree kept saying
            it was useless.
          </p>
          <p>So I droped out.</p>
          <p>But ever since I did, I found that I actually enjoyed it.</p>
          <p>
            No outdated languages, or irelevent studies. There are hundreds if
            not thousands of people trying to teach people how to code, and it's
            all feels so much more real!
          </p>
          <p>
            So hey, this is what I can do, and I'm only gonna add more to my
            portfolio, so even if you don't like what you see, it's probably
            worth checking back.
          </p>
          <p>But one last thing.</p>
          <p>You need a website?</p>
          <Link to="/contactme">Contact Me</Link>
        </div>
        <div className="spacer"></div>
      </div>
    );
  }
}

export default Home;
