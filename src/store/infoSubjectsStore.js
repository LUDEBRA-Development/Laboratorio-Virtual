import { create } from 'zustand'

export const useInfoSubjectsStore = create(set => ({
  structureSubjects: [],
  getStructureSubjects: value =>
    set(state => ({
      structureSubjects: value,
    })),
}))
