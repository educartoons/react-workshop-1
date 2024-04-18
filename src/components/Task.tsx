import { TaskType } from "./Kanban"

type TaskProps = {
  task: TaskType
}

export default function Task({ task }: TaskProps) {
  return (
    <div className="rounded-md bg-white mb-2 px-4 py-4">
      <h2>{task.title}</h2>
      {task.difficulty ? (
        <div className="mt-3">
          <span className="bg-orange-200 text-orange-500 inline-block px-3 py-1 rounded">
            {task.difficulty}
          </span>
        </div>
      ) : null}
    </div>
  )
}
