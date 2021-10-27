import { useState, useEffect } from "react"

export default function useMousePosition() {
  let [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    function handlePosition(e) {
      setMousePosition({ x: e.pageX, y: e.pageY })
    }

    window.addEventListener("mousemove", handlePosition)
    return () => window.removeEventListener("mousemove", handlePosition)
  }, [])

  return mousePosition
}
