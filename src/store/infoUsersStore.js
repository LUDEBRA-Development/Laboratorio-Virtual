import { create } from 'zustand'

export const useInfoUsersStore = create(set => ({
  token: '',
  email: '',
  profilePic: '',
  userName: '',
  getUserToken: value =>
    set(state => ({
      token: value,
    })),
  getProfilePicStore: value =>
    set(state => ({
      profilePic: value,
    })),
  getEmailStore: value =>
    set(state => ({
      email: value,
    })),
  getUserNameStore: value =>
    set(state => ({
      userName: value,
    })),
}))
