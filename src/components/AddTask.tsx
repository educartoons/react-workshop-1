import { ChangeEvent, useRef, useState } from "react"
import Modalbox from "./Modalbox"
import Input from "./Input"
import Button from "./Button"
import { TaskType } from "./Kanban"

type AddTaskProps = {
  onClose: () => void
  onAddTask: (task: TaskType) => void
}

const initForm = {
  id: "",
  title: "",
  difficulty: "",
}

export default function AddTask({ onClose, onAddTask }: AddTaskProps) {
  const [form, setForm] = useState(initForm)
  const divRef = useRef(null)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleAdd = () => {
    onAddTask({
      ...form,
      id: crypto.randomUUID(),
    })
    onClose()
  }

  return (
    <Modalbox divRef={divRef} onClose={onClose}>
      <div ref={divRef} className="w-[500px] py-4 px-4">
        <h2 className="text-2xl font-semibold mb-4"> Add Task</h2>
        <div className="mb-3">
          <Input
            value={form.title}
            placeholder="Title"
            name="title"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div className="mb-7">
          <Input
            value={form.difficulty}
            placeholder="Difficulty"
            name="difficulty"
            type="text"
            onChange={handleChange}
          />
        </div>
        <Button onClick={handleAdd}>Add</Button>
      </div>
    </Modalbox>
  )
}
