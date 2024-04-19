import { ChangeEvent } from "react"

type InputProps = {
  type: "text" | "password" | "number"
  placeholder: string
  name: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
  type,
  placeholder,
  name,
  value,
  onChange,
}: InputProps) {
  return (
    <label htmlFor={name} className="block">
      <span className="text-sm">{placeholder}</span>
      <input
        className="block border border-[#EFEFEF] rounded px-2 py-2 text-sm w-full"
        value={value}
        onChange={onChange}
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </label>
  )
}
