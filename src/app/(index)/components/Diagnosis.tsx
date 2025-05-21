"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode } from "react";

const Item = ({children}: {children: ReactNode}) => (
    <div className="fade-up flex items-center text-[4vw] md:text-[20px] xl:text-[28px] font-bold gap-4">
        <span><img className="max-md:size-[8vw]" src="/assets/images/ic-check.svg" alt="" /></span>
        <span className="flex-1">{children}</span>
    </div>
)

const Diagnosis = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="px-5"
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <h3 className="fade-up md:text-[80px] text-[12vw] font-semibold text-center md:leading-loose tracking-wider">今、どんな気持ちですか？</h3>
        <div className="flex justify-between w-full max-w-[1200px] mx-auto md:mt-20 mt-[10vw] gap-10 max-md:flex-wrap">
            <div className="fade-up flex max-md:justify-center gap-10 max-md:w-[calc(50%-20px)]">
                <p><img src="/assets/images/text-feeling-04.svg" alt="" /></p>
                <p><img src="/assets/images/text-feeling-03.svg" alt="" /></p>
            </div>
            <div className="space-y-5 max-md:order-3">
                <Item>次の一手がいつまでたっても思いつかない</Item>
                <Item>壁打ちできる相手が欲しい</Item>
                <Item>時間がない、今すぐ動きたい</Item>
                <Item>組織に必要なピースがわからない</Item>
                <Item>もっとやれるはずだと信じている</Item>
                <Item>自社に可能性を見出せなくなった</Item>
                <Item>第三者の目で自社を見てみたい</Item>
                <Item>受けた批判に納得できないが、反論もできない</Item>
            </div>
            <div className="fade-up flex max-md:justify-center gap-10 max-md:w-[calc(50%-20px)] max-md:order-2">
                <p><img src="/assets/images/text-feeling-02.svg" alt="" /></p>
                <p><img src="/assets/images/text-feeling-01.svg" alt="" /></p>
            </div>
        </div>
        <div className="md:mt-16 mt-[10vw] md:mb-[186px] mb-[20vw]">
            <p className="fade-up text-center text-[5vw] md:text-[36px] font-semibold tracking-[0.2em]">
                3分の診断で、<br />
                あなたの経営難題に即答します
            </p>
            <div className="fade-up mt-[5vw] md:mt-10 flex justify-center">
              <a
                href="/"
                className="flex items-center justify-center relative w-[80vw] md:w-[440px] h-[16vw] md:h-[100px] before:bg-[#FBBC05] text-black font-semibold text-[6vw] md:text-[36px] gap-2 before:absolute before:-skew-x-[20deg] before:w-full before:h-full before:border before:border-black after:absolute after:top-px after:left-px after:h-[calc(100%-2px)] after:bg-white after:w-0 after:z-0 hover:after:w-[calc(100%-2px)] after:transition-[width] after:duration-200 after:-skew-x-[20deg]"
              >
                <div className="flex justify-center items-center relative gap-2.5 z-10">
                  <span>今すぐ診断</span>
                  <img src="/assets/images/arrow-black.svg" alt="" />
                </div>
              </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Diagnosis;
