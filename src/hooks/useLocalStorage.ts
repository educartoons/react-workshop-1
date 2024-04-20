import { useEffect, useState } from "react"

export default function useLocalStorage<T>(key: string, initData: T) {
  const [state, setState] = useState<T>(() => {
    try {
      const data = window.localStorage.getItem(key)
      if (data) {
        return JSON.parse(data)
      }
      return initData
    } catch {
      console.error("There was an error reading data from localStorage")
    }
  })

  const handleWriteData = (data: T) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(data))
    } catch {
      console.error("There was an error writing data from localStorage")
    }
  }

  useEffect(() => {
    handleWriteData(state)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return [state, setState] as const
}
