'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const FV = () => {
  const ref = useScrollAnimations()

  return (
    <section
      ref={ref}
      className="relative z-10 h-[900px] px-5 pt-[100px] md:h-[1174px] md:pt-[130px] dark:text-white"
    >
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        <div className="zoom-out absolute left-0 top-0 z-10 size-[200px] overflow-hidden rounded-full md:size-[312px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
            poster="/assets/images/fv-01_poster.jpg"
          >
            <source src="/assets/videos/fv-01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="zoom-out absolute bottom-10 right-5 size-[280px] overflow-hidden rounded-full md:size-[513px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
            poster="/assets/images/fv-02_poster.jpg"
          >
            <source src="/assets/videos/fv-02.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="zoom-out relative z-10 pt-[220px] md:pt-[180px]">
          <div className="text-center text-[32px] leading-[1.3] md:text-[67px]">
            Gratitude leads to social contribution <br />
            Realizing zero-fee transactions
          </div>
          <div className="zoom-out relative z-10 flex justify-center pt-8 md:pt-12">
            <img
              className="dark:hidden"
              src="/assets/images/fv-text.svg"
              alt=""
            />
            <img
              className="hidden dark:inline-block"
              src="/assets/images/fv-text-white.svg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-[80vw] md:w-[721px]"
          viewBox="0 0 721 1489"
          fill="none"
        >
          <path
            id="fv-svg"
            d="M720 -141C629.833 -94.3333 429.8 44.8 351 228C252.5 457 288.5 758.5 225.5 988C175.1 1171.6 51.5 1397.17 -4 1487"
            stroke="#FB2C2B"
            strokeWidth="4"
          />
        </svg>
      </div>
    </section>
  )
}

export default FV
