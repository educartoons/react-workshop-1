import { ChangeEvent, useRef, useState } from "react"
import Input from "./Input"
import { useKanban } from "../context/kanban-context"
import Dialog from "./Dialog"

const initForm = {
  title: "",
  description: "",
  difficulty: "",
}

type AddTaskProps = {
  handleClose: () => void
}

export default function AddTask({ handleClose }: AddTaskProps) {
  const [form, setForm] = useState(initForm)
  const divRef = useRef(null)
  const { dispatch } = useKanban()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleAddTask = () => {
    dispatch({
      type: "add",
      payload: {
        ...form,
      },
    })
    handleClose()
  }

  return (
    <Dialog handleClose={handleClose} divRef={divRef}>
      <div ref={divRef} className="bg-white px-4 pt-5 pb-4 w-[500px]">
        <h2 className="text-2xl font-semibold mb-6">Add Task</h2>
        <div className="mb-4">
          <Input
            value={form.title}
            name="title"
            placeholder="Title"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            value={form.description}
            name="description"
            placeholder="Description"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <Input
            value={form.difficulty}
            name="difficulty"
            placeholder="Difficulty"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="mt-10">
          <button
            onClick={handleAddTask}
            className="block text-sm bg-black text-white py-3 w-full rounded"
          >
            Add
          </button>
        </div>
      </div>
    </Dialog>
  )
}
