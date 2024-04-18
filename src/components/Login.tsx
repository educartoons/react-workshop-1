import { ChangeEvent, useEffect, useState } from "react"
import Input from "./Input"

const initForm = {
  username: "",
  password: "",
}

export default function Login() {
  const [form, setForm] = useState(initForm)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
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
        <button className="block text-sm bg-black text-white py-2 w-full rounded">
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
