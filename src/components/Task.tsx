import Button from "./Button"
import DiffultyTag, { Difficulties } from "./DifficultyTag"
import { TaskType, TaskTypes } from "./Kanban"

type TaskProps = {
  task: TaskType
  handleMoveTask: (
    origin: TaskTypes,
    destiny: TaskTypes,
    taskId: string
  ) => void
}

export default function Task({ task, handleMoveTask }: TaskProps) {
  return (
    <div className="rounded-md bg-white mb-2 px-4 py-4">
      <h2 className="font-medium mb-3">{task.title}</h2>
      <DiffultyTag tag={task.difficulty as Difficulties} />
      <div className="mt-4">
        <Button
          variant="icon"
          onClick={() => handleMoveTask("todo", "inprogress", task.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </Button>
      </div>
    </div>
  )
}
