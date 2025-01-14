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
          <div className=" flex w-full flex-col md:pt-[156px] pt-[60px] items-center">
            <div className="fade-up flex justify-center flex-col md:gap-8 gap-5">
              <div>
                <h4 className="lg:text-[64px] md:text-[40px] text-[24px] font-bold bg-white md:px-10 px-5 inline-block">
                  Payment System Integration
                </h4>
              </div>
            </div>
            <div className="fade-up w-full max-w-[768px] mx-auto md:text-[16px] text-[14px] font-medium py-5 md:py-10 px-5">
              AIAD Coin is a utility token that streamlines the settlement of
              usage fees for AI advertising agent systems and enhances the
              convenience of global transactions. It provides a smooth and
              stable mechanism for settling usage fees, which are equivalent to
              3.99% of advertising expenses.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
