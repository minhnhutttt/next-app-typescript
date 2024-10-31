"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const featuresData = [
    {
        image: '/assets/images/feature-img-01.png',
        title: 'Token Economy',
        content: 'IPDC implements an economic model using its native token (IPDC Coin) with the following characteristics',
        items: ['Token Acquisition Mechanisms','Inclusive Participation Mode','Performance-Based Rewards','Token Utility']
    },
    {
        image: '/assets/images/feature-img-02.png',
        title: 'DAO Governance Model',
        content: 'IPDC adopts a governance model based on Decentralized Autonomous Organization (DAO) principles',
        items: ['Core Principles','Participation Mechanisms','Technical Development Management','Economic Model Management','Risk Management']
    },
    {
        image: '/assets/images/feature-img-03.png',
        title: 'Ecosystem and Participants',
        content: 'The IPDC ecosystem comprises diverse participants with the following characteristics',
        items: ['Types of Participants','Multi-Platform Support','Ecosystem Features','Growth Strategy']
    },
]

const Features = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} id="feature" className="relative pt-20 md:pt-[140px] md:pb-20 pb-[60px] overflow-hidden">
      <div className="fade-up h-[100px] md:h-[156px] bg-[url('/assets/images/about-title-line.png')] bg-[lenth:100%_100%] flex items-center gap-5">
            <div className="flex-shrink-0 flex gap-5 min-w-full animate-[scroll_30s_linear_infinite] u-transform">
                <p className="md:text-[130px] text-[70px] u-text-stroke font-semibold flex-[0_0_auto]">THE FUTURE OF DECENTRALIZED ECOSYSTEMS</p>
                <p className="md:text-[130px] text-[70px] u-text-stroke font-semibold flex-[0_0_auto]">THE FUTURE OF DECENTRALIZED ECOSYSTEMS</p>
            </div>
                <div className="flex-shrink-0 flex gap-5 min-w-full animate-[scroll_30s_linear_infinite] u-transform">
                <p className="md:text-[130px] text-[70px] u-text-stroke font-semibold flex-[0_0_auto]">THE FUTURE OF DECENTRALIZED ECOSYSTEMS</p>
                <p className="md:text-[130px] text-[70px] u-text-stroke font-semibold flex-[0_0_auto]">THE FUTURE OF DECENTRALIZED ECOSYSTEMS</p>
            </div>
        </div>
        <div className="w-full max-w-[480px] md:max-w-[1440px] mx-auto grid md:grid-cols-3 md:mt-12 mt-7">
            {featuresData.map((feature,index) =>(
                <div className="md:rounded-[60px] rounded-[40px] overflow-hidden border border-white" key={index}>
                    <figure>
                        <img src={feature.image} alt="" />
                    </figure>
                    <div className="border-t border-white md:pl-10 md:pr-[30px] px-5 md:pb-6 pb-5 md:pt-[38px] pt-7">
                        <h5 className="leading-none md:text-[32px] text-[20px]">{feature.title}</h5>
                        <p className="md:mt-[25px] mt-5 md:text-[18px] text-[15px] leading-none">{feature.content}</p>
                        <ul className="md:text-[16px] text-[14px] leading-[1.3] space-y-4 md:mt-5 mt-4">
                            {feature.items.map((item,index) => (
                                <li className="flex" key={index}>
                                    <span>●</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </section>
  );
};

export default Features;
