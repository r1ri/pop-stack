import { Route, Link, Switch } from "react-router-dom";
import ContactMe from "./components/contactMe";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import Portfolio from "./components/portfolio";
import Home from "./home";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/contactme" component={ContactMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
