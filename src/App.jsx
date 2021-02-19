import { Route, Link, Switch } from "react-router-dom";
import React from 'react';
import ContactMe from "./components/contactMe";
import Navbar from "./components/navBar";
import NotFound from "./components/notFound";
import Portfolio from "./components/portfolio";
import Home from "./components/home";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/contactme" component={ContactMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={NotFound} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
