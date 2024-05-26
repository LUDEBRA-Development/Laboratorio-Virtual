
export let receivedToken = ''
export let receivedEmail = ''

export function getCoursesMapper(token) {
  // receivedToken = token
  receivedToken = localStorage.setItem('tokenvalue', token)
  return console.log(receivedToken)
}

export function getEmailMapper(email) {
  // receivedEmail = email
  receivedEmail = localStorage.setItem('emailvalue', email)
  return console.log(receivedEmail)
}
