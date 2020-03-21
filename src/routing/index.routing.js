import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import publicRouting from "./public.routing";

class Routes extends Component {
  render() {
    let routesIs = publicRouting;
    return (
      <div>
        <Switch>
          {routesIs &&
            routesIs.map((route, index) => (
              <Route
                key={index}
                exact
                path={route.path}
                component={route.component}
              />
            ))}
        </Switch>
      </div>
    );
  }
}

export default Routes;
