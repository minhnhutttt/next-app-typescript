"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        id: "01",
        number: "/assets/images/feature-01.svg",
        image: "/assets/images/gate-feature-01.png",
        title: "Fast and reliable connection",
        text: "Cutting-edge infrastructure enables millisecond response times"
    },
    {
        id: "02",
        number: "/assets/images/feature-02.svg",
        image: "/assets/images/gate-feature-02.png",
        title: "Security and stability",
        text: "Top-tier encryption and redundancy provide secure, uninterrupted service"
    },
    {
        id: "03",
        number: "/assets/images/feature-03.svg",
        image: "/assets/images/gate-feature-03.png",
        title: "Scalability",
        text: "Flexible design that can scale to meet the needs of growing projects"
    }
]

const GateWayFeature = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative pt-[100px] md:pt-[180px] z-10 md:bg-[url('/assets/images/gateway-deco.png')] bg-no-repeat bg-left-bottom px-5">
      <div className="w-full max-w-[1363px] mx-auto">
        <div className="w-full max-w-[990px] ml-auto">
            <h3 className="fade-up md:text-[64px] text-[32px] font-bold leading-none tracking-wide max-md:text-center">Features</h3>
            <div className="md:mt-[60px] mt-8 max-md:space-y-10">
                {data.map((item)=> (
                    <div className="fade-up flex odd:justify-end" key={item.id}>
                        <div className="md:w-1/2 relative">
                        <div className="flex justify-between gap-5 md:absolute bottom-full px-4 md:px-6 pb-3 md:pb-1.5">
                            <div className="flex-1 leading-[1.34]">
                                <p className="md:text-[18px] text-[16px] font-semibold md:mb-7">{item.title}</p>
                                <p className="md:text-[16px] text-[14px]">{item.text}</p>
                            </div>
                            <figure><img className="max-md:h-16" src={item.number} alt="" /></figure>
                        </div>
                            <figure>
                                <img src={item.image} alt="" />
                            </figure>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default GateWayFeature;
