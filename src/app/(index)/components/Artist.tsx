"use client";
import { useEffect, useState } from "react";
import ScrollOut from "scroll-out";
import Splitting from "splitting";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
    {
      id: 1,
      image: "/assets/images/artist-img-01.png",
      name: "SHEKI ARZAGA",
      content:
        (<>Singer-Songwriter SHEKI ARZAGA has been playing a major role as a lead vocalist in MNL48 Manila, Philippines which since 2018 has been a very popular sister affiliate of AKB48, the all-female, theatre-based "idol" collective from Japan. Named after the Akihabara area in Tokyo, where the group's theater is located AKB48 is certified as the largest pop group in the world by The Guinness World Records.</>),
    },
    {
        id: 2,
        image: "/assets/images/artist-img-02.png",
        name: "Quadlips",
        content:
          (<>Quadlips is the first AKB48 group unit formed by selected members from sister groups across Asia. <br />
            Announced on October 29, 2023 at BNK48 Cherprang's graduation concert, the group begins activities in Bangkok.<br />
            Their global digital debut is scheduled for March 2024.<br />
            Starting from Thailand, Indonesia, Japan, and the Philippines, Quadlips will expand across Southeast Asia.</>),
      },
  ];
const Artist = () => {
  const [swiperRef, setSwiperRef] = useState<any>(null);
  const [slideHeight, setSlideHeight] = useState(0);
  useEffect(() => {
    Splitting();
    ScrollOut({once: true});
    
    // Tính toán chiều cao lớn nhất của slide
    const calculateMaxHeight = () => {
      if (typeof window !== 'undefined') {
        const slides = document.querySelectorAll('.slide-content');
        let maxHeight = 0;
        
        slides.forEach(slide => {
          const height = slide.getBoundingClientRect().height;
          if (height > maxHeight) {
            maxHeight = height;
          }
        });
        
        if (maxHeight > 0 && maxHeight !== slideHeight) {
          setSlideHeight(maxHeight);
        }
      }
    };
    
    calculateMaxHeight();
    window.addEventListener('resize', calculateMaxHeight);
    
    setTimeout(calculateMaxHeight, 500);
    
    return () => {
      window.removeEventListener('resize', calculateMaxHeight);
    };
  }, [slideHeight]);

 
  return (
    <section className="relative overflow-hidden">
      <div className="artist-swiper w-full bg-[url(/assets/images/artist-bg.png)] bg-cover bg-center pt-10 md:pt-[60px] pb-14 md:pb-20 relative">
      <Swiper
          slidesPerView={"auto"}
          onSwiper={setSwiperRef}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            type: 'bullets',
          }}
          onSlideChange={() => {
            setTimeout(() => {
              const slides = document.querySelectorAll('.slide-content');
              let maxHeight = 0;
              
              slides.forEach(slide => {
                const height = slide.getBoundingClientRect().height;
                if (height > maxHeight) {
                  maxHeight = height;
                }
              });
              
              if (maxHeight > 0 && maxHeight !== slideHeight) {
                setSlideHeight(maxHeight);
              }
            }, 100);
          }}
          className="w-full"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id} className="!w-[82%] relative md:mx-[25px] mx-[10px] rounded-[10px] overflow-hidden h-auto">
                <span className="bg-[linear-gradient(109deg,_rgba(255,_255,_255,_0.10)_11.71%,_rgba(255,_255,_255,_0.10)_95.46%)] backdrop-filter backdrop-blur-[5px] absolute inset-0"></span>
                <div className="slide-content px-5 md:px-10 xl:px-[64px] md:py-8 py-6 xl:py-[54px] flex relative gap-5 xl:gap-[70px] items-center max-md:flex-col" style={{minHeight: slideHeight > 0 ? `${slideHeight}px` : 'auto'}}>
                    <div className="max-md:w-full max-xl:w-1/2 [box-shadow:0px_4px_100px_0px_rgba(97,_169,_197,_0.25)]"><img src={item.image} alt="" /></div>
                    <div className="text-white flex-1">
                        <p className="md:text-[24px] font-medium text-[18px] leading-[1.2]">{item.name}</p>
                        <p className="md:text-[16px] leading-[2] font-medium text-[14px] mt-4 md:mt-[30px]">
                            {item.content}
                        </p>
                    </div>
                </div>
              
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-pagination mt-6"></div>

      </div>
    </section>
  );
};

export default Artist;