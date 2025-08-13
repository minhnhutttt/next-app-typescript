'use client'
import Button from '@/components/button'
import UnderlineText from '@/components/underlineText'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const data = [
  {
    image: '/assets/images/price-img-01.png',
    title: (
      <>
        エージェント<UnderlineText>手数料が半分以下。</UnderlineText>
      </>
    ),
    text: '広告代理店が当たり前に徴収する広告費×20％の重い労働費用がSEIKAIなら半分以下の9%。',
  },
  {
    image: '/assets/images/price-img-02.jpeg',
    title: (
      <>
        <UnderlineText>利用手数料は「完全後払い」でキャッシュフローに優しい設計</UnderlineText>
      </>
    ),
    text: '初期費用、月額固定費もゼロだからキャッシュフローを気にせず気軽に試せます。',
  },
]

const Prices = () => {
  const ref = useScrollAnimations()

  return (
    <section
      ref={ref}
      className="relative border-b border-[#838383] px-5 pb-[80px] pt-[100px] md:pb-[137px] md:pt-[105px]"
    >
      <div className="mx-auto w-full max-w-[1032px]">
        <div className="flex justify-center max-lg:px-5">
          <div>
            <h3 className="fade-up relative text-[22px] font-black leading-[1.3] tracking-[-0.018em] md:text-[42px]">
              <UnderlineText>明快かつ驚きの価格</UnderlineText>をあなたへ。
            </h3>
            <p className="fade-up mt-2 text-[16px] font-bold md:text-[23px]">
              広告代理店よりも優秀なAIがこの価格。
            </p>
          </div>
        </div>
        <div className="mt-[100px] flex flex-wrap justify-center gap-20 max-md:mx-auto max-md:max-w-[440px] md:mt-[175px] md:gap-[102px]">
          {data.map((item, index) => (
            <div className="fade-up w-full md:w-[463px]" key={index}>
              <figure className="overflow-hidden rounded-[45px] border border-[#7E7E7E]">
                <img src={item.image} alt="" />
              </figure>
              <div className="mt-6 md:mt-10">
                <h4 className="text-[18px] font-bold md:text-[26px]">
                  {item.title}
                </h4>
                <p className="mt-1 text-[15px] font-medium md:text-[19px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="relative flex justify-center pt-24 max-md:mt-6 md:mt-12 md:pt-28">
          <div className="fade-up absolute right-[6%] top-0 aspect-[302/110] w-[240px] bg-[url('/assets/images/bubble-2.png')] bg-cover md:w-[302px]">
            <p className="pl-4 pt-3 text-[15px] font-bold md:pl-5 md:pt-4 md:text-[19px]">
              さぁ、AI時代の広告運用をライバルより先に始めましょう。
            </p>
          </div>
          <Button href="/">今すぐ試すのが正解</Button>
        </div>
      </div>
    </section>
  )
}

export default Prices
