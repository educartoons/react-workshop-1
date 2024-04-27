import { ChangeEvent, memo } from "react"
import Task from "./Task"
import { TaskTypes } from "../context/kanban-context"
import type { Task as TaskType } from "../context/kanban-context"

type TaskListProps = {
  title: string
  tasks: TaskType[]
  namePrevList: TaskTypes | null
  nameCurrentList: TaskTypes
  nameNextList: TaskTypes | null
  handleChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

function TaskList({
  tasks,
  title,
  namePrevList,
  nameCurrentList,
  nameNextList,
  handleChange,
}: TaskListProps) {
  console.log("Rendering TaskList")
  return (
    <div>
      <h2 className="font-semibold mb-3">{title}</h2>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          namePrevList={namePrevList}
          nameCurrentList={nameCurrentList}
          nameNextList={nameNextList}
        />
      ))}
    </div>
  )
}

const TaskListMemo = memo(TaskList)

export default TaskListMemo
