"use client";

import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const UseCase = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:mt-[200px] mt-[110px]">
    <Title sub="UseCase">
        使用事例
    </Title>
    <div className="bg-black py-4 md:mt-16">
        <div className="container2 flex items-center justify-center mx-[5vmin] overflow-hidden skew-x-[3deg]">
            <div className="group card hover:flex-grow-[10] flex-1 [transition:all_1s_ease-in-out] h-[75vmin] relative">
                <img className="w-full h-full object-cover [transition:all_1s_ease-in-out] filter grayscale-[100%] filter group-hover:grayscale-0" src="/assets/images/case-01.jpg" />
                <div className="group-hover:text-center group-hover:top-[calc(100% - 60px)] group-hover:w-full group-hover:text-[white] group-hover:rotate-0 group-hover:-skew-x-3 min-w-[320px] w-full h-[60px] bg-[rgba(13,_10,_142,_0.8)] -rotate-90 origin-[0%_0%] [transition:all_0.5s_ease-in-out] text-center absolute bottom-[0] left-[0] whitespace-nowrap flex items-center justify-center">
                    <img className="rotate-90" src="/assets/images/case-txt-01.png" alt="" />
                </div>
            </div>
            <div className="group card hover:flex-grow-[10] flex-1 [transition:all_1s_ease-in-out] h-[75vmin] relative">
                <img className="w-full h-full object-cover [transition:all_1s_ease-in-out] filter grayscale-[100%] filter group-hover:grayscale-0" src="/assets/images/case-01.jpg" />
                <div className="group-hover:text-center group-hover:top-[calc(100% - 60px)] group-hover:w-full group-hover:text-[white] group-hover:rotate-0 group-hover:-skew-x-3 min-w-[320px] w-full h-[60px] bg-[rgba(13,_10,_142,_0.8)] -rotate-90 origin-[0%_0%] [transition:all_0.5s_ease-in-out] text-center absolute bottom-[0] left-[0] whitespace-nowrap flex items-center justify-center">
                    <img className="rotate-90" src="/assets/images/case-txt-01.png" alt="" />
                </div>
            </div>
            <div className="group card hover:flex-grow-[10] flex-1 [transition:all_1s_ease-in-out] h-[75vmin] relative">
                <img className="w-full h-full object-cover [transition:all_1s_ease-in-out] filter grayscale-[100%] filter group-hover:grayscale-0" src="/assets/images/case-01.jpg" />
                <div className="group-hover:text-center group-hover:top-[calc(100% - 60px)] group-hover:w-full group-hover:text-[white] group-hover:rotate-0 group-hover:-skew-x-3 min-w-[320px] w-full h-[60px] bg-[rgba(13,_10,_142,_0.8)] -rotate-90 origin-[0%_0%] [transition:all_0.5s_ease-in-out] text-center absolute bottom-[0] left-[0] whitespace-nowrap flex items-center justify-center">
                    <img className="rotate-90" src="/assets/images/case-txt-01.png" alt="" />
                </div>
            </div>
            <div className="group card hover:flex-grow-[10] flex-1 [transition:all_1s_ease-in-out] h-[75vmin] relative">
                <img className="w-full h-full object-cover [transition:all_1s_ease-in-out] filter grayscale-[100%] filter group-hover:grayscale-0" src="/assets/images/case-01.jpg" />
                <div className="group-hover:text-center group-hover:top-[calc(100% - 60px)] group-hover:w-full group-hover:text-[white] group-hover:rotate-0 group-hover:-skew-x-3 min-w-[320px] w-full h-[60px] bg-[rgba(13,_10,_142,_0.8)] -rotate-90 origin-[0%_0%] [transition:all_0.5s_ease-in-out] text-center absolute bottom-[0] left-[0] whitespace-nowrap flex items-center justify-center">
                    <img className="rotate-90" src="/assets/images/case-txt-01.png" alt="" />
                </div>
            </div>
            <div className="group card hover:flex-grow-[10] flex-1 [transition:all_1s_ease-in-out] h-[75vmin] relative">
                <img className="w-full h-full object-cover [transition:all_1s_ease-in-out] filter grayscale-[100%] filter group-hover:grayscale-0" src="/assets/images/case-01.jpg" />
                <div className="group-hover:text-center group-hover:top-[calc(100% - 60px)] group-hover:w-full group-hover:text-[white] group-hover:rotate-0 group-hover:-skew-x-3 min-w-[320px] w-full h-[60px] bg-[rgba(13,_10,_142,_0.8)] -rotate-90 origin-[0%_0%] [transition:all_0.5s_ease-in-out] text-center absolute bottom-[0] left-[0] whitespace-nowrap flex items-center justify-center">
                    <img className="rotate-90" src="/assets/images/case-txt-01.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    </section>
  );
};

export default UseCase;
