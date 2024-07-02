"use client";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper/modules';
import useDarkMode from '@/hooks/useDarkMode';

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
    const triggerRef = useDarkMode();

  return (
    <section className="bg-[url('/assets/images/bg-slider.png')] bg-cover px-5 relative">
      <span className="absolute inset-0 z-50"></span>
      <div ref={triggerRef} className="js-dark-trigger">
        <div className="w-full max-w-[1153px] mx-auto flex gap-10 md:gap-20">
            <div className="">
        <Swiper
            direction={'vertical'}
            slidesPerView={'auto'}
            autoHeight={true}
            freeMode={true}
            loop={true}
            preventInteractionOnTransition={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            speed={8000}
            modules={[FreeMode, Autoplay]}
            className="mySwiper !h-screen"
        >
            <SwiperSlide><div className="my-3 md:my-[65px]"><img src="/assets/images/slider-01.png" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="my-3 md:my-[65px]"><img src="/assets/images/slider-02.png" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="my-3 md:my-[65px]"><img src="/assets/images/slider-03.png" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="my-3 md:my-[65px]"><img src="/assets/images/slider-04.png" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="my-3 md:my-[65px]"><img src="/assets/images/slider-05.png" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="my-3 md:my-[65px]"><img src="/assets/images/slider-06.png" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="my-3 md:my-[65px]"><img src="/assets/images/slider-07.png" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="my-3 md:my-[65px]"><img src="/assets/images/slider-08.png" alt="" /></div></SwiperSlide>
        </Swiper>
        </div>
        <div className="">
        <Swiper
            direction={'vertical'}
            slidesPerView={'auto'}
            autoHeight={true}
            freeMode={true}
            loop={true}
            preventInteractionOnTransition={true}
            autoplay={{
                delay: 0,
                reverseDirection: true,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}
            speed={8000}
            modules={[FreeMode, Autoplay]}
            className="mySwiper !h-screen"
            allowTouchMove={false}
        >
            <SwiperSlide><div className="my-3 md:my-[65px]"><img src="/assets/images/slider-01.png" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="my-3 md:my-[65px]"><img src="/assets/images/slider-02.png" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="my-3 md:my-[65px]"><img src="/assets/images/slider-03.png" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="my-3 md:my-[65px]"><img src="/assets/images/slider-04.png" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="my-3 md:my-[65px]"><img src="/assets/images/slider-05.png" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="my-3 md:my-[65px]"><img src="/assets/images/slider-06.png" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="my-3 md:my-[65px]"><img src="/assets/images/slider-07.png" alt="" /></div></SwiperSlide>
            <SwiperSlide><div className="my-3 md:my-[65px]"><img src="/assets/images/slider-08.png" alt="" /></div></SwiperSlide>
        </Swiper>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
