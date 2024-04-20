import { useEffect } from "react"

type ModalboxProps = {
  children: React.ReactNode
  onClose: () => void
  divRef: React.RefObject<HTMLDivElement>
}

export default function Modalbox({ children, onClose, divRef }: ModalboxProps) {
  const handleKeypress = (event: KeyboardEvent) => {
    console.log("Aprentando teclas")
    if (event.key === "Escape") {
      onClose()
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      onClose()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeypress)
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("keydown", handleKeypress)
      document.removeEventListener("mousedown", handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="relative z-10">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center">
          <div className="relative bg-white rounded-lg">{children}</div>
        </div>
      </div>
    </div>
  )
}
