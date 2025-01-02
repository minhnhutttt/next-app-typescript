"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    title: 'Efficient payment processing',
    items: [
        'Immediacy of cross-border payments',
        'low trading fees',
        'Automated payment process',
    ]
  },
  {
    title: 'Global convenience',
    items: [
        'Reducing currency fluctuation risk',
        'Payment possible 24 hours a day, 365 days a year',
        'Accessibility from around the world',
    ]
  },
  {
    title: 'Safety and transparency',
    items: [
        'Robust security system',
        'Transaction transparency with blockchain',
        'Comprehensive compliance support',
    ]
  },
]

const Conclusion = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative px-5 bg-[#FFFA99]/[0.4] md:py-[100px] py-16"
    >
      <div className="fade-up flex w-full max-w-[1134px] mx-auto max-md:flex-col">
        <div className="flex items-center lg:pr-[100px] md:pr-10 max-md:py-6">
            <p className="md:text-[64px] text-[32px] font-medium">Conclusion</p>
        </div>
        <div className="max-md:w-full max-md:h-px md:flex-[0_0_1px] bg-[linear-gradient(92deg,_#F20C3E_2.77%,_#FFF000_97.7%)]"></div>
        <div className="lg:pl-[100px] md:pl-10 md:text-[24px] text-[20px] leading-loose lg:py-[127px] md:py-20 py-6">
            AIAD Coin is a utility token specializing in payment of usage fees for AI advertising agent system, realizing more efficient payment in global advertising deployment.
        </div>
      </div>
      <div className="md:mt-[65px] mt-10 md:pb-16 pb-10">
        <p className="fade-up text-ceter md:text-[48px] text-[24px] font-medium w-full max-w-[952px] mx-auto">
        We provide the following value in payment of usage fee of 3.99% of advertising cost
        </p>
        <div className="flex flex-wrap justify-center w-full max-md:max-w-[400px] md:max-w-[1408px] mx-auto gap-[30px] md:mt-16 mt-10">
            {data.map((item, index) => (
                <div className="fade-up w-full md:w-[423px] md:pl-[90px] flex relative" key={index}>
                    <figure className="absolute top-0">
                        <img className="max-md:w-[100px]" src="/assets/images/conclusion-img.png" alt="" />
                    </figure>
                    <div className="relative pt-12 md:pt-[110px] pl-10 md:pl-[60px]">
                        <p className="md:text-[20px] text-[16px] font-medium leading-none">{item.title}</p>
                        <ul className="md:text-[14px] text-[12px] list-disc pl-6 leading-[1.1 font-medium] space-y-4 mt-5">
                            {item.items.map((text, index) => (
                                <li key={index}>{text}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
            
        </div>
      </div>
    </section>
  );
};

export default Conclusion;
