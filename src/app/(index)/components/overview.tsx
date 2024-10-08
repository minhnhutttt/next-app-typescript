"use client";

import Button from "@/components/button";
import useDarkMode from "@/hooks/useDarkMode";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode, useEffect } from "react";

const sliderItems = [
  "Tak",
  "Danke",
  "ありがとう",
  "Salamat",
  "Merci",
  "Cảm ơn",
  "Dziękuję",
  "Obrigado",
  "धन्यवाद",
  "Thank you",
  "Dank je",
  "감사합니다",
  "ευχαριστώ",
  "Gracias",
  "Tack",
  "ขอบคุณ",
  "谢谢",
];
const SliderItem = ({ children }: { children: ReactNode }) => {
  return (
    <div className="md:text-[44px] text-[24px] flex-[0_0_auto]">
      {children}
    </div>
  );
};

const Step = ({number, children}: {number: string, children: ReactNode}) => {
    return (
        <div className="flex items-center md:gap-10 gap-5 md:py-[30px] py-5 lg:pl-10 pl-5 pr-5 border-t border-[#777]">
            <span className="md:size-20 size-16 text-center flex items-center justify-center rounded-full border border-black dark:border-white md:text-[48px] text-[24px] leading-none italic"><span className="-ml-2">{number}</span></span>
            <span className="flex-1 lg:text-[24px] md:text-[20px] text-[16px] leading-[1.3]">{children}</span>
        </div>
    )
}

const Overview = () => {
  const ref = useScrollAnimations();
  const triggerRef = useDarkMode();

  return (
    <section ref={ref} className="relative md:pt-[40px] pt-[100px] md:pb-[83px] pb-[60px] z-10 dark:text-white">
      <div ref={triggerRef}>
        <div className="w-full max-w-[1480px] mx-auto relative px-5">
          <div className="flex max-md:flex-col justify-between gap-10 md:gap-[70px]">
            <div className="fade-up max-md:w-full max-xl:w-1/2 md:text-[80px] text-[40px] leading-[1.3] xl:w-[630px]">
              Project Overview
            </div>
            <div className="fade-up flex-1 pt-8">
              <p className="md:text-[18px] text-[16px] leading-[1.3] ">
                CIP Coin (Compliment and Incentive Platform Coin) is an
                innovative project that digitizes the exchange of gratitude and
                appreciation to make society better. <br />
                <br />
                Built on the DRC20 platform, CIP Coin utilizes blockchain
                technology.
                <br />
                <br />
                It integrates the expression of gratitude into daily life by
                digitizing it.
                <br />
                <br />
                For example, we have "likes," but we want to make it possible to
                collect many of these "likes" and pass them on to others.
              </p>
            </div>
          </div>
        </div>
        <div className="pt-8">
          <div className="fade-up flex items-center overflow-hidden gap-5">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex gap-5 min-w-full animate-[scroll_40s_linear_infinite] u-transform"
              >
                {sliderItems.concat(sliderItems).map((item, idx) => (
                  <SliderItem key={idx}>{item}</SliderItem>
                ))}
              </div>
            ))}
          </div>
          <div className="fade-up flex items-center overflow-hidden gap-5">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex gap-5 min-w-full animate-[scroll_40s_linear_infinite] u-transform [animation-direction:reverse]"
              >
                {sliderItems.concat(sliderItems).map((item, idx) => (
                  <SliderItem key={idx}>{item}</SliderItem>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-[1440px] mx-auto px-5 mt-10 md:mt-14">
            <div className="flex max-md:flex-col">
                <div className="fade-up md:w-1/2 md:h-[390px] h-[260px] overflow-auto no-scrollbar max-md:border-l border-r border-[#777]">
                    <Step number="1">Enabling "small expressions of gratitude" and "frequent expressions of gratitude" through fee-free transactions</Step>
                    <Step number="2">A psychological model based on scientific evidence linking expressions of gratitude to individual and social well-being</Step>
                    <Step number="3">A bidirectional social credit system that evaluates both givers and receivers</Step>
                    <Step number="4">Promoting an economic support network through international micro-donation functionality</Step>
                </div>
                <div className="fade-up md:w-1/2 max-md:pt-6 md:pl-[45px] flex flex-col justify-between">
                    <div className="pt-3">
                        <h4 className="md:text-[64px] text-[32px] leading-[1.3]">Key features of CIP Coin</h4>
                        <p className="md:text-[18px] text-[14px] leading-none pt-5">
                            By eliminating transaction fees, CIP Coin removes barriers to small-scale financial transactions. <br />
                            <br />
                            It opens up new possibilities for peer-to-peer support (directly from one individual to another without intermediaries), rewards for content creators, and global charitable activities.<br />
                            <br />
                            This white paper outlines the scientific basis, technical implementation, and potential social impact of the CIP Coin ecosystem.
                        </p>
                    </div>
                    <div className="flex justify-end mt-5">
                        <Button />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
