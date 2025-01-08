"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const SolutionValue = ({ic, title, items}:{ic: string, title: string, items: string[]}) => (
    <div className="fade-up flex flex-col items-center md:w-[320px]">
        <span className=""><img src={ic} alt={title} /></span>
        <span className="md:text-[24px] text-[18px] text-center text-[#1B1B2E] mt-2">{title}</span>
        <ul className="list-disc pl-6 md:text-[14px] text-[12px] leading-[1.6] mt-3">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
)

const SolutionExpansion  = ({image, title}:{image: string, title: string}) => (
    <div className="fade-up flex flex-col items-center w-[380px]">
        <span className=""><img src={image} alt={title} /></span>
        <span className="md:text-[20px] text-[17px] text-[#1B1B2E] mt-5 md:mt-8">{title}</span>
       
    </div>
)

const Solution = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative px-5 mt-16 md:mt-[110px]"
    >
      <div className="w-full max-w-[1260px] mx-auto">
        <div className="fade-up flex justify-center flex-col items-center text-center leading-[1.3]">
            <span><img src="/assets/images/title-ic.svg" alt="" /></span>
            <span className="md:text-[96px] text-[40px] tracking-[0.05em] mt-6">BYT Coin Solution</span>
            <span className="md:text-[48px] text-[28px] tracking-[0.05em]">Chain circulation platform</span>
        </div>
        <p className="fade-up w-full max-w-[778px] mx-auto md:text-[22px] text-[16px] mt-6 md:mt-9 tracking-wider">
        BYT Coin is implemented as a DRC20 standard token on DIVER Chain and has an automatic execution function using smart contracts. Token allocation will be 92% for IDOs on the DEX and 8% for development and operation pools to ensure market liquidity and sustainable development.
        </p>
        <div className="w-full max-w-[1020px] mx-auto mt-14 md:mt-24">
            <p className="fade-up text-center md:text-[36px] text-[24px] italic tracking-[0.07em]">
                Chain value exchange system
            </p>
            <p className="fade-up text-center md:text-[18px] text-[15px] italic mt-2 tracking-[0.07em]">BYT Coin enables chain value exchange starting from beauty experiences</p>
            <div className="flex flex-wrap justify-center md:mt-10 mt-8 gap-5 md:gap-[30px]">
                <SolutionValue 
                    ic="/assets/images/solution-ic-01.svg" 
                    title="beauty block"
                    items={[
                        'Use of services at hair salons',
                        'Treatments at beauty salons and eyelash salons',
                        'Exchange for professional beauty products',
                        'Purchase customized hair care products',
                    ]}
                />
                <SolutionValue 
                    ic="/assets/images/solution-ic-02.svg" 
                    title="Nail & body care block"
                    items={[
                        'Reservation for treatment at nail salon',
                        'Use of body care services',
                        'Exchange for professional nail products',
                        'Get personalized care products',
                    ]}
                />
                <SolutionValue 
                    ic="/assets/images/solution-ic-03.svg" 
                    title="fashion block"
                    items={[
                        'Coordination consultation by stylist',
                        'Private shopping reservation',
                        'Advance purchase rights for limited items',
                        'Request for production of custom order items',
                    ]}
                />
            </div>
        </div>
        <div className="w-full max-w-[1240px] mx-auto mt-16 md:mt-[105px]">
            <p className="fade-up text-center md:text-[36px] text-[24px] italic tracking-[0.07em]">
            Cross-industry expansion
            </p>
            <p className="fade-up text-center md:text-[18px] text-[15px] italic mt-2 tracking-[0.07em]">BYT Coin value exchange is not limited to beauty-related industries</p>
            <div className="flex flex-wrap justify-center md:mt-10 mt-8 gap-8 md:gap-10">
                <SolutionExpansion image="/assets/images/solution-img-01.png" title="Mutual exchange with other industry-specific coins (food coins, etc.)" />
                <SolutionExpansion image="/assets/images/solution-img-02.png" title="Collaboration with services from other industries (cafes, restaurants, fitness, etc.)" />
                <SolutionExpansion image="/assets/images/solution-img-03.png" title="Delivering a seamless experience across your lifestyle" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
