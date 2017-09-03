export const CHANGE_EMAIL = "CHANGE_EMAIL";
export const CHANGE_FIRSTNAME = "CHANGE_FIRSTNAME";
export const CHANGE_LASTNAME = "CHANGE_LASTNAME";

export const changeEmail = emailValue => ({
  type: CHANGE_EMAIL,
  payload: emailValue
});

export const changeFirstName = firstNameValue => ({
  type: CHANGE_FIRSTNAME,
  payload: firstNameValue
});

export const changeLastName = lastNameValue => ({
  type: CHANGE_LASTNAME,
  payload: lastNameValue
});
