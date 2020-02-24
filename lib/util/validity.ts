
/** A simple, incomplete regex to validate e-mails */
export const validateEmailAddress = (email: string) => {
  const validateEmailRegEx = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  if (validateEmailRegEx.test(email)) {
    return true
  } else {
    return false
  }
}