import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const authenticated = useSelector((state) => state.player.authenticated);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        authenticated ? <Component {...props} /> : <Redirect to="/signup" />
      }
    />
  );
}

export default ProtectedRoute;
