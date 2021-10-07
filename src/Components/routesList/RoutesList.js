import React, { Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const RoutesList = ({ routes, match = "" }) => {
  return (
    <Suspense fallback={<h2>...loading</h2>}>
      <Switch>
        {routes.map((route) => (
          <Route
            path={match + route.path}
            component={route.component}
            exact={route.exact}
            key={route.path}
          />
        ))}
      </Switch>
    </Suspense>
  );
};

export default RoutesList;
