'use client'

import { useEffect, useRef } from 'react'

import Link from 'next/link'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import useSplitTextAnimation from '@/hooks/useSplitTextAnimation'

const FV = () => {
  useSplitTextAnimation()
  const ref = useScrollAnimations()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!videoRef.current) return
    videoRef.current.play()
  }, [])

  return (
    <div
      className="relative flex w-full items-center justify-center overflow-hidden"
      ref={ref}
    >
      <video
        ref={videoRef}
        muted
        loop
        className="absolute inset-0 z-10 h-full w-full object-cover"
        poster="/assets/images/fv_poster.jpg"
      >
        <source src="/assets/videos/fv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 z-20 bg-[url('/assets/images/fv-gradient.jpg')] bg-cover opacity-70"></div>
      <div className="relative z-30 mx-auto flex w-full max-w-[1160px] justify-between gap-8 pb-20 pt-[140px] max-[1200px]:px-5 max-md:flex-col md:items-end md:gap-5 md:py-[153px]">
        <div className="relative z-10 font-solaris text-[13.6vw] md:[font-size:_clamp(86px,9.028vw,130px)]">
          <p className="fade-down text-[0.6em] leading-none md:text-[0.4em]">
            EMPOWERING YOUR <br />
            VISION WITH
          </p>
          <h1 className="leading-none">
            <p className="overflow-hidden" data-split-text data-delay="1">
              <span>CUTTING-</span>
            </p>
            <p className="overflow-hidden" data-split-text data-delay="2">
              <span>EDGE</span>
            </p>
            <p className="overflow-hidden" data-split-text data-delay="3">
              <span>SOLUTIONS</span>
            </p>
          </h1>
        </div>
        <div className="fade-down w-[200px] max-w-[55%] max-md:-mt-12 max-md:ml-auto md:w-[360px] md:max-w-[32%]">
          <Link
            href="/contact"
            className="group relative block hover:duration-100 md:mb-5"
          >
            <img
              src="/assets/images/circle-fliqt.png"
              alt=""
              className="animate-[r_linear_infinite_10s,_r_linear_infinite_15s_reverse_paused] duration-300 [animation-composition:add] group-hover:scale-110 group-hover:[animation-play-state:running]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 md:pt-14">
              <p className="mb-3 font-solaris text-[18px] md:mb-6 md:text-[2.344vw] lg:text-[24px]">
                GET STARTED
              </p>
              <img
                className="max-lg:w-[6.836vw] max-md:w-[36px]"
                src="/assets/images/fv-arrow.png"
                alt=""
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FV
