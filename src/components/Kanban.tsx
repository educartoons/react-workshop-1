import { useEffect, useState } from "react"
import Button from "./Button"
import AddTask from "./AddTask"
import TaskList from "./TaskList"

export type TaskType = {
  id: string
  title: string
  difficulty: string
}

type KanbanType = {
  todo: TaskType[]
  inprogress: TaskType[]
  done: TaskType[]
}

export type TaskTypes = keyof KanbanType

export default function Kanban() {
  const [kanban, setKanban] = useState<KanbanType>({
    todo: [],
    inprogress: [],
    done: [],
  })
  const [openModal, setModal] = useState(false)

  const handleAddTask = (task: TaskType) => {
    setKanban({
      ...kanban,
      todo: [...kanban.todo, task],
    })
  }

  const moveTask = (origin: TaskTypes, destiny: TaskTypes, taskId: string) => {
    // first removeTask
    const newOrigin = kanban[origin].filter((task) => task.id !== taskId)
    const newDestiny = kanban[destiny].concat(
      kanban[origin].find((task) => task.id === taskId)!
    )
    setKanban({
      ...kanban,
      [origin]: newOrigin,
      [destiny]: newDestiny,
    })
  }

  useEffect(() => {
    console.log("useEffect")
  }, [])

  return (
    <div className="w-[1200px] mx-auto pt-8">
      <h2 className="text-2xl font-semibold mb-7">🤟 Let's kick off the day</h2>
      <div className="grid grid-cols-3 gap-3">
        <TaskList title="To Do" tasks={kanban.todo} handleMoveTask={moveTask} />
        <TaskList
          title="In Progress"
          tasks={kanban.inprogress}
          handleMoveTask={moveTask}
        />
        <TaskList title="Done" tasks={kanban.done} handleMoveTask={moveTask} />
      </div>
      <Button onClick={() => setModal(!openModal)}>Add Task</Button>

      {openModal ? (
        <AddTask onAddTask={handleAddTask} onClose={() => setModal(false)} />
      ) : null}
    </div>
  )
}
