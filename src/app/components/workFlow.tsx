'use client'

import { useEffect, useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import useSplitTextAnimation from '@/hooks/useSplitTextAnimation'
import Button from '@/components/button'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const Item = [
  'PROJECT INITIATION',
  'SCOPE DEFINITION',
  'SOLUTION PLANNING',
  'PROPOSAL PRESENTATION',
  'AGREEMENT FINALIZATION',
  'DEVELOPMENT PHASE',
  'QUALITY ASSURANCEN',
  'DELIVERY & IMPLEMENTATION',
  'PROJECT CLOSURE',
]

const WorkFlow = () => {
  useSplitTextAnimation()
  const ref = useScrollAnimations()

  const containerRef = useRef<HTMLDivElement>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray('.panel')
      const sliderContainer = sliderRef.current
      if (sliderContainer) {
        gsap.to(panels, {
          x: -sliderContainer.offsetWidth + window.innerWidth,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            pin: true,
            scrub: 1,
            snap: 1 / (panels.length - 1),
            start: 'center center',
            end: () => '+=' + sliderContainer.offsetWidth / 3,
          },
        })
      }
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div className="max-md:pt-[25vw] md:mt-[7.222vw]" ref={ref}>
      <div>
        <div className="px-5">
          <div
            data-split-text
            data-delay="1"
            className="mt-6 text-center font-solaris leading-[0.55] [font-size:_clamp(30px,10vw,90px)] md:mt-10 md:[font-size:_clamp(60px,8.333vw,120px)]"
          >
            <span>WORKFLOW</span>
          </div>
          <div className="fade-down mt-[15vw] flex justify-center md:mt-[5vw]">
            <p className="w-full max-w-[680px] text-[16px] leading-tight md:[font-size:_clamp(16px,1.25vw,18px)]">
              FROM CONCEPT TO COMPLETION, WE BRING YOUR PROJECTS TO LIFE. OUR
              EXPERT TEAMS IN MAJOR TECH HUBS WORLDWIDE ENSURE YOUR DEVELOPMENT
              NEEDS ARE MET WITH PRECISION AND AGILITY, ANYTIME, ANYWHERE.
            </p>
          </div>
        </div>
        <div className="relative mt-[3vw]" ref={containerRef}>
          <div className="flex items-center justify-center">
            <figure className="aspect-[420/428] w-[60vw] max-w-[420px] animate-[backwards-rotation_60s_infinite_linear] md:w-[29.167vw]">
              <img src="/assets/images/image-globular.png" alt="" />
            </figure>
          </div>
          <div className="absolute inset-x-0 top-1/2 z-10 -translate-y-1/2">
            <div className="overflow-hidden">
              <div
                ref={sliderRef}
                className="mx-[20.5vw] flex w-[calc(((60vw_*_9)_+_(4vw_*_8))_+_41vw)] gap-[4vw] md:mx-[30vw] md:w-[calc(((40vw_*_9)_+_(6.944vw_*_8))_+_60vw)] md:gap-[6.944vw]"
              >
                {Item.map((item, index) => (
                  <div
                    className="panel flex w-[60vw] justify-center md:w-[40vw]"
                    key={index}
                  >
                    <div className="flex h-[80px] w-full items-center justify-center gap-2 rounded-[10px] bg-[linear-gradient(90deg,_rgba(255,132,200,1)_0%,_rgba(181,228,255,1)_49%,_rgba(14,255,255,1)_100%)] p-px md:h-[102px] md:gap-8 md:p-px">
                      <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-black px-[100px] text-[18px] uppercase leading-none md:[font-size:_clamp(16px,1.667vw,24px)]">
                        {item}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[40px] flex justify-center md:mt-[64px]">
          <Button href="/workflow">VIEW WORKFLOW DETAILS</Button>
        </div>
      </div>
    </div>
  )
}

export default WorkFlow
