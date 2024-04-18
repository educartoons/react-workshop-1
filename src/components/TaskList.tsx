import { TaskType } from "./Kanban"
import Task from "./Task"

type TaskListProps = {
  title: string
  tasks: TaskType[]
}

export default function TaskList({ tasks, title }: TaskListProps) {
  return (
    <div>
      <h2 className="font-semibold mb-3">{title}</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  )
}
