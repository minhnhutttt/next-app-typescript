"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Phase = ({phase, date, title, text, items} : {phase: string, date: string, title: string,text: string,items: string[]}) => (
    <div className="fade-up flex items-center md:gap-[60px] gap-8 leading-none py-3 max-md:flex-col max-md:pr-4">
        <div className="max-md:text-center">
            <p className="md:text-[24px] text-[20px] font-medium mb-4">Phase {phase}</p>
            <p className="md:text-[16px] text-[13px] font-medium">{date}</p>
        </div>
        <div className="">
            <p className="md:text-[24px] text-[20px] font-bold">{title}</p>
            <p className="md:text-[16px] text-[13px] font-bold mt-2">{text}</p>
            <ul className="list-disc pl-6 leading-[1.5] md:text-[16px] text-[13px] mt-6">
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    </div>
)

const Roadmap = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative md:pb-[190px] pb-[120px]"
    >
        <div className="absolute w-full bottom-0 top-[-300px] left-0 bg-[url('/assets/images/roadmap-bg.png')] bg-cover bg-right-top bg-no-repeat"></div>
      <div className="w-full max-w-[800px] mx-auto md:pt-[176px] pt-[100px]">
            <div className="fade-up flex justify-center">
                <div className="relative">
                    <div className="absolute md:text-[64px] text-[32px] font-medium text-center inset-0 flex items-center justify-center">ROADMAP</div>
                    <figure>
                        <img className="max-md:w-[140px]" src="/assets/images/ic-roadmap.png" alt="" />
                    </figure>
                </div>
            </div>
            <p className="fade-up text-center md:text-[18px] text-[15px] font-medium leading-none md:mt-[78px] mt-12 max-md:px-5">We will systematically implement the gradual rollout and functional expansion of AIAD Coin.</p>
            <div className="md:mt-[62px] mt-10 space-y-14 relative">
                <div className="absolute bottom-5 md:w-[60px] w-10 flex justify-center left-0 top-5">
                    <div className="bg-[#E9F1FC] w-4 md:w-5 rounded-[50px]"></div>
                    <div className="bg-[#FAA0B1] absolute h-[122px] w-4 md:w-5 rounded-[50px]"></div>
                </div>
                <div className="relative flex md:gap-8 gap-4">
                    <div className="md:flex-[0_0_60px] flex-[0_0_40px]">
                        <img src="/assets/images/roadmap-on.png" alt="" />
                    </div>
                    <Phase
                        phase="1"
                        date="2025 Q1-Q2"
                        title="Infrastructure construction"
                        text="Infrastructure development and initial deployment of payment system"
                        items={[
                            'Smart contract development/audit',
                            'Construction of payment system infrastructure',
                            'Initial user testing',
                            'IDO on decentralized exchange',
                        ]}
                    />
                </div>
                <div className="relative flex md:gap-8 gap-4 items-center">
                    <div className="md:flex-[0_0_60px] flex-[0_0_40px]">
                        <img src="/assets/images/roadmap-off.png" alt="" />
                    </div>
                    <Phase
                        phase="2"
                        date="2025 Q3-Q4"
                        title="Growth period"
                        text="Expansion of payment system and global expansion"
                        items={[
                            'Expansion of support for multiple currencies',
                            'Cooperation with new exchanges',
                            'Expansion of payment functions',
                            'Establishment of global support system',
                        ]}
                    />
                </div>
                <div className="relative flex md:gap-8 gap-4 items-end">
                    <div className="md:flex-[0_0_60px] flex-[0_0_40px]">
                        <img src="/assets/images/roadmap-off.png" alt="" />
                    </div>
                    <Phase
                        phase="3"
                        date="2026"
                        title="Development period"
                        text="Sophistication of services and market expansion:"
                        items={[
                            'Implementing advanced payment features',
                            'Accelerating global expansion',
                            'Payment process optimization',
                            'Entering new markets',
                        ]}
                    />
                </div>
            </div>
      </div>
    </section>
  );
};

export default Roadmap;
