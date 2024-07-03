"use client";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Autoplay } from 'swiper/modules';
import useDarkMode from '@/hooks/useDarkMode';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
    const triggerRef = useDarkMode();

    const swiperRef = useRef<any>(null);
    const swiperRef2 = useRef<any>(null);

    useEffect(() => {
      const startAutoplay = () => {
        if (swiperRef.current && swiperRef.current.swiper && swiperRef2.current && swiperRef2.current.swiper) {
          swiperRef.current.swiper.autoplay.start();
          swiperRef2.current.swiper.autoplay.start();
        }
      };
      const timeoutId = setTimeout(startAutoplay, 500);
      return () => clearTimeout(timeoutId); 
    }, []);

  return (
    <section className="bg-[url('/assets/images/bg-slider.png')] bg-cover px-5 relative">
      <span className="absolute inset-0 z-50"></span>
      <div ref={triggerRef} className="js-dark-trigger">
        <div className="w-full max-w-[1153px] mx-auto flex gap-10 md:gap-20">
            <div className="">
            <Swiper
            ref={swiperRef}
            direction={'vertical'}
            slidesPerView={'auto'}
            autoHeight={true}
            freeMode={true}
            loop={true}
            preventInteractionOnTransition={true}
            autoplay={{
                delay: 0,
                reverseDirection: false,
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
        <div className="">
        <Swiper
          ref={swiperRef2}
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
