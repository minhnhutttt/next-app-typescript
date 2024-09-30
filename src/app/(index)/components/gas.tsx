"use client";

import ButtonWhitePaper from "@/components/buttonWhitePaper";

const Gas = () => {
  return (
    <section className="bg-[linear-gradient(180deg,_#120E18_-4.01%,_#3D14B0_74.98%)] overflow-hidden [clip-path:polygon(0_0,_100%_0,_100%_calc(100%-130px),_0%_100%)]">
        <div className="bg-[url('/assets/images/gas-bg.png')] bg-[length:100%_auto] bg-no-repeat bg-bottom px-5 ">
            <div className="w-full md:max-w-[1060px] max-w-[440px] mx-auto md:pt-[175px] pt-[115px] md:pb-[120px] pb-[160px]">
                <div className="relative flex justify-center items-center">
                    <img className="max-md:w-[100px]" src="/assets/images/logo-2.svg" alt="" />
                    <h3 className="absolute text-center text-white md:text-[58px] text-[32px] font-black tracking-[0.22em]">
                        Why is DwETH Necessary?
                    </h3>
                </div>
                <div className="flex gap-5 md:gap-16 md:mt-[46px] mt-8 max-md:items-center max-md:flex-col">
                    <figure className="max-md:w-full max-lg:w-1/3">
                        <img className="max-md:max-w-[300px]" src="/assets/images/zero-gas-fees.png" alt="" />
                    </figure>
                    <div className="flex-1 md:pt-10">
                        <p className="font-medium md:text-[18px] text-[16px] w-full max-w-[480px] leading-loose tracking-[0.1em] mb-8 md:mb-12">
                        While ETH is the native currency of the Ethereum network, it cannot be directly used on other blockchains. DwETH serves as a token that makes ETH usable on the DIVER Chain, bringing ETH the benefits of DIVER such as completely free transaction fees and fast processing times. It plays a crucial role in the expanding DeFi ecosystem.
                        </p>
                        <ButtonWhitePaper />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Gas;
