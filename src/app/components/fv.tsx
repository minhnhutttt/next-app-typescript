'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'

const FV = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="bg-[url('/assets/images/fv-bg.png')] max-xl:bg-cover min-[1490px]:bg-[length:100%_100%] bg-top h-[109.063vw] xl:h-[1396px]">
        <div className="w-full max-w-[79.219vw] xl:max-w-[1014px] mx-auto relative">
            <figure className="absolute top-[5vw] xl:top-16 left-[6.25vw] xl:left-[80px] max-xl:w-[41.406vw]">
                <img src="/assets/images/kiwi.png" alt="" />
            </figure>
            <figure className="absolute max-xl:w-[15.469vw] top-[7.031vw] xl:top-[90px] left-[44.688vw] xl:left-[572px]">
                <img src="/assets/images/label-kiwi.png" alt="" />
            </figure>
            <figure className="absolute max-xl:w-[29.922vw] top-[35.781vw] xl:top-[458px] left-[25.938vw] xl:left-[332px]">
                <img src="/assets/images/package-kiwi.png" alt="" />
            </figure>
            <figure className="absolute max-xl:w-[8.75vw] top-[3.125vw] xl:top-[40px] left-[62.5vw] xl:left-[800px]">
                <img src="/assets/images/text-kiwi.png" alt="" />
            </figure>
            <div className="text-[3.359vw] xl:text-[42px] font-hiragino font-semibold absolute top-[60.938vw] xl:top-[780px] leading-relaxed">
                <p className="tracking-wide">甘酸<span className="xl:text-[32px] text-[2.5vw]">っ</span>ぱく<span className="xl:text-[32px] text-[2.5vw]">て</span>クセ<span className="xl:text-[32px] text-[2.5vw]">になる</span></p>
                <p className="ml-[5.625vw] xl:ml-[72px]">まるごと<span className="xl:text-[32px] text-[2.5vw]">の</span>自然の旨味<span className="xl:text-[32px] text-[2.5vw]">を</span>お届けします</p>
            </div>
            <figure className="absolute max-xl:w-[56.797vw] top-[66.406vw] xl:top-[850px] left-[23.438vw] xl:left-[300px]">
                <img src="/assets/images/ippuku-dry-kiui.png" alt="" />
            </figure>
        </div>
    </section>
  )
}

export default FV
