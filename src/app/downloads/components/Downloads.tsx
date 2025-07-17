"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Downloads = () => {
    const ref = useScrollAnimations();
    return (
        <section ref={ref} className="bg-white relative pb-[30vw] md:pb-[20vw] md:px-[2vw] px-[4vw]">
           <div className="flex flex-wrap gap-5 mb-8 md:mb-10">
                <a href="/" className="pt-2 pb-3 px-4 hover:bg-black hover:text-white transition-colors duration-300 inline-block leading-none bg-gray-200 rounded-full">
                  Speaker Pack ↓
                </a>
                <a href="/" className="pt-2 pb-3 px-4 hover:bg-black hover:text-white transition-colors duration-300 inline-block leading-none bg-gray-200 rounded-full">
                  Speaker Bio ↓
                </a>
           </div>
           <div className="grid grid-cols-12 md:grid-cols-[repeat(24,_minmax(0,_1fr))] gap-x-4 md:gap-x-5 gap-y-6">
            {Array(4).fill(null).map((_, index) => (
                        <div key={index} className="relative col-span-6">
                        <a href="/" className="relative w-full block mb-5 overflow-hidden rounded-[0.4rem]">
                            <div className="relative w-full block">
                                <div className="pt-[134%]"></div>
                                <img src="/assets/images/book.jpg" alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
                            </div>
                            <p className="block col-span-6 w-full md:mb-6 mb-3 mt-3 md:mt-5">Sunny's Headshots</p>
                            <div className="pt-2 pb-3 px-4 hover:bg-black hover:text-white transition-colors duration-300 inline-block leading-none bg-gray-200 rounded-full">
                            Download ↓
                            </div>
                        </a>
                    </div>
                    ))}
           </div>
        </section>
    );
};

export default Downloads;
