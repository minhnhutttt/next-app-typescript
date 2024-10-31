"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Article = ({title, items}:{title: string, items: string[]}) => (
  <div className="leading-[1.3]">
    <h5 className="md:text-[28px] text-[20px] font-medium">{title}</h5>
    <ul className="md:text-[16px] text-[14px] mt-[15px] space-y-[15px] max-w-[540px]">
      {items.map((item, index) => (
        <li className="flex gap-1" key={index}>
          <span>●</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
)

const Vision = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} id="introduction" className="relative bg-[url('/assets/images/vision-bg.png')] bg-center bg-[length:100%_100%] md:h-[1274px] md:pt-[254px] pt-[140px]">
        <div className="w-full max-w-[1440px] mx-auto px-5 xl:px-12">
            <h5 className="md:text-[36px] text-[24px] font-semibold">
                The IPDC project aims to realize the <br />
                following innovative vision
            </h5>
            <div className="md:mt-[154px] mt-20 space-y-10 md:space-y-[64px]">
              <div className="">
                <Article title="Building a True Distributed Web" items={['Realization of a completely distributed web system independent of traditional DNS','Creation of a secure internet environment resistant to tampering and unauthorized access','Freedom from hacking-related information leaks and database losses']} />
              </div>
              <div className="flex md:justify-center max-md:pl-5">
                <Article title="Realization of Edge Computing" items={['Building an efficient system for data processing at locations closest to users','Achievement of low-latency, high-speed data access']} />
              </div>
              <div className="flex md:justify-end max-md:pl-10">
                <Article title="Democratization of Digital Infrastructure" items={['Establishment of an open and fair data management system accessible to everyone','Implementation of a flexible model enabling participation at various scales, from individuals to data centers']} />
              </div>
            </div>
        </div>
    </section>
  );
};

export default Vision;
