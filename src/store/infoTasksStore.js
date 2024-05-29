import { create } from "zustand";

export const useInfoTasksStore = create(set => ({
    token: '',
    course: '',
    descriptions: '',
    simulator: '',
    task: '',

    getTaskToken: value =>
        set(state => ({
            token: value,
        })),
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
}))