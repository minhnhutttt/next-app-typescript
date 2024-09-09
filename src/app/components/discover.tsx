"use client";
import Title from "@/components/title";
import useScrollAnimations from "@/hooks/useScrollAnimations";


const Discover = () => {
  const ref = useScrollAnimations();
  return (
    <section
    id="token"
      ref={ref}
      className="relative px-8 pt-10 pb-8 md:py-[60px] md:bg-[url('/assets/images/discover-bg.png')] bg-[url('/assets/images/discover-bg-sp.png')] bg-top bg-cover"
    >
      <div className="w-full md:max-w-[1100px] max-w-[475px] mx-auto flex max-md:flex-col items-center justify-center">
        <div className="flex-1">
            <Title left>
            EXO Coin & DAO
            </Title>
            <p className="fade-up font-roboto text-[16px] mt-6 text-white">Discover the role of EXO token and decentralized governance</p>
        </div>
        <div className="flex-1 md:space-y-10 space-y-7 max-md:mt-10">
            <div className="flex justify-center py-3 md:h-[228px]">
                <div className="fade-up w-[240px] h-[204px] py-3 flex flex-col items-center justify-center">
                    <figure>
                        <img src="/assets/images/discover-icon-01.svg" alt="What is EXO Coin?" />
                    </figure>
                    <div className="text-center space-y-2 mt-5">
                        <h5 className="text-[#00F4AE] leading-[1.4] text-[20px] font-medium">What is EXO Coin?</h5>
                        <p className="text-white text-[16px]">Governance, Fundraising, Incentives</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center max-md:flex-col md:h-[228px] max-md:space-y-4">
                <div className="fade-up w-[240px] h-[204px] py-3 flex flex-col items-center justify-center">
                    <figure>
                        <img src="/assets/images/discover-icon-02.svg" alt="DAO Governance" />
                    </figure>
                    <div className="text-center space-y-2 mt-5">
                        <h5 className="text-[#00F4AE] leading-[1.4] text-[20px] font-medium">DAO Governance</h5>
                        <p className="text-white text-[16px]">Decentralized decision-making</p>
                    </div>
                </div>
                <div className="fade-up w-[240px] h-[204px] py-3 flex flex-col items-center justify-center">
                    <figure>
                        <img src="/assets/images/discover-icon-03.svg" alt="Ecosystem" />
                    </figure>
                    <div className="text-center space-y-2 mt-5">
                        <h5 className="text-[#00F4AE] leading-[1.4] text-[20px] font-medium">Ecosystem</h5>
                        <p className="text-white text-[16px]">Growing partnerships</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
