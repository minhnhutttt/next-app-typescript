"use client"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { ReactNode, useRef } from "react";

type SliderProp = {
    id: string;
    imageSrc: string;
    content: ReactNode;
  };
  const sliderData: SliderProp[] = [
    {
        id: "1",
        imageSrc: "/images/certificate-01.png",
        content: <>証明書の<br />デザイン制作</>,
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
        content: <>証明書の<br />デザイン制作</>,
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
    const animateZoomRefs = useScrollAnimation("zoom");
    const sliderRef = useRef<Slider>(null);
    const sliderSettings = {
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        focusOnSelect: false,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 1500,
        variableWidth: true,
        adaptiveHeight: true,
    };
    const handlePrev = () => {
        if (!sliderRef.current) return
        sliderRef.current.slickNext();
      };
    return (
      <section className="relative md:pl-[5.556vw] pl-8 min-[1440px]:pl-20 mb-[100px]">
        <div className="bg-[linear-gradient(90deg,_#B1B1B1_-2.68%,_#8F8D8B_99.85%)] rounded-s-[50px] pl-8 pt-10 md:pl-[11.111vw] min-[1440px]:pl-[160px] md:pt-[72px]">
            <div className="max-md:flex max-md:flex-wrap max-md:items-end md:pr-[258px] relative">
                <div className="max-md:mb-6">
                    <h5 ref={animateRefs} className="opacity-0 text-white font-bold min-[1440px]:text-[48px] md:text-[3.333vw] [font-size:_clamp(20px,6vw,32px)] leading-[1.1] space-y-4 tracking-[0.12em]">
                        <p>紙の証明書運用に</p>
                        <p><span className="inline-block bg-black">うんざり</span>していませんか？</p>
                    </h5>
                    <p ref={animateRefs} className="opacity-0 text-white md:text-[1.667vw] min-[1440px]:text-[24px] text-[14px] font-bold tracking-widest mt-6 md:mt-8">紙の証明書運用で発生する作業リスト</p>
                </div>
                <div ref={animateRefs} className="opacity-0 max-md:w-full md:absolute relative md:right-8 min-[1440px]:right-[224px] bottom-[-40px] flex max-md:justify-center max-md:px-4">
                    <figure><img className="max-md:w-[60px]" src="/images/penguin-01.svg" alt="" /></figure>
                    <p className="md:mt-[-60px] mt-[-40px] animate-[bounce_1s_ease_infinite_alternate]"><img className="max-md:w-[140px]" src="/images/penguin-text.png" alt="" /></p>
                </div>
            </div>
            <div className="relative bottom-[-40px] drop-shadow-[4px_4px_30px_rgba(0,0,0,0.25)]">
                <div ref={animateRefs} className="opacity-0">
                    <button onClick={handlePrev} className="absolute top-1/2 md:left-[-6.944vw] left-[-54px] min-[1440px]:left-[-100px] -translate-y-1/2">
                        <svg className="min-[1440px]:w-[59px] w-[36px] md:w-[4.097vw]" xmlns="http://www.w3.org/2000/svg" width="59" height="59" viewBox="0 0 59 59" fill="none">
                            <circle cx="29.5" cy="29.5" r="29.5" fill="#F7F3F3"/>
                            <path d="M34.5 16L21 29.5L34.5 43" stroke="#5C5C5C" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                <Slider ref={sliderRef} {...sliderSettings} className="w-full">
                    {sliderData.map(({ id, imageSrc, content }) => (
                        <div className="relative mr-5" key={id}>
                            <div className="pt-5 pb-10 bg-[url('/images/bg-ertificate.png')] bg-cover w-[240px] h-[224px] md:w-[300px] md:h-[280px] flex flex-col items-center justify-center leading-tight rounded-[20px] overflow-hidden relative ">
                                <p className="md:text-[22px] text-[16px] font-bold text-center leading-snug h-[64px] flex items-end"><span>{content}</span></p>
                                <div className="mt-10">
                                    <img src={imageSrc} alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                </div>
            </div>
        </div>
      </section>
    );
  }
  