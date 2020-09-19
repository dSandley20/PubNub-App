import {
  OPEN_DIALOG,
  CLOSE_DIALOG,
  SET_DIALOG_DATA,
  CLEAR_DIALOG_DATA,
  UPDATE_DIALOG_DATA
} from "types/actions/dialogs"

export const _openDialog = name => ({
  type: OPEN_DIALOG,
  name
})

export const _closeDialog = name => ({
  type: CLOSE_DIALOG,
  name
})

export const setDialogData = (name, data = {}) => ({
  type: SET_DIALOG_DATA,
  name,
  data
})

export const updateDialogData = (name, data = {}) => ({
  type: UPDATE_DIALOG_DATA,
  name,
  data
})

export const clearDialogData = name => ({
  type: CLEAR_DIALOG_DATA,
  name
})

export const openDialog = (name, data) => {
  return dispatch => {
    dispatch(setDialogData(name, data))
    setTimeout(() => {
      dispatch(_openDialog(name))
    }, 150)
  }
}

export const closeDialog = name => {
  return dispatch => {
    dispatch(_closeDialog(name))
    setTimeout(() => {
      dispatch(clearDialogData(name))
    }, 300)
  }
}
