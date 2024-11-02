'use client'

import Button from '@/components/button'
import useScrollAnimations from '@/hooks/useScrollAnimations'
import { useModal } from '@/context/ModalContext'

const FV = () => {
  const ref = useScrollAnimations()
  const { openModal } = useModal()

  return (
    <section ref={ref} className="relative">
      <div className="h-[74vw] bg-[url('/assets/images/price/fv.png')] bg-cover bg-center bg-no-repeat md:h-[63.889vw] dt:h-[920px]">
        <div className="relative mx-auto w-full max-w-[1440px]">
          <div className="absolute left-0 top-0 flex p-2 md:p-7">
            <h1>
              <img
                className="fade-up max-dt:w-[50.139vw] max-md:hidden"
                src="/assets/images/price/fv-text.png"
                alt=""
              />
              <img
                className="fade-up max-md:w-[26.286vw] md:hidden"
                src="/assets/images/price/fv-banner-sp.png"
                alt=""
              />
            </h1>
          </div>
          <div className="max-mx:px-5 flex justify-end pr-[3.889vw] pt-[1.111vw] dt:pr-14 dt:pt-4">
            <div className="flex flex-col items-end">
              <div className="flex flex-col items-center justify-center">
                <figure>
                  <img
                    className="fade-up max-dt:w-[45.764vw] max-md:w-[68vw]"
                    src="/assets/images/price/fv-banner-01.png"
                    alt=""
                  />
                </figure>
                <figure className="fade-up py-[1.667vw] dt:py-6">
                  <img
                    className="max-dt:w-[6.458vw]"
                    src="/assets/images/price/fv-tri.png"
                    alt=""
                  />
                </figure>
              </div>
              <figure>
                <img
                  className="fade-up max-dt:w-[57.222vw] max-md:w-[75.429vw]"
                  src="/assets/images/price/fv-banner-02.png"
                  alt=""
                />
              </figure>
              <div className="fade-up  max-md:hidden max-md:w-[calc(100vw-20px)] max-md:flex-col max-md:items-center max-md:justify-center max-md:pl-5 md:mr-[3.889vw] md:mt-[1vw] dt:mr-14 dt:mt-6">
                <div className=" md:w-[39.583vw] dt:w-[570px] ">
                  <p className="mb-1 text-center text-[14px] font-bold text-white max-md:text-black md:text-[1.25vw] dt:text-[18px]">
                    ＼多くの方にお問い合わせいただいています／
                  </p>
                  <Button
                    onclick={openModal}
                    rect="group flex items-center justify-center w-full md:h-[6.528vw] dt:h-[94px] h-[60px] bg-[#F12929] border-2 border-white rounded-[59px] text-white md:text-[1.736vw] dt:text-[25px] text-[14px] font-bold"
                  >
                    <span className="group-hover:text-black">
                      メモリアルモニターの枠を今すぐおさえる
                    </span>
                  </Button>
                  <p className="ml-auto mt-2 w-full max-w-[320px] text-[10px] md:mr-5 md:mt-6 md:max-w-[25.417vw] md:text-[0.833vw] dt:max-w-[366px] dt:text-[12px]">
                    モニターとして新たな供養体験へのフィードバックやSNS投稿にご協力いただく場合があります。ご協力いただけない方は、エントリープランまたはスタンダードプランをお選びください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[2.778vw] left-[5.556vw] max-md:hidden dt:bottom-10 dt:left-[80px]">
        <img
          className="fade-up max-dt:w-[54.375vw]"
          src="/assets/images/price/fv-logo.png"
          alt=""
        />
      </div>
      <div className="-mt-7 px-5 max-md:flex max-md:w-full max-md:flex-col max-md:items-center max-md:justify-center md:hidden">
        <div className="md:w-[39.583vw] dt:w-[570px]">
          <div className="flex items-center justify-center">
            <img src="/assets/images/price/fv-text-sp.png" alt="" />
          </div>
          <p className="mb-1 text-center text-[14px] font-bold text-white max-md:text-black md:text-[1.25vw] dt:text-[18px]">
            ＼多くの方にお問い合わせいただいています／
          </p>
          <Button
            onclick={openModal}
            rect="group flex items-center justify-center w-full md:h-[6.528vw] dt:h-[94px] h-[60px] bg-[#F12929] border-2 border-white rounded-[59px] text-white md:text-[1.736vw] dt:text-[25px] text-[14px] font-bold"
          >
            <span className="group-hover:text-black">
              メモリアルモニターの枠を今すぐおさえる
            </span>
          </Button>
          <p className="mx-auto mt-2 w-full max-w-[320px] text-[10px] md:mr-5 md:mt-6 md:max-w-[25.417vw] md:text-[0.833vw] dt:max-w-[366px] dt:text-[12px]">
            モニターとして新たな供養体験へのフィードバックやSNS投稿にご協力いただく場合があります。ご協力いただけない方は、エントリープランまたはスタンダードプランをお選びください。
          </p>
        </div>
      </div>
    </section>
  )
}

export default FV
