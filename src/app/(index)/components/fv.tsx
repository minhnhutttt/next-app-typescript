'use client'

import { useCallback, useState } from 'react'

import Button from '@/components/button'
import useScrollAnimations from '@/hooks/useScrollAnimations'
import { frontOpen } from '@/lib/front'

const FV = () => {
  const ref = useScrollAnimations()
  const [NavOpen, setNavOpen] = useState(false)

  const close = useCallback(() => {
    setNavOpen(false)
  }, [])

  return (
    <section
      ref={ref}
      className="bg-[url('/assets/images/fv-bg.png')] bg-[length:100%_auto] bg-no-repeat "
    >
      <div className="relative px-5 md:px-10 ">
        <div className="relative">
          <div className="relative mx-auto flex w-full max-w-[1360px] items-center justify-center pt-[56px]">
            <div className="flex size-full h-[360px] items-center justify-center rounded-[60px] bg-[url('/assets/images/fv-img.png')] bg-center max-md:rounded-b-none max-md:bg-cover md:h-[690px]">
              <div className="absolute left-[9.722vw] top-0 z-20 max-md:hidden dt:left-[140px]">
                <img
                  className="max-dt:w-[26.875vw]"
                  src="/assets/images/fv-person2.png"
                  alt=""
                />
              </div>
              <h1 data-scroll className="ani-zoom-out relative">
                <img className="" src="/assets/images/fv-text.png" alt="" />
                <span className="absolute left-1/2 top-[41%] w-[28.8683%] -translate-x-1/2">
                  <img
                    className="korokoro"
                    src="/assets/images/fv-bubble.png"
                    alt=""
                  />
                </span>
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-8.333vw] right-0 z-10 aspect-[222/251] w-[15.417vw] bg-[url('/assets/images/fv-deco.png')] bg-cover dt:bottom-[-120px]"></div>
      </div>
      <div className="relative z-20 px-5 md:-mt-[10.764vw] dt:-mt-[155px]">
        <div className="mx-auto flex w-full max-w-[1360px] items-start max-md:flex-col">
          <div className="fade-up mt-10 flex flex-1 flex-col items-center justify-center max-md:mb-5 md:mt-[15.972vw] dt:mt-[230px]">
            <div className="mb-6 max-w-[544px] text-[18px] font-bold leading-[1.3] md:mb-9 md:text-[24px]">
              今いる場所の近くの最新情報をマップで発見し、NFTで特典をゲット！
              <br />
              あなたの街や旅先の新たな魅力を見つけよう！
            </div>
            <Button>近くの特典を探す</Button>
          </div>
          <div className="fade-up max-dt:w-[49.444vw] max-md:w-full">
            <img
              className="animate-[bound_3s_infinite]"
              src="/assets/images/intro-img.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default FV
