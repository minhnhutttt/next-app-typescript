"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";


const Author = () => {

    const ref = useScrollAnimations();
    return (
        <section ref={ref} className="bg-white relative book-section px-[4vw] md:px-[2vw] pb-[10vw] md:pb-[16vw]">
            <div className="flex flex-col justify-between uppercase md:text-[13vw] text-[14vw] font-bold leading-[0.85] tracking-tight">
                <div className="overflow-hidden">
                    <p className="slide-up">Bestselling</p>
                </div>
                <div className="overflow-hidden md:text-right">
                    <p className="slide-up">Author</p>
                </div>
            </div>
            <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] gap-x-[2vw]">
                <div className="fade-up relative col-span-12 md:col-span-10 mt-[6vw] md:-mt-[9vw] overflow-hidden rounded-[0.4rem]">
                    <div className="w-full bg-grey overflow-hidden relative">
                        <div className="pt-[149.91%]"></div>
                        <video
                            className="size-full object-cover absolute top-0 left-0 is-playing"
                            data-lazy-video=""
                            data-lazy=""
                            data-autoplay="true"
                            preload="none"
                            loop
                            muted
                            autoPlay
                            src="/assets/images/45299285-7bce5073.mp4"
                            playsInline
                            data-loaded="true"
                        ></video>
                    </div>
                </div>
                <div className="relative col-span-12 md:!col-start-13 md:col-span-10 md:mt-[7vw] mt-[10vw]">
                    <div className="label label-big !absolute top-0 left-0 js-split pt-[1vw] md:text-[1.2vw] text-[5vw] font-medium">
                        <div className="overflow-hidden">
                            <p className="slide-up">(Books)</p>
                        </div>
                    </div>
                    <div className="md:text-[3vw] text-[7vw] font-medium leading-snug">
                        <div className="overflow-hidden"><p className="slide-up"><span className="inline-block w-[30vw] md:w-[10vw]"></span>Dive into Sunny’s</p></div>
                        <div className="overflow-hidden"><p className="slide-up">world of big ideas and bold,</p></div>
                        <div className="overflow-hidden"><p className="slide-up">actionable insights to grow</p></div>
                        <div className="overflow-hidden"><p className="slide-up">your leadership.</p></div>
                    </div>
                    <div className="overflow-hidden md:mt-[3vw] mt-[5vw]">
                        <div className="flex pb-[1vw]">
                            <a href="" className="slide-up u-link is-full md:text-[1.2vw] text-[4vw] font-medium inline-block">See all of Sunny’s books</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Author;