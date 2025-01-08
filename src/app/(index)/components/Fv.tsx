"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Fv = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative md:h-[900px]"
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        >
          <source src="/assets/videos/fv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="h-full relative px-5 max-md:pb-20">
        <div className="absolute bg-[url(/assets/images/fv-bg.png)] bg-cover inset-0 mix-blend-color-dodge"></div>
        <div className="w-full max-w-[1300px] mx-auto md:pt-[150px] pt-[120px] flex items-center flex-col">
          <div className="zoom-out relative">
            <div><img src="/assets/images/fv-frame.png" alt="" /></div>
            <div className="absolute inset-0 pt-[10vw] lg:pt-[135px]">
              <h1 className="leading-[1.1] text-[11vw] lg:text-[128px] text-center tracking-[0.08em] text-[#1B1B2E]">
              The Chain of <br />
              Beautiful Life
              </h1>
              <p className="text-center lg:text-[24px] md:text-[2.344vw] text-[3.8vw] mt-2 tracking-wide">
              From a single beauty experience <br />
              countless experiences interweave.
              </p>
            </div>
          </div>
          <div className="fade-up flex items-center justify-center flex-col mt-9 relative">
            <p className="text-center md:text-[24px] text-[18px] tracking-wide mb-2">A new circulation of value starts here!</p>
            <a href="/" className="w-[240px] md:w-[280px] h-[60px] md:h-[70px] flex items-center justify-center rounded-full p-[3px] overflow-hidden u-graident">
            <span className="flex w-full h-full rounded-full items-center justify-center relative md:text-[24px] text-[18px] tracking-[0.3em] bg-[url('/assets/images/btn-bg.png')] bg-cover hover:opacity-75 duration-150 after:w-[9px] after:h-[16px] after:bg-[url(/assets/images/ic-arrow.svg)] after:bg-cover after:absolute after:right-4">WHITEPAPER</span></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fv;
