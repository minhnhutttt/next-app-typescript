'use client'

import { useLayoutEffect, useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const Introduction = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const charScrollRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    let ctx: gsap.Context | null = null

    import('splitting').then(({ default: Splitting }) => {
      Splitting()

      if (!charScrollRef.current || !containerRef.current) return

      const charScroll = charScrollRef.current.querySelectorAll('.char')

      gsap.set(charScroll, {
        display: 'inline-block',
      })

      ctx = gsap.context(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.9,
            pin: true,
          },
        })

        tl.to(
          charScroll,
          {
            opacity: 1,
            stagger: 1,
            duration: 1,
            color: '#000',
          },
          0.1
        )
      })

      ScrollTrigger.refresh()
    })

    return () => {
      ctx?.revert()
    }
  }, [])

  return (
    <section
      id="introduction"
      className="relative mt-[calc(100vh)] overflow-hidden px-5 md:px-10"
    >
      <div className="mx-auto w-full max-w-[980px] text-[#ADADAD]">
        <div
          ref={containerRef}
          className="flex max-h-screen flex-col items-center justify-center max-md:py-[200px] md:h-screen"
        >
          <div
            ref={charScrollRef}
            data-splitting
            className="text-center text-[clamp(14px,3.8vw,24px)] font-medium leading-[1.8] md:text-[28px]"
          >
            A NEXUS connects North America, ASEAN, and East Asian markets,
            creating a seamless  flow of entertainment content and bringing
            mutual benefits to all regions. <br />
            <br />
            Through our  comprehensive business approach, we maximize the value
            of entertainment rights while  supporting creators and artists.
            <br />
            <br />
            We aim to be the definitive platform holder that delivers  premium
            entertainment experiences worldwide through strategic integration
            across the entire  value chain.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
