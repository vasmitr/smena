export const CHANGE_EMAIL = 'CHANGE_EMAIL'
export const CHANGE_FIRST_NAME = 'CHANGE_FIRST_NAME'
export const CHANGE_LAST_NAME = 'CHANGE_LAST_NAME'

export const changeEmail = payload => ({
  type: CHANGE_EMAIL,
  payload
})

export const changeFirstName = payload => ({
  type: CHANGE_FIRST_NAME,
  payload
})

export const changeLastName = payload => ({
  type: CHANGE_LAST_NAME,
  payload
})


