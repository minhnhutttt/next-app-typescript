"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Download = () => {
    const ref = useScrollAnimations();
    
    return (
        <section ref={ref} id="support" className="relative md:px-10 px-5 md:pt-[156px] pt-[70px] overflow-hidden">
            <div className="w-full max-w-[1308px] mx-auto">
                <div className="flex items-center gap-10 max-xl:flex-col">
                    <div className="flex-1">
                        <h4 className="fade-up md:text-[48px] text-[28px] font-bold">
                        Download MERCURY VAULT on your mobile
                        </h4>
                        <div className="flex md:gap-[60px] gap-6 md:mt-14 mt-10 max-xl:justify-center">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/btn-app2.png" alt="" /></a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/images/btn-google2.png" alt="" /></a>
                        </div>
                    </div>
                    <div className="">
                        <div className="relative">
                            <img className="animate-[spin_10s_linear_infinite]" src="/assets/images/circle-2.svg" alt="" />
                            <img className="absolute inset-0 animate-[spin_10s_linear_reverse_infinite]" src="/assets/images/circle-1.svg" alt="" />
                            <img className="absolute max-md:w-[40%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" src="/assets/images/download-phone.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default Download;
