import { ChangeEvent } from "react"

type InputProps = {
  type: "text" | "password" | "number"
  label?: boolean;
  placeholder?: string
  name: string
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Input({
  type,
  placeholder,
  name,
  value,
  label = true,
  onChange,
}: InputProps) {
  return (
    <label htmlFor={name} className="block">
      {label ? <span className="text-sm">{placeholder}</span> : null}
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
