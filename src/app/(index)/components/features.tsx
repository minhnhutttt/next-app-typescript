"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Features = () => {
    const ref = useScrollAnimations();
  return (
    <section ref={ref} className="mt-8 bg-[linear-gradient(160deg,_#32BCFE_7.72%,_#2AB1FF_20.66%,_#28A7FE_31.36%,_#2594F7_45.44%,_#2379E7_64.01%)] md:[clip-path:polygon(0_0,_100%_130px,_100%_100%,_0%_100%)] [clip-path:polygon(0_0,_100%_70px,_100%_100%,_0%_100%)] px-5 overflow-hidden">
        <div className="w-full max-w-[1080px] mx-auto pt-[225px] md:pb-[180px] pb-[100px]">
            <h3 className="fade-up text-center text-white md:text-[58px] text-[32px] font-black tracking-[0.22em]">
            PURPOSE AND FEATURES
            </h3>
            <div className="mt-[82px] space-y-[60px]">
                <div className="fade-up relative rounded-[20px] border border-[#2379E7] bg-white/20 [box-shadow:0px_0px_40px_0px_rgba(38,_64,_141,_0.10)] pt-[96px] pb-[112px] px-5">
                    <div className="absolute top-[-70px] md:top-[-280px] md:left-[-140px] left-[-40px] z-[-1]">
                        <img className="max-md:w-[160px]" src="/assets/images/feature-img-01.png" alt="" />
                    </div>
                    <div className="w-full max-w-[900px] mx-auto relative">
                        <h5 className="text-center md:text-[24px] text-[18px] font-black tracking-widest pb-10 border-b border-white"> Purpose of DwETH</h5>
                        <p className="md:text-[18px] text-[16px] leading-[1.8] tracking-[0.2em] mt-[40px]">
                        DIVER Wrapped ETH (DwETH) is a DRC20 token operating on the DIVER Chain, maintaining a 1:1 value ratio with Ethereum (ETH). This whitepaper provides a detailed explanation of DwETH&apos;s mechanism, advantages, security, and governance.
                        </p>
                    </div>
                </div>
                <div className="fade-up relative rounded-[20px] border border-[#2379E7] bg-white/20 [box-shadow:0px_0px_40px_0px_rgba(38,_64,_141,_0.10)] pt-[100px] pb-[90px] px-5">
                    <div className="absolute md:top-[-150px] top-[-50px] md:right-[-170px] right-[-60px] z-[-1]">
                        <img className="fade-up max-md:w-[160px]" src="/assets/images/feature-img-02.png" alt="" />
                    </div>
                    <div className="absolute bottom-[-60px] md:bottom-[-120px] md:left-[-180px] left-[-40px] z-[-1]">
                        <img className="fade-up max-md:w-[140px]" src="/assets/images/feature-img-03.png" alt="" />
                    </div>
                    <div className="w-full max-w-[900px] mx-auto relative">
                        <h5 className="text-center md:text-[24px] text-[18px] font-black tracking-widest pb-10 border-b border-white"> Key Features of DwETH</h5>
                        <div className="mt-[60px] w-full max-w-[800px] mx-auto">
                            <table className="border-collapse w-full md:text-[16px] text-[13px] [&_tr]:h-[60px] [&_td+td]:border-l md:[&_td]:px-5 [&_td]:px-3 [&_td]:py-2 [&_tr]:border-white [&_tr]:border">
                                <tbody>
                                    <tr>
                                        <td>1:1 ETH Backing</td>
                                        <td>Each DwETH is backed 1:1 by ETH</td>
                                    </tr>
                                    <tr>
                                        <td>Rapid Transactions</td>
                                        <td>Swift transactions enabled by DIVER Chain&apos;s high-performance processing capability</td>
                                    </tr>
                                    <tr>
                                        <td>Complete Elimination of Transaction Fees</td>
                                        <td>No gas fees required for transactions on DIVER Chain</td>
                                    </tr>
                                    <tr>
                                        <td>Cross-chain Compatibility</td>
                                        <td>Easy asset transfer between Ethereum and DIVER Chain</td>
                                    </tr>
                                    <tr>
                                        <td>Transparency</td>
                                        <td>All transactions and balances are public and auditable</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Features;
