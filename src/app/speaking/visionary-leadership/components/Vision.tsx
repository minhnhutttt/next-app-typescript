"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Vision = () => {
    const ref = useScrollAnimations();
    return (
        <section ref={ref} className="bg-white relative pb-[30vw] md:pb-[20vw] md:px-[2vw] px-[4vw]">
            <div className="relative w-full h-full rounded-[0.4rem] overflow-hidden bg-grey">
                <div className="pt-[68.45%]"></div>
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
            <div className="pt-8 md:pt-12 pb-12 md:pb-20">
                <div className="h2 js-split">A clear, compelling vision serves as a catalyst for
                    innovation, strategic alignment, and a culture of
                    ownership within an organization.</div>
            </div>
            <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] pb-24 md:pb-20 gap-x-5">
                <div className="col-span-12 md:col-span-10 mb-7 md:mb-0">
                    <div className="h4">"Vision is the highest form <br />of leadership." - Sunny Bonnell</div>
                </div>
                <div className="col-span-12 md:col-span-10 flex flex-col gap-y-10 md:gap-y-16">
                    <div className="grid grid-cols-12 gap-x-5">
                        <div className="col-span-2">
                            (01)
                        </div>
                        <div className="col-span-10">
                            <div className="flex flex-col gap-y-3">
                                <p className="">About the talk</p>
                                <p className="text-black/60">In times of rapid change and rising complexity, clarity of vision becomes a leader’s greatest advantage. This keynote explores what it takes to lead with vision, unpacking the mindset, behaviors, and principles that ignite alignment, energize teams, and set the course for lasting impact.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-x-5">
                        <div className="col-span-2">
                            (02)
                        </div>
                        <div className="col-span-10">
                            <div className="flex flex-col gap-y-3">
                                <p className="">What you'll learn</p>
                                <p className="text-black/60">Sunny unpacks the nine defining traits of visionary leadership through compelling stories, fresh insights, and practical strategies. Audiences walk away equipped to rally people around a bold vision, lead with greater clarity and confidence, and inspire the kind of progress that leaves a lasting mark.</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-x-5">
                        <div className="col-start-3 col-span-10">
                            <a href="/contact" className="u-link is-full">Book Sunny to speak</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
