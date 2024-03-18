'use client'

import Link from 'next/link'

import { useLenis } from '@studio-freight/react-lenis'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import AboutTextSVG from './aboutTextSVG'

const AboutHead = () => {
  const ref = useScrollAnimations()
  const lenis = useLenis()

  return (
    <div className="px-5 pb-3" ref={ref}>
      <div className="mt-6 text-center md:mt-10">
        <AboutTextSVG />
      </div>
      <p className="fade-down mx-auto mt-6 w-full max-w-[603px] text-[16px] text-white max-md:px-5 md:mt-8 md:text-[18px]">
        fliQt is where innovation meets execution. Our expertise spans
        blockchain, web, app, and AI development, each tailored to revolutionize
        and streamline business operations. Committed to delivering excellence,
        we fuse technology with vision to propel your business into the future.
      </p>
      <div className="fade-down mx-auto mt-10 w-[160px] md:mt-[70px] md:w-[200px]">
        <Link
          href="/about#story"
          onClick={() => lenis.scrollTo('#story')}
          className="group relative block hover:duration-100 md:mb-5"
        >
          <div className="">
            <img
              src="/assets/images/circle-story.png"
              alt=""
              className="animate-[r_linear_infinite_10s,_r_linear_infinite_15s_reverse_paused] duration-300 [animation-composition:add] group-hover:scale-110 group-hover:[animation-play-state:running]"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <img
                className="rotate-90 max-lg:w-[6.836vw] max-md:w-[36px]"
                src="/assets/images/fv-arrow.png"
                alt=""
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default AboutHead
