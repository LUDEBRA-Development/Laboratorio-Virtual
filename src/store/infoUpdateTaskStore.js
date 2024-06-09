import { create } from 'zustand'

export const useUpdateTask = create(set => ({
  idTask: null,
  getIdTask: value =>
    set(state => ({
      idTask: value,
    })),
}))
