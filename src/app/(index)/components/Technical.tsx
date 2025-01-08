"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        image: '/assets/images/technical-ic-01.png',
        title: 'High compatibility and safety with DRC20 standard'
    },
    {
        image: '/assets/images/technical-ic-02.png',
        title: 'Automated value exchange with smart contracts'
    },
    {
        image: '/assets/images/technical-ic-03.png',
        title: 'Interoperability with other industry tokens through cross-chain collaboration'
    },
    {
        image: '/assets/images/technical-ic-04.png',
        title: 'Ensuring transparency with a distributed ledger'
    },
]

const TechnicalItem = ({ic, title}:{ic: string, title: string}) => (
    <div className="fade-up flex flex-col items-center w-[277px]">
        <span className=""><img src={ic} alt={title} /></span>
        <span className="md:text-[20px] text-[17px] text-center text-[#1B1B2E] mt-2">{title}</span>
    </div>
)

const Technical = () => {
  const ref = useScrollAnimations();
  return (
    <section
      ref={ref}
      className="relative px-5 mt-16 md:mt-[180px]"
    >
      <div className="w-full max-w-[1260px] mx-auto bg-white relative py-[25px] px-5 md:px-[30px]">
        <div className="relative py-11 max-md:pb-16">
            <span className="absolute size-16 md:size-20 bg-[url(/assets/images/technical-deco.png)] bg-cover top-0 left-0"></span>
            <span className="absolute rotate-90 size-16 md:size-20 bg-[url(/assets/images/technical-deco.png)] bg-cover top-0 right-0"></span>
            <span className="absolute rotate-180 size-16 md:size-20 bg-[url(/assets/images/technical-deco.png)] bg-cover bottom-0 right-0"></span>
            <span className="absolute -rotate-90 size-16 md:size-20 bg-[url(/assets/images/technical-deco.png)] bg-cover bottom-0 left-0"></span>
            <h3 className="text-center md:text-[96px] text-[45px] leading-[1.3] tracking-wider">Technical characteristics</h3>
            <p className="text-center md:text-[36px] text-[20px] leading-[1.3] tracking-wider">BYT Coin implements the following technical features on DIVER Chain</p>
            <div className="flex flex-wrap justify-center md:mt-[65px] mt-10 gap-5">
                {data.map((item, index) => (
                    <TechnicalItem ic={item.image} title={item.title} key={index} />
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Technical;
