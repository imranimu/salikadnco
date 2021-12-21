import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Auth from './auth'

// handle the private routes
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => Auth.getAccessToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/', state: { from: props.location } }} />}
    />
  )
}

export default PrivateRoute;