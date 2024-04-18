import TaskList from "./TaskList"
import { TasksBackground } from "../utils/constants"
import {
  DocumentMinusIcon,
  CheckBadgeIcon,
  BoltIcon,
} from "@heroicons/react/24/outline"
import { useKanban } from "../context/kanban-context"

export default function Kanban() {
  const { state } = useKanban()
  return (
    <div className="mx-auto w-[1000px] pt-16">
      <div className="bg-orange-50 rounded-xl px-8 py-8 mb-5">
        <h2 className="text-3xl font-semibold">🤟 Let's kick off the day</h2>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <TaskList
          title="To Do"
          tasks={state.todo}
          backgroundColor={TasksBackground.TODO}
          Icon={<DocumentMinusIcon className="w-6 h-6" />}
        />
        <TaskList
          title="In Progress"
          tasks={state.inprogress}
          backgroundColor={TasksBackground.INPROGRESS}
          Icon={<BoltIcon className="w-6 h-6" />}
        />
        <TaskList
          title="Done"
          tasks={state.done}
          backgroundColor={TasksBackground.DONE}
          Icon={<CheckBadgeIcon className="w-6 h-6" />}
        />
      </div>
    </div>
  )
}
