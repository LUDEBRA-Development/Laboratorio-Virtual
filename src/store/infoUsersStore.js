import { create } from 'zustand'

export const useInfoUsersStore = create(set => ({
  tokenValue: '',
  email: null,
  profilePic: null,
  firstName: null,
  monda : 20,
  getTokenValue: (token) => set({ tokenValue: token }), 
  getEmailValue: value =>
    set(() => ({
      email: value,
    })),
  getProfilePicValue: value =>
    set(() => ({
      profilePic: value,
    })),
  getFirstNameValue: value =>
    set(() => ({
      firstName: value,
    })),
  updateMonda: value =>
    set(() => ({
      monda: value,
    })),
}))
