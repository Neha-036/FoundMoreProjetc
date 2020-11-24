import { useEffect, useState } from 'react'

const useIsMaxWidth = maxWidth => {
  const [isMaxWidth, setIsMaxWidth] = useState(
    window.innerWidth < parseInt(maxWidth, 10)
  )
  const mb = window.matchMedia(`(max-width: ${maxWidth})`)
  useEffect(() => {
    mb.addListener(({ matches }) => setIsMaxWidth(matches))
    return () => {
      mb.removeListener(({ matches }) => setIsMaxWidth(matches))
    }
  })
  return [isMaxWidth]
}

export default useIsMaxWidth
