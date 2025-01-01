"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const dataChart = [
    {
        color: '#FF3217',
        name: 'Settlement reserve',
        value: (<>
            40% <span className="text-[#F20C3E]">(400,000,000 AIAD)</span>
        </>)
    },
    {
        color: '#FF2F54',
        name: 'Development and operation',
        value: (<>
            20% <span className="text-[#F20C3E]">(200,000,000 AIAD)</span>
        </>)
    },
    {
        color: '#FF3217',
        name: 'Settlement reserve',
        value: (<>
            40% <span className="text-[#F20C3E]">(400,000,000 AIAD)</span>
        </>)
    },
    {
        color: '#FF3217',
        name: 'Settlement reserve',
        value: (<>
            40% <span className="text-[#F20C3E]">(400,000,000 AIAD)</span>
        </>)
    },
    {
        color: '#FF3217',
        name: 'Settlement reserve',
        value: (<>
            40% <span className="text-[#F20C3E]">(400,000,000 AIAD)</span>
        </>)
    },
]

const Token = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[url(/assets/images/token-bg.png)] bg-cover bg-center"
    >
      <div className="w-full max-w-[1440px] mx-auto md:pt-[80px]">
        <div className="flex relative">
            <div className="">
                <img src="/assets/images/token-sy.png" alt="" />
            </div>
            <div className="absolute inset-0 flex w-full flex-col md:pt-[156px] pt-[100px] items-center">
                <div className="flex justify-center flex-col md:gap-8 gap-5">
                    <div>
                        <h4 className="md:text-[64px] text-[36px] font-bold bg-white md:px-10 px-5 inline-block">Token Economics</h4>
                    </div>
                    <div>
                    <h4 className="md:text-[64px] text-[36px] font-bold bg-white md:px-10 px-5 inline-block">Payment System Integration</h4>
                    </div>
                </div>
                <div className="w-full max-w-[728px] mx-auto md:text-[16px] text-[13px] font-medium md:py-[70px]">
                AIAD Coin is a utility token that streamlines the settlement of usage fees for AI advertising agent systems and enhances the convenience of global transactions. It provides a smooth and stable mechanism for settling usage fees, which are equivalent to 3.99% of advertising expenses.
                </div>
            </div>
        </div>
        <div className="w-full max-w-[1360px] mx-auto md:rounded-[100px] rounded-[60px] bg-white/90 [box-shadow:0px_4px_100px_0px_rgba(0,_0,_0,_0.10)]">
        <div className="flex items-center">
            <div className="md:w-[605px]">
                <p className="text-center md:text-[32px] text-[20px] font-bold">Token Economics</p>
                <p className="text-center md:text-[16px] text-[13px]">Allocations are made to ensure stable operation of the subscription fee settlement</p>
                <div className="">
                    <div className="flex">
                        <p className="flex">
                            <span className=""></span>
                            <span className="">Settlement reserve</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="">
                <img src="/assets/images/graph.png" alt="" />
            </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
