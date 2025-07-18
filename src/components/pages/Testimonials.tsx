"use client";

// @ts-ignore
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import { useRef, useEffect, useState } from "react";

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
  const splideRef = useRef<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(data.length);

  const splideOptions = {
    type: 'slide',
    autoWidth: true,
    pagination: false,
    rewindSpeed: 1000,
    speed: 1000,
    gap: 20,
    arrows: false
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

  const goToPrevious = () => {
    if (splideRef.current) {
      splideRef.current.splide.go('<');
    }
  };

  const goToNext = () => {
    if (splideRef.current) {
      splideRef.current.splide.go('>');
    }
  };

  return (
    <section
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
                  className="flex-none w-[84vw] md:w-[66vw] relative will-change-transform select-none slider-item flex items-center justify-center flex-col"
                >
                  <div className="flex flex-col gap-y-6 px-4 md:px-8 py-6 md:py-8 border border-grey overflow-hidden size-full justify-between rounded-[0.4rem]">
                    <p className="md:text-[2.5vw] text-[6vw] pb-[6vw] md:pb-[4vw] pointer-events-none js-split">
                      {slide.text}
                    </p>
                    <div className="flex items-center md:gap-x-5 gap-x-[4vw] pointer-events-none">
                        <div className="flex flex-row relative overflow-hidden md:size-[6vw] size-[10vw] rounded-full">
                            <img src={slide.avatar} alt="" />
                        </div>
                        <div className="fade-up flex flex-col gap-x-5 flex-1">
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
        
        <div className="w-full mt-2 md:mt-6 flex items-center gap-4">
          <div className="flex-1 bg-gray-200 rounded-full h-0.5">
            <div 
              className="bg-gray-700 h-0.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={goToPrevious}
              className="group flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 disabled:opacity-50"
              disabled={currentSlide === 0}
            >
              <svg 
                className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </button>
            
            <button 
              onClick={goToNext}
              className="group flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-200 disabled:opacity-50"
              disabled={currentSlide === totalSlides - 1}
            >
              <svg 
                className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;