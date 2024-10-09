"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        id: "1",
        title: "Eligibility",
        contents: ["Individuals or organizations developing or operating dApps or services on the DIVER network","Those who align with DIVER's vision and values and are committed to contributing to the ecosystem's growth"]
    },
    {
        id: "2",
        title: "Required Information:",
        contents: ["Project name and overview","Estimated transaction volume","Technical stack details","Team member information"]
    },
    {
        id: "3",
        title: "Evaluation Criteria",
        contents: ["Project innovation and feasibility","Contribution to the DIVER ecosystem","Technical implementation capability","Commitment to security and compliance"]
    }
]

const GatewayGuide = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative pt-[100px] md:pt-[150px] z-10  px-5">
      <div className="w-full max-w-[1337px] mx-auto">
            <h3 className="fade-up md:text-[64px] text-[32px] font-bold leading-none tracking-wide text-center">Application Guide</h3>
            <div className="flex md:items-start flex-wrap max-md:flex-col gap-7 md:gap-[40px] items-center justify-center md:mt-[40px] mt-10">
                {data.map((item)=>(
                    <div className="fade-up relative lg:even:mt-[160px] aspect-[400/445] w-[320px] md:w-[400px] bg-[url('/assets/images/gateway-guide-bg.png')] bg-cover md:pt-[120px] pt-20 px-5" key={item.id}>
                        <div className="w-full pl-6 mx-auto">
                            <p className="text-center md:text-[24px] text-[20px]">{item.title}</p>
                            <ul className="list-disc md:text-[20px] text-[16px] leading-none flex flex-col items-center gap-3 mt-4">
                                {item.contents.map((content, index) => (
                                    <li className="" key={index}>{content}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="absolute bottom-0 md:bottom-[-50px] leading-none font-inter font-semibold italic md:text-[200px] text-[100px]">{item.id}</div>
                    </div>
                ))}
            </div>
      </div>
    </section>
  );
};

export default GatewayGuide;
