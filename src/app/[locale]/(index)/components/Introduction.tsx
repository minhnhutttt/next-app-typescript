'use client'

import { useLayoutEffect, useRef } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLocale, useTranslations } from 'use-intl'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const Introduction = () => {
  const t = useTranslations('Home.Introduction')
    const locale = useLocale()
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
      <div className="mx-auto w-full max-w-[990px] text-[#ADADAD]">
        <div
          ref={containerRef}
          className="flex max-h-screen flex-col items-center justify-center max-md:py-[200px] md:h-screen"
        >
          <div
            ref={charScrollRef}
            data-splitting
            className="text-center text-[clamp(14px,3.8vw,24px)] font-medium leading-[1.8] md:text-[28px] break-keep"
          >
            {t('Headline1')} <br />
            <br />
            {t('Headline2')}
            <br />
            <br />
            {t('Headline3')}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
