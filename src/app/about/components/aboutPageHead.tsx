"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const AboutPageHead = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative pt-[130px] z-10">
      <div className="w-full mx-auto overflow-hidden">
        <div className="fade-up px-7 md:px-[60px] md:text-[64px] text-[32px] font-medium tracking-wide">
            DIVER's Philosophy
        </div>
        <div className="fade-up h-[100px] md:h-[156px] bg-[url('/assets/images/about-title-line.png')] bg-[lenth:100%_100%] flex items-center gap-5">
            <div className="flex-shrink-0 flex gap-5 min-w-full animate-[scroll_30s_linear_infinite] u-transform">
                <p className="md:text-[128px] text-[50px] flex-[0_0_auto]">Creating a Future Where Individuals Drive Global Progress.</p>
                <p className="md:text-[128px] text-[50px] flex-[0_0_auto]">Creating a Future Where Individuals Drive Global Progress.</p>
            </div>
            <div className="flex-shrink-0 flex gap-5 min-w-full animate-[scroll_30s_linear_infinite] u-transform">
                <p className="md:text-[128px] text-[50px] flex-[0_0_auto]">Creating a Future Where Individuals Drive Global Progress.</p>
                <p className="md:text-[128px] text-[50px] flex-[0_0_auto]">Creating a Future Where Individuals Drive Global Progress.</p>
            </div>
        </div>
        <div className="fade-up px-7 md:px-[60px] md:text-[20px] text-[16px] py-5">
            <p className="w-full max-w-[625px] tracking-wide">
                DIVER is an innovative blockchain platform aiming to create a new economic sphere and social system where individuals become the driving force of the world, shaping society through their own will.
            </p>
        </div>
        <div className="fade-up px-5">
        <div className="w-full max-w-[884px] mx-auto md:mt-8">
            <div className="flex items-center md:gap-[60px] gap-4 md:pt-10 pt-7 md:pb-5 pb-4 border-b border-white/70">
                <p className="md:text-[32px] text-[20px] font-bold w-[100px] md:w-[200px] py-[7px] tracking-widest">Origin</p>
                <p className="md:text-[24px] text-[16px] font-medium leading-[1.3] flex-1">
                Fusion of Bitcoin's philosophy and Ethereum's functionality, evolved further
                </p>
            </div>
            <div className="flex items-center md:gap-[60px] gap-4 md:pt-10 pt-7 md:pb-5 pb-4 border-b border-white/70">
                <p className="md:text-[32px] text-[20px] font-bold w-[100px] md:w-[200px] py-[7px] tracking-widest">Purpose</p>
                <p className="md:text-[24px] text-[16px] font-medium leading-[1.3] flex-1">
                Realizing true Web3 and unlocking the infinite potential of individuals.
                </p>
            </div>
            <div className="flex items-center md:gap-[60px] gap-4 md:pt-10 pt-7 md:pb-5 pb-4 border-b border-white/70">
                <p className="md:text-[32px] text-[20px] font-bold w-[100px] md:w-[200px] py-[7px] tracking-widest">Means</p>
                <p className="md:text-[24px] text-[16px] font-medium leading-[1.3] flex-1">
                Innovative technology and user-driven growth through products that respect individual sovereignty.
                </p>
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPageHead;
