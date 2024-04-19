import { ChangeEvent } from "react"

type SelectProps = {
  options: string[]
  label: string
  name: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export default function Select({
  label,
  options,
  name,
  onChange,
}: SelectProps) {
  return (
    <label htmlFor={name}>
      <span className="text-sm">{label}</span>
      <select
        onChange={onChange}
        className="block border border-[#EFEFEF] rounded px-2 py-2 text-sm w-full"
        name={name}
        id={name}
      >
        <option className="text-gray-100" selected>
          Choose a {name}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  )
}
