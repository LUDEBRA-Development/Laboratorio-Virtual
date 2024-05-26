
export let receivedToken = ''
export let receivedEmail = ''
export let receivedProfilePicture = ''
export let receivedFirstName = ''

export const defaultUrlPath = 'https://laboratorio-virtual-backend.onrender.com/api'





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

export function getProfilePictureMapper(profilepic) {
  // receivedProfilePicture = profilepic
  receivedProfilePicture = localStorage.setItem('profilepicturevalue', profilepic)
  return console.log(receivedProfilePicture)
}

export function getFirstNameMapper(firstname) {
  // receivedFirstName = firtname
  receivedFirstName = localStorage.setItem('firstnamevalue', firstname)
  return console.log(receivedFirstName)
}


