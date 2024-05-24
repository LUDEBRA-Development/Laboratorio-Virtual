
export let receivedToken = ''
export let receivedEmail = ''

export function getCoursesMapper(token) {
  receivedToken = token
  return console.log(receivedToken)
}

export function getEmailMapper(email) {
  receivedEmail = email
  return console.log(receivedEmail)
}
