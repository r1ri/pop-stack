import { Route, Link, Switch } from "react-router-dom";
import NavBar from "./components/navBar";
import NotFound from "./components/notFound";
import Portfolio from "./components/portfolio";
import Home from "./home";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
