import Task from "./Task"
import { TaskTypes } from "../context/kanban-context"
import type { Task as TaskType } from "../context/kanban-context"

type TaskListProps = {
  title: string
  tasks: TaskType[]
  namePrevList: TaskTypes | null
  nameCurrentList: TaskTypes
  nameNextList: TaskTypes | null
}

export default function TaskList({
  tasks,
  title,
  namePrevList,
  nameCurrentList,
  nameNextList,
}: TaskListProps) {
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
