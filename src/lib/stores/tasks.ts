import {type Writable, writable} from "svelte/store";

export interface Task {
    id: number,
    text: string,
    completed: boolean
}
export const tasks: Writable<Task[]> = writable(localStorage.getItem('todo_tasks') ? JSON.parse(localStorage.getItem('todo_tasks') || '[]') : [])