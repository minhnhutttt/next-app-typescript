'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import useSplitTextAnimation from '@/hooks/useSplitTextAnimation'
import Button from '@/components/button'

const Intro = () => {
  useSplitTextAnimation()
  const ref = useScrollAnimations()

  return (
    <section ref={ref}>
      <div className="mx-auto mt-[7.222vw] w-full max-w-[1330px] px-5">
        <div
          className="overflow-hidden font-solaris leading-none [font-size:_clamp(28px,12vw,80px)] md:[font-size:_clamp(40px,8.889vw,128px)]"
          data-split-text
          data-delay="1"
        >
          <span>WE&apos;RE</span>
        </div>
        <div className="relative md:flex">
          <div
            data-split-text
            data-delay="1"
            className="u-outline font-solaris leading-[.65] text-black [font-size:_clamp(80px,35vw,200px)] md:[font-size:_clamp(80px,20.833vw,300px)]"
          >
            <span>NOT</span>
          </div>
          <div
            data-split-text
            data-delay="1"
            className="bottom-0 right-0 font-solaris leading-[0.55] [font-size:_clamp(30px,10vw,90px)] max-md:text-right md:absolute md:[font-size:_clamp(60px,8.333vw,120px)]"
          >
            <span>JUST DEVELOPERS</span>
          </div>
        </div>
        <div className="mt-[6vw] flex justify-end md:mt-[3vw]">
          <div className="max-w-[750px]">
            <p className="fade-down text-[16px] leading-snug md:[font-size:_clamp(16px,1.25vw,18px)]">
              Expanding Technological Horizons: We are not just a development
              company; we are visionaries driving progress across multiple
              domains including blockchain, web, app, and AI. Our commitment
              lies in crafting state-of-the-art solutions that redefine how the
              world interacts, transacts, and evolves. Join us in shaping a
              future where technology creates unprecedented opportunities for
              growth and innovation.
            </p>
            <div className="mr-4 mt-6 flex justify-end md:mt-12">
              <Button href="/about">OUR COMPANY</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
