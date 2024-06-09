import { create } from 'zustand'

export const useInfoNewTask = create(set => ({
  idCourseValue: null,
  getIdCourse: value =>
    set(state => ({
      idCourseValue: value,
    })),
}))
