import { createContext, useContext, useEffect, useReducer } from "react"
import useLocalStorage from "../hooks/useLocalStorage"

type KanbanContextProviderProps = {
  children: React.ReactNode
}

export type TaskTypes = keyof typeof initKanban

const initKanban: State = {
  todo: [],
  inprogress: [],
  done: [],
}

type Level = "easy" | "medium" | "hard"

export type Task = {
  id: string
  title: string
  level: Level
}

type State = {
  todo: Task[]
  inprogress: Task[]
  done: Task[]
}

type Action =
  | {
      type: "addTask"
      payload: {
        title: string
        level: string
      }
    }
  | {
      type: "moveTask"
      payload: {
        taskId: string
        origin: TaskTypes | null
        target: TaskTypes | null
      }
    }

type Dispatch = (action: Action) => void

const KanbanContext = createContext<
  | {
      state: State
      dispatch: Dispatch
    }
  | undefined
>(undefined)

function kanbanReducer(state: State, action: Action): State {
  switch (action.type) {
    case "addTask": {
      const newTask = {
        id: crypto.randomUUID() as string,
        title: action.payload.title,
        level: action.payload.level as Level,
      }
      return {
        ...state,
        todo: [...state.todo, newTask],
      }
    }
    case "moveTask": {
      const { origin, target, taskId } = action.payload
      if (origin === null || target === null) return state
      const originList = state[origin].filter((task) => task.id !== taskId)
      const targetList = state[target].concat(
        state[origin].find((task) => task.id === taskId)!
      )
      return {
        ...state,
        [origin]: originList,
        [target]: targetList,
      }
    }
    default:
      return state
  }
}

function KanbanContextProvider({ children }: KanbanContextProviderProps) {
  const [kanban, setkanban] = useLocalStorage("kanban", initKanban)
  const [state, dispatch] = useReducer(kanbanReducer, kanban)

  useEffect(() => {
    setkanban(state)
  }, [state])

  return (
    <KanbanContext.Provider value={{ state, dispatch }}>
      {children}
    </KanbanContext.Provider>
  )
}

function useKanbanContext() {
  const context = useContext(KanbanContext)
  if (!context) {
    throw new Error(
      "useKanbanContext needs to be used inside the KanbanContextProvider"
    )
  }
  return context
}

export { KanbanContextProvider, useKanbanContext }
