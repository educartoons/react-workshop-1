import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Level = "easy" | "medium" | "hard"

type Status = "todo" | "inprogress" | "done"

export type Task = {
  id: string
  title: string
  level: Level
}

type InitialState = {
  tasks: {
    todo: Task[]
    inprogress: Task[]
    done: Task[]
  }
}

const initialState: InitialState = {
  tasks: {
    todo: [],
    inprogress: [],
    done: [],
  },
}

const tasksSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    loadTasks: (state) => {
      console.log("oading")
      const raw = window.localStorage.getItem("kanban")
      const content = raw ? JSON.parse(raw) : initialState
      state.tasks = content
    },
    moveTask: (
      state,
      action: PayloadAction<{
        task: Task
        origin: Status | null
        target: Status | null
      }>
    ) => {
      const { origin, target, task } = action.payload

      if (origin !== null && target !== null) {
        switch (origin) {
          case "todo":
            state.tasks.todo = state.tasks.todo.filter(
              (item) => item.id !== task.id
            )
            console.log(state.tasks.todo)
            break
          case "inprogress":
            state.tasks.inprogress = state.tasks.inprogress.filter(
              (item) => item.id !== task.id
            )
            break
          case "done":
            state.tasks.done = state.tasks.done.filter(
              (item) => item.id !== task.id
            )
            break
          default:
            break
        }

        switch (target) {
          case "todo":
            state.tasks.todo = state.tasks.todo.concat(task)
            break
          case "inprogress":
            state.tasks.inprogress = state.tasks.inprogress.concat(task)
            break
          case "done":
            state.tasks.done = state.tasks.done.concat(task)
            break
          default:
            break
        }
      }
    },
  },
})

const taskReducer = tasksSlice.reducer
const { loadTasks, moveTask } = tasksSlice.actions

export { taskReducer, loadTasks, moveTask }
