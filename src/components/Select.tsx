import { SelectHTMLAttributes } from "react"

type SelectProps = {
  items: string[]
  label: string
  name: string
} & SelectHTMLAttributes<HTMLSelectElement>

export default function Select({ items, label, name, ...props }: SelectProps) {
  return (
    <label htmlFor={name}>
      <span>{label}</span>
      <select
        className="block border border-[#EFEFEF] rounded px-2 py-2 text-sm w-full"
        name={name}
        id={name}
        {...props}
      >
        <option selected>Choose a level</option>
        {items.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  )
}
