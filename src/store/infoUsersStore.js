import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useInfoUsersStore = create(
  persist(
    set => ({
      token: '',
      email: '',
      profilePic: '',
      userName: '',
      lastName: '',
      getUserToken: value =>
        set(() => ({
          token: value,
        })),
      getProfilePicStore: value =>
        set(() => ({
          profilePic: value,
        })),
      getEmailStore: value =>
        set(() => ({
          email: value,
        })),
      getUserNameStore: value =>
        set(() => ({
          userName: value,
        })),
      getUserSecondNameStore: value =>
        set(() => ({
          lastName: value,
        })),
    }),
    {
      name: 'user-storage', // Nombre clave en localStorage
      getStorage: () => sessionStorage, // Especifica localStorage
    },
  ),
)
