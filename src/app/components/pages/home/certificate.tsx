"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { ReactNode, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
type SliderProp = {
  id: string;
  imageSrc: string;
  content: ReactNode;
};
const sliderData: SliderProp[] = [
  {
    id: "1",
    imageSrc: "/images/certificate-01.png",
    content: (
      <>
        証明書の
        <br />
        デザイン制作
      </>
    ),
  },
  {
    id: "2",
    imageSrc: "/images/certificate-02.png",
    content: <>印刷</>,
  },
  {
    id: "3",
    imageSrc: "/images/certificate-03.png",
    content: <>保管</>,
  },
  {
    id: "4",
    imageSrc: "/images/certificate-04.png",
    content: <>受け渡し</>,
  },
  {
    id: "5",
    imageSrc: "/images/certificate-01.png",
    content: (
      <>
        証明書の
        <br />
        デザイン制作
      </>
    ),
  },
  {
    id: "6",
    imageSrc: "/images/certificate-02.png",
    content: <>印刷</>,
  },
  {
    id: "7",
    imageSrc: "/images/certificate-03.png",
    content: <>保管</>,
  },
  {
    id: "8",
    imageSrc: "/images/certificate-04.png",
    content: <>受け渡し</>,
  },
];
export default function Certificate() {
  const animateRefs = useScrollAnimation("fadeUp");

  return (
    <section className="relative md:pl-[5.556vw] pl-8 min-[1440px]:pl-20 mb-[100px]">
      <div className="bg-[linear-gradient(90deg,_#B1B1B1_-2.68%,_#8F8D8B_99.85%)] rounded-s-[50px] pl-8 pt-10 md:pl-[11.111vw] min-[1440px]:pl-[160px] md:pt-[72px]">
        <div className="max-md:flex max-md:flex-wrap max-md:items-end md:pr-[258px] relative">
          <div className="max-md:mb-6">
            <h5
              ref={animateRefs}
              className="opacity-0 text-white font-bold min-[1440px]:text-[48px] md:text-[3.333vw] [font-size:_clamp(20px,6vw,32px)] leading-[1.1] space-y-4 tracking-[0.12em]"
            >
              <p>紙の証明書運用に</p>
              <p>
                <span className="inline-block bg-black">うんざり</span>
                していませんか？
              </p>
            </h5>
            <p
              ref={animateRefs}
              className="opacity-0 text-white md:text-[1.667vw] min-[1440px]:text-[24px] text-[14px] font-bold tracking-widest mt-6 md:mt-8"
            >
              紙の証明書運用で発生する作業リスト
            </p>
          </div>
          <div
            ref={animateRefs}
            className="opacity-0 max-md:w-full md:absolute relative md:right-8 min-[1440px]:right-[224px] bottom-[-40px] flex max-md:justify-center max-md:px-4"
          >
            <figure>
              <img
                className="max-md:w-[60px]"
                src="/images/penguin-01.svg"
                alt=""
              />
            </figure>
            <p className="md:mt-[-60px] mt-[-40px] animate-[bounce_1s_ease_infinite_alternate]">
              <img
                className="max-md:w-[140px]"
                src="/images/penguin-text.png"
                alt=""
              />
            </p>
          </div>
        </div>
        <div className="relative bottom-[-40px] drop-shadow-[4px_4px_30px_rgba(0,0,0,0.25)] rounded-s-[20px] overflow-hidden">
          <div ref={animateRefs} className="opacity-0 flex w-auto">
            <div className="animate-[infinity-loop_18s_infinite_linear_1s_both] flex relative">
              {sliderData.map(({ id, imageSrc, content }) => (
                <div className="relative px-2.5" key={id}>
                  <div className="pt-5 pb-10 bg-[url('/images/bg-ertificate.png')] bg-cover w-[200px] h-[224px] md:w-[300px] md:h-[280px] flex flex-col items-center justify-center leading-tight rounded-[20px] overflow-hidden relative ">
                    <p className="md:text-[22px] text-[16px] font-bold text-center leading-snug h-[64px] flex items-end">
                      <span>{content}</span>
                    </p>
                    <div className="mt-10">
                      <img className="max-md:w-[80px]" src={imageSrc} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="animate-[infinity-loop_18s_infinite_linear_1s_both] flex relative">
              {sliderData.map(({ id, imageSrc, content }) => (
                <div className="relative px-2.5" key={id}>
                  <div className="pt-5 pb-10 bg-[url('/images/bg-ertificate.png')] bg-cover w-[200px] h-[224px] md:w-[300px] md:h-[280px] flex flex-col items-center justify-center leading-tight rounded-[20px] overflow-hidden relative ">
                    <p className="md:text-[22px] text-[16px] font-bold text-center leading-snug h-[64px] flex items-end">
                      <span>{content}</span>
                    </p>
                    <div className="mt-10">
                      <img className="max-md:w-[80px]" src={imageSrc} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
