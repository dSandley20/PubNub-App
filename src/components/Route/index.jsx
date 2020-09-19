import React from "react"
import ProtectedRoute from "components/ProtectedRoute"
import { Route } from "react-router-dom"
export default route => {
  if (route.protected) {
    return (
      <ProtectedRoute {...route} />
    )
  } else {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    )
  }
}
