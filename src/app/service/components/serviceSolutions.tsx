'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import useSplitTextAnimation from '@/hooks/useSplitTextAnimation'
import useMarquise from '@/hooks/useMarquise'
import Button from '@/components/button'

gsap.registerPlugin(ScrollTrigger)
gsap.config({
  nullTargetWarn: false,
})

const ServiceSolutions = () => {
  useSplitTextAnimation()
  const ref = useScrollAnimations()
  const marquiseRef = useMarquise()

  return (
    <div className="max-md:pt-[25vw] md:mt-[11vw]" ref={ref}>
      <div>
        <div className="px-5">
          <div className="mt-6 text-center font-solaris leading-[1.1] [font-size:_clamp(30px,10vw,90px)] md:mt-10 md:[font-size:_clamp(60px,8.333vw,120px)]">
            <p data-split-text data-delay="1">
              <span>INTEGRATED TECH</span>
            </p>
            <p data-split-text data-delay="1">
              <span>SOLUTIONS</span>
            </p>
          </div>
          <div className="fade-down mt-[5vw] flex justify-center md:mt-[2vw]">
            <p className="w-full max-w-[600px] text-[16px] leading-tight md:[font-size:_clamp(16px,1.25vw,21px)]">
              When your ambitions outgrow standard solutions, our
              multidisciplinary team, armed with state-of-the-art technology
              across blockchain, web, app, and AI, builds a tailored operational
              ecosystem, guaranteeing superior quality in every endeavor.
            </p>
          </div>
        </div>
        <div className="fade-down relative mt-20" ref={marquiseRef}>
          <div className="relative flex overflow-hidden max-md:flex-col">
            <p className="marquise u-outline-gray flex whitespace-nowrap break-keep font-solaris leading-[0.75] text-black [font-size:_clamp(44px,28vw,160px)] md:[font-size:_clamp(64px,18.056vw,260px)]">
              INTEGRATED INTEGRATED INTEGRATED
            </p>
            <div className="inset-0 flex items-center justify-center px-5 max-md:-mt-6 md:absolute">
              <Button href="/contact">CONTACT US</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceSolutions
