import { useState } from "react"
import Button from "./Button"
import AddTask from "./AddTask"
import TaskList from "./TaskList"
import { useKanbanContext } from "../context/kanban-context"

export default function Kanban() {
  const { state: kanban } = useKanbanContext()
  const [openModal, setModal] = useState(false)

  return (
    <div className="w-[1200px] mx-auto pt-5">
      <h2 className="text-2xl font-medium mb-4">
        🤟 Let's kick off the day 🔥
      </h2>
      <div className="grid grid-cols-3 gap-3">
        <TaskList
          namePrevList={null}
          nameCurrentList="todo"
          nameNextList="inprogress"
          title="To Do"
          tasks={kanban.todo}
        />
        <TaskList
          namePrevList="todo"
          nameCurrentList="inprogress"
          nameNextList="done"
          title="In Progress"
          tasks={kanban.inprogress}
        />
        <TaskList
          namePrevList="inprogress"
          nameCurrentList="done"
          nameNextList={null}
          title="Done"
          tasks={kanban.done}
        />
      </div>
      <Button
        variant="primary"
        size="full"
        onClick={() => setModal(!openModal)}
      >
        Add Task
      </Button>
      {openModal ? <AddTask onClose={() => setModal(false)} /> : null}
    </div>
  )
}
