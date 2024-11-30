'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const Waku = () => {
  const ref = useScrollAnimations()

  return (
    <section
      ref={ref}
      className="bg-[url('/assets/images/bg-waku1.png')] bg-[length:100%_auto] bg-bottom bg-no-repeat px-5 pt-20 md:pt-[120px]"
    >
      <div
        data-scroll
        className="ani-zoom-out relative mx-auto h-[450px] w-full max-w-[1012px] overflow-hidden rounded-[25px] border-[6px] border-[#0F0F0F] bg-[url(/assets/images/bg-waku.png)] bg-[length:100%_100%] bg-center max-md:flex max-md:items-center md:h-[712px] md:rounded-[50px] md:border-[12px]"
      >
        <figure className="absolute right-0 top-[0px] max-md:w-[130px]">
          <img src="/assets/images/illustrator-right.png" alt="" />
        </figure>
        <figure className="absolute left-0 top-[0] max-md:w-[130px]">
          <img src="/assets/images/illustrator-left.png" alt="" />
        </figure>
        <figure className="absolute bottom-[0px] right-0 z-20 max-lg:w-[20.898vw] max-md:w-[70px]">
          <img src="/assets/images/right-mama.png" alt="" />
        </figure>
        <figure className="absolute bottom-[0] left-0 z-20 max-lg:w-[23.633vw] max-md:w-[70px]">
          <img src="/assets/images/left-papa.png" alt="" />
        </figure>
        <div className="relative z-10 mx-auto flex h-[320px] w-full max-w-[300px] flex-col items-center justify-center bg-[url(/assets/images/bg-clound.png)] bg-[length:100%_100%] font-kaisei font-bold md:h-[645px] md:max-w-[816px]">
          <p className="text-center text-[20px] leading-6 md:text-[4.688vw] md:leading-[67px] lg:text-[48px]">
            <span className="text-[#DF0F47]">今だけ</span>の
            <span className="text-[#00AAFF]">サービス</span>や<br />
            <span className="text-[#46BF00]">イベント</span>・
            <span className="text-[#FA67C4]">限定NFT</span>が<br />
            続々登場中！
          </p>
          <p className="left-6 text-center text-[30px] md:text-[7.813vw] md:leading-[96px] lg:text-[80px]">
            <span className="gradient-background relative bg-[linear-gradient(to_top,_#F2E206_20%,_transparent_20%)] bg-[size:0_100%] bg-no-repeat">
              近くの特典を
              <br />
              見つけよう！
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Waku
