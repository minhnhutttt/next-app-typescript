'use client'

import gsap from 'gsap'
import { ReactNode, useLayoutEffect } from 'react'

type PageTitlePropsType = {
  children: ReactNode
}

const PageTitle = ({ children }: PageTitlePropsType) => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap
        .to('.marquee__part', {
          xPercent: -100,
          repeat: -1,
          duration: 15,
          ease: 'linear',
        })
        .totalProgress(0.5)

      gsap.set('.marquee__inner', { xPercent: -50 })
    })

    return () => ctx.revert()
  }, [])
  return (
    <div className="mb-[calc(30vh_-_120px)] max-md:mb-[calc(20vh_-_80px)]">
      <div className="marquee overflow-hidden pt-[30vh] uppercase max-md:pt-[20vh]">
        <div className="marquee__inner relative flex w-fit flex-auto flex-row gap-[24px] whitespace-nowrap">
          <p className="marquee__part shrink-0 px-2 text-center font-anton text-[calc(18px_+_12vw)] uppercase leading-none md:px-6">
            {children}
          </p>
          <p className="marquee__part shrink-0 px-2 text-center font-anton text-[calc(18px_+_12vw)] uppercase leading-none md:px-6">
            {children}
          </p>
          <p className="marquee__part shrink-0 px-2 text-center font-anton text-[calc(18px_+_12vw)] uppercase leading-none md:px-6">
            {children}
          </p>
          <p className="marquee__part shrink-0 px-2 text-center font-anton text-[calc(18px_+_12vw)] uppercase leading-none md:px-6">
            {children}
          </p>
          <p className="marquee__part shrink-0 px-2 text-center font-anton text-[calc(18px_+_12vw)] uppercase leading-none md:px-6">
            {children}
          </p>
          <p className="marquee__part shrink-0 px-2 text-center font-anton text-[calc(18px_+_12vw)] uppercase leading-none md:px-6">
            {children}
          </p>
          <p className="marquee__part shrink-0 px-2 text-center font-anton text-[calc(18px_+_12vw)] uppercase leading-none md:px-6">
            {children}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PageTitle
