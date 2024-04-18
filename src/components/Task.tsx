import { TaskType } from "../utils/types"

type TaskProps = {
  task: TaskType
}

export default function Task({ task }: TaskProps) {
  return (
    <div className="bg-white py-5 px-5 rounded-md border border-zinc-200 relative mb-3">
      <button className="absolute top-5 right-3 bg-gray-50 rounded-full px-1 py-1 hover:bg-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h3 className="text-base font-medium pr-5">{task.title}</h3>
      <div className="mt-4">
        <span className="inline-block px-3 py-2 text-xs bg-yellow-100 text-yellow-600 rounded-md">
          Medium
        </span>
      </div>
    </div>
  )
}
