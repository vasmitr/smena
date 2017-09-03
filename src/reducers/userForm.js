import {CHANGE_EMAIL, CHANGE_FIRSTNAME, CHANGE_LASTNAME} from 'actions/userFormActions'

export default (state = {email: '', firstName: '', lastName: ''}, action) => {
    switch (action.type) {
      case CHANGE_EMAIL:
        return {
          ...state,
          email: action.payload
        }
        case CHANGE_FIRSTNAME:
        return {
          ...state,
          firstName: action.payload
        }
        case CHANGE_LASTNAME:
        return {
          ...state,
          lastName: action.payload
        }
      default:
        return state
    }
  }