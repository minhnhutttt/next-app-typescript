'use client'

import '@splidejs/react-splide/css'
import { Splide, SplideSlide } from 'react-splide-ts'

export default function Fv() {
  const splideOptions = {
    type: 'fade',
    rewind: true,
    autoplay: true,
    interval: 4000,
    speed: 1000,
    arrows: false,
    pagination: false,
    pauseOnHover: false,
  }

  return (
    <section className="relative z-10">
      <Splide options={splideOptions} className="w-full">
        <SplideSlide>
          <picture>
            <source media="(min-width: 768px)" srcSet="/assets/img/slide-1.jpg" />
            <img className="w-full h-full object-cover"
              src="/assets/img/slide-1_sp.jpg" 
              alt="Slide 1" 
            />
          </picture>
        </SplideSlide>
        
        <SplideSlide>
          <img className="w-full h-full object-cover"
            src="/assets/img/slide-2.jpg" 
            alt="Slide 2" 
          />
        </SplideSlide>
        
        <SplideSlide>
          <img className="w-full h-full object-cover"
            src="/assets/img/slide-3.jpg" 
            alt="Slide 3" 
          />
        </SplideSlide>
        
        <SplideSlide>
          <img className="w-full h-full object-cover"
            src="/assets/img/slide-4.jpg" 
            alt="Slide 4" 
          />
        </SplideSlide>
      </Splide>
      
      <div className="absolute left-20 bottom-20 flex items-center gap-12 js-list max-md:flex-col max-md:left-8 max-md:right-8 max-md:bottom-16">
        <div className="js-list">
          <h2 className="flex flex-col gap-[1.8rem] text-[7.8rem] font-medium max-md:text-[3.2rem] max-md:gap-4 ">
            <span className="bg-[#fff] w-[fit-content] px-8 py-2 max-md:p-4">p2p bonusで</span>
            <span className="bg-[#fff] w-[fit-content] px-8 py-2 max-md:p-4">隠れた<b className="font-medium text-[#fe1d37]">価値</b>を<b className="font-medium text-[#fe1d37]">発見</b></span>
          </h2>
          <p className="text-[2.4rem] bg-[#fff] px-8 py-4 mt-8 max-md:text-[1.8rem] max-md:leading-[1.35] max-md:p-4 max-md:mt-4">陰の功労者にトークンを、縁の下にスポットライトを</p>
        </div>
        <div className="bg-[rgba(249,_200,_200,_0.9)] w-[30rem] h-[30rem] rounded-[100%] flex items-center justify-center border-[solid] border-[0.4rem] border-[#ff8f94] text-center leading-[1.3] js-list max-md:w-56 max-md:h-56 max-md:absolute max-md:right-[0] max-md:bottom-[17rem]">
          <p className="text-[3.4rem] max-md:text-[1.6rem] max-md:leading-[1.4]">
            組織変革の<br />
            新基軸を<br />
            <span className="text-[4rem] font-semibold leading-[1.1] max-md:text-[1.8rem] max-md:leading-[1.2]">
              トークンで<br />
              <b className="text-[5.4rem] max-md:text-[2.4rem]">実現</b>
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}