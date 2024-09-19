'use client'
import useBackground from '@/hooks/useBackground'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react'

gsap.registerPlugin(ScrollTrigger)

const Digital = () => {
  useBackground()
  return (
    <section className="mb-[256px] max-md:mb-[82px]">
      <div>
        <div className="container relative z-10 mb-[-.7em] font-anton text-[calc(18px_+_8vw)]">
          <h2 className="uppercase leading-[1.25]">
            <span className="stroke">FACILITATING</span> BUSINESS GROWTH THROUGH
            GLOBAL TALENT ACQUISITION.
          </h2>
        </div>
        <div className="relative aspect-[2.4/1] overflow-hidden max-md:aspect-[4/3]">
          <div className="img-container absolute bottom-[-100px] left-0 h-[calc(100%_+_100px)] w-[calc(100%_+_100px)] bg-[url('/assets/images/techno_toppage.png')] bg-cover bg-center"></div>
        </div>
        <div className="relative overflow-hidden bg-[#eee]">
          <a className="block" href="/about">
            <div className="flex items-center justify-end py-[3%] pr-[16px] font-anton text-[calc(16px_+_3vw)]">
              <div className="flex items-center gap-[16px] uppercase leading-none">
                More <span className="stroke">About</span> Us
                <div className="flex aspect-square w-[3em] items-center justify-center rounded-full bg-white text-[21px]">
                  <img
                    src="/assets/images/arrow.svg"
                    className="max-h-[50%]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Digital
