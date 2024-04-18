import { useState } from "react"
import Task from "./Task"
import { TaskType } from "../utils/types"
import { PlusIcon } from "@heroicons/react/24/outline"
import AddTask from "./AddTask"

type TaskListProps = {
  title: string
  tasks: TaskType[]
  backgroundColor: string
  Icon: React.ReactElement
}

export default function TaskList({
  title,
  tasks,
  backgroundColor,
  Icon,
}: TaskListProps) {
  const [openModal, setOpenModal] = useState(false)
  return (
    <div
      className="rounded-xl px-5 py-5"
      style={{ backgroundColor: backgroundColor }}
    >
      <h2 className="text-base font-medium py-3 px-5 w-[180px] bg-stone-200 rounded-full mb-3 flex">
        {Icon}
        <span className="ml-2">{title}</span>
      </h2>
      <div>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
      <div className="mt-6">
        <button
          onClick={() => setOpenModal(true)}
          className="flex items-center text-sm bg-stone-200 hover:bg-stone-300 py-2 px-4 rounded"
        >
          <PlusIcon className="w-4 h-4" /> <span className="ml-1">Add</span>
        </button>
        {openModal ? <AddTask handleClose={() => setOpenModal(false)} /> : null}
      </div>
    </div>
  )
}
