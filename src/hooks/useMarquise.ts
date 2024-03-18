import { useLayoutEffect, useRef } from 'react'

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const useMarquise = () => {
  const app = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const animations: { [key: string]: (el: HTMLElement) => void } = {
      marquise: (el: HTMLElement) =>
        gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              toggleActions: 'play pause reverse pause',
              scrub: true,
            },
          })
          .to(el, {
            xPercent: -50,
            ease: 'linear',
          }),
    }

    let ctx = gsap.context(() => {
      Object.entries(animations).forEach(([className, animation]) => {
        gsap.utils.toArray<HTMLElement>(`.${className}`).forEach(animation)
      })
    }, app)

    return () => ctx.revert()
  }, [])

  return app
}

export default useMarquise
