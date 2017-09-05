import {CHANGE_EMAIL, CHANGE_FIRST_NAME, CHANGE_LAST_NAME} from 'actions/profileActions'

export default (state = {email: '', firstName: '', lastName: ''}, action) => {
  switch (action.type) {
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload
      }
    case CHANGE_FIRST_NAME:
      return {
        ...state,
        firstName: action.payload
      }
    case CHANGE_LAST_NAME:
      return {
        ...state,
        lastName: action.payload
      }
    default:
      return state
  }
}
