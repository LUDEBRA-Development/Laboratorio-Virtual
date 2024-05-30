import { create } from "zustand";

export const useInfoTasksStore = create(set => ({
    structure: [],
    course: '',
    descriptions: '',
    simulator: '',
    task: '',

    getCourse: value =>
        set(state => ({
            course: value,
        })),
    getDescriptions: value =>
        set(state => ({
            descriptions: value,
        })),
    getSimulator: value =>
        set(state => ({
            simulator: value,
        })),
    getTask: value =>
        set(state => ({
            task: value,
        })),
    getStructure: value =>
        set(state => ({
            structure: value,
        })),
}))