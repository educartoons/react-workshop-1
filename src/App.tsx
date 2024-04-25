import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { SnackbarProvider } from "notistack"
import { KanbanContextProvider } from "./context/kanban-context"
import Homepage from "./pages/Homepage"
import LoginPage from "./pages/Loginpage"
import NotFoundPage from "./pages/NotFoundPage"
import ErrorBoundary from "./components/ErrorBoundary"
import { store } from "./store/store"

export default function App() {
  return (
    <Provider store={store}>
      <SnackbarProvider>
        <KanbanContextProvider>
          <div>
            <ErrorBoundary>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </BrowserRouter>
            </ErrorBoundary>
          </div>
        </KanbanContextProvider>
      </SnackbarProvider>
    </Provider>
  )
}
