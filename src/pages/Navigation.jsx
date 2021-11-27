import React from "react";
import DineMenu from "./DineMenu";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SetDine from "./SetDine";

const Navigation = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/set-dine">
            <SetDine />
          </Route>
          <Route path="/dine-menu">
            <DineMenu />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Navigation;
