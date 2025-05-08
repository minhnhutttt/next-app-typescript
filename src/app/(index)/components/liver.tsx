'use client'

import Title from '@/components/title'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const data = [
  {
    image: '/assets/images/liver-title-01.png',
    text: 'ライブ配信の大きなメリットは、スキマ時間を使っていつでも、どこでも配信をすることが可能な点です。18歳以上であれば男女関係なく何歳でも「ライバー」という職業を始めることが可能です。',
  },
  {
    image: '/assets/images/liver-title-02.png',
    text: '学生や主婦の方はもちろんのこと、職業問わず幅広い年齢の方がライブ配信をしています。自分のペースで配信をし、副業で行う方、ライバー専門で行う方など、様々なスタイルで活動しております。',
  },
  {
    image: '/assets/images/liver-title-03.png',
    text: '月に数万円から十数万円稼いで生活の足しにされるという方もいれば、多い方では月に1000万円以上稼ぐ方もおり、まさに「夢のある」職業です。 弊社でも過去に、一年間で一億円近く稼いだライバーさんもいらっしゃいます。 その方は芸能人でもインフルエンサーでもなく、ごく一般の主婦の方で、当然ライブ配信も皆さんと同じように未経験の方でした。',
  },
]

const Liver = () => {
  const ref = useScrollAnimations()

  return (
    <div ref={ref} className="relative pt-10 md:pt-[82px]">
      <div className="">
        <div className="px-5">
          <Title>ライバーって何？</Title>
          <p className="fade-up px-3 py-6 text-[13px] md:text-[16px]">
            ライバーとは、ライブ配信アプリを使用してライブ配信を行い、リスナーを楽しませて稼ぐことが出来る、全く新しい職業です。
          </p>
        </div>
        <div className="fade-up mt-4 space-y-5 overflow-hidden">
          {data.map((item, index) => (
            <div
              className={`group relative flex h-[370px] flex-col items-center justify-center px-5 ${
                index % 2 === 0 ? 'fade-left' : 'fade-right'
              }`}
              key={index}
            >
              <span className="absolute block h-full w-[150px] group-[&:nth-child(1)]:left-0 group-[&:nth-child(2)]:right-0 group-[&:nth-child(3)]:left-0 group-[&:nth-child(1)]:bg-[#FF7DD3]/[0.2] group-[&:nth-child(2)]:bg-[#3CE8FF]/[0.2] group-[&:nth-child(3)]:bg-[#3CF3E7]/[0.2] md:w-[188px]">
                <img
                  className="group-[&:nth-child(2)]:ml-auto group-[&:nth-child(2)]:rotate-90"
                  src="/assets/images/deco.png"
                  alt=""
                />
              </span>
              <div className="relative">
                <h4 className="flex justify-center">
                  <img src={item.image} alt="" />
                </h4>
                <p className="mx-auto mt-5 text-[14px] md:w-[474px] md:text-[16px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Liver
