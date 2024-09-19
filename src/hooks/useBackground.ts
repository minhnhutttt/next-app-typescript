import { useLayoutEffect } from 'react'

import gsap, { Power0 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const useBackground = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray('.img-container').forEach((container: any) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            scrub: true,
            pin: false,
          },
        })

        tl.fromTo(
          container,
          {
            y: 0,
            ease: 'none',
          },
          {
            y: -100,
            ease: Power0.easeIn,
          }
        )
      })
    })

    return () => ctx.revert()
  }, [])
}

export default useBackground
