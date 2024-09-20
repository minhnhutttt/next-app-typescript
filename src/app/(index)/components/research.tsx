"use client";
import { useState } from "react";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Item = ({ title, text, data, hoveredData }: { title: string, text: string, data: string, hoveredData: string | null }) => {
    const isHovered = hoveredData === data;
    const opacityClass = isHovered || !hoveredData ? "opacity-100" : "xl:opacity-50";
    
    return (
        <div data-reseach={data} className={`transition-opacity duration-300 ${opacityClass}`}>
            <p className="md:text-[32px] text-[20px] font-bold">{title}</p>
            <p className="flex items-center md:text-[20px] text-[16px] mt-2 gap-1.5">
                <span className="size-[9px] bg-[linear-gradient(180deg,_#405EFF_0%,_#0321BE_100%)] rounded-full"></span>
                <span>{text}</span>
            </p>
        </div>
    );
};

const Card = ({ number, text, data, hoveredData }: { number: string, text: string, data: string, hoveredData: string | null }) => {
    const isHovered = hoveredData === data;
    const opacityClass = isHovered || !hoveredData ? "opacity-100" : "xl:opacity-50";
    
    return (
        <div data-reseach={data} className={`relative w-full max-w-[280px] md:max-w-[280px] md:h-[280px] size-[200px] flex justify-center items-center transition-opacity duration-300 ${opacityClass}`}>
            <span className="absolute inset-0 bg-[linear-gradient(180deg,_#405EFF_0%,_#0321BE_100%)]"></span>
            <p className="font-['DIN_2014'] text-[80px] md:text-[160px] italic font-extrabold relative">{number}</p>
            <p className="absolute md:text-[14px] text-[12px] bottom-4 text-center">{text}</p>
            <figure className="absolute top-2.5 right-2.5">
                <img className="max-md:w-8" src="/assets/images/card-arrow.svg" alt="" />
            </figure>
        </div>
    );
};

const Research = () => {
    const [hoveredData, setHoveredData] = useState<string | null>(null);
    const ref = useScrollAnimations();

    const handleMouseEnter = (data: string) => setHoveredData(data);
    const handleMouseLeave = () => setHoveredData(null);

    return (
        <section id="research" ref={ref} className="relative bg-black overflow-hidden md:px-10 px-5 bg-[url('/assets/images/research-bg.png')] bg-cover md:pb-[204px] pb-[100px]">
            <div className="w-full md:max-w-[1180px] max-w-[540px] mx-auto pt-[90px] pb-16 md:pt-[225px] md:pb-[100px]">
                <h4 className="fade-up md:text-[64px] text-[32px] text-center font-bold leading-[1.2]">
                    Current Status of Research
                </h4>
                <div className="flex max-lg:flex-col-reverse items-start md:mt-28 mt-16 md:gap-[100px] gap-[50px] lg:pr-5 max-lg:max-w-[540px] max-lg:mx-auto">
                    <div className="fade-up md:space-y-10 space-y-7">
                        <div onMouseEnter={() => handleMouseEnter('1')} onMouseLeave={handleMouseLeave}>
                            <Item title="1. Regenerative medicine" text="Two types: A and B" data="1" hoveredData={hoveredData} />
                        </div>
                        <div onMouseEnter={() => handleMouseEnter('2')} onMouseLeave={handleMouseLeave}>
                            <Item title="2. Trauma treatment" text="Animal experimental phase" data="2" hoveredData={hoveredData} />
                        </div>
                        <div onMouseEnter={() => handleMouseEnter('3')} onMouseLeave={handleMouseLeave}>
                            <Item title="3. Cancer treatment" text="Human trial phase" data="3" hoveredData={hoveredData} />
                        </div>
                        <div onMouseEnter={() => handleMouseEnter('4')} onMouseLeave={handleMouseLeave}>
                            <Item title="4. Anti-fibrosis therapy" text="Human trial phase" data="4" hoveredData={hoveredData} />
                        </div>
                        <div onMouseEnter={() => handleMouseEnter('5')} onMouseLeave={handleMouseLeave}>
                            <Item title="5. Neuroregenerative medicine" text="Animal experimental stage" data="5" hoveredData={hoveredData} />
                        </div>
                        <div onMouseEnter={() => handleMouseEnter('6')} onMouseLeave={handleMouseLeave}>
                            <Item title="6. Angiogenesis therapy" text="Human trial phase" data="6" hoveredData={hoveredData} />
                        </div>
                    </div>
                    <div className="fade-up grid grid-cols-2 flex-1 gap-5 max-lg:w-full">
                        <div onMouseEnter={() => handleMouseEnter('1')} onMouseLeave={handleMouseLeave}>
                            <Card number="1" text="Regenerative medicine" data="1" hoveredData={hoveredData} />
                        </div>
                        <div onMouseEnter={() => handleMouseEnter('2')} onMouseLeave={handleMouseLeave}>
                            <Card number="2" text="Trauma treatment" data="2" hoveredData={hoveredData} />
                        </div>
                        <div onMouseEnter={() => handleMouseEnter('3')} onMouseLeave={handleMouseLeave}>
                            <Card number="3" text="Cancer treatment" data="3" hoveredData={hoveredData} />
                        </div>
                        <div onMouseEnter={() => handleMouseEnter('4')} onMouseLeave={handleMouseLeave}>
                            <Card number="4" text="Anti-fibrosis therapy" data="4" hoveredData={hoveredData} />
                        </div>
                        <div onMouseEnter={() => handleMouseEnter('5')} onMouseLeave={handleMouseLeave}>
                            <Card number="5" text="Neuroregenerative medicine" data="5" hoveredData={hoveredData} />
                        </div>
                        <div onMouseEnter={() => handleMouseEnter('6')} onMouseLeave={handleMouseLeave}>
                            <Card number="6" text="Angiogenesis therapy" data="6" hoveredData={hoveredData} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="fade-up flex justify-center">
                <a href="" className="w-[300px] md:w-[455px] h-20 md:h-[100px] border-2 border-[#405EFF] bg-[linear-gradient(93deg,_rgba(64,_94,_255,_0.30)_0%,_rgba(3,_33,_190,_0.30)_102.1%)] [box-shadow:0px_4px_50px_0px_rgba(137,_207,_236,_0.29)] rounded-[10px] md:text-[24px] text-[18px] flex items-center justify-center duration-150 hover:opacity-75">Learn more</a>
            </div>
        </section>
    );
};

export default Research;
