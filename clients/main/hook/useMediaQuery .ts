import { IObject } from 'models/interfaces'
import { useCallback, useEffect, useState } from 'react'

export const useMediaQuery = (width: number) => {
  const [targetReached, setTargetReached] = useState<boolean | undefined>(undefined)

  const updateTarget = useCallback((e: IObject) => {
    setTargetReached(!!e.matches)
  }, [])

  useEffect(() => {
    const media = window.matchMedia(`(min-width: ${width}px)`)
    media.addEventListener('change', updateTarget)

    // Check on mount (callback is not called until a change occurs)
    setTargetReached(!!media.matches)

    return () => media.removeEventListener('change', updateTarget)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return targetReached
}
