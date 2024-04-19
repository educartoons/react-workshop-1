import { TaskType, taskTypes } from "./Kanban"
import Task from "./Task"

type TaskListProps = {
  title: string
  tasks: TaskType[]
  moveTask: (
    taskId: string,
    origin: taskTypes | null,
    target: taskTypes | null
  ) => void
  namePrevList: taskTypes | null
  nameCurrentList: taskTypes
  nameNextList: taskTypes | null
}

export default function TaskList({
  tasks,
  title,
  moveTask,
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
          moveTask={moveTask}
          namePrevList={namePrevList}
          nameCurrentList={nameCurrentList}
          nameNextList={nameNextList}
        />
      ))}
    </div>
  )
}
