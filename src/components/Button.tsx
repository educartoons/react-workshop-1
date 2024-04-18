type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="block text-sm bg-black text-white py-2 w-full rounded"
    >
      {children}
    </button>
  )
}
