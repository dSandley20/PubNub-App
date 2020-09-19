import API from "store/api"
import {
  AUTHENTICATION_SET_LOADING,
  AUTHENTICATION_SET_ERROR,
  AUTHENTICATION_SET_USER,
  AUTHENTICATION_UPDATE_USER,
  LOGOUT,
  AUTHENTICATION_SET_ONBOARDED
} from "types/actions/authentication"
import { getUser } from "actions/users"

export const setLoading = (loading = true) => ({
  type: AUTHENTICATION_SET_LOADING,
  loading
})

export const setError = (error = false) => ({
  type: AUTHENTICATION_SET_ERROR,
  error
})


export const setUser = (user = {}, token = "") => ({
  type: AUTHENTICATION_SET_USER,
  user,
  token
})

export const updateLoggedInUser = (updates = {}) => ({
  type: AUTHENTICATION_UPDATE_USER,
  updates

})

export const logout = () => ({
  type: LOGOUT
})

export const onBoarded = (onBoarded = true) => ({
  type: AUTHENTICATION_SET_ONBOARDED,
  onBoarded
})


export const login = data => {
  return dispatch => {
    dispatch(setLoading(true))
    const deferred = new Promise((resolve, reject) => {
      API.post("/auth")
        .set("Content-Type", "application/json")
        .send(data)
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText)
          }

          return response
        })
        .then(response => response.body)
        .then(async data => {
          API.set("Authorization", data.token)
          const user = await dispatch(getUser(data.user_id, true))
          dispatch(setUser(user, data.token))
          dispatch(setLoading(false))
          resolve(user)
        })
        .catch(err => {
          dispatch(setLoading(false))
          dispatch(setError(err))
          reject(err.response.body)
          console.error(err)
        })
    })
    return deferred
  }
}
