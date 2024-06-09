import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useInfoSubjectsStore = create(
  persist(
    set => ({
      structureSubjects: [],
      getStructureSubjects: value =>
        set(state => ({
          structureSubjects: value,
        })),
    }),
    { name: 'infoSubjects', getStorage: () => localStorage },
  ),
)
