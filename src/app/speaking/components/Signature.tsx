"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import Explore from "@/components/pages/Explore";

const Signature = () => {
    const ref = useScrollAnimations();

    return (
        <section ref={ref} className="bg-white relative">
            <div className="explore w-full relative flex flex-col">
                <Explore />
                <div className="flex items-center justify-center flex-col w-full md:absolute top-0 pointer-events-none z-[2]">
                    <div className="w-full flex justify-between max-md:flex-col gap-[2vw] md:px-[2vw] px-[4vw]">
                        <div className="relative w-full md:max-w-[30vw]">
                            <div className="pt-[106.5%]"></div>
                            <div className="bg-[#fff] origin-top h-full left-[0] overflow-hidden absolute top-[0] w-full border flex items-center justify-center rounded-[0.4rem] border-grey hover:bg-[#f4f4f4] transition-colors duration-300">
                                <a href="/" className="absolute top-0 left-0 size-full z-2 opacity-0 pointer-events-auto">Visionary Leadership</a>
                                <span className="absolute top-0 left-0 px-[5vw] md:px-[2vw] font-bold pt-[5vw] md:pt-[2vw] h3 leading-none js-split">
                                    <div className="overflow-hidden">
                                        <div className="js-split">1</div>
                                    </div>
                                </span>
                                <div className="absolute bottom-0 left-0 px-[3vw] pb-[5vw] md:pb-[2vw] w-full">
                                    <h3 className="md:my-[1vw] my-[3vw] h3 leading-none font-bold uppercase"><div className="js-split">Visionary Leadership </div>
                                    </h3>
                                    <div className="overflow-hidden h5 font-medium">
                                        <div className="js-split">How to rally people around your ideas</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full md:max-w-[30vw]">
                            <div className="pt-[106.5%]"></div>
                            <div className="bg-[#fff] origin-top h-full left-[0] overflow-hidden absolute top-[0] w-full border flex items-center justify-center rounded-[0.4rem] border-grey hover:bg-[#f4f4f4] transition-colors duration-300">
                                <a href="/" className="absolute top-0 left-0 size-full z-2 opacity-0 pointer-events-auto">Visionary Leadership</a>
                                <span className="absolute top-0 left-0 px-[5vw] md:px-[2vw] font-bold pt-[5vw] md:pt-[2vw] h3 leading-none js-split">
                                    <div className="overflow-hidden">
                                        <div className="js-split">2</div>
                                    </div>
                                </span>
                                <div className="absolute bottom-0 left-0 px-[3vw] pb-[5vw] md:pb-[2vw] w-full">
                                    <h3 className="md:my-[1vw] my-[3vw] h3 leading-none font-bold uppercase"><div className="js-split">Visionary Leadership </div>
                                    </h3>
                                    <div className="overflow-hidden h5 font-medium">
                                        <div className="js-split">How to rally people around your ideas</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full md:max-w-[30vw]">
                            <div className="pt-[106.5%]"></div>
                            <div className="bg-[#fff] origin-top h-full left-[0] overflow-hidden absolute top-[0] w-full border flex items-center justify-center rounded-[0.4rem] border-grey hover:bg-[#f4f4f4] transition-colors duration-300">
                                <a href="/" className="absolute top-0 left-0 size-full z-2 opacity-0 pointer-events-auto">Visionary Leadership</a>
                                <span className="absolute top-0 left-0 px-[5vw] md:px-[2vw] font-bold pt-[5vw] md:pt-[2vw] h3 leading-none js-split">
                                    <div className="overflow-hidden">
                                        <div className="js-split">3</div>
                                    </div>
                                </span>
                                <div className="absolute bottom-0 left-0 px-[3vw] pb-[5vw] md:pb-[2vw] w-full">
                                    <h3 className="md:my-[1vw] my-[3vw] h3 leading-none font-bold uppercase"><div className="js-split">Visionary Leadership </div>
                                    </h3>
                                    <div className="overflow-hidden h5 font-medium">
                                        <div className="js-split">How to rally people around your ideas</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Signature;