'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Benefits = () => {
  const ref = useScrollAnimations()
  return (
    <section ref={ref} className="relative mt-14 px-5 md:mt-24">
      <div className="fade-up mx-auto w-full max-w-[440px] rounded-[40px]  border-2 border-[#8EC21D] bg-[linear-gradient(116deg,_#A1DA29_-23.69%,_#47A40F_116.67%)] md:max-w-[1300px] md:rounded-[61px]">
        <div className="flex items-end items-center justify-between md:h-[134px]">
          <div className="-ml-2 w-[60px] md:w-[202px]">
            <img src="/assets/images/price/animal-01.png" alt="" />
          </div>
          <div className="flex flex-col justify-center text-white max-md:py-2 md:h-[134px]">
            <p className="text-[17px] font-extrabold md:text-[24px] lg:text-[38px]">
              エキゾチックペット
              <br className="md:hidden" />
              <span className="text-[22px] md:text-[30px] lg:text-[46px]">
                供養応援特典
              </span>
            </p>
            <p className="text-[14px] font-extrabold max-md:hidden md:text-[18px] lg:text-[25px]">
              ご要望が多かった犬や猫以外の様々なペットもご対応可能になりました！
            </p>
          </div>
          <div className="relative z-10 w-[100px] md:-mb-6 md:-mr-5 md:w-[297px]">
            <img src="/assets/images/price/animal-02.png" alt="" />
          </div>
        </div>
        <div className="relative flex items-center gap-[30px] rounded-b-[40px] bg-[linear-gradient(180deg,_#FAFFD9_0%,_#F5FAB9_100%)] px-7 py-6 max-md:flex-col md:rounded-b-[61px]">
          <figure className="max-lg:w-3/12 max-md:hidden max-md:w-auto">
            <img
              className="max-md:w-[180px]"
              src="/assets/images/price/animal-03.png"
              alt=""
            />
          </figure>
          <div className="">
            <p className="mb-6 text-[14px] font-extrabold md:hidden md:text-[18px] lg:text-[25px]">
              ご要望が多かった犬や猫以外の様々なペットもご対応可能になりました！
            </p>
            <figure className="border-b border-black/50 pb-6 md:hidden">
              <img src="/assets/images/price/animal-05.png" alt="" />
            </figure>
          </div>
          <div className="flex-1">
            <div className="border-b border-black pb-4 max-md:hidden">
              <img src="/assets/images/price/animal-04.png" alt="" />
            </div>
            <div className="md:pl-10">
              <div className="max-w-[670px]">
                <p className="text-[16px] font-bold md:text-[20px]">
                  ハムスター　モルモット　ウサギ　フェレット　ハリネズミ　モモンガ　
                  チンチラ　ミーアキャット　リス　デグー　インコ　オウム　文鳥　
                  カメ　ヘビ　カメレオン　イグアナ　トカゲ　金魚　熱帯魚　etc
                </p>
              </div>
              <div className="max-md:mt-6 max-md:pb-12 md:pr-28">
                <div className="max-w-[670px]">
                  <p className="text-[20px] font-bold leading-[1.4] text-[#52860B] md:text-center md:text-[32px]">
                    記載のないペットちゃんもご対応が可能です。
                    お気軽にお問い合わせください！
                  </p>
                </div>
              </div>
            </div>
          </div>
          <span className="absolute bottom-2 right-6 md:bottom-[47px] lg:right-[47px]">
            <img
              className="max-md:w-20"
              src="/assets/images/price/18.png"
              alt=""
            />
          </span>
        </div>
      </div>
    </section>
  )
}

export default Benefits
