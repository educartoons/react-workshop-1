import React, { createContext, useContext, useReducer } from "react"
import { TaskType } from "../utils/types"

type State = {
  todo: TaskType[]
  inprogress: TaskType[]
  done: TaskType[]
}

type Action = {
  type: "add"
  payload: {
    title: string
    description: string
    difficulty: string
  }
}

type Dispatch = (action: Action) => void

const KanbanContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined)

type KanbanProviderProps = {
  children: React.ReactNode
}

const initialState: State = {
  todo: [],
  inprogress: [],
  done: [],
}

function kanvanReducer(state: State, action: Action) {
  switch (action.type) {
    case "add": {
      const newTask: TaskType = {
        id: crypto.randomUUID(),
        title: action.payload.title,
        difficulty: action.payload.difficulty,
        description: action.payload.description,
      }
      return {
        ...state,
        todo: [...state.todo, newTask],
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

function KanbanProvider({ children }: KanbanProviderProps) {
  const [state, dispatch] = useReducer(kanvanReducer, initialState)

  return (
    <KanbanContext.Provider value={{ state, dispatch }}>
      {children}
    </KanbanContext.Provider>
  )
}

function useKanban() {
  const context = useContext(KanbanContext)
  if (context === undefined) {
    throw new Error("useKanban must be used within a KanbanProvider")
  }

  return context
}

// eslint-disable-next-line react-refresh/only-export-components
export { KanbanProvider, useKanban }
