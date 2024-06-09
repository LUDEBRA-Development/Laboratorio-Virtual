import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useInfoTasksStore = create(
  persist(
    set => ({
      structure: [],
      getStructure: value =>
        set(state => ({
          structure: value,
        })),
    }),
    { name: 'infoTasks', getStorage: () => localStorage },
  ),
)
