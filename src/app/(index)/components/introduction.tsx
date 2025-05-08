'use client'

import LineButton from '@/components/lineButton'
import Title from '@/components/title'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const Introduction = () => {
  const ref = useScrollAnimations()

  return (
    <section ref={ref} className="px-5 pt-10 md:pt-[52px]">
      <div className="fade-up flex justify-center">
        <a
          href="https://17.live/s/u/9ef2c16f-e1cc-49c6-b4f0-0bf6c6c60089"
          target="_blank"
          className="relative flex h-[95px] w-full max-w-[315px] flex-col items-center justify-center overflow-hidden rounded-[10px] p-0.5 duration-150 [box-shadow:0px_4px_40px_0px_rgba(255,_125,_211,_0.20)] hover:opacity-80"
        >
          <span className="absolute h-[500px] w-[500px] animate-[border-animation_5s_linear_infinite] overflow-hidden rounded-[10px] bg-[conic-gradient(_transparent_0%12.5%,_transparent_12.5%25%,_#FF7DD3_25%37.5%,_#FF7DD3_37.5%50%,_transparent_50%62.5%,_transparent_62.5%75%,_#3CE8FF_75%87.5%,_#3CE8FF_87.5%100%_)]"></span>
          <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-white bg-[linear-gradient(90deg,_rgba(255,125,211,1)_0%,_rgba(60,232,255,1)_100%)] p-px">
            <div className="relative h-full w-full  bg-white pt-4">
              <h4 className="text-center text-[20px] font-bold tracking-widest md:text-[24px]">
                .mike.ꪔ̤
              </h4>
              <p className="text-center text-[14px] font-black text-[#3CE8FF] md:text-[16px]">
                プロフィールはこちら
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="mt-8 md:hidden">
        <LineButton />
      </div>
      <div className="py-10 font-bold leading-[1.2] md:py-[60px]">
        <h4 className="fade-up flex items-center justify-center">
          <img src="/assets/images/17live-logo.svg" alt="" />
        </h4>
        <p className="fade-up text-center text-[24px] md:text-[42px]">
          公認パートナー
        </p>
        <p className="fade-up mt-5 text-center text-[20px] tracking-widest md:mt-7 md:text-[32px]">
          所属ライバーが
          <br />
          累計3000人を突破 !!
        </p>
        <p className="fade-up mt-9 text-center text-[20px] tracking-widest md:mt-14 md:text-[32px]">
          ライバーになりたい方
          <br />
          随時募集中 !
        </p>
      </div>
      <div className="mt-4">
        <Title>Good Fellows とは</Title>
        <p className="fade-up mx-auto w-full max-w-[425px] py-5 text-[15px] md:text-[18px]">
          17LIVEにおいてOfficial Business Partnerの最高ランクである【Gold
          Partner】及び【Silver
          Partner】に認定された実績を持ち、所属累計は3000名以上。育成実績日本一の実績を持つ17LIVEを代表するトップ事務所です。
        </p>
      </div>
    </section>
  )
}

export default Introduction
