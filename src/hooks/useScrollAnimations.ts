import { useLayoutEffect, useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const useScrollAnimations = () => {
  const app = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const animations: { [key: string]: (el: HTMLElement) => void } = {
      'fade-up': (el: HTMLElement) =>
        gsap.from(el, {
          autoAlpha: 0,
          y: 30,
          duration: 0.5,
          ease: 'Power2.easeInOut',
          scrollTrigger: { trigger: el, start: 'top 75%' },
        }),
      'fade-down': (el: HTMLElement) =>
        gsap.from(el, {
          autoAlpha: 0,
          y: -30,
          duration: 0.5,
          ease: 'Power2.easeInOut',
          scrollTrigger: { trigger: el },
        }),
      'zoom-out': (el: HTMLElement) =>
        gsap.from(el, {
          autoAlpha: 0,
          scale: 0.8,
          duration: 0.5,
          ease: 'Power2.easeInOut',
          scrollTrigger: { trigger: el },
        }),
      bgtext: (el: HTMLElement) =>
        gsap.to(el, {
          width: '100%',
          alpha: 1,
          duration: 1.4,
          ease: 'Power2.easeInOut',
          scrollTrigger: {
            trigger: el,
            toggleActions: 'play none none none',
          },
        }),
      show: (el: HTMLElement) =>
        gsap.from(el, {
          autoAlpha: 0,
          duration: 0.5,
          ease: 'Power2.easeInOut',
          scrollTrigger: {
            trigger: el,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
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

export default useScrollAnimations
