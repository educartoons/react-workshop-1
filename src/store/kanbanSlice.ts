import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type Task = {
  id: string
  title: string
  level: Level
}

type Level = "easy" | "medium" | "hard"

type Status = "todo" | "inprogress" | "done"

type KanbanSlice = {
  tasks: {
    todo: Task[]
    inprogress: Task[]
    done: Task[]
  }
}

const initialState: KanbanSlice = {
  tasks: {
    todo: [],
    inprogress: [],
    done: [],
  },
}

const kanbanSlice = createSlice({
  name: "kanban",
  initialState: initialState,
  reducers: {
    loadTasksFromLocalStorage: (state) => {
      const raw = window.localStorage.getItem("kanban")
      if (raw) {
        state.tasks = JSON.parse(raw)
      }
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

const kanbanReducer = kanbanSlice.reducer

const { loadTasksFromLocalStorage, moveTask } = kanbanSlice.actions

export { kanbanReducer, loadTasksFromLocalStorage, moveTask }
