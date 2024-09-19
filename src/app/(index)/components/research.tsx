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
        <div data-reseach={data} className={`relative w-full max-w-[280px] size-[280px] flex justify-center items-center transition-opacity duration-300 ${opacityClass}`}>
            <span className="absolute inset-0 bg-[linear-gradient(180deg,_#405EFF_0%,_#0321BE_100%)]"></span>
            <p className="font-['DIN_2014'] text-[100px] md:text-[160px] italic font-extrabold relative">{number}</p>
            <p className="absolute md:text-[14px] text-[12px] bottom-4">{text}</p>
            <figure className="absolute top-2.5 right-2.5">
                <img src="/assets/images/card-arrow.svg" alt="" />
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
        <section ref={ref} className="relative overflow-hidden md:px-10 px-5 bg-[url('/assets/images/research-bg.png')] bg-cover">
            <div className="w-full md:max-w-[1180px] max-w-[540px] mx-auto pt-[124px] pb-12 md:pt-[225px] md:pb-[74px]">
                <h4 className="md:text-[64px] text-[32px] text-center font-bold leading-[1.2]">
                    Current Status of Research
                </h4>
                <div className="flex items-start md:mt-28 mt-16 gap-[100px] pr-5">
                    <div className="space-y-10">
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
                    <div className="grid grid-cols-2 flex-1 gap-5">
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
        </section>
    );
};

export default Research;
