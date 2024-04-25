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
        state.tasks[origin] = state.tasks[origin].filter(
          (item) => item.id !== task.id
        )

        state.tasks[target] = state.tasks[target].concat(task)
      }
    },
  },
})

const taskReducer = tasksSlice.reducer
const { loadTasks, moveTask } = tasksSlice.actions

export { taskReducer, loadTasks, moveTask }
