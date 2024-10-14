"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const UseCasePageHead = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative pt-[155px] z-10">
      <div className="w-full mx-auto overflow-hidden">
        <div className="fade-up px-5 md:px-[46px] md:text-[98px] text-[40px] font-medium tracking-wide leading-none">
        DIVER Amazing Use Cases
        </div>
        <div className="md:h-[540px] relative flex items-center justify-center px-5 py-20">
            <div className="absolute inset-0 z-10 h-full w-full  bg-[#005FD7]">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover object-center mix-blend-overlay"
                >
                    <source src="/assets/videos/usecase.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="w-full max-w-[1180px] mx-auto flex items-center justify-center max-md:flex-col md:gap-[60px] gap-8 relative z-10">
                <div className="lg:text-[48px] md:text-[32px] text-[24px] font-bold md:w-[300px] lg:w-[470px] leading-[1.1]">
                Innovative Use Cases Shaping the Future
                </div>
                <div className="md:text-[20px] text-[15px] leading-none flex-1">
                Welcome to the world of groundbreaking use cases made possible by DIVER. <br /><br />Here, we introduce you to DIVER's potential to merge the physical and digital realms, creating unprecedented business models and social systems. <br /><br />Discover how DIVER's ecosystem, which redefines the value of time and paves the way for a new future, will transform our lives and businesses through these concrete scenarios.
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasePageHead;
