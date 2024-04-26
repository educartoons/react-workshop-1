import { ChangeEvent, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useSnackbar } from "notistack"
import Input from "./Input"
import { login } from "../store/userSlice"

const initForm = {
  username: "",
  password: "",
}

export default function Login() {
  const [form, setForm] = useState(initForm)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }

  const handleLogin = () => {
    dispatch(login({ name: "educartoons" }))
    enqueueSnackbar(`Welcome ${form.username}`, {
      variant: "info",
      anchorOrigin: { horizontal: "right", vertical: "top" },
    })
    navigate("/")
  }

  return (
    <div className="bg-white py-12 px-4 w-[300px]">
      <h2 className="text-2xl font-semibold mb-4">Hi, Welcome! 👋🏽</h2>
      <div className="mb-2">
        <Input
          onChange={handleChange}
          value={form.username}
          type="text"
          placeholder="Username"
          name="username"
        />
      </div>
      <div>
        <Input
          onChange={handleChange}
          value={form.password}
          type="password"
          placeholder="Password"
          name="password"
        />
      </div>
      <div className="mt-1">
        <p className="text-xs text-right">Forgot Password?</p>
      </div>
      <div className="mt-6">
        <button
          onClick={handleLogin}
          className="block text-sm bg-black text-white py-2 w-full rounded"
        >
          Log in
        </button>
      </div>
      <div className="mt-10">
        <p className="text-xs text-center text-zinc-500">
          Don't have an account ?
          <a className="text-black font-semibold" href="">
            Sign up
          </a>
        </p>
      </div>
    </div>
  )
}
