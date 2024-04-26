import { BrowserRouter } from "react-router-dom"
import { SnackbarProvider } from "notistack"
import { Provider } from "react-redux"
import { KanbanContextProvider } from "./context/kanban-context"
import { store } from "./store/store"
import Router from "./Router"

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <SnackbarProvider>
          <KanbanContextProvider>
            <Router />
          </KanbanContextProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </Provider>
  )
}
