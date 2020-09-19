import { createStore, applyMiddleware, compose, combineReducers } from "redux"
import { routerMiddleware } from "react-router-redux"
import { connectRouter } from "connected-react-router"
import persistState from "redux-localstorage"
import thunk from "redux-thunk"
import { createBrowserHistory } from "history"
import { camelCase } from "lodash"
import jwtDecode from "jwt-decode"
import moment from "moment"
import API from "./api"

import { authenticationReducerDefaultState } from "reducers/authentication"

// REDUCERS
let reducers = {}
let defaults = {}
const reducersReq = require.context("../reducers", true, /^(.*\.(js$))[^.]*$/im)
reducersReq.keys().forEach(key => {
  const reducerName = camelCase(key.match(/.\/([\w-]+).js/)[1])
  reducers[reducerName] = reducersReq(key).default
  defaults[reducerName] = reducersReq(key)[`${reducerName}ReducerDefaultState`]
})

export const history = createBrowserHistory()

const initialState = {}
const enhancers = []
const middleware = [thunk, routerMiddleware(history)]

enhancers.push(
  persistState(null, {
    key: ".",
    slicer: paths => {
      return state => {
        return {
          authentication: {
            ...authenticationReducerDefaultState,
            authenticatedUser: state.authentication.authenticatedUser,
            token: state.authentication.token
          }
        }
      }
    },
    merge: (initialState, persistedState) => {
      if (persistedState.authentication.token) {
        // decode the token
        const decodedToken = jwtDecode(persistedState.authentication.token)
        // get the expiration as a moment
        const expDate = moment.unix(decodedToken.exp)
        // get today as a moment
        const nowDate = moment()
        // get the difference in hours
        const differenceInHours = nowDate.diff(expDate, "hours", true)
        // if the difference is greater than an hour throw our the loaded state to force a login
        if (differenceInHours > 1) {
          persistedState = {}
        } else {
          // otherwise allow the loaded state to be hydrated
          API.set("Authorization", persistedState.authentication.token)
        }
      }
      return persistedState ?
        { ...initialState, ...persistedState } :
        initialState
    }
  })
)

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
)

const store = createStore(
  combineReducers({
    router: connectRouter(history),
    ...reducers
  }),
  initialState,
  composedEnhancers
)

export default store
