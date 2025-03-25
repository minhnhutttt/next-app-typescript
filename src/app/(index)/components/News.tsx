"use client";
import React, { use, useEffect, useState } from "react";
import ScrollOut from "scroll-out";
import Splitting from "splitting";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
interface SlideItem {
  id: number;
  image: string;
  title: string;
  type: string;
  head: string;
  content: string;
}
const slides: SlideItem[] = [
    {
      id: 1,
      image: "/assets/images/slider-img-01.png",
      title: "PRESS RELEASE",
      type: "press",
      head: "A NEXUS to Host Press Conference in the Philippines ",
      content:
        "A NEXUS to Host Press Conference in the Philippines. April 28, 2025 A NEXUS will be hosting a major press conference in Manila, Philippines to announce our comprehensive entertainment business approach and strategic vision for connecting North American, ASEAN, and East Asian markets.",
    },
    {
      id: 2,
      image: "/assets/images/slider-img-02.png",
      title: "PRESS RELEASE",
      type: "press",
      head: "A NEXUS to Host Press Conference in the Philippines ",
      content:
        "A NEXUS to Host Press Conference in the Philippines. April 28, 2025 A NEXUS will be hosting a major press conference in Manila, Philippines to announce our comprehensive entertainment business approach and strategic vision for connecting North American, ASEAN, and East Asian markets.",
    },
    {
      id: 3,
      image: "/assets/images/slider-img-03.png",
      title: "EVENT",
      type: "event",
      head: "A NEXUS to Host Press Conference in the Philippines ",
      content:
        "A NEXUS to Host Press Conference in the Philippines. April 28, 2025 A NEXUS will be hosting a major press conference in Manila, Philippines to announce our comprehensive entertainment business approach and strategic vision for connecting North American, ASEAN, and East Asian markets.",
    },
  ];
const News = () => {
 

  const [swiperRef, setSwiperRef] = useState<any>(null);

  useEffect(() => {
    Splitting()
    ScrollOut({once: true,})
  })

  return (
    <div className="relative w-full mx-auto">
      <span className="bg-white absolute h-[60%] bottom-0 inset-x-0"></span>
      <div className="md:px-[60px] px-5 ">
        <h2 data-scroll className="text--enter md:text-[128px] text-[64px] font-semibold overflow-hidden">
            <span data-splitting>NEWS</span>
            </h2>
      </div>
      <div className="w-full max-w-[1410px] mx-auto relative pb-20 md:mt-[70px] mt-[50px]">
        <Swiper
          modules={[Navigation]}
          slidesPerView={"auto"}
          onSwiper={setSwiperRef}
          className="w-full"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="md:!w-[430px] !w-[330px] mx-5">
              <div className="relative">
                <div className="relative overflow-hidden rounded-[30px] group ">
                  <div className="w-full h-full [box-shadow:0px_0px_80px_0px_rgba(250,_226,_215,_0.10)]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="absolute bottom-20 left-5 z-10 group-hover:opacity-0 max-md:opacity-0">
                    <span className="text-[16px] md:text-[20px] text-[#F34927] font-semibold">
                      {slide.title}
                    </span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 h-[80%] max-md:translate-y-0 translate-y-full flex flex-col justify-center items-center py-8 px-6 md:px-[50px] bg-black/60 rounded-[30px] group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-white md:space-y-10 space-y-6">
                      <p className="md:text-[20px] text-[16px] text-[#F34927] font-semibold">
                        {slide.title}
                      </p>
                      <p className="md:text-[20px] text-[16px] text-[#F34927] font-semibold">
                        {slide.head}
                      </p>
                      <p className="text-[13px] md:text-[16px]">
                        {slide.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="justify-end flex space-x-5 z-20 py-5 md:px-10 px-5">
          <button
            onClick={() => swiperRef?.slidePrev()}
            className=" flex items-center justify-center transition-colors md:size-[72px] size-[40px]"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="24"
                cy="24"
                r="24"
                transform="matrix(-1 0 0 1 49 1)"
                stroke="#111111"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M30.25 13.75C25.5637 18.4363 22.9363 21.0637 18.25 25.75L30.25 37.75"
                stroke="#111111"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={() => swiperRef?.slideNext()}
            className=" flex items-center justify-center transition-colors md:size-[72px] size-[40px]"
          >
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="25"
                cy="25"
                r="24"
                stroke="#111111"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M19.75 13.75C24.4363 18.4363 27.0637 21.0637 31.75 25.75L19.75 37.75"
                stroke="#111111"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
