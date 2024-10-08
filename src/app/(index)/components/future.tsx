"use client";

import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode } from "react";

const Item = ({number, children} : {number: string, children: ReactNode}) => (
    <div className="fade-up flex flex-col items-center">
        <div className="size-[55px] md:size-[86px] flex items-center justify-center bg-black rounded-full md:text-[42px] text-[20px] text-white">
            {number}
        </div>
        <div className="w-[142px] md:text-[18px] text-[14px] leading-[1.3] mt-3 md:mt-5">
            {children}
        </div>
    </div>
)

const Future = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative md:pt-[130px] pt-[100px] md:pb-[214px] pb-[120px] z-10 ">
      <div className="w-full max-w-[1320px] mx-auto">
        <div className="flex max-lg:flex-col max-lg:items-center gap-[30px] md:mb-[60px] mb-8  px-5">
            <div className="max-w-[463px]">
                <h4 className="fade-up md:text-[64px] text-[32px] font-medium leading-[1.3]">Future Vision of <br />the Project</h4>
                <p className="fade-up md:text-[18px] text-[16px] leading-[1.3] md:mt-[42px] mt-8">
                CIP Coin aims to digitize the expression of gratitude and visualize the value of social contributions. It is a project that aims to create a new economic system. By introducing fee-free transactions, a design based on scientific evidence, and a comprehensive social credit system, it enables a "circulation of gratitude" that was difficult to achieve in conventional economic systems.The future vision this project aims for is as follows:
                </p>
            </div>
            <div className="fade-up flex justify-center flex-1 max-md:max-w-[330px] max-lg:max-w-[510px] max-lg:w-full">
                <div className="w-full max-w-[510px] relative">
                    <span className="absolute max-md:w-full top-5 md:top-10">
                        <svg className="max-md:w-full md:w-[511px]" viewBox="0 0 511 515" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M152.358 257.885C152.358 257.885 197.86 257.885 375.261 257.885C552.662 257.885 554.109 3.73566 375.261 3.73566C196.412 3.73566 124.005 2.5778 124.005 2.5778" stroke="#FB2C2B" stroke-width="4"/>
                            <path d="M358.497 512.034C358.497 512.034 312.995 512.034 135.594 512.034C-41.807 512.034 -43.2543 257.885 135.594 257.885C314.442 257.885 386.85 256.727 386.85 256.727" stroke="#FB2C2B" stroke-width="4"/>
                        </svg>
                    </span>
                    <div className="relative grid grid-cols-2 md:gap-y-[68px] gap-y-[50px]">
                        <Item number="1">Fostering a culture of gratitude</Item>
                        <Item number="2">Establishing a new value evaluation system</Item>
                        <Item number="4">Formation of a global mutual aid network</Item>
                        <Item number="3">Expanding opportunities for education and self-realization</Item>
                        <Item number="5">Establishing a sustainable model for social contribution</Item>
                        <Item number="6">Harmony between technology and humanity</Item>
                    </div>
                </div>
            </div>
        </div>
        <div className="fade-up w-full max-w-[931px] md:min-h-[660px] min-h-[560px] mx-auto bg-[url('/assets/images/bg-hand.png')] bg-center max-md:px-5">
            <div className="w-full max-w-[720px] mx-auto md:pt-[96px] pt-10">
                <p className="md:text-[22px] text-[18px] leading-[1.3]">
                We will continue to strive towards the realization of this vision, always listening to the voices of users and the community, while flexibly responding to technological evolution and changing societal needs. We believe that CIP Coin will become the foundation of future socio-economic systems and bring positive impacts to people around the world. <br />
                <br />
                <br />
                We sincerely look forward to your support and participation. Let's create a new society woven with gratitude and contribution together.
                </p>
                <div className="flex justify-center md:mt-[60px] mt-8">
                    <Button />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
