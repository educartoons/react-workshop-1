type Difficulty = keyof typeof variants

type DifficultyTagProps = {
  children: React.ReactNode
  difficulty: Difficulty
}

const variants = {
  easy: "bg-blue-200 text-blue-500 inline-block px-3 py-1 rounded text-xs",
  medium:
    "bg-orange-200 text-orange-500 inline-block px-3 py-1 rounded text-xs",
  hard: "bg-red-200 text-red-500 inline-block px-3 py-1 rounded text-xs",
}

export default function DifficultyTag({
  children,
  difficulty,
}: DifficultyTagProps) {
  return <span className={variants[difficulty]}>{children}</span>
}
