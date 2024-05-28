import { create } from 'zustand'

export const monda = create(set => ({
  tokenValue: '',
  seteo: token => {
    console.log('Setting token:', token) // Verificar que el token se establece
    set({ tokenValue: token })
  },
}))
