"use client";

import ButtonWhitePaper from "@/components/buttonWhitePaper";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Roadmap = () => {
    const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative bg-[url('/assets/images/roadmap-bg.png')] bg-cover">
        <div className="w-full md:max-w-[1200px] max-w-[400px] mx-auto pt-[100px] md:pt-[195px] md:pb-[130px] pb-[80px]">
            <h3 className="fade-up text-center text-black md:text-[58px] text-[32px] font-bold tracking-wider">
            Roadmap and Future Developments
            </h3>
            <div className="fade-up w-full max-w-[1126px] mx-auto flex md:mt-[90px] mt-[50px] relative max-md:flex-col max-md:gap-4">
                <span className="max-md:hidden absolute w-full top-1/2 -translate-y-1/2">
                    <img src="/assets/images/roadmap-gradient.png" alt="" />
                </span>
                <div className="w-full md:w-1/3 flex flex-col relative">
                    <p className="md:h-[128px] flex items-end justify-center text-center md:text-[48px] text-[32px] font-bold text-black pb-2">01</p>
                    <p className="h-[80px] md:h-[145px] max-md:bg-[linear-gradient(140deg,_rgba(35,_121,_231,_0.50)_1.97%,_rgba(37,_148,_247,_0.50)_33.67%,_rgba(40,_167,_254,_0.50)_57.69%,_rgba(42,_177,_255,_0.50)_75.94%,_rgba(50,_188,_254,_0.50)_98.03%)] flex items-center justify-center md:text-[20px] text-[16px] text-black font-bold">
                        Initial Deployment
                    </p>
                    <div className="md:h-[128px] max-md:mt-5 flex items-center justify-center md:text-[15px] text-[13px] font-bold text-[#6E6E6E]">
                        <p className="max-w-[240px]">Unlocking Ethereum&apos;s Value Across Chains: DwETH&apos;s Seamless DeFi Integration</p>
                    </div>
                    <span className="md:absolute max-md:flex justify-center max-md:mt-4 right-[-30px]">
                        <img className="max-md:hidden" src="/assets/images/roadmap-img.png" alt="" />
                        <img className="md:hidden" src="/assets/images/roadmap-img-sp.png" alt="" />
                    </span>
                </div>
                <div className="w-full md:w-1/3 flex flex-col relative">
                    <p className="md:h-[128px] flex items-end justify-center text-center md:text-[48px] text-[32px] font-bold text-black pb-2">02</p>
                    <p className="h-[80px] md:h-[145px] max-md:bg-[linear-gradient(140deg,_rgba(35,_121,_231,_0.70)_1.59%,_rgba(37,_148,_247,_0.70)_33.42%,_rgba(40,_167,_254,_0.70)_57.52%,_rgba(42,_177,_255,_0.70)_75.85%,_rgba(50,_188,_254,_0.70)_98.03%)] flex items-center justify-center md:text-[20px] text-[16px] text-black font-bold">
                    Expansion of Use Cases
                    </p>
                    <div className="md:h-[128px] max-md:mt-5 flex items-center justify-center md:text-[15px] text-[13px] font-bold text-[#6E6E6E]">
                        <p className="max-w-[240px]">Expanding DwETH with Enhanced dApp Integration and Cross-Chain Growth</p>
                    </div>
                    <span className="md:absolute max-md:flex justify-center max-md:mt-4 right-[-20px]">
                        <img className="max-md:hidden" src="/assets/images/roadmap-img.png" alt="" />
                        <img className="md:hidden" src="/assets/images/roadmap-img-sp.png" alt="" />
                    </span>
                </div>
                <div className="w-full md:w-1/3 flex flex-col relative">
                    <p className="md:h-[128px] flex items-end justify-center text-center md:text-[48px] text-[32px] font-bold text-black pb-2">03</p>
                    <p className="h-[80px] md:h-[145px] max-md:bg-[linear-gradient(140deg,_#2379E7_1.59%,_#2594F7_33.42%,_#28A7FE_57.52%,_#2AB1FF_75.85%,_#32BCFE_98.03%)] flex items-center justify-center md:text-[20px] text-[16px] text-black font-bold md:mr-16">
                    Collaboration with <br />the Community
                    </p>
                    <div className="md:h-[128px] max-md:mt-5 flex items-center justify-center md:text-[15px] text-[13px] font-bold text-[#6E6E6E]">
                        <p className="max-w-[240px] md:mr-16">Collaborating with the DIVER Chain Community for Continuous DwETH Improvement and Innovation</p>
                    </div>
                    <span className="md:absolute max-md:flex justify-center max-md:mt-4 right-0">
                        <img className="max-md:hidden" src="/assets/images/roadmap-img.png" alt="" />
                        <img className="md:hidden" src="/assets/images/roadmap-img-sp.png" alt="" />
                    </span>
                </div>
            </div>
            <div className="fade-up flex justify-center mt-16 md:mt-[90px]">
                <ButtonWhitePaper />
            </div>
        </div>
    </section>
  );
};

export default Roadmap;
