import {
  AUTHENTICATION_SET_LOADING,
  AUTHENTICATION_SET_ERROR,
  AUTHENTICATION_SET_USER,
  LOGOUT
} from "types/actions/authentication"
import { AUTHENTICATION_SET_ONBOARDED } from "types/actions/authentication"

export const authenticationReducerDefaultState = {
  authenticatedUser: {},
  loading: false,
  error: false,
  token: "",
  onBoarded: false
}

export default (state = authenticationReducerDefaultState, action) => {
  switch (action.type) {
    case AUTHENTICATION_SET_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case AUTHENTICATION_SET_ERROR:
      return {
        ...state,
        error: action.error
      }
    case AUTHENTICATION_SET_USER:
      return {
        ...state,
        authenticatedUser: action.user,
        token: action.token
      }
    case AUTHENTICATION_SET_ONBOARDED:
      return {
        ...state,
        onBoarded: action.onBoarded
      }
    case LOGOUT:
      return {
        ...state,
        authenticatedUser: {},
        token: ""
      }
    default:
      return state
  }
}
