import { useEffect } from "react"

type DialogProps = {
  children: React.ReactNode
  handleClose: () => void
  divRef: React.RefObject<HTMLDivElement>
}

export default function Dialog({ children, handleClose, divRef }: DialogProps) {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      handleClose()
    }
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (divRef.current && !divRef.current.contains(event.target as Node)) {
      handleClose()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      window.removeEventListener("keydown", handleClose)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4">
          <div className="relative transform overflow-hidden rounded-lg bg-white shadow-xl transition-all">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
