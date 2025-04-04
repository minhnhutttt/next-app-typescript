"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import "swiper/css";
import Button from "@/components/button";

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
      <div className="font-zen">
          <div className="relative min-h-[560px] md:min-h-[800px]">
            <div className="bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.00)_0%,_rgba(255,_255,_255,_0.00)_40%,_#EC9DBC_100%)] pb-12">
              <div className="absolute inset-0 overflow-x-clip">
                <div className="relative z-20 space-y-[16%] pt-[4vw] md:space-y-[15%] md:pt-[55px]">
                  <div className="flex justify-end">
                    <div className="pr-[3vw] md:pr-8 text-center text-[6.5vw] leading-[1.3] [text-shadow:0px_4px_10px_#FFF4F2] md:text-[40px]">
                      <p className="font-medium tracking-[0.2em]">何気ない</p>
                      <p className="flex items-center justify-center">
                        <span className="bg-[#F6D4E2] px-[0.2em] text-[8vw] md:text-[48px] font-bold leading-[1.2]">
                          投稿
                        </span>
                        <span className="font-medium">も</span>
                        <span className="bg-[#F6D4E2] px-[0.2em] text-[8vw] md:text-[48px] font-bold leading-[1.2]">
                          応援
                        </span>
                        <span className="font-medium">も</span>
                      </p>
                      <p>
                        <span className="text-[1.5em] font-bold">"</span>
                        <span className="text-[1.7em] font-bold text-[#DA5A85]">
                          資産
                        </span>
                        <span className="text-[1.5em] font-bold">"</span>
                        <span className="font-medium">になる</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="pl-[2.8vw] md:pl-6 text-[6vw] leading-[1.3] [text-shadow:0px_4px_10px_#FFF4F2] md:text-[40px]">
                      <p className="flex items-center justify-center">
                        <span className="font-medium">友達への</span>
                        <span className="bg-[#E3F1FB] px-[0.1em] text-[8vw] md:text-[48px] font-bold leading-[1.2] tracking-tighter">
                          シェア
                        </span>
                        <span className="font-medium">が</span>
                      </p>
                      <p>
                        <span className="text-[1.5em] font-bold">"</span>
                        <span className="text-[1.7em] font-bold text-[#229CD6]">
                          価値
                        </span>
                        <span className="text-[1.5em] font-bold">"</span>
                        <span className="font-medium">に変わる</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div>
                      <div className="mb-2 flex items-center justify-center gap-2.5 md:w-[400px] w-[56vw]">
                        <span className="h-px md:flex-[0_0_30px] flex-[0_0_12px] bg-[#21012D]"></span>
                        <span className="text-[4vw] max-md:text-center font-bold md:whitespace-nowrap md:text-[18px]">
                          投稿を所有できるソーシャルメディア
                        </span>
                        <span className="h-px md:flex-[0_0_30px] flex-[0_0_12px] bg-[#21012D]"></span>
                      </div>
                      <div className="flex items-center justify-center">
                        <p className="relative">
                          <img
                            src="/assets/images/home/of.svg"
                            className="max-md:w-[30vw]"
                            alt=""
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8 pt-5">
                <div>
                  <img
                    className="aspect-square max-md:w-[40vw] [filter:drop-shadow(2px_2px_20px_rgba(34,_6,_16,_0.20))]"
                    src="/assets/images/home/fv-img-01.png"
                    alt=""
                  />
                </div>
                <div className="flex justify-end">
                  <img
                    className="aspect-square max-md:w-[40vw] [filter:drop-shadow(2px_2px_20px_rgba(34,_6,_16,_0.20))]"
                    src="/assets/images/home/fv-img-02.png"
                    alt=""
                  />
                </div>
                <div className="md:-mt-5">
                  <img
                    className="aspect-square max-md:w-[40vw] [filter:drop-shadow(2px_2px_20px_rgba(34,_6,_16,_0.20))]"
                    src="/assets/images/home/fv-img-03.png"
                    alt=""
                  />
                </div>
              </div>

              <div className="relative z-20">
                <p className="mx-auto w-full max-w-[450px] px-2.5 text-center text-[16px] underline decoration-[#DA5A85] md:text-[20px] font-medium">
                  <span className="font-bold">「いいね」</span>
                  を超えて、あなたの共感や <br />
                  応援が直接価値ある資産に変わる
                  <br />
                  <span className="font-bold">
                    「投稿を所有できるソーシャルメディア」
                  </span>
                  <br />
                  それがOPEN FAVE
                </p>
              </div>
            </div>
          </div>
        </div>
      <div className="fade-up mt-[60px]">
        <div>
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
      </div>
    </section>
  );
};

export default Fv;
