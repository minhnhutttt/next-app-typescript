'use client'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    image: '/assets/images/ようこさん.jpg',
    title: 'ようこさん',
    text: '機械音痴で話す事も苦手で配信する事が初めてだった私が楽しく配信できているのは親身になってアドバイスを頂けるグッドフェローズさんのおかげです。',
  },
  {
    image: '/assets/images/萌moeさん.jpg',
    title: '萌moeさん',
    text: '0から始めた私でも配信の仕方や気をつけること、オススメの配信器具まで教えてくれて心強かったです！ライバーさんもすごくフレンドリーで話しやすい！相談しやすい！グットフェローズに入れて本当にラッキー！良かったです⁽⁽ ◝(´꒵ `◍)◟ ₎₎',
  },
  {
    image: '/assets/images/ゆきちmama.jpg',
    title: 'ゆきちmama',
    text: 'オフ会を開いて所属ライバー同士の交流できたり、社長が配信して、行き詰まってるライバーさん達を指導してくれたり、いろいろと背中を押してくれる！ GoodFellowsじゃなかったら、私は配信するのを辞めて普通の生活に戻ってたかもしれません。',
  },
  {
    image: '/assets/images/このかkikuchiさん.jpg',
    title: 'このかkikuchiさん',
    text: '当月のトータル配信日数やギフト数などが書かれた表が月の途中で何度か送ってもらえるので他ライバーとの比較もできるので、自分の配信頻度など途中で見直すことができます。',
  },
  {
    image: '/assets/images/ののnonoさん.jpg',
    title: '∞∞🦋のの💜nono🐝∞∞',
    text: '機械音痴で話す事も苦手で配信する事が初めてだった私が楽しく配信できているのは親身になってアドバイスを頂けるグッドフェローズさんのおかげです。',
  },
  {
    image: '/assets/images/加工01さん.jpg',
    title: '加工01さん',
    text: '同じ事務所の方々がとっても暖かく支えてくれて、とても良くしてくれるのもあってすごく居心地がいい。 本当にグッドフェローズ入れて良かったと心から思います😭 ありがとうございます🥺',
  },
  {
    image: '/assets/images/ラプンrapunzelさん.jpg',
    title: 'ラプンrapunzelさん',
    text: '事務所の方が1人ひとりに合ったアドバイスをくれたり、とにかく熱心に協力してくれて、向き合ってくれる! 又、「何かあったら直ぐに相談して下さい。」と、頻繁おっしゃってくださいますし、すごい心強いです！',
  },
  {
    image: '/assets/images/れなRenapomさん.jpg',
    title: 'れなRenapomさん',
    text: 'ライバー、リスナー経験がある社長だから的確なアドバイスがもらえる。 基本自由にやらせてくれるし、悩んでる事に対してはしっかりと意見をくれたりアドバイスしてくれる。',
  },
]

const Voice = () => {
  const ref = useScrollAnimations()

  return (
    <section ref={ref} className="overflow-hidden pt-10 md:pt-[50px]">
      <div className="px-5 ">
        <h4 className="text-center text-[20px] font-bold leading-[1.3] md:text-[28px]">
          メッセージ...
          <br />
          配信中のライバーさんからの一言
        </h4>
        <p className="mt-1 text-center text-[16px] md:text-[18px]">
          {' '}
          感想をインタビューしてきました。{' '}
        </p>
      </div>
      <div className="fade-up relative mt-5 overflow-hidden bg-[url('/assets/images/voice-bg.png')] bg-cover pt-[90px] md:pb-[24px] md:pt-[100px]">
        <div className="mx-auto md:w-[500px]">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper relative !pb-[50px]"
          >
            {data.map((item, index) => (
              <SwiperSlide
                key={index}
                className="w-full rounded-[20px] bg-white/90 px-5"
              >
                <div className="overflow-hidden">
                  <figure className="relative flex aspect-square items-center justify-center overflow-hidden rounded-full">
                    <img
                      className="absolute min-h-full min-w-full"
                      src={item.image}
                      alt=""
                    />
                  </figure>
                  <div className="mt-7 flex justify-center md:mt-10">
                    <div className="relative h-[51px] w-[297px]">
                      <span className="u-border-rainbow absolute inset-0 -left-1.5 -top-1 h-full w-full border-2"></span>
                      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(90deg,_rgba(255,_125,_211,_0.20)_0%,_rgba(60,_232,_255,_0.20)_100%)] text-[18px] font-bold md:text-[22px]">
                        {item.title}
                      </div>
                    </div>
                  </div>
                  <p className="mx-auto mt-6 w-full max-w-[398px] text-[14px] md:text-[16px]">
                    {item.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Voice
