'use client'

import ImageHover from '@/components/imageHover'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const data = [
  {
    image: '/assets/images/merit-pin-01.png',
    title: '1.あなたの街の最新情報を一目で確認！',
    items: [
      <>
        地域のイベントやショップの特典が、
        <span className="font-bold">
          あなたの現在地に基づいて簡単に確認できる！
        </span>
      </>,
      'バイト、カフェ、ショッピング、エンタメなど、日常で使えるお得情報が満載！',
    ],
    background: 'bg-[#F2685B]/[0.1]',
  },
  {
    image: '/assets/images/merit-pin-02.png',
    title: <>2.地域の特典をNFTでゲット！</>,
    items: [
      <>
        <span className="font-bold">
          地域限定のNFTを手に入れて、特典やクーポンをすぐに利用！
        </span>
      </>,
      'NFTを集める楽しさと、特典をゲットするお得感が同時に味わえる！',
    ],
    background: 'bg-[#46BF00]/[0.19]',
  },
  {
    image: '/assets/images/merit-pin-03.png',
    title: <>3.新しいお店やイベントを発見しよう！</>,
    items: [
      '地元の隠れた名店や、これまで知らなかったイベントを見つけるチャンス！',
      '地域の新しい魅力を発見し、あなたの毎日をもっと特別に！',
    ],
    background: 'bg-[#FA67C4]/[0.1]',
  },
  {
    image: '/assets/images/merit-pin-04.png',
    title: <>4.簡単操作で誰でも使える！</>,
    items: [
      <>
        <span className="font-bold">タップするだけでNFTをゲット！</span>
      </>,
      <>
        <span className="font-bold">面倒な操作は一切不要</span>
        、誰でも簡単にスマホの画面を見せるだけで活用できます！
      </>,
    ],
    background: 'bg-[#00AAFF]/[0.1]',
  },
]

const Merit = () => {
  const ref = useScrollAnimations()

  return (
    <section ref={ref} className="relative z-10">
      <div className="w-full">
        <div className="relative mt-10 w-full border-y border-[#777] md:mt-16">
          {data.map((item, index) => (
            <div
              className="relative -mb-[580px] block h-[1160px] w-full border-y border-[#0F0F0F] bg-white last:mb-0 last:h-[580px]"
              key={index}
            >
              <div
                className={`sticky top-0 flex h-[580px] w-full gap-5 overflow-hidden max-md:flex-col max-md:items-center md:justify-between ${item.background}`}
              >
                <div className="fade-up px-5 pt-[45px]">
                  <h5 className="text-[28px] font-bold leading-[1.3] md:text-[48px]">
                    {item.title}
                  </h5>
                  <div className="mt-5 w-full md:pl-[20px]">
                    <div className="mt-7 space-y-6 text-[16px] font-bold leading-none md:mt-10 md:text-[20px]">
                      {item.items.map((i, index) => (
                        <p
                          className="flex gap-3 border-b border-dashed border-[#0F0F0F] pb-4 font-normal"
                          key={index}
                        >
                          <span className="">●</span>
                          {i}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="fade-up relative flex items-end max-md:max-w-[260px]">
                  <ImageHover>
                    <img src={item.image} alt="" />
                  </ImageHover>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Merit
