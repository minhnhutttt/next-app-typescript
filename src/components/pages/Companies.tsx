"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Companies = ({text}: {text: string}) => {

    const ref = useScrollAnimations();
    return (
        <section ref={ref} className="bg-white relative pb-[15vw] md:pb-[10vw]">
            <div className="md:px-[2vw] px-[4vw]">
                <div className="js-split">{text}</div>
                <div className="overflow-hidden pb-[2vw] pt-[6vw] md:pt-[3vw] pointer-events-none w-full">
                    <div className="fade-up flex w-full overflow-hidden marquee-collection h1-bigger will-change-transform relative font-bold uppercase pointer-events-none md:gap-[2vw] gap-[4vw]">
                        <div className="flex-[0_0_auto] whitespace-nowrap animate-[loop_50s_-25s_linear_infinite] flex md:gap-[2vw] gap-[4vw]">
                            {Array(8).fill(null).map((_, index) => (
                                <div key={index} className="relative md:w-[400px] w-[200px]">
                                    <div className="overflow-hidden">
                                        <div className="fade-up flex justify-center items-center p-[2rem] border border-grey rounded-[0.4rem]">
                                            <img src="/assets/images/google-logo.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex-[0_0_auto] whitespace-nowrap animate-[loop2_50s_linear_infinite] flex md:gap-[2vw] gap-[4vw]">
                            {Array(8).fill(null).map((_, index) => (
                                <div key={index} className="relative md:w-[400px] w-[200px]">
                                    <div className="overflow-hidden">
                                        <div className="fade-up flex justify-center items-center p-[2rem] border border-grey rounded-[0.4rem]">
                                            <img src="/assets/images/google-logo.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Companies;