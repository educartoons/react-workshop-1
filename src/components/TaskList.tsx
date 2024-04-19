import { TaskType, TaskTypes } from "./Kanban"
import Task from "./Task"

type TaskListProps = {
  title: string
  tasks: TaskType[]
  handleMoveTask: (
    origin: TaskTypes,
    destiny: TaskTypes,
    taskId: string
  ) => void
}

export default function TaskList({
  tasks,
  title,
  handleMoveTask,
}: TaskListProps) {
  return (
    <div>
      <h2 className="font-semibold mb-3">{title}</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} handleMoveTask={handleMoveTask} />
      ))}
    </div>
  )
}
