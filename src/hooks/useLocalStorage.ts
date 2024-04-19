import { useEffect, useState } from "react"

export default function useLocalStorage(key: string, initData: any) {
  const [state, setState] = useState(() => {
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

  const handleWriteData = (data: any) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(data))
    } catch {
      console.error("There was an error writing data from localStorage")
    }
  }

  useEffect(() => {
    handleWriteData(state)
  }, [state])

  return [state, setState]
}
