import Kanban from "./components/Kanban"
import { KanbanProvider } from "./context/kanban-context"

export default function App() {
  return (
    <KanbanProvider>
      <div className="">
        <Kanban />
      </div>
    </KanbanProvider>
  )
}
