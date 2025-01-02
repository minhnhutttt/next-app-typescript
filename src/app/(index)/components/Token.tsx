"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const dataChart = [
  {
    color: "#FF3217",
    name: "Settlement reserve",
    value: (
      <>
        40% <br className="md:hidden" />
        <span className="text-[#F20C3E]">(400,000,000 AIAD)</span>
      </>
    ),
  },
  {
    color: "#FF2F54",
    name: "Development and operation",
    value: (
      <>
        20% <br className="md:hidden" />
        <span className="text-[#F20C3E]">(200,000,000 AIAD)</span>
      </>
    ),
  },
  {
    color: "#FF657C",
    name: "Marketing",
    value: (
      <>
        15% <br className="md:hidden" />
        <span className="text-[#F20C3E]">(150,000,000 AIAD)</span>
      </>
    ),
  },
  {
    color: "#FF9CA9",
    name: "Ecosystem development",
    value: (
      <>
        15% <br className="md:hidden" />
        <span className="text-[#F20C3E]">(150,000,000 AIAD)</span>
      </>
    ),
  },
  {
    color: "#FFC9D0",
    name: "Strategic partners",
    value: (
      <>
        10% <br className="md:hidden" />
        <span className="text-[#F20C3E]">(100,000,000 AIAD)</span>
      </>
    ),
  },
];

const Token = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative md:mb-[100px] mb-16"
    >
      <div className="w-full max-w-[1440px] mx-auto pt-12 md:pt-[72px]">
        <div className="flex relative">
          <div className="-bottom-1 md:-bottom-2 relative">
            <img
              className="fade-up max-md:w-[300px]"
              src="/assets/images/token-sy.png"
              alt=""
            />
          </div>
          <div className="absolute inset-0 flex w-full flex-col md:pt-[156px] pt-[60px] items-center">
            <div className="fade-up flex justify-center flex-col md:gap-8 gap-5">
              <div>
                <h4 className="lg:text-[64px] md:text-[40px] text-[24px] font-bold bg-white md:px-10 px-5 inline-block">
                  Token Economics
                </h4>
              </div>
              <div>
                <h4 className="lg:text-[64px] md:text-[40px] text-[24px] font-bold bg-white md:px-10 px-5 inline-block">
                  Payment System Integration
                </h4>
              </div>
            </div>
            <div className="fade-up w-full max-w-[768px] mx-auto md:text-[16px] text-[14px] font-medium py-[50px] md:py-[70px] px-5">
              AIAD Coin is a utility token that streamlines the settlement of
              usage fees for AI advertising agent systems and enhances the
              convenience of global transactions. It provides a smooth and
              stable mechanism for settling usage fees, which are equivalent to
              3.99% of advertising expenses.
            </div>
          </div>
        </div>
        <div className="px-5">
          <div className="w-full max-w-[1360px] mx-auto md:rounded-[100px] rounded-[60px] px-5 bg-white/90 [box-shadow:0px_4px_100px_0px_rgba(0,_0,_0,_0.10)]">
            <div className="flex items-center max-lg:flex-col-reverse max-lg:gap-10 w-full max-w-[1168px] mx-auto justify-between pt-16 md:pt-[130px]">
              <div className="md:w-[605px]">
                <p className="fade-up text-center md:text-[32px] text-[20px] font-bold">
                  Token Economics
                </p>
                <p className="fade-up text-center md:text-[16px] text-[13px]">
                  Allocations are made to ensure stable operation of the
                  subscription fee settlement
                </p>
                <div className="border border-[#D0D0D0] divide-y divide-[#D0D0D0] md:mt-12 mt-8">
                  {dataChart.map((item, index) => (
                    <div
                      className="fade-up grid grid-cols-2 font-bold divide-x divide-[#D0D0D0] md:h-10"
                      key={index}
                    >
                      <p className="flex items-center md:gap-4 gap-2 xl:px-8 px-3 py-1.5">
                        <span
                          className="md:flex-[0_0_14px] flex-[0_0_10px] size-2.5 md:size-[14px]"
                          style={{ backgroundColor: item.color }}
                        ></span>
                        <span className="md:text-[16px] text-[14px] leading-none">
                          {item.name}
                        </span>
                      </p>
                      <p className="md:text-[18px] text-[13px] max-md:justify-center font-bold py-1.5 xl:px-8 px-2 max-md:text-center md:h-10 flex items-center md:whitespace-nowrap leading-none">
                        <span>{item.value}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="fade-up px-5 md:px-12">
                <img src="/assets/images/graph.png" alt="" />
              </div>
            </div>
            <div className="w-full max-w-[1140px] mx-auto flex gap-10 max-md:flex-col md:gap-[60px] mt-20 md:mt-[110px] md:pb-[106px] pb-16">
                <div className="fade-up md:w-[540px] bg-[#EDEDED] rounded-[30px] xl:px-10 px-5 xl:py-[50px] py-10">
                  <p className="text-center md:text-[24px] text-[20px] font-bold leading-none">Token Utility</p>
                  <p className="text-center md:text-[18px] text-[15px] font-medium pt-2.5 pb-4 md:pb-5 leading-none">Utility design specialized for usage fee payment</p>
                  <div className="border-t border-white pt-4 md:pt-6">
                    <ul className="list-disc pl-6 md:text-[16px] text-[13px] leading-none space-y-5">
                        <li>Payment of AI advertising agent system usage fee (3.99% of advertising cost)</li>
                        <li>Volume discount program (mass publication discount)</li>
                        <li>Early payment incentive (early discount)</li>
                        <li>Long-term holder benefits</li>
                    </ul>
                  </div>
                </div>
                <div className="fade-up md:w-[540px] bg-[#EDEDED] rounded-[30px] xl:px-10 px-5 xl:py-[50px] py-10">
                  <p className="text-center md:text-[24px] text-[20px] font-bold leading-none"> Value stabilization mechanism</p>
                  <p className="text-center md:text-[18px] text-[15px] font-medium pt-2.5 pb-4 md:pb-5 leading-none">Measures to ensure reliability as a payment currency</p>
                  <div className="border-t border-white pt-4 md:pt-6">
                    <ul className="list-disc pl-6 md:text-[16px] text-[13px] leading-none space-y-5">
                        <li>Gradual burning according to transaction volume (total volume decrease by burning currency)</li>
                        <li>Operation of price stabilization pool</li>
                        <li>Strategic management of liquidity</li>
                    </ul>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
