'use client'
import Button from '@/components/button'
import UnderlineText from '@/components/underlineText'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const Introduction = () => {
  const ref = useScrollAnimations()

  return (
    <section
      ref={ref}
      className="relative z-20 bg-[linear-gradient(180deg,_rgba(239,222,233,1)_0%,_rgba(249,237,242,1)_35%,_rgba(253,244,245,1)_68%,_rgba(255,215,207,1)_100%)] pl-2 md:pl-5"
    >
      <span className="pointer-events-none absolute left-0 top-[-50%] z-10 h-full w-full bg-[url('/assets/images/bg-02.png')] bg-left-top bg-no-repeat"></span>

      <div className="relative z-20 rounded-l-[45px] bg-white py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1000px]">
          <div className="max-md:px-5">
            <div className="max-xl:px-10 max-md:px-5">
              <h3 className="fade-up relative text-[22px] font-black leading-[1.3] tracking-[-0.018em] md:text-[42px]">
                <span className="absolute left-[-28px] top-1 md:left-[-40px] md:top-2.5">
                  <img
                    className="max-md:w-6"
                    src="/assets/images/ic-title.svg"
                    alt=""
                  />
                </span>
                LP訪問者の99％はコンバージョンせずに
                <UnderlineText>離脱します。</UnderlineText>
              </h3>
              <p className="fade-up mt-2 text-[16px] font-bold md:text-[23px]">
                嘘だと思ったあなた。すでに騙されています。確認推奨。
              </p>
            </div>
            <div className="mt-7 space-y-12 md:mt-10">
              <div className="fade-up flex justify-center gap-6 max-md:flex-col-reverse max-md:items-center md:justify-end md:gap-10 lg:gap-[100px]">
                <div className="max-w-[447px] flex-1 md:pt-5">
                  <p className="mb-4 text-[17px] font-bold leading-[1.3] md:mb-7 md:text-[25px]">
                    クリック数vs<UnderlineText>実際の売上。</UnderlineText>
                  </p>
                  <p className="text-[15px] font-medium leading-[1.55] md:text-[19px]">
                    広告代理店や広告担当者の成果報告は、クリック数やコンバージョン数ばかりに終始します。でも、あなたにとって重要なことの99%は、実際に売上があがったかどうかだけです。
                  </p>
                </div>
                <div className="">
                  <img src="/assets/images/introduction-img-01.png" alt="" />
                </div>
              </div>
              <div className="fade-up flex flex-row-reverse items-center justify-center gap-6 max-md:flex-col-reverse max-md:items-center md:justify-end md:gap-10">
                <div className="max-w-[447px] flex-1">
                  <p className="mb-4 text-[17px] font-bold leading-[1.3] md:mb-7 md:text-[25px]">
                    <UnderlineText>嘘の成果</UnderlineText>
                    に騙されないでください。
                  </p>
                  <p className="text-[15px] font-medium leading-[1.55] md:text-[19px]">
                    あなたが成果として報告されてきたものは成果ではありません。本当の成果とは実際に売上があがったかどうかで判断するのが正解です。
                  </p>
                </div>
                <div className="">
                  <img src="/assets/images/introduction-img-02.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction
