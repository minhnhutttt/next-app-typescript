"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";


const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative px-5 md:pt-[130px] pt-[100px] z-10 md:h-[1174px] h-[900px] dark:text-white">
      <div className="w-full max-w-[1440px] mx-auto relative h-full">
        <div className="absolute top-0 left-0 md:size-[312px] size-[200px] rounded-full overflow-hidden z-10">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/fv-01.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute bottom-10 right-5 md:size-[513px] size-[280px] rounded-full overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          >
            <source src="/assets/videos/fv-02.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative pt-[220px] md:pt-[180px] z-10">
          <div className="md:text-[67px] text-[32px] leading-[1.3] text-center">
            Gratitude leads to social contribution <br />
            Realizing zero-fee transactions
          </div>
          <div className="relative flex justify-center md:pt-12 pt-8 z-10">
            <img className="dark:hidden" src="/assets/images/fv-text.svg" alt="" />
            <img className="hidden dark:inline-block" src="/assets/images/fv-text-white.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0">
        <svg xmlns="http://www.w3.org/2000/svg" className="md:w-[721px] w-[80vw]" viewBox="0 0 721 1489" fill="none">
          <path id="fv-svg" d="M720 -141C629.833 -94.3333 429.8 44.8 351 228C252.5 457 288.5 758.5 225.5 988C175.1 1171.6 51.5 1397.17 -4 1487" stroke="#FB2C2B" strokeWidth="4"/>
        </svg>
      </div>
    </section>
  );
};

export default FV;
