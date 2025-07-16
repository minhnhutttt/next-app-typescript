"use client";

// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { useRef, useEffect, useState } from "react";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    id: "01",
    text: "Sunny specializes in leadership and culture with a gazillion other strings to her bow. She is a dream to work with. Professional, prepared and extremely insightful. Her talk was greatly received. Highly recommend.",
    avatar: "/assets/images/avatar.webp",
    name: "Lisa Colgan",
    position: "Global Program Management, Mastercard®",
  },
  {
    id: "02",
    text: "Sunny specializes in leadership and culture with a gazillion other strings to her bow. She is a dream to work with. Professional, prepared and extremely insightful. Her talk was greatly received. Highly recommend.",
    avatar: "/assets/images/avatar.webp",
    name: "Lisa Colgan",
    position: "Global Program Management, Mastercard®",
  },
  {
    id: "03",
    text: "Sunny specializes in leadership and culture with a gazillion other strings to her bow. She is a dream to work with. Professional, prepared and extremely insightful. Her talk was greatly received. Highly recommend.",
    avatar: "/assets/images/avatar.webp",
    name: "Lisa Colgan",
    position: "Global Program Management, Mastercard®",
  },
  {
    id: "04",
    text: "Sunny specializes in leadership and culture with a gazillion other strings to her bow. She is a dream to work with. Professional, prepared and extremely insightful. Her talk was greatly received. Highly recommend.",
    avatar: "/assets/images/avatar.webp",
    name: "Lisa Colgan",
    position: "Global Program Management, Mastercard®",
  },
  {
    id: "05",
    text: "Sunny specializes in leadership and culture with a gazillion other strings to her bow. She is a dream to work with. Professional, prepared and extremely insightful. Her talk was greatly received. Highly recommend.",
    avatar: "/assets/images/avatar.webp",
    name: "Lisa Colgan",
    position: "Global Program Management, Mastercard®",
  },
];

const Testimonials = () => {
  const ref = useScrollAnimations();
  const splideRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(data.length);

  const splideOptions = {
    type: 'slide',
    autoWidth: true,
    pagination: false,
    rewindSpeed: 1000,
    speed: 1000,
    gap: 30
  };

  useEffect(() => {
    if (splideRef.current) {
      const splide = splideRef.current.splide;
      
      setTotalSlides(splide.length);
      
      splide.on('move', (newIndex: number) => {
        setCurrentSlide(newIndex);
      });
      
      splide.on('mounted', () => {
        setCurrentSlide(splide.index);
      });
    }
  }, []);

  const progressPercentage = totalSlides > 0 ? ((currentSlide + 1) / totalSlides) * 100 : 0;

  return (
    <section
      ref={ref}
      className="bg-white relative pb-[30vw] md:pb-[20vw] md:px-[2vw] px-[4vw]"
    >
      <div className="js-split h1 font-bold uppercase leading-snug md:mb-5 mb-7">
        Testimonials
      </div>
      <div className="flex w-full justify-between gap-y-5">
        <div className="mb-4 md:mb-6 js-split">What people are saying</div>
        <div className="mb-4 md:mb-6 js-split">{totalSlides} Testimonials</div>
      </div>
      <div className="relative w-full">
        <div className="overflow-hidden pb-5 relative">
          <Splide 
            ref={splideRef}
            options={splideOptions} 
            hasTrack={false}
          >
            <SplideTrack>
              {data.map((slide) => (
                <SplideSlide
                  key={slide.id}
                  className="flex-none w-[80vw] md:w-[66vw] relative will-change-transform select-none slider-item flex items-center justify-center flex-col"
                >
                  <div className="flex flex-col gap-y-6 px-4 md:px-8 py-6 md:py-8 border border-grey overflow-hidden size-full justify-between rounded-[0.4rem]">
                    <p className="md:text-[2.5vw] text-[4vw] pb-[6vw] md:pb-[4vw] pointer-events-none js-split">
                      {slide.text}
                    </p>
                    <div className="flex items-center gap-x-[2vw] pointer-events-none">
                        <div className="flex flex-row relative overflow-hidden md:size-[6vw] size-[10vw] rounded-full">
                            <img src={slide.avatar} alt="" />
                        </div>
                        <div className="flex flex-col gap-x-[2vw]">
                            <p className="h4">{slide.name}</p>
                            <p className="text-black/60">{slide.position}</p>
                        </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
        </div>
        
        <div className="w-full mt-6">
          <div className="w-full bg-gray-200 rounded-full h-0.5">
            <div 
              className="bg-gray-700 h-0.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;