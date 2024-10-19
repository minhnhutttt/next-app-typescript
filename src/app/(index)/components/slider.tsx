"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import Title from "@/components/title";

const data = [
    {
        image: '/assets/images/slider-01.png',
        text: 'ライブ配信の世界大会において2位、4位のライバーを輩出。',
    },
]

const Slider = () => {
  const ref = useScrollAnimations(); 
    return (
      <div ref={ref} className="md:pt-11 pt-8 relative overflow-hidden">
        <div className="px-5">
          <Title>育成したライバーの実績</Title>
          </div>
        <div className="fade-up mt-6 relative overflow-hidden">
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
                <SwiperSlide key={index} className="w-full md:max-w-[450px] max-w-[320px] mx-2">
                    <div className="md:rounded-[60px] rounded-[32px] overflow-hidden bg-[#FF7DD3]/[0.2] [box-shadow:0px_4px_30px_0px_rgba(0,_0,_0,_0.10)]">
                        <figure>
                            <img src={item.image} alt="" />
                        </figure>
                        <p className="md:text-[20px] text-[15px] md:h-[170px] h-[120px] md:pt-10 pt-6 md:px-7 px-4">
                            {item.text}
                        </p>
                    </div>
                </SwiperSlide>
            ))}
            <div className="flex gap-10 px-5 justify-end items-center md:relative z-50 py-5">
                <button className="swiper-button-prev cursor-pointer duration-150 hover:opacity-75 max-md:absolute max-md:top-[calc(50%-20px)] max-md:left-3 z-50"><img src="/assets/images/arrows.svg" alt="" /></button>
                <button className="swiper-button-next cursor-pointer duration-150 hover:opacity-75 max-md:absolute max-md:top-[calc(50%-20px)] max-md:right-3 z-50"><img className="rotate-180" src="/assets/images/arrows.svg" alt="" /></button>
            </div>
            </Swiper>
            <div className="fade-up z-10">
                <figure className="pl-4 md:-mt-[136px] -mt-[66px] max-md:w-[200px] md:w-[274px] absolute z-10 pointer-events-none">
                    <img className="max-md:w-[200px]" src="/assets/images/support.png" alt="" />
                </figure>
                <p className="w-[325px] mx-auto md:text-[18px] text-[15px] pt-[5px] font-semibold">
                多数のＴＯＰライバーを輩出しており、長年培った知識とデータでライバーさんの活動をサポート致します。
                </p>
            </div>
        </div>
      </div>
    );
  };
  
  export default Slider;
  