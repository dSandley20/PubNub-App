
import API from "store/api"
import serialize from "store/serialize"
import {
  USERS_SET_LOADING,
  USERS_SET_ERROR
} from "types/actions/users"

export const setLoading = (loading = true) => ({
  type: USERS_SET_LOADING,
  loading
})

export const setError = (error = false) => ({
  type: USERS_SET_ERROR,
  error
})


export const getUser = userId => {
  return dispatch => {
    dispatch(setLoading(true))
    return API.get(`/users/${userId}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText)
        }
        return response
      })
      .then(response => response.body)
      .then(result => {
        return serialize("user", result.data)
      })
      .catch(err => {
        dispatch(setLoading(false))
        dispatch(setError(err))
        console.error(err)
      })
  }
}
