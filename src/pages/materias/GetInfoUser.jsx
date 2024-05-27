
export let receivedToken = ''
export let receivedEmail = ''
export let receivedProfilePicture = ''
export let receivedFirstName = ''

export const defaultUrlPath = 'https://laboratorio-virtual-backend.onrender.com/api'





export function getCoursesMapper(token) {
  // receivedToken = token
  receivedToken = localStorage.setItem('tokenvalue', token)
}

export function getEmailMapper(email) {
  // receivedEmail = email
  receivedEmail = localStorage.setItem('emailvalue', email)
}

export function getProfilePictureMapper(profilepic) {
  // receivedProfilePicture = profilepic
  receivedProfilePicture = localStorage.setItem('profilepicturevalue', profilepic)
}

export function getFirstNameMapper(firstname) {
  // receivedFirstName = firtname
  receivedFirstName = localStorage.setItem('firstnamevalue', firstname)
}


