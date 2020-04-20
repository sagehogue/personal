import React, { useState, useEffect, useRef } from "react"

export default ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({})
  const [node, setNode] = useState(null)

  const observer = useRef(
    new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      root,
      rootMargin,
      threshold,
    })
  )

  useEffect(() => {
    const { current: currentObserver } = observer
    currentObserver.disconnect()
    console.log(node, currentObserver)
    if (node) currentObserver.observe(node)

    return () => currentObserver.disconnect()
  }, [node])

  return [setNode, entry]
}
// We are gonna document how this works.
export const useDetectIntersection = () => {
  // Initialize a new observer by passing it a function. This function will take the observed 'entries' provided by the
  // observer and use them.
  // Threshold is an array of points of intersection at which our function will fire. So if I wanted it to fire at 100
  // Points across the div I'd have to create an array with 100 different values between 0-1 representing the
  // ratios of intersection at which I want the function to fire.
  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting === true) console.log("Element is visible")
    },
    { threshold: [0] }
  )
}
