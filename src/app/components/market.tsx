"use client";
import Button from "@/components/button";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useDarkMode from "@/hooks/useDarkMode";
gsap.registerPlugin(ScrollTrigger);

const Market = () => {
    const ref = useScrollAnimations();
    const triggerRef = useDarkMode();
  return (
    <section ref={ref} className="md:pt-[140px] pt-20 bg-[url('/assets/images/bg-slider.png')] bg-cover md:pb-[137px] pb-20">
        <div ref={triggerRef}>
      <div className="w-full md:max-w-[1440px] max-w-[440px] mx-auto flex justify-end md:gap-14 gap-8 lg:gap-20 max-md:flex-col-reverse">
        <div className="flex-1 max-w-[562px] md:pt-[290px] font-lato md:pl-10 max-md:px-5">
            <h3 className="fadein lg:text-[32px] md:text-[24px] text-[20px] font-black leading-[1.4] text-white">
            Gain a deeper understanding of the RWA market through our expert analysis and unique perspective.
            </h3>
            <div className="space-y-5 mt-7 md:mb-14 mb-10">
                <div className="flex gap-3">
                    <span><img className="max-md:w-4" src="/assets/images/ic-check.svg" alt="" /></span>
                    <span className="flex-1 md:text-[18px] text-[14px] font-medium text-white leading-[1.3]">Explore the factors driving the growth and evolution of the RWA landscape</span>
                </div>
                <div className="flex gap-3">
                    <span><img className="max-md:w-4" src="/assets/images/ic-check.svg" alt="" /></span>
                    <span className="flex-1 md:text-[18px] text-[14px] font-medium text-white leading-[1.3]">Uncover the potential of RWAs as a compelling alternative investment</span>
                </div>
                <div className="flex gap-3">
                    <span><img className="max-md:w-4" src="/assets/images/ic-check.svg" alt="" /></span>
                    <span className="flex-1 md:text-[18px] text-[14px] font-medium text-white leading-[1.3]">Discover the trends shaping the future of RWA investment</span>
                </div>
            </div>
            <div className="w-full max-w-[518px] border border-white py-2.5 px-[30px] md:text-[18px] text-[14px] text-white font-medium leading-[1.3] tracking-wide">
            Our insights aim to provide a fresh perspective on the world of RWAs and their role in a diversified portfolio.
            </div>
        </div>
        <div data-scroll="out" className="relative max-md:w-auto max-dt:w-1/2">
            <div className="absolute right-12 top-1 z-10">
                <Title rect="lg:text-[128px] md:text-[110px] text-[50px] text-white leading-none whitespace-nowrap">Market Insights</Title>
            </div>
            <figure className="fadein relative">
                <img src="/assets/images/img-market.png" alt="" />
            </figure>
            <div className="fadein max-md:hidden pt-7 md:pt-12">
                <Button href="#" white>RWA's Potential</Button>
            </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Market;
