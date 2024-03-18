'use client'

import Link from 'next/link'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import useSplitTextAnimation from '@/hooks/useSplitTextAnimation'
import useMarquise from '@/hooks/useMarquise'
import Card from './card'

const Service = () => {
  useSplitTextAnimation()
  const ref = useScrollAnimations()
  const marquiseRef = useMarquise()

  return (
    <section className="overflow-hidden " ref={ref}>
      <div className="relative mt-[20vw] md:mt-[8vw]" ref={marquiseRef}>
        <div className="fade-down relative">
          <div className="absolute left-0 right-0 top-0 flex overflow-hidden">
            <p className="marquise flex whitespace-nowrap break-keep font-solaris leading-[0.75] text-[#1C1B1B] [font-size:_clamp(80px,35vw,200px)] md:[font-size:_clamp(80px,20.833vw,300px)]">
              MOVEMENT MOVEMENT MOVEMENT
            </p>
          </div>
        </div>
        <div className="px-5 max-md:-mb-6">
          <div className="mx-auto w-full max-w-[1340px]">
            <div className="flex items-end pt-[16vw] max-md:flex-col md:pt-[3vw]">
              <div className="relative pb-[6vw] md:w-[44vw]">
                <p className="text-[16px] leading-snug md:[font-size:_clamp(16px,1.25vw,18px)]">
                  LEADING IN TECH INNOVATION, WE DELIVER COMPREHENSIVE SOLUTIONS
                  IN BLOCKCHAIN, WEB, APP, AND AI DEVELOPMENT, ENHANCING DATA
                  MANAGEMENT, DIGITAL EXPERIENCES, AND BUSINESS OPERATIONS IN
                  THE MODERN WORLD.
                </p>
                <div
                  data-split-text
                  data-delay="1"
                  className="mt-6 font-solaris leading-[0.55] [font-size:_clamp(30px,10vw,90px)] max-md:text-left md:mt-10 md:[font-size:_clamp(60px,8.333vw,120px)]"
                >
                  <span>SERVICES</span>
                </div>
              </div>
              <div className="flex justify-center max-md:w-full md:flex-1 md:justify-end md:pr-[60px]">
                <div className="w-[220px] max-w-[70%] max-md:ml-auto md:w-[27.5vw] md:max-w-[396px]">
                  <Link
                    href="/service"
                    className="group relative block hover:duration-100 md:mb-5"
                  >
                    <div>
                      <img
                        src="/assets/images/circle-fliqt.png"
                        alt=""
                        className="animate-[r_linear_infinite_10s,_r_linear_infinite_15s_reverse_paused] duration-300 [animation-composition:add] group-hover:scale-110 group-hover:[animation-play-state:running]"
                      />
                      <div className="absolute inset-0 flex flex-col items-center justify-center pt-8 md:pt-14">
                        <p className="mb-3 font-solaris text-[18px] md:mb-6 md:text-[2.344vw] lg:text-[22px]">
                          VIEW ALL SERVICES
                        </p>
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
        </div>
        <div className="px-5">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 justify-center gap-5 lg:grid-cols-4 lg:gap-7">
            <Card>
              <div className="flex flex-col items-center justify-center gap-2 p-[2vw] md:gap-8 md:p-10">
                <figure className="flex justify-center max-md:w-[40px]">
                  <img
                    className="w-full"
                    src="/assets/images/service-development-01.png"
                    alt=""
                  />
                </figure>
                <div className="text-center uppercase leading-none [font-size:_clamp(12px,2.2vw,24px)] md:[font-size:_clamp(18px,2.222vw,32px)]">
                  BLOCKCHAIN <br />
                  DEVELOPMENT
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col items-center justify-center gap-2 p-[2vw] md:gap-8 md:p-10 ">
                <figure className="flex justify-center max-md:w-[36px]">
                  <img
                    className="w-full"
                    src="/assets/images/service-development-02.png"
                    alt=""
                  />
                </figure>
                <div className="text-center uppercase leading-none [font-size:_clamp(12px,2.2vw,24px)] md:[font-size:_clamp(18px,2.222vw,32px)]">
                  WEBSITE <br />
                  DEVELOPMENT
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col items-center justify-center gap-2 p-[2vw] md:gap-8 md:p-10 ">
                <figure className="flex justify-center max-md:w-[44px]">
                  <img
                    className="w-full"
                    src="/assets/images/service-development-03.png"
                    alt=""
                  />
                </figure>
                <div className="text-center uppercase leading-none [font-size:_clamp(12px,2.2vw,24px)] md:[font-size:_clamp(18px,2.222vw,32px)]">
                  APPLICATION <br />
                  DEVELOPMENT
                </div>
              </div>
            </Card>
            <Card>
              <div className="flex flex-col items-center justify-center gap-2 p-[2vw] md:gap-8 md:p-10 ">
                <figure className="flex justify-center max-md:w-[44px]">
                  <img
                    className="w-full"
                    src="/assets/images/service-development-04.png"
                    alt=""
                  />
                </figure>
                <div className="text-center uppercase leading-none [font-size:_clamp(12px,2.2vw,24px)] md:[font-size:_clamp(18px,2.222vw,32px)]">
                  AI <br />
                  DEVELOPMENT
                </div>
              </div>
            </Card>
          </div>
        </div>
        <div>
          <div className="relative flex items-center justify-center pt-[4vw]">
            <div className="absolute top-[-6.944vw] h-full w-full bg-[url('/assets/images/deco.png')] bg-contain bg-right-top bg-no-repeat min-[1440px]:top-[-100px]"></div>
            <div className="relative aspect-square w-[88vw] max-w-[850px] -rotate-[25deg] overflow-hidden md:w-[59vw]">
              <div className="relative h-full w-full animate-[rotate_20s_infinite_linear]">
                <div className="absolute left-[0] top-2/4 flex w-full -translate-y-1/2 items-center justify-between">
                  <div className="animate-[backwards-rotation_20s_infinite_linear]">
                    <p className="flex aspect-square w-[24vw] max-w-[240px] animate-[scaling_20s_infinite_linear] items-center justify-center rounded-full border border-[#0EFFFF] bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] [animation-delay:-17.5s] [font-size:_clamp(12px,2vw,20px)] md:w-[16.667vw] md:[font-size:_clamp(16px,1.806vw,26px)]">
                      <span className="rotate-[25deg]">ROBUST</span>
                    </p>
                  </div>
                  <div className="animate-[backwards-rotation_20s_infinite_linear]">
                    <p className="flex aspect-square w-[24vw] max-w-[240px] animate-[scaling_20s_infinite_linear] items-center justify-center rounded-full border border-[#0EFFFF] bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] [font-size:_clamp(12px,2vw,20px)] [animation-delay:-27.5s] md:w-[16.667vw] md:[font-size:_clamp(16px,1.806vw,26px)]">
                      <span className="rotate-[25deg]">VERSATILE</span>
                    </p>
                  </div>
                </div>
                <div className="absolute left-[0] top-2/4 flex w-full -translate-y-1/2 rotate-45 items-center justify-between">
                  <div className="animate-[backwards-rotation_20s_infinite_linear]">
                    <p className="flex aspect-square w-[24vw] max-w-[240px] animate-[scaling_20s_infinite_linear] items-center justify-center rounded-full border border-[#0EFFFF] bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] [animation-delay:-20s] [font-size:_clamp(10px,1.6vw,18px)] md:w-[16.667vw] md:[font-size:_clamp(16px,1.806vw,26px)]">
                      <span className="rotate-[-20deg]">PROFESSIONAL</span>
                    </p>
                  </div>
                  <div className="animate-[backwards-rotation_20s_infinite_linear]">
                    <p className="flex aspect-square w-[24vw] max-w-[240px] animate-[scaling_20s_infinite_linear] items-center justify-center rounded-full border border-[#0EFFFF] bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] [font-size:_clamp(12px,2vw,20px)] [animation-delay:-30s] md:w-[16.667vw] md:[font-size:_clamp(16px,1.806vw,26px)]">
                      <span className="rotate-[-20deg]">RELIABLE</span>
                    </p>
                  </div>
                </div>
                <div className="absolute left-[0] top-2/4 flex w-full -translate-y-1/2 rotate-90 items-center justify-between">
                  <div className="animate-[backwards-rotation_20s_infinite_linear]">
                    <p className="flex aspect-square w-[24vw] max-w-[240px] animate-[scaling_20s_infinite_linear] items-center justify-center rounded-full border border-[#0EFFFF] bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] [font-size:_clamp(12px,2vw,20px)] [animation-delay:-22.5s] md:w-[16.667vw] md:[font-size:_clamp(16px,1.806vw,26px)]">
                      <span className="rotate-[-65deg]">STRATEGIC</span>
                    </p>
                  </div>
                  <div className="animate-[backwards-rotation_20s_infinite_linear]">
                    <p className="flex aspect-square w-[24vw] max-w-[240px] animate-[scaling_20s_infinite_linear] items-center justify-center rounded-full border border-[#0EFFFF] bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] [font-size:_clamp(12px,2vw,20px)] [animation-delay:-32.5s] md:w-[16.667vw] md:[font-size:_clamp(16px,1.806vw,26px)]">
                      <span className="rotate-[-65deg]">AGILE</span>
                    </p>
                  </div>
                </div>
                <div className="absolute left-[0] top-2/4 flex w-full -translate-y-1/2 rotate-[135deg] items-center justify-between">
                  <div className="animate-[backwards-rotation_20s_infinite_linear]">
                    <p className="flex aspect-square w-[24vw] max-w-[240px] animate-[scaling_20s_infinite_linear] items-center justify-center rounded-full border border-[#0EFFFF] bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] [font-size:_clamp(12px,2vw,20px)] [animation-delay:-25s] md:w-[16.667vw] md:[font-size:_clamp(16px,1.806vw,26px)]">
                      <span className="rotate-[-110deg]">INTEGRATIVE</span>
                    </p>
                  </div>
                  <div className="animate-[backwards-rotation_20s_infinite_linear]">
                    <p className="flex aspect-square w-[24vw] max-w-[240px] animate-[scaling_20s_infinite_linear] items-center justify-center rounded-full border border-[#0EFFFF] bg-[linear-gradient(0deg,_rgba(0,_0,_0,_0.20)_0%,_rgba(0,_0,_0,_0.20)_100%),_linear-gradient(94deg,_rgba(255,_132,_200,_0.20)_1.81%,_rgba(181,_228,_255,_0.20)_50.4%,_rgba(14,_255,_255,_0.20)_99%)] [font-size:_clamp(12px,2vw,20px)] [animation-delay:-35s] md:w-[16.667vw] md:[font-size:_clamp(16px,1.806vw,26px)]">
                      <span className="rotate-[-110deg]">FUTURISTIC</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[25deg]">
                <p
                  data-split-text
                  data-delay="1"
                  className="text-center font-solaris leading-none [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(60px,8.333vw,120px)]"
                >
                  <span>WE</span>
                </p>
                <p
                  data-split-text
                  data-delay="1"
                  className="text-center font-solaris leading-none [font-size:_clamp(30px,10vw,90px)] md:[font-size:_clamp(60px,8.333vw,120px)]"
                >
                  <span>ARE</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="fade-down relative mt-12">
          <div className="relative flex overflow-hidden max-md:flex-col">
            <p className="marquise flex whitespace-nowrap break-keep font-solaris leading-[0.75] text-[#1C1B1B] [font-size:_clamp(44px,28vw,160px)] md:[font-size:_clamp(64px,18.056vw,260px)]">
              VISIONARIES VISIONARIES VISIONARIES
            </p>
            <div className="inset-0 z-10 flex items-center justify-center px-5 max-md:-mt-8 md:absolute">
              <p className="w-full max-w-[770px] text-[16px] md:[font-size:_clamp(16px,1.25vw,18px)]">
                fliQt CONTINUES TO FORGE STRONG ALLIANCES WITH PIONEERS AND
                <br className="max-md:hidden" />
                VISIONARIES ACROSS VARIOUS TECHNOLOGY SECTORS INCLUDING
                BLOCKCHAIN, WEB, APPLICATION, AND AI DEVELOPMENT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
