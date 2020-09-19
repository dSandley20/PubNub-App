import { SNACKBAR_OPEN, SNACKBAR_CLOSE } from "types/actions/snack-bar"

const snackBarInitialState = {
  open: false,
  message: "There was an error",
  autoHideDuration: 3000
}

export default (state = snackBarInitialState, action) => {
  switch (action.type) {
    case SNACKBAR_OPEN:
    case SNACKBAR_CLOSE:
      const { type, ...rest } = action
      return {
        ...state,
        ...rest
      }
    default:
      return state
  }
}
