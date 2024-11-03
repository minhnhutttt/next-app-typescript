'use client'

import Button from '@/components/button'
import useScrollAnimations from '@/hooks/useScrollAnimations'
import { useModal } from '@/context/ModalContext'
import Banner from './banner'

const FV = () => {
  const ref = useScrollAnimations()
  const { openModal } = useModal()
  return (
    <section ref={ref} className="relative">
      <div className="absolute right-[2vw] top-[90vw] md:top-[39.583vw] dt:right-7 dt:top-[570px]">
        <img
          className="fade-up max-dt:w-[7.5vw] max-md:w-8"
          src="/assets/images/meta-text.png"
          alt=""
        />
      </div>
      <div className="bg-[url(/assets/images/fv.jpg)] bg-cover pb-16 pt-16 md:pb-[96px] md:pt-6">
        <div className="relative mx-auto flex w-full max-w-[1440px] justify-center pb-[40vw] md:pb-3">
          <div className="fade-up pl-[3.056vw] dt:pl-11">
            <div className="relative aspect-[1387/631] w-[96.319vw] dt:w-[1387px]">
              <div className="absolute bottom-0 left-0 w-[26.042vw] animate-[floating_3s_0.2s_infinite_ease-in-out] dt:w-[375px]">
                <img src="/assets/images/fv-01.png" alt="" />
              </div>
              <div className="absolute left-[22.222vw] w-[19.167vw] animate-[floating_3s_0.6s_infinite_ease-in-out] dt:left-[320px] dt:top-0 dt:w-[276px]">
                <img src="/assets/images/fv-02.png" alt="" />
              </div>
              <div className="absolute left-[44.931vw] top-[4.167vw] w-[14.653vw] animate-[floating_3s_0.4s_infinite_ease-in-out] dt:left-[647px] dt:top-[60px] dt:w-[211px]">
                <img src="/assets/images/fv-03.png" alt="" />
              </div>
              <div className="absolute left-[62.917vw] top-[7.639vw] w-[12.153vw] animate-[floating_3s_1s_infinite_ease-in-out] dt:left-[906px] dt:top-[110px] dt:w-[175px]">
                <img src="/assets/images/fv-04.png" alt="" />
              </div>
              <div className="absolute left-[75.972vw] top-[14.583vw] w-[10.347vw] animate-[floating_3s_0.1s_infinite_ease-in-out] dt:left-[1094px] dt:top-[210px] dt:w-[149px]">
                <img src="/assets/images/fv-05.png" alt="" />
              </div>
              <div className="absolute left-[83.611vw] top-[25vw] w-[9.306vw] animate-[floating_3s_0.5s_infinite_ease-in-out] dt:left-[1204px] dt:top-[360px] dt:w-[134px]">
                <img src="/assets/images/fv-06.png" alt="" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 w-[96vw] md:left-[27.778vw] md:w-[50.833vw] dt:left-[400px] dt:w-[732px]">
            <h1 className="fade-up">
              <img src="/assets/images/fv-text.png" alt="" />
            </h1>
          </div>
          <div className="absolute bottom-[12vw] left-[2vw] w-[28vw] md:bottom-[4.167vw] md:left-[19.444vw] md:w-[23.819vw] dt:bottom-[60px] dt:left-[280px] dt:w-[343px]">
            <img className='fade-up' src="/assets/images/fv-sign.png" alt="" />
          </div>
        </div>
      </div>
      <div className="relative -mt-10 mb-12 px-5  max-md:mx-auto max-md:max-w-[440px] md:-mt-20 md:mb-[70px]">
        <Banner />
        <div className="mx-auto mt-10 w-full max-w-[920px] md:mt-14">
          <div className="fade-up flex items-center justify-center gap-4 max-md:flex-col md:gap-8">
            <figure>
              <img
                className="max-md:w-[42vw]"
                src="/assets/images/img-main.png"
                alt=""
              />
            </figure>
            <p className="u-text-gradient animate-[hue_10s_infinite_linear] font-zen text-[clamp(12px,4vw,22px)] font-bold leading-[2.2] md:text-[22px]">
              まぶたを閉じれば <br />
              浮かんでくる愛らしい姿を、
              <br />『 メタでペット供養 』が永遠に。
            </p>
          </div>
          <div className="fade-up mb-10 mt-10 md:mb-[62px] md:mt-16">
            <span className="block h-1 w-full bg-[linear-gradient(0deg,_#B69318_-21.4%,_#B69419_-19.25%,_#CEB342_2.33%,_#E0CB62_23.91%,_#EDDC79_43.33%,_#F5E787_62.74%,_#F8EB8C_80.01%,_#F2E483_97.27%,_#E5D16A_125.32%,_#CEB343_157.68%,_#B69318_190.05%)]"></span>
            <div className="space-y-4 px-3 py-5 md:space-y-[30px] md:px-5 md:py-6">
              <div className="flex gap-5 md:gap-[30px]">
                <figure>
                  <img
                    className="w-8 md:w-[45px]"
                    src="/assets/images/ic-check.png"
                    alt=""
                  />
                </figure>
                <p className="flex-1 text-[18px] font-extrabold  md:text-[26px]">
                  愛するペットとの別れを経験された方
                </p>
              </div>
              <div className="flex gap-5 md:gap-[30px]">
                <figure>
                  <img
                    className="w-8 md:w-[45px]"
                    src="/assets/images/ic-check.png"
                    alt=""
                  />
                </figure>
                <p className="flex-1 text-[18px] font-extrabold  md:text-[26px]">
                  ペットの供養方法を調べている方
                </p>
              </div>
              <div className="flex gap-5 md:gap-[30px]">
                <figure>
                  <img
                    className="w-8 md:w-[45px]"
                    src="/assets/images/ic-check.png"
                    alt=""
                  />
                </figure>
                <p className="flex-1 text-[18px] font-extrabold  tracking-tighter md:text-[26px]">
                  心をこめた供養をしてあげたいけど、どうしたらいいかわからない方
                </p>
              </div>
            </div>
            <span className="block h-1 w-full bg-[linear-gradient(0deg,_#B69318_-21.4%,_#B69419_-19.25%,_#CEB342_2.33%,_#E0CB62_23.91%,_#EDDC79_43.33%,_#F5E787_62.74%,_#F8EB8C_80.01%,_#F2E483_97.27%,_#E5D16A_125.32%,_#CEB343_157.68%,_#B69318_190.05%)]"></span>
          </div>
          <div className="mx-auto max-w-[420px] animate-[hue_10s_infinite_linear] overflow-hidden rounded-[22px] bg-[linear-gradient(122deg,_#2C87E3_10.27%,_#7E22D7_100.14%)] bg-cover p-0.5">
            <div className="min-h-[100px] w-full rounded-[22px] bg-white md:min-h-[110px]">
              <div className="fade-up u-text-gradient mx-auto w-full animate-[hue_10s_infinite_linear] px-2 pb-2 pt-4 text-center text-[14px] md:px-8 md:text-[18px]">
                あなた様がいずれかにあてはまるなら、
                <br />
                ペット供養の新たな選択肢として <br />
                『メタでペット供養』をご検討ください。
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FV
