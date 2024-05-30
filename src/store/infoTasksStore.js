import { create } from 'zustand'

export const useInfoTasksStore = create(set => ({
  structure: [],
  getStructure: value =>
    set(state => ({
      structure: value,
    })),
}))
