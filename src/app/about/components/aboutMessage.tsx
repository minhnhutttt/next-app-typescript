"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const AboutMessage = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative h-[400px] md:h-[746px] z-10">
      <div className="w-full h-full flex justify-center items-center relative">
            <div className="absolute inset-0 z-10">
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover object-center opacity-30 mix-blend-multiply"
              >
                <source src="/assets/videos/about-page.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </div>
          <div className="px-5">
          <p className="fade-up w-full max-w-[667px] md:text-[24px] text-[18px] leading-[1.2] font-medium relative z-20">
          If you're interested in DIVER's growth and evolution, please take a look at our roadmap. We are always striving to provide the best user experience and are fully committed to developing products that meet your needs.
          </p>
          </div>
      </div>
    </section>
  );
};

export default AboutMessage;
