'use client'
import Button from '@/components/button'
import UnderlineText from '@/components/underlineText'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const Aim = () => {
  const ref = useScrollAnimations()

  return (
    <section ref={ref} className="relative pr-2 md:pr-5">
      <div className="rounded-r-[45px] bg-[url('/assets/images/bg-04.png')] bg-[length:100%_100%] py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1000px]">
          <div className="max-md:px-5">
            <div className="max-lg:px-5">
              <h3 className="fade-up relative text-[22px] font-black leading-[1.3] tracking-[-0.018em] md:text-[42px]">
                <span className="absolute left-[-28px] top-1 md:left-[-40px] md:top-2.5">
                  <img
                    className="max-md:w-6"
                    src="/assets/images/ic-title.svg"
                    alt=""
                  />
                </span>
                無駄撃ちやめて<UnderlineText>狙い撃ち。</UnderlineText>
              </h3>
              <p className="fade-up mt-2 text-[16px] font-bold md:text-[23px]">
                お金を無駄にしたくなければ今すぐSEIKAI広告エージェントで広告運用を始めてください。
              </p>
            </div>
            <div className="mt-7 space-y-12 md:mt-10 md:space-y-20">
              <div className="fade-up flex justify-center gap-6 max-md:flex-col-reverse max-md:items-center md:justify-end md:gap-10 lg:gap-[35px]">
                <div className="flex-1 md:pt-7 lg:pl-[60px]">
                  <p className="mb-4 text-[17px] font-bold leading-[1.3] md:mb-7 md:text-[25px]">
                    価値のない成果vs<UnderlineText>100万倍の価値</UnderlineText>
                    のある成果。
                  </p>
                  <p className="max-w-[447px] text-[15px] font-medium leading-[1.55] md:text-[19px]">
                    ボタンクリックやお金にならないコンバージョンがわかったところで意味はありません。実際に売上を生み出したコンバージョンにはそれらの100万倍価値があります。
                  </p>
                </div>
                <div className="">
                  <img src="/assets/images/aim-img-01.png" alt="" />
                </div>
              </div>
              <div className="fade-up flex flex-row-reverse items-center justify-center gap-6 max-md:flex-col-reverse max-md:items-center md:justify-end md:gap-10">
                <div className="flex-1">
                  <p className="mb-4 text-[17px] font-bold leading-[1.3] md:mb-7 md:text-[25px]">
                    なまけもの代理店に
                    <UnderlineText>別れを告げましょう。</UnderlineText>
                  </p>
                  <p className="max-w-[447px] text-[15px] font-medium leading-[1.55]  md:text-[19px]">
                    SEIKAI広告エージェントは、売上を生み出したコンバージョンをAIにフォーカス学習させることで継続的な売上創出を広告で支援します。
                  </p>
                </div>
                <div className="">
                  <img src="/assets/images/aim-img-02.png" alt="" />
                </div>
              </div>
            </div>
            <div className="fade-up relative flex justify-center pt-24 max-md:mt-6 md:pt-28">
              <div className="absolute right-[12%] top-0 aspect-[232/111] w-[180px] bg-[url('/assets/images/bubble.png')] bg-cover md:w-[232px]">
                <p className="pl-4 pt-3 text-[15px] font-bold md:pl-5 md:pt-4 md:text-[19px]">
                  売上はいかがですか？ <br />
                  広告の正解はここに。
                </p>
              </div>
              <Button href="mailto:info@cv-agent.ai">売上を伸ばす</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aim
