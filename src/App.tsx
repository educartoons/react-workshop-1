import Kanban from "./components/Kanban"
import Login from "./components/Login"
import { KanbanContextProvider } from "./context/kanban-context"

export default function App() {
  return (
    <div className="w-screen h-screen bg-[#EFEFEF] flex items-center justify-center">
      <Login />
    </div>
    // <KanbanContextProvider>
    //   <div className="w-screen h-screen bg-[#EFEFEF]">{<Kanban />}</div>
    // </KanbanContextProvider>
  )
}
