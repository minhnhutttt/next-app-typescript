'use client'

import { ReactNode } from 'react'

import useScrollAnimations from '@/hooks/useScrollAnimations'

interface ColumnProps {
  items: { bgColor: string; imageSrc: string; text: ReactNode }[]
}

const leftItems = [
  {
    imageSrc: '/assets/images/user-img1.png',
    bgColor: '#FFEFFE',
    text: (
      <>
        META Earthで初めて知ったカフェやお店がたくさんあって、
        <span className="font-bold">
          週末ごとに新しい場所を開拓するのが楽しくなりました。
        </span>
      </>
    ),
  },
  {
    imageSrc: '/assets/images/user-img2.png',
    bgColor: '#FFFEEA',
    text: (
      <>
        <span className="font-bold">旅行中に現地限定のNFTをいくつかゲット</span>
        できて、本当にいい思い出になりました。
      </>
    ),
  },
  {
    imageSrc: '/assets/images/user-img3.png',
    bgColor: '#DEFFFD',
    text: (
      <>
        META
        Earthを使い始めてから、普段目にしない近場のイベントやキャンペーンの情報を見つけられるようになりました。
        <span className="font-bold">
          こんなに多くの情報を見逃していたんだって感じです。
        </span>
      </>
    ),
  },
]

const rightItems = [
  {
    imageSrc: '/assets/images/user-img4.png',
    bgColor: '#DEFFFD',
    text: (
      <>
        NFTとか全然分からなかったのですが、
        <span className="font-bold">
          操作がすごく簡単で、必要な情報や特典をすぐに見つけられるのが気に入っています。
        </span>
      </>
    ),
  },
  {
    imageSrc: '/assets/images/user-img5.png',
    bgColor: '#FFFEEA',
    text: (
      <>
        子どもの頃から住んでいる地域なのに、META
        Earthで初めて知るイベントや特典があって驚きました。
        <span className="font-bold">
          地元の良さを再発見するきっかけになり、改めてこの街に誇りを持つようになりました。
        </span>
      </>
    ),
  },
  {
    imageSrc: '/assets/images/user-img6.png',
    bgColor: '#FFEFFE',
    text: (
      <>
        META Earthの
        <span className="font-bold">
          NFTは無料で送れるので、友人にNFTクーポンをプレゼントしたら、とても喜んでもらえました。
        </span>
      </>
    ),
  },
]

const Column = ({ items }: ColumnProps) => {
  return (
    <div className="w-full">
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            style={{ backgroundColor: item.bgColor }}
            className="fade-up mb-[25px] flex items-center rounded-[6px] px-4 py-4 last:mb-0 max-md:flex-col md:mb-[55px] md:min-h-[194px] md:rounded-[12px] md:px-7 xl:px-[46px]"
          >
            <img
              src={item.imageSrc}
              className="size-[80px] drop-shadow-md xl:size-[120px]"
            />
            <p className="ml-0 mt-3 flex-1 text-[14px] md:ml-6 md:mt-0 md:text-[18px]">
              {item.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

const User = () => {
  const ref = useScrollAnimations()

  return (
    <section ref={ref} className="bg-[#73E3DC]">
      <div className="rounded-t-[40px] bg-[#00AAFF] px-[15px] py-[15px] md:rounded-t-[80px] md:px-[30px] md:py-[30px]">
        <div className="mx-auto w-full rounded-t-[30px] border-[4px] border-dashed border-[#fff] px-5 pb-10 md:rounded-t-[60px]">
          <div className="relative mx-auto w-full max-w-[1280px]">
            <p className="absolute top-[-50px] md:top-[-70px]">
              <img
                className="korokoro max-md:w-[170px]"
                src="/assets/images/user-bubble.png"
                alt=""
              />
            </p>
            <div className="">
              <div className="relative mx-auto flex w-full max-w-[1360px] flex-row justify-between gap-[25px] max-md:flex-col md:gap-16 xl:gap-[95px]">
                <div className="w-full md:w-1/2">
                  <h2 className="fade-up mb-[20px] pt-10 text-[30px] font-bold text-[#fff] max-md:text-center md:pb-8 md:pt-12 md:text-[64px]">
                    ユーザーレビュー
                  </h2>
                  <Column items={leftItems} />
                </div>
                <div className="w-full md:w-1/2 md:pt-11">
                  <Column items={rightItems} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default User
