import Button from "./Button"
import DifficultyTag from "./DifficultyTag"
import { TaskType, taskTypes } from "./Kanban"

type TaskProps = {
  task: TaskType
  moveTask: (
    taskId: string,
    origin: taskTypes | null,
    target: taskTypes | null
  ) => void
  namePrevList: taskTypes | null
  nameCurrentList: taskTypes
  nameNextList: taskTypes | null
}

export default function Task({
  task,
  moveTask,
  namePrevList,
  nameCurrentList,
  nameNextList,
}: TaskProps) {
  const handleClickNext = () => {
    moveTask(task.id, nameCurrentList, nameNextList)
  }

  const handleClickPrev = () => {
    moveTask(task.id, nameCurrentList, namePrevList)
  }

  return (
    <div className="rounded-md bg-white mb-2 px-4 py-4">
      <h2>{task.title}</h2>
      {task.difficulty ? (
        <div className="mt-3">
          <DifficultyTag difficulty={task.difficulty}>
            {task.difficulty}
          </DifficultyTag>
        </div>
      ) : null}
      <div className="mt-3">
        {nameCurrentList !== "todo" ? (
          <Button onClick={handleClickPrev} variant="icon">
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
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </Button>
        ) : null}
        {nameCurrentList !== "done" ? (
          <Button onClick={handleClickNext} variant="icon">
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
        ) : null}
      </div>
    </div>
  )
}
