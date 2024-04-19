import { useEffect, useState } from "react"
import Button from "./Button"
import AddTask from "./AddTask"
import TaskList from "./TaskList"
import useLocalStorage from "../hooks/useLocalStorage"

export type TaskType = {
  id: string
  title: string
  difficulty: string
}

export type taskTypes = keyof KanbanType

type KanbanType = {
  todo: TaskType[]
  inprogress: TaskType[]
  done: TaskType[]
}

const initKanban = {
  todo: [],
  inprogress: [],
  done: [],
}

export default function Kanban() {
  const [kanban, setKanban] = useLocalStorage("kanban", initKanban)
  const [openModal, setModal] = useState(false)

  const handleAddTask = (task: TaskType) => {
    setKanban({
      ...kanban,
      todo: [...kanban.todo, task],
    })
  }

  const moveTask = (
    taskId: string,
    origin: taskTypes | null,
    target: taskTypes | null
  ) => {
    if (origin === null || target === null) return

    const originList = kanban[origin].filter((task) => task.id !== taskId)
    const targetList = kanban[target].concat(
      kanban[origin].find((task) => task.id === taskId)!
    )
    setKanban({
      ...kanban,
      [origin]: originList,
      [target]: targetList,
    })
  }

  return (
    <div className="w-[1200px] mx-auto pt-5">
      <h2 className="text-2xl font-medium mb-4">🤟 Let's kick off the day</h2>
      <div className="grid grid-cols-3 gap-3">
        <TaskList
          namePrevList={null}
          nameCurrentList="todo"
          nameNextList="inprogress"
          title="To Do"
          tasks={kanban.todo}
          moveTask={moveTask}
        />
        <TaskList
          namePrevList="todo"
          nameCurrentList="inprogress"
          nameNextList="done"
          title="In Progress"
          tasks={kanban.inprogress}
          moveTask={moveTask}
        />
        <TaskList
          namePrevList="inprogress"
          nameCurrentList="done"
          nameNextList={null}
          title="Done"
          tasks={kanban.done}
          moveTask={moveTask}
        />
      </div>
      <Button
        variant="primary"
        size="full"
        onClick={() => setModal(!openModal)}
      >
        Add Task
      </Button>
      {openModal ? (
        <AddTask onAddTask={handleAddTask} onClose={() => setModal(false)} />
      ) : null}
    </div>
  )
}
