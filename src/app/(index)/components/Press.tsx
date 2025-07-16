"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";


const Press = () => {

    const ref = useScrollAnimations();
    return (
        <section ref={ref} className="bg-white relative">
            <div className="px-[4vw] md:px-[2vw] relative overflow-hidden pb-[30vw] md:pb-[20vw]">
                <div className="grid grid-cols-12 md:items-end md:justify-end pb-[6vw]">
                    <div className="col-span-12 md:col-span-10 mb-[5vw] md:mb-0 relative">
                        <div className="label label-big !absolute top-0 left-0 js-split pt-[2vw] md:pt-[1vw] md:text-[2vw] text-[3vw] font-medium">
                            <div className="overflow-hidden"><p className="slide-up">( Press & Media )</p></div>
                        </div>
                        <div className="md:text-[4vw] text-[6.5vw] leading-[1.3] font-medium tracking-tighter">
                            <div className="overflow-hidden">
                                <p className="slide-up">
                                    <span className="inline-block w-[25vw]"></span>Sunny's expertise
                                </p>
                            </div>
                            <div className="overflow-hidden">
                                <p className="slide-up">
                                    and voice is spotlighted in today’s
                                </p>
                            </div>
                            <div className="overflow-hidden">
                                <p className="slide-up">
                                    most influential media.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-2 flex justify-end js-split">
                        <div className="overflow-hidden">
                            <div className="flex pb-[1vw]">
                                <a href="" className="slide-up u-link is-full md:text-[1.2vw] text-[4vw] font-medium inline-block">View more Articles</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full relative">
                    <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] max-md:gap-x-[3vw] max-md:gap-y-[6vw] md:gap-x-[1vw] relative overflow-hidden">
                        {Array(4).fill(null).map((_, index) => (
                            <div key={index} className="fade-up col-span-6 relative md:col-span-6">
                                <div className="absolute bg-white rounded-full md:px-[0.5vw] px-[1vw] md:top-[1vw] top-[2vw] md:left-[1vw] left-[2vw] z-2 md:text-[1.2vw] text-[3vw] z-10">TV</div>
                                <div className="relative w-full bg-grey block rounded-[0.4rem] overflow-hidden z-1">
                                    <div className="pt-[126.28%]"></div>
                                    <div className="absolute top-0 left-0 w-full h-full">
                                        <img className="w-full h-full object-cover" src="/assets/images/cover.webp" alt="" />
                                    </div>
                                </div>
                                <h3 className="h4 md:my-[1vw] my-[2vw] md:text-[1.4vw] text-[5vw] font-medium leading-tight">
                                    Sunny Bonnell on Wicked’s <br />
                                    blockbuster weekend
                                </h3>
                                <p className="text-[#797b7c] md:text-[1.2vw] text-[3vw] font-medium">Cheddar</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Press;