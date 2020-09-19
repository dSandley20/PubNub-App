import React from "react"
import { useSelector } from "react-redux"
import { Route, Redirect } from "react-router-dom"

// protected route component
const ProtectedRoute = props => {
  // destructures passed in component
  const { component: C, ...routeProps } = props
  // token from redux that was stored on login
  const token = useSelector(state => state.authentication.token)
  return (
    <Route
      render={p =>
        token ? (
          // if there is a token that is stored we render the component
          <C {...p} {...routeProps} match={routeProps.computedMatch} />
        ) : (
          // if there is not a token that is stored we redurect to /login
          <div>
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: routeProps.location
                }
              }}
            />
          </div>
        )
      }
    />
  )
}

export default ProtectedRoute
