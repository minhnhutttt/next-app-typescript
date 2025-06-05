import { useEffect, RefObject } from 'react'

export const useGradientText = <T extends HTMLElement>(
  titleRef: RefObject<T | null>, 
  delay: number = 100
) => {
  useEffect(() => {
    if (!titleRef.current) return

    const timer = setTimeout(() => {
      const gradientChars = titleRef.current!.querySelectorAll('[data-char]') as NodeListOf<HTMLElement>
      
      if (gradientChars.length === 0) return
      
      let offset = 0
      gradientChars.forEach(function(char, i) {
        const parentElement = char.parentElement as HTMLElement
        char.style.backgroundSize = parentElement.offsetWidth + 'px 100%'
        
        const previousSibling = char.previousElementSibling as HTMLElement
        offset += previousSibling?.offsetWidth || 0
          
        char.style.backgroundPosition = parentElement.offsetWidth - offset + 'px 0%'
      })
    }, delay)

    return () => clearTimeout(timer)
  }, [titleRef, delay])
}