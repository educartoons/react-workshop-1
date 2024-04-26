import { Outlet, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"

export default function ProtectedRoute() {
  const user = useSelector((state: RootState) => state.user)

  if (!user.authenticated) {
    return <Navigate to="/login" />
  }

  return <Outlet />
}
