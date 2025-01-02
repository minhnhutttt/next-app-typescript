"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    image: '/assets/images/what-ic-01.png',
    content: (<>
      Dedicated payment token for AI advertising agent system usage fee (3.99% of advertising cost)
    </>)
  },
  {
    image: '/assets/images/what-ic-02.png',
    content: (<>
      Minimizing fees in cross-border payments
    </>)
  },
  {
    image: '/assets/images/what-ic-03.png',
    content: (<>
      Automatic usage fee calculation and payment processing using smart contract
    </>)
  },
  {
    image: '/assets/images/what-ic-04.png',
    content: (<>
      Transparent transaction records
    </>)
  },
]

const WhatIs = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden md:p-10 p-5 md:pb-[50px] bg-[url(/assets/images/what-bg.png)] bg-[size:auto_100%] bg-no-repeat bg-right-top"
    >
      <div className="w-full max-w-[1360px] mx-auto md:pt-14 pt-10 md:pb-16 pb-12">
        <div className="flex items-center w-full max-w-[1040px] mx-auto xl:gap-[94px] md:gap-16 gap-10 max-md:flex-col md:mb-[90px] mb-12">
          <p className="fade-up md:text-[32px] text-[20px] font-extrabold italic">
          What is AIAD Coin?
          </p>
          <p className="fade-up md:text-[18px] text-[15px] flex-1">
          AIAD Coin is a utility token designed for paying the system usage fee equivalent to 3.99% of advertising expenses. It eliminates inefficiencies associated with international payments, simplifies cross-border transactions, and ensures equal access to the system for all advertisers. This enables optimization of advertising costs and maximization of returns.
          </p>
        </div>
        <h5 className="fade-up text-center md:text-[40px] text-[24px] font-bold">Main features</h5>
        <div className="grid sm:grid-cols-2 justify-center xl:grid-cols-4 gap-[26px] md:mt-7 mt-5">
          {data.map((item, index) => (
            <div className="fade-up md:h-[370px] h-[330px] rounded-[20px] md:py-[60px] py-10 px-[18px] border border-black/10 bg-white/90 [box-shadow:0px_0px_33.484px_0px_rgba(38,_64,_141,_0.10)]" key={index}>
                <div className="flex justify-center">
                  <figure className="[box-shadow:-4px_-4px_4px_0px_rgba(255,_250,_153,_0.40),_4px_4px_20px_0px_rgba(255,_159,_153,_0.40)] rounded-[40px]">
                    <img src={item.image} alt="" />
                  </figure>
                </div>
                <p className="px-5 mt-4">
                  {item.content}
                </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIs;
