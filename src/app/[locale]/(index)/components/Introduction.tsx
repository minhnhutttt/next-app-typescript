'use client'

import { useLayoutEffect, useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useTranslations } from 'use-intl'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const Introduction = () => {
  const t = useTranslations('Home.Introduction')
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
      className="relative overflow-hidden px-5 md:px-10 max-md:pb-[100px]"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div
          ref={containerRef}
          className="flex flex-col items-center justify-center max-md:pt-[150px] md:h-screen"
        >
          <h2
            data-scroll
            className="text--enter flex items-center justify-center gap-5 md:gap-12 w-full mb-[3vw] overflow-hidden text-center text-[clamp(16px,6.5vw,50px)] font-semibold tracking-widest text-black md:mb-5 md:text-[50px] xl:text-[96px]"
          >
            <span className="h-px flex-1 bg-[linear-gradient(-283deg,_#FFF7E9_64.94%,_#EAC885_79.99%,_#A5884D_126.25%)]"></span>
            <span data-splitting>OUR MISSION</span>
            <span className="h-px flex-1 bg-[linear-gradient(283deg,_#FFF7E9_64.94%,_#EAC885_79.99%,_#A5884D_126.25%)]"></span>
          </h2>
          <div
            ref={charScrollRef}
            data-splitting
            className="break-keep text-left text-[clamp(14px,3.8vw,24px)] font-medium leading-[1.8] text-[#ADADAD]/[0.25] md:text-[28px] mx-auto w-full max-w-[990px]"
          >
            {t('Headline1')} <br />
            <br />
            {t('Headline2')}
            <br />
            <br />
            <span className="font-['Font_Awesome_5_Free']"
              dangerouslySetInnerHTML={{
                __html: t('Headline3'),
              }}
            ></span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
