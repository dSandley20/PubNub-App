import { SNACKBAR_OPEN, SNACKBAR_CLOSE } from "types/actions/snack-bar"

export const openSnackBar = data => ({
  type: SNACKBAR_OPEN,
  ...data,
  open: true
})

export const closeSnackBar = data => ({
  type: SNACKBAR_CLOSE,
  open: false
})
