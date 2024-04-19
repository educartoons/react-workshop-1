type Difficulties = keyof typeof variants

type DiffultyTag = {
  tag: Difficulties
}

const variants = {
  easy: "bg-blue-200 text-xs text-blue-500 inline-block px-2 py-1 rounded",
  medium:
    "bg-orange-200 text-xs text-orange-500 inline-block px-2 py-1 rounded",
  hard: "bg-red-200 text-xs text-red-500 inline-block px-2 py-1 rounded",
}

export default function DiffultyTag({ tag }: DiffultyTag) {
  return <span className={variants[tag]}>{tag}</span>
}
