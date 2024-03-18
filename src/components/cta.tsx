'use client'

import Link from 'next/link'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import useSplitTextAnimation from '@/hooks/useSplitTextAnimation'

const CTA = () => {
  useSplitTextAnimation()
  const ref = useScrollAnimations()

  return (
    <div className="mt-[12vw] overflow-hidden" ref={ref}>
      <div className="mx-auto w-full max-w-[848px] px-5">
        <div
          data-split-text
          data-delay="1"
          className="mt-6 text-center font-solaris leading-[0.55] [font-size:_clamp(30px,10vw,90px)] md:mt-10 md:[font-size:_clamp(60px,8.333vw,120px)]"
        >
          <span>LET&apos;S TALK</span>
        </div>
        <div className="mt-[32px] flex items-center max-md:flex-col md:mt-[70px] md:gap-10 lg:mt-[110px]">
          <div className="fade-down relative z-10 flex flex-1 items-center gap-10 md:gap-20">
            <img
              className="max-md:w-[60px]"
              src="/assets/images/ic-comment.png"
              alt=""
            />
            <p className="flex-1 text-[16px] md:text-[20px]">
              Harness our expertise to maximize your potential. Transform your
              innovative ideas into reality.
            </p>
          </div>
          <div className="fade-down w-[200px] max-lg:-mt-10 max-lg:ml-auto lg:w-[293px] ">
            <Link
              href="/contact"
              className="group relative block hover:duration-100 md:mb-5"
            >
              <div>
                <img
                  src="/assets/images/circle-talk.png"
                  className="animate-[r_linear_infinite_10s,_r_linear_infinite_15s_reverse_paused] duration-300 [animation-composition:add] group-hover:scale-110 group-hover:[animation-play-state:running]"
                  alt=""
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <img
                    className="max-lg:w-[6.836vw] max-md:w-[36px]"
                    src="/assets/images/fv-arrow.png"
                    alt=""
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CTA
