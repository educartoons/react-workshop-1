import { ChangeEvent, useEffect, useState, useCallback, useMemo } from "react"
import { useSelector, useDispatch } from "react-redux"
import Button from "./Button"
import AddTask from "./AddTask"
import TaskList from "./TaskList"
import { RootState } from "../store/store"
import { loadTasksFromLocalStorage } from "../store/kanbanSlice"
import { items } from "../utils/utils"
import useDebounce from "../hooks/useDebounce"

export default function Kanban() {
  const kanban = useSelector((state: RootState) => state.kanban)
  const [filter, setFilter] = useState("")
  const searchTerm = useDebounce(filter, 500)
  const [openModal, setModal] = useState(false)
  const dispatch = useDispatch()

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value)
  }, [])

  useEffect(() => {
    // call to API
    console.log("Calling to API")
  }, [searchTerm])

  useEffect(() => {
    dispatch(loadTasksFromLocalStorage())
  }, [])

  return (
    <div className="w-[1200px] mx-auto pt-5">
      <h2 className="text-2xl font-medium mb-4">🤟 Let's kick off the day</h2>
      <div>
        <label htmlFor="">
          <span className="text-sm font-semibold">Filter: </span>
          <input
            value={filter}
            onChange={handleChange}
            type="text"
            className="block border border-[#EFEFEF] rounded px-2 py-2 text-sm w-full"
          />
        </label>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <TaskList
          namePrevList={null}
          nameCurrentList="todo"
          nameNextList="inprogress"
          title="To Do"
          tasks={kanban.tasks.todo}
          handleChange={handleChange}
        />
        <TaskList
          namePrevList="todo"
          nameCurrentList="inprogress"
          nameNextList="done"
          title="In Progress"
          tasks={kanban.tasks.inprogress}
        />
        <TaskList
          namePrevList="inprogress"
          nameCurrentList="done"
          nameNextList={null}
          title="Done"
          tasks={kanban.tasks.done}
        />
      </div>
      <Button
        variant="primary"
        size="full"
        onClick={() => setModal(!openModal)}
      >
        Add Task
      </Button>
      {openModal ? <AddTask onClose={() => setModal(false)} /> : null}
    </div>
  )
}
