"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';

const Stack = () => {
  return (
    <section className="mb-[256px] max-md:mb-[82px] border-y-[1px] border-[rgba(172,172,172,0.3)]">
      <div className="container py-[64px] max-md:py-[48px]">
        <div className="mb-[48px] max-md:mb-[24px]">
          <h2
            className="font-anton text-[calc(18px_+_4vw)] text-center uppercase leading-none"
            translate="no"
          >
            Our Tech Stack
          </h2>
        </div>
        <div>
          <div className="flex">
          <Swiper 
            modules={[FreeMode, Autoplay ]}
            dir="rtl"
            loop={true}
            allowTouchMove={false}
            autoplay={{
                delay: 0,
                disableOnInteraction: false
            }}
            slidesPerView={7}
            spaceBetween={10}
            speed={5000}
          className="mySwiper"
          >
                <SwiperSlide>
                    <img src="/assets/images/html.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/spuare.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/vs.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/vue.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/webpack.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/woocommerce.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/css.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/node.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/react.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/html.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/spuare.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/vs.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/vue.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/webpack.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/woocommerce.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/css.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/node.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/assets/images/react.svg" alt="" />
                </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
