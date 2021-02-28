import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import React from 'react';
import ContactMe from "./components/contactMe";
import Navbar from "./components/navBar";
import NotFound from "./components/notFound";
import Portfolio from "./components/portfolio";
import Home from "./components/home";
import PageFooter from "./components/footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/contactme" component={ContactMe} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/notfound" component={NotFound} />
        <Route path="/home" exact component={Home} />
        <Redirect exact from="/" to="/home" />
        <Redirect  from="/" to="/notfound" />
      </Switch>
      <PageFooter />
    </React.Fragment>
  );
}

export default App;
