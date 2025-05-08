'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'

import useScrollAnimations from '@/hooks/useScrollAnimations'
import Title from '@/components/title'

const data = [
  {
    image: '/assets/images/slider-01.png',
    text: 'ライブ配信の世界大会において2位、4位のライバーを輩出。',
  },
  {
    image: '/assets/images/slider-02.png',
    text: '国内17ライバー月間TOP100に7名ランクイン。',
  },
  {
    image: '/assets/images/slider-03.png',
    text: '毎月数名が常にイベントTOP10にランクイン。',
  },
  {
    image: '/assets/images/slider-04.png',
    text: '新人イベントにて上位20位以内に6名がランクイン。更に、１位も所属ライバー。',
  },
]

const Slider = () => {
  const ref = useScrollAnimations()

  return (
    <div ref={ref} className="relative overflow-hidden pt-8 md:pt-11">
      <div className="px-5">
        <Title>育成したトップライバーの実績</Title>
      </div>
      <div className="fade-up relative mt-6 w-full overflow-hidden">
        <Swiper
          slidesPerView={'auto'}
          loop={true}
          centeredSlides={true}
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className="mySwiper relative"
        >
          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              className="mx-2 w-full max-w-[320px] md:max-w-[450px]"
            >
              <div className="overflow-hidden rounded-[32px] bg-[#FF7DD3]/[0.2] [box-shadow:0px_4px_30px_0px_rgba(0,_0,_0,_0.10)] md:rounded-[60px]">
                <figure>
                  <img src={item.image} alt="" />
                </figure>
                <p className="h-[120px] px-4 pt-6 text-[15px] md:h-[170px] md:px-7 md:pt-10 md:text-[20px]">
                  {item.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
          <div className="z-50 flex items-center justify-end gap-10 px-5 py-5 md:relative">
            <button className="swiper-button-prev z-50 cursor-pointer duration-150 hover:opacity-75 max-md:absolute max-md:left-3 max-md:top-[calc(50%-20px)]">
              <img src="/assets/images/arrows.svg" alt="" />
            </button>
            <button className="swiper-button-next z-50 cursor-pointer duration-150 hover:opacity-75 max-md:absolute max-md:right-3 max-md:top-[calc(50%-20px)]">
              <img
                className="rotate-180"
                src="/assets/images/arrows.svg"
                alt=""
              />
            </button>
          </div>
        </Swiper>
        <div className="fade-up z-10">
          <figure className="pointer-events-none absolute z-10 -mt-[100px] pl-4 max-md:w-[200px] md:-mt-[136px] md:w-[274px]">
            <img
              className="max-md:w-[200px]"
              src="/assets/images/support.png"
              alt=""
            />
          </figure>
          <p className="mx-auto w-[325px] pt-[5px] text-[15px] font-semibold md:text-[18px]">
            多数のＴＯＰライバーを輩出しており、長年培った知識とデータでライバーさんの活動をサポート致します。
          </p>
        </div>
      </div>
    </div>
  )
}

export default Slider
