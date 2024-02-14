"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
export default function Coupon() {
  const animateRefs = useScrollAnimation("fadeUp");
  const sliderRef = useRef(null);
  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    focusOnSelect: false,
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1500,
    variableWidth: true,
    adaptiveHeight: true,
  };
  return (
    <section className="bg-[url('/images/bg-04.png')] bg-cover pt-[12vw] md:pt-[150px]">
      <div className="w-full md:max-w-[706px] max-w-[500px] mx-auto px-5">
        <div className="flex justify-center">
          <h3 ref={animateRefs} className="opacity-0 md:text-[48px] [font-size:_clamp(20px,6vw,32px)] font-black leading-tight text-center tracking-wider text-white text-stroke">
            圧倒的に割り引かれる！
            <br />
            次世代クーポンとは
          </h3>
        </div>
        <div ref={animateRefs} className="opacity-0 flex justify-center mt-10 md:mt-16">
          <div className="bg-white py-6 md:py-10 px-8 md:px-[50px] rounded-[20px] md:text-[18px] text-[14px] leading-snug tracking-wider max-w-[614px]">
            次世代クーポンは、NFTを活用し、デジタルだからこそできる大幅割引とコスト還元を実現するデジタルクーポンです。
          </div>
        </div>
      </div>
      <div ref={animateRefs} className="opacity-0 bg-[url('/images/phone.png')] bg-bottom bg-no-repeat mt-[32px] h-[412px] pt-[85px] js-slider">
        <Slider ref={sliderRef} {...sliderSettings} className="w-full">
          <div>
            <div className="px-[30px] pt-5 ">
              <a href="/" className="block">
                <img
                  className="[box-shadow:0px_4px_20px_0px_rgba(62,_10,_39,_0.20)] rounded-[20px]"
                  src="/images/nft-01.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div>
            <div className="px-[30px] pt-5 ">
              <a href="/" className="block">
                <img
                  className="[box-shadow:0px_4px_20px_0px_rgba(62,_10,_39,_0.20)] rounded-[20px]"
                  src="/images/nft-02.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div>
            <div className="px-[30px] pt-5 ">
              <a href="/" className="block">
                <img
                  className="[box-shadow:0px_4px_20px_0px_rgba(62,_10,_39,_0.20)] rounded-[20px]"
                  src="/images/nft-03.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div>
            <div className="px-[30px] pt-5 ">
              <a href="/" className="block">
                <img
                  className="[box-shadow:0px_4px_20px_0px_rgba(62,_10,_39,_0.20)] rounded-[20px]"
                  src="/images/nft-04.png"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div>
            <div className="px-[30px] pt-5 ">
              <a href="/" className="block">
                <img
                  className="[box-shadow:0px_4px_20px_0px_rgba(62,_10,_39,_0.20)] rounded-[20px]"
                  src="/images/nft-05.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </Slider>
        <p className="text-center w-[295px] mx-auto px-1.5 text-[13px] font-medium">
        トレーディングクーポンはchainpinで生成されるため、受け取りはQRコードやURLとなります。
        </p>
      </div>
    </section>
  );
}
