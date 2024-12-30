"use client";

import useScrollAnimations from "@/app/hooks/useScrollAnimations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";

const sliderImages = [
  "/assets/images/slider-01.png",
  "/assets/images/slider-02.png",
  "/assets/images/slider-03.png",
  "/assets/images/slider-04.png",
  "/assets/images/slider-05.png",
  "/assets/images/slider-06.png",
];

const Fv = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.00)_0%,_rgba(255,_255,_255,_0.00)_40%,_#EC9DBC_100%)] pt-[88px] md:pb-[185px] pb-[155px]">
        <span className="absolute top-5 left-4 md:left-8">
          <img
            className="fade-up max-md:w-[120px]"
            src="/assets/images/fv-img-01.png"
            alt=""
          />
        </span>
        <span className="absolute md:top-[250px] top-[150px] right-1">
          <img
            className="fade-up max-md:w-[120px]"
            src="/assets/images/fv-img-02.png"
            alt=""
          />
        </span>
        <span className="absolute md:top-[460px] top-[280px] left-2">
          <img
            className="fade-up max-md:w-[120px]"
            src="/assets/images/fv-img-03.png"
            alt=""
          />
        </span>
        <div className="relative z-20">
          <h2 className="text-center leading-[1.3] [text-shadow:0px_4px_10px_#FFF4F2] tracking-[0.3em]">
            <p className="fade-up md:text-[40px] text-[24px] font-medium">あなたの</p>
            <p className="fade-up flex justify-center items-center">
              <span className="md:text-[48px] text-[32px] font-bold bg-[#F6D4E2]">
                投稿
              </span>
              <span className="md:text-[40px] text-[24px] font-medium">も</span>
              <span className="md:text-[48px] text-[32px] font-bold bg-[#F6D4E2]">
                いいね
              </span>
              <span className="md:text-[40px] text-[24px] font-medium">も</span>
            </p>
            <p className="fade-up">
              <span className="md:text-[48px] text-[32px] font-bold">"</span>
              <span className="md:text-[64px] text-[36px] font-bold text-[#DA5A85]">
                資産
              </span>
              <span className="md:text-[48px] text-[32px] font-bold">"</span>
              <span className="md:text-[40px] text-[24px] font-medium">
                になる
              </span>
            </p>
          </h2>
          <h4 className="[text-shadow:0px_4px_10px_#FFF4F2] text-center leading-[1.3] md:mt-10 mt-6 tracking-[0.3em]">
            <p className="fade-up flex items-center justify-center tracking-[0.3em]">
              <span className="md:text-[40px] text-[24px] font-medium">
                あなたの
              </span>
              <span className="md:text-[48px] text-[32px] font-bold bg-[#E3F1FB]">
                想い
              </span>
              <span className="md:text-[40px] text-[24px] font-medium">が</span>
            </p>
            <p className="fade-up">
              <span className="md:text-[48px] text-[32px] font-bold">"</span>
              <span className="md:text-[64px] text-[36px] font-bold text-[#229CD6]">
                価値
              </span>
              <span className="md:text-[48px] text-[32px] font-bold">"</span>
              <span className="md:text-[40px] text-[24px] font-medium">
                に変わる
              </span>
            </p>
          </h4>
          <div className="fade-up flex justify-center items-center w-full max-w-[291px] mx-auto gap-2.5 md:mt-4 mt-3 mb-2">
            <span className="bg-[#21012D] flex-1 h-px"></span>
            <span className="md:text-[20px] text-[16px] font-medium">
              新感覚SNS
            </span>
            <span className="bg-[#21012D] flex-1 h-px"></span>
          </div>
          <div className="fade-up flex justify-center items-center">
            <p className="relative">
              <img src="/assets/images/of.svg" alt="" />
              <span className="absolute md:text-[17px] text-[15px] font-medium bottom-0 right-0">
                オープンフェーヴ
              </span>
            </p>
          </div>
          <p className="fade-up text-center w-full max-w-[450px] mx-auto underline decoration-[#DA5A85] md:text-[20px] text-[16px] md:mt-[70px] mt-10 mb-24 md:mb-[55px]">
            「いいね」を超えて、あなたの共感や応援が直接価値ある資産に変わる{" "}
            <br />「<span className="font-bold">消費されないSNS</span>
            」それがOPEN FAVE
          </p>
          <div className="fade-up flex justify-center">
            <div className="relative">
              <div className="absolute bottom-10 md:bottom-[20px] w-[149px] md:left-[calc(100%-50px)] left-[calc(100%-90px)]">
                <img
                  className="animate-[fuwafuwa_3s_ease-in-out_infinite_alternate] max-md:w-[120px]"
                  src="/assets/images/bubble.png"
                  alt=""
                />
              </div>
              <a
                href="/"
                className="w-[300px] md:w-[420px] h-[60px] md:h-[70px] rounded-[80px] flex items-center justify-center bg-[#21012D] md:text-[24px] text-[20px] font-medium text-white gap-[15px]"
              >
                <img src="/assets/images/ic-btn.svg" alt="" />
                <span>新規アカウント登録</span>
                <img src="/assets/images/ic-btn.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fade-up -mt-[120px]">
        <Swiper
          slidesPerView={"auto"}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mySwiper relative"
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide
              key={index}
              className="w-full md:max-w-[292px] max-w-[160px] mx-2"
            >
              <div className="rounded-[20px] p-1.5 bg-[linear-gradient(16deg,_rgba(236,157,188,1)_0%,_rgba(142,129,185,1)_48%,_rgba(126,202,240,1)_100%)] overflow-hidden flex">
                <img className="rounded-[20px]" src={image} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Fv;
