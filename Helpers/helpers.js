// import { useEffect, useState } from 'react'

// export default function useIsMobile() {
//   const [isMobile, setIsMobile] = useState()

//   useEffect(() => {
//     const onResize = () => {
//       if (typeof window !== 'undefined') {
//         setIsMobile(window.outerWidth)
//       }
//     }

//     window.addEventListener('resize', onResize)

//     return () => {
//       window.removeEventListener('resize', onResize)
//     }
//   }, [isMobile])

//   return isMobile
// }

import { useEffect, useState } from 'react'

function useMediaQuery(query) {
  const getMatches = (query) => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange)
    } else {
      matchMedia.addEventListener('change', handleChange)
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange)
      } else {
        matchMedia.removeEventListener('change', handleChange)
      }
    }
  }, [query])

  return matches
}
export default useMediaQuery
