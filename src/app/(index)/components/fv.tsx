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
        <div className="absolute inset-x-0">
          <div className="absolute left-0 top-0 z-10 flex">
            <div className="relative">
              <img
                className="max-dt:w-[23.542vw] max-md:w-[180px]"
                src="/assets/images/logo-bg.png"
                alt=""
              />
              <a
                href="/"
                className="absolute inset-0 flex items-start justify-start pl-4 pt-5 md:pl-[3.889vw] md:pt-[3.333vw] dt:pl-14 dt:pt-12"
              >
                <img
                  className="max-w-[129px] max-dt:w-[8.958vw] max-md:w-[100px]"
                  src="/assets/images/logo.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div
            className={`relative z-[99] mx-auto flex max-w-[1360px] items-center justify-center max-xl:fixed max-xl:left-0 max-xl:top-0 max-xl:h-screen max-xl:w-full max-xl:flex-col max-xl:overflow-y-scroll max-xl:bg-white/90 xl:justify-end ${
              NavOpen ? '' : 'max-xl:invisible max-xl:opacity-0'
            }`}
          >
            <ul className="flex items-center gap-10 text-[18px] font-bold max-md:flex-col md:h-[56px] xl:mr-14 xl:items-end">
              <li>
                <a href="/#faq" onClick={close} className="">
                  よくある質問
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    close(), frontOpen()
                  }}
                  className=""
                >
                  お問い合わせ
                </button>
              </li>
            </ul>
          </div>
          <button
            className={`group absolute right-5 top-5 z-[99] h-6 w-8 xl:hidden ${
              NavOpen ? 'active fixed' : ''
            }`}
            onClick={() => setNavOpen((prev) => !prev)}
          >
            <span className="absolute left-0 top-0 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45 group-[.active]:bg-[#00AAFF]"></span>
            <span className="absolute left-0 top-2.5 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:bg-[#00AAFF] group-[.active]:opacity-0"></span>
            <span className="absolute bottom-0 left-0 block h-0.5 w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45 group-[.active]:bg-[#00AAFF]"></span>
          </button>
        </div>
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
