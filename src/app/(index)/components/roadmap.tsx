"use client";

const Roadmap = () => {
  return (
    <section className="relative bg-[url('/assets/images/roadmap-bg.png')] bg-cover">
        <div className="w-full max-w-[1200px] mx-auto pt-[195px] md:pb-[180px] pb-[100px]">
            <h3 className="text-center text-black md:text-[58px] text-[32px] font-bold tracking-wider">
            Roadmap and Future Developments
            </h3>
            <div className="w-full max-w-[1126px] mx-auto flex md:mt-[90px] mt-[50px] relative">
                <span className="absolute w-full top-1/2 -translate-y-1/2">
                    <img src="/assets/images/roadmap-gradient.png" alt="" />
                </span>
                <div className="w-1/3 flex flex-col relative">
                    <p className="h-[128px] flex items-end justify-center text-center md:text-[48px] text-[32px] font-bold text-black pb-2">01</p>
                    <p className="h-[145px] flex items-center justify-center md:text-[20px] text-[16px] text-black font-bold">
                        Initial Deployment
                    </p>
                    <div className="h-[128px] flex items-center justify-center md:text-[15px] text-[13px] font-bold text-[#6E6E6E]">
                        <p className="max-w-[300px]">Unlocking Ethereum&apos;s Value Across Chains: DwETH&apos;s Seamless DeFi Integration</p>
                    </div>
                    <span className="absolute right-[-30px]">
                        <img src="/assets/images/roadmap-img.png" alt="" />
                    </span>
                </div>
                <div className="w-1/3 flex flex-col relative">
                    <p className="h-[128px] flex items-end justify-center text-center md:text-[48px] text-[32px] font-bold text-black pb-2">01</p>
                    <p className="h-[145px] flex items-center justify-center md:text-[20px] text-[16px] text-black font-bold">
                        Initial Deployment
                    </p>
                    <div className="h-[128px] flex items-center justify-center md:text-[15px] text-[13px] font-bold text-[#6E6E6E]">
                        <p className="max-w-[300px]">Unlocking Ethereum&apos;s Value Across Chains: DwETH&apos;s Seamless DeFi Integration</p>
                    </div>
                    <span className="absolute right-[-20px]">
                        <img src="/assets/images/roadmap-img.png" alt="" />
                    </span>
                </div>
                <div className="w-1/3 flex flex-col relative">
                    <p className="h-[128px] flex items-end justify-center text-center md:text-[48px] text-[32px] font-bold text-black pb-2">01</p>
                    <p className="h-[145px] flex items-center justify-center md:text-[20px] text-[16px] text-black font-bold">
                        Initial Deployment
                    </p>
                    <div className="h-[128px] flex items-center justify-center md:text-[15px] text-[13px] font-bold text-[#6E6E6E]">
                        <p className="max-w-[300px]">Unlocking Ethereum&apos;s Value Across Chains: DwETH&apos;s Seamless DeFi Integration</p>
                    </div>
                    <span className="absolute right-[0]">
                        <img src="/assets/images/roadmap-img.png" alt="" />
                    </span>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Roadmap;
