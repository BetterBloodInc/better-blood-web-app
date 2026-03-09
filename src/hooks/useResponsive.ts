import { useEffect, useState } from 'react'

type Breakpoint = 'mobile' | 'tablet' | 'desktop'

export function useResponsive() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('mobile')
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width <= 768) {
        setBreakpoint('mobile')
      } else if (width > 768 && width <= 1024) {
        setBreakpoint('tablet')
      } else {
        setBreakpoint('desktop')
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return breakpoint
}
