'use client'

import { useRef } from 'react'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className="relative -mt-[100vh] h-[600px] w-full md:h-[749px]">
      <div className="absolute inset-0 z-40 bg-black/60 max-xl:animate-[fadeOut_8s_forwards] xl:hidden"></div>
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute h-full w-full object-cover opacity-40"
      >
        <source src="/assets/videos/fv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        ref={containerRef}
        className="flex h-full w-full items-end justify-center overflow-hidden pt-20 md:pt-[118px]"
      >
        <div className="relative">
          <span className="absolute -right-10 z-[25] animate-[anim-bounce_1.6s_infinite_ease-in-out] md:right-[-80px]">
            <img src="/assets/images/hero-bubble.png" alt="" />
          </span>
          <div className="relative">
            <p className="relative z-10">
              <img
                className="max-md:h-[480px]"
                src="/assets/images/hero.png"
                alt=""
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
