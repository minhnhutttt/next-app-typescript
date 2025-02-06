"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});
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
    const animationRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".panel");
      const sliderContainer = sliderRef.current;
      const container = containerRef.current;
  
      if (!sliderContainer || !container) return;
  
      const panelWidths = panels.map((panel, index) => -panel.offsetWidth * index);
  
      panels.forEach((panel, index) => {
        gsap.set(panel, {left: panelWidths[index] + "px" });
      });
  
      const endValue = () => "+=" + sliderContainer.offsetWidth;
  
      gsap.to(panels, {
        left: 0,
        scrollTrigger: {
          trigger: animationRef.current,
          start: "top top",
        },
      });
  
      gsap.to(panels, {
        x: -sliderContainer.offsetWidth + window.innerWidth,
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "center center",
          end: endValue,
        },
      });
    }, containerRef);
  
    return () => ctx.revert();
  }, []);
  return (
    <section ref={animationRef}  id="feature" className="relative pt-20 md:pt-[140px] md:pb-20 pb-[60px] w-screen overflow-hidden z-50">
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
        <div ref={containerRef} className="flex items-center md:mt-12 mt-7">
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex items-center w-[calc(((320px_*_5)_+_(4vw_*_4))_+_41vw)] gap-[4vw] md:w-[calc(((480px_*_5)_+_(3vw_*_4))_+_80vw)] mx-[10vw] md:gap-[3vw] my-[7rem] md:max-h-[calc(100vh-10rem)] max-md:h-[495px] md:h-[640px] max-h-[calc(100vh-8rem)]">
            {featuresData.map((feature, index) => (
                <div className="panel !w-[320px] md:!w-[480px] h-full relative overflow-hidden md:rounded-[60px] rounded-[40px] border border-white" key={index}>
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
        </div>
      </div>
    </section>
  );
};

export default Features;
