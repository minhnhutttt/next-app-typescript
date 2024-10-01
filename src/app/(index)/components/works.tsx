"use client";

import ButtonWhitePaper from "@/components/buttonWhitePaper";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useState } from "react";

const Works = () => {
    const ref = useScrollAnimations();
    const [tab, setTab] = useState<number | null>(1);

    const handleToggle = (index: number) => {
        setTab(tab === index ? 1 : index);
    };
  return (
    <section ref={ref} className="relative bg-[url('/assets/images/works-bg.png')] pt-16 md:pt-[95px] md:pb-[280px] pb-[140px] md:[clip-path:polygon(0_0,_100%_0,_100%_100%,_0_calc(100%-150px))] [clip-path:polygon(0_0,_100%_0,_100%_100%,_0_calc(100%-80px))]">
        <div className="px-5">
            <h3 className="fade-up text-center u-text-gradient bg-clip-text md:text-[58px] text-[32px] font-black tracking-[0.22em]">
                How DwETH Works
            </h3>
            <div className="fade-up w-full max-w-[1300px] mx-auto mt-14 md:mt-[70px]">
                <div className="flex md:gap-5 gap-3">
                    <button onClick={() => handleToggle(1)} className={`max-md:w-1/2 flex justify-center items-center gap-2.5 border-4 border-[#040444] md:text-[24px] text-[16px] font-black px-3 md:px-[60px] h-[64px] md:h-[84px] tracking-wide ${tab === 1 ? 'bg-[linear-gradient(140deg,_#040444_15.67%,_#0D1054_38.25%,_#101764_55.35%,_#131D74_68.35%,_#15206B_84.08%)] text-white' : 'text-[#F90000]'}`}>
                        <span>DwETH issuance</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`${tab === 1 ? 'fill-white' : 'fill-[#F90000]'}`} width="16" height="12" viewBox="0 0 16 12" fill="none">
                            <path d="M7.18912 10.8764C7.58825 11.4295 8.41175 11.4295 8.81088 10.8764L15.5162 1.58521C15.9935 0.923842 15.521 0 14.7053 0H1.29465C0.479046 0 0.00647068 0.923841 0.483769 1.58521L7.18912 10.8764Z"/>
                        </svg>
                    </button>
                    <button onClick={() => handleToggle(2)} className={`max-md:w-1/2 flex justify-center items-center gap-2.5 border-4 border-[#040444] md:text-[24px] text-[16px] font-black px-3 md:px-[60px] h-[64px] md:h-[84px] tracking-wide ${tab === 2 ? 'bg-[linear-gradient(140deg,_#040444_15.67%,_#0D1054_38.25%,_#101764_55.35%,_#131D74_68.35%,_#15206B_84.08%)] text-white' : 'text-[#F90000]'}`}>
                        <span>DwETH Redemption</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className={`${tab === 2 ? 'fill-white' : 'fill-[#F90000]'}`} width="16" height="12" viewBox="0 0 16 12" fill="none">
                            <path d="M7.18912 10.8764C7.58825 11.4295 8.41175 11.4295 8.81088 10.8764L15.5162 1.58521C15.9935 0.923842 15.521 0 14.7053 0H1.29465C0.479046 0 0.00647068 0.923841 0.483769 1.58521L7.18912 10.8764Z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        
        <div className="fade-up w-full max-w-[1440px] mx-auto border-[6px] border-[#040444] bg-white/70 px-5 pt-10 md:pt-[65px] md:pb-[76px] pb-[50px]">
                <div className="w-full max-w-[1274px] mx-auto">
                    {tab === 1 &&
                        <div>
                            <div className="flex justify-center">
                                <div className="text-[#1E1E1E]">
                                    <p className="md:text-[18px] text-[16px] font-bold">DwETH issuance process</p>
                                    <div className="md:text-[16px] text-[14px] mt-3">
                                        <span className="font-bold">[Step 1]</span> User sends ETH to a designated smart contract address on the Ethereum network. <br />
                                        <span className="font-bold">[Step 2]</span> Smart contract locks ETH and relays the information to DIVER Chain.<br />
                                        <span className="font-bold">[Step 3]</span> DwETH is issued on DIVER Chain at a 1:1 ratio for locked ETH.
                                    </div>
                                </div>
                            </div>
                            <div className="mt-7 md:mt-12">
                                <img src="/assets/images/works-01.png" alt="" />
                            </div>
                        </div>
                    }
                    {tab === 2 &&
                        <div>
                            <div className="flex justify-center">
                                <div className="text-[#1E1E1E]">
                                    <p className="md:text-[18px] text-[16px] font-bold">DwETH redemption process</p>
                                    <div className="md:text-[16px] text-[14px] mt-3">
                                        <span className="font-bold">[Step 1]</span> User sends DwETH to the DwETH contract address on DIVER Chain, then the smart contract burns the DwETH. <br />
                                        <span className="font-bold">[Step 2]</span> The burn transaction is confirmed and the information is sent to the Ethereum network.<br />
                                        <span className="font-bold">[Step 3]</span> The locked ETH is sent to the user’s Ethereum address.
                                    </div>
                                </div>
                            </div>
                            <div className="mt-7 md:mt-12">
                                <img src="/assets/images/works-02.png" alt="" />
                            </div>
                        </div>
                    }
                </div>
            </div>
    </section>
  );
};

export default Works;
