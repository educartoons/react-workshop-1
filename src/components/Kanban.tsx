import { useEffect, useState } from "react"
import Button from "./Button"
import AddTask from "./AddTask"
import Task from "./Task"
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

  useEffect(() => {
    console.log("useEffect")
  }, [])

  return (
    <div className="w-[1200px] mx-auto pt-5">
      <h2 className="text-2xl font-medium mb-4">🤟 Let's kick off the day</h2>
      <div className="grid grid-cols-3 gap-3">
        <TaskList title="To Do" tasks={kanban.todo} />
        <TaskList title="In Progress" tasks={kanban.inprogress} />
        <TaskList title="Done" tasks={kanban.done} />
      </div>
      <Button onClick={() => setModal(!openModal)}>Add Task</Button>

      {openModal ? (
        <AddTask onAddTask={handleAddTask} onClose={() => setModal(false)} />
      ) : null}
    </div>
  )
}
