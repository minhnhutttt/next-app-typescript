"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";


const Speaking = () => {

    const ref = useScrollAnimations();
    return (
        <section ref={ref} className="bg-white relative">
            <div className="rounded-[0.4rem] w-full h-full relative bg-[#000000] overflow-hidden">
                <div className="pt-[62.5%]"></div>
                <video
                className="size-full object-cover absolute top-0 left-0 is-playing"
                data-lazy-video=""
                data-lazy=""
                data-autoplay="true"
                preload="none"
                loop
                muted
                autoPlay
                src="/assets/images/01167253-2a0ecde7.mp4"
                playsInline
                data-loaded="true"
              ></video>
            </div>
            <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] gap-y-[4rem] md:gap-[2rem] py-[1.5rem] px-[2rem]">
                <div className="col-span-12 md:col-span-6 hidden md:block md:text-[1.2vw] text-[1.3rem] font-semibold">
                    <div className="overflow-hidden"><p className="fade-up">(Keynote Speaking)</p></div>
                </div>
                <div className="col-span-12 md:col-span-9  md:text-[1.2vw] text-[1.3rem] font-semibold">
                    <div className="overflow-hidden"><p className="fade-up">Sunny Bonnell inspires leaders to rethink what it means to</p></div>
                    <div className="overflow-hidden"><p className="fade-up">lead—offering clear, actionable frameworks that turn bold</p></div>
                    <div className="overflow-hidden"><p className="fade-up">vision into the driving force behind culture, brand, and growth.</p></div>
                </div>
                <div className="md:col-start-[20] col-span-12 md:col-span-5 md:text-right flex justify-end">
                    <div className="overflow-hidden">
                            <div className="flex pb-[1vw]">
                            <a href="" className="fade-up u-link is-full md:text-[1.2vw] text-[1.3rem] font-medium inline-block">Book Sunny to speak</a>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Speaking;