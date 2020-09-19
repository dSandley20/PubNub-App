import {
  OPEN_DIALOG,
  CLOSE_DIALOG,
  SET_DIALOG_DATA,
  CLEAR_DIALOG_DATA,
  UPDATE_DIALOG_DATA
} from "types/actions/dialogs"
import update from "immutability-helper"

const dialogsInitialState = {}

export default (state = dialogsInitialState, action) => {
  switch (action.type) {
    case OPEN_DIALOG:
      return update(state, {
        [action.name]: {
          open: {
            $set: true
          }
        }
      })
    case CLOSE_DIALOG:
      return update(state, {
        [action.name]: {
          open: {
            $set: false
          }
        }
      })
    case SET_DIALOG_DATA:
      return update(state, {
        [action.name]: {
          $set: {
            data: action.data
          }
        }
      })
    case UPDATE_DIALOG_DATA:
      return update(state, {
        [action.name]: {
          data: {
            $set: {
              ...state.data,
              ...action.data
            }
          }
        }
      })
    case CLEAR_DIALOG_DATA:
      return update(state, {
        [action.name]: {
          data: {
            $set: {}
          }
        }
      })
    default:
      return state
  }
}
