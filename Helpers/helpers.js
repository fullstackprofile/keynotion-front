import { useEffect, useState } from 'react'

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(1590)

  useEffect(() => {
    const onResize = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.outerWidth)
      }
    }

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [isMobile])

  return isMobile
}
