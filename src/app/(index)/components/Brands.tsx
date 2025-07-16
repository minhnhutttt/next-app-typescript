"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";


const Brands = () => {

    const ref = useScrollAnimations();
    return (
        <section ref={ref} className="bg-white relative">
            <div className="w-full md:px-[2vw] px-[4vw] pb-[10rem] md:pb-[25rem]">
                <div className="w-full grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] gap-x-[2rem] items-end pb-[3rem] md:pb-[6rem]">
                    <div className="col-span-12 md:col-span-6 hidden md:block md:text-[2vw] text-[4vw]">
                        <div className="overflow-hidden">
                            <p className="slide-up">(02)</p>
                        </div>
                    </div>
                    <div className="col-span-12 py-[1.5rem] md:py-0 md:col-span-11 md:text-[4vw] text-[8.8vw] leading-[1.3] font-medium tracking-tighter">
                        <div className="overflow-hidden">
                            <p className="slide-up">Trusted advisor for </p>
                        </div>
                        <div className="overflow-hidden">
                            <p className="slide-up">industry leading brands</p>
                        </div>
                    </div>
                    <div className="col-span-12 md:text-right md:col-span-7 flex md:justify-end">
                        <div className="overflow-hidden">
                            <div className="flex py-[1em]">
                            <a href="" className="slide-up u-link is-full md:text-[1.2vw] text-[4vw]  font-medium inline-block">Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid gap-[1rem] grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))]">
                    {Array(8).fill(null).map((_, index) => (
                        <div key={index} className="col-span-6 relative">
                        <div className="overflow-hidden">
                            <div className="fade-up flex justify-center items-center p-[2rem] border border-grey rounded-[0.4rem]">
                                <img src="/assets/images/google-logo.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Brands;