"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        id: "01",
        title: "For Developers",
        contents: [
            {
                contentTitle: "Seamless integration",
                contentText: "Supports standard Web3 APIs, ensuring compatibility with existing tools and libraries",
            },
            {
                contentTitle: "Reduced development time",
                contentText: "Stable infrastructure allows developers to focus on core functionalities",
            },
            {
                contentTitle: "Cost reduction",
                contentText: "DIVER's free transaction feature significantly lowers operational costs",
            },
        ]
    },
    {
        id: "02",
        title: "For Projects",
        contents: [
            {
                contentTitle: "Enhanced performance",
                contentText: "Fast response times improve user experience",
            },
            {
                contentTitle: "Easy global deployment",
                contentText: "Low-latency access through globally distributed nodes",
            },
            {
                contentTitle: "Increased reliability",
                contentText: "99.99% uptime guarantee ensures business continuity",
            },
        ]
    },
    {
        id: "03",
        title: "Contributions to the Ecosystem",
        contents: [
            {
                contentTitle: "Fostering innovation",
                contentText: "Accelerates development of new dApps, expanding the DIVER ecosystem",
            },
            {
                contentTitle: "Strengthening the network",
                contentText: "Promotes decentralization, enhancing overall network resilience",
            },
            {
                contentTitle: "Community growth",
                contentText: "Encourages participation from developers and projects, building a vibrant ecosystem",
            },
        ]
    },
]

const GatewayBenefits = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative pt-[100px] md:pt-[160px] z-10  px-5">
      <div className="w-full max-w-[1350px] mx-auto">
            <h3 className="fade-up md:text-[64px] text-[32px] font-bold leading-none tracking-wide text-center">Benefits</h3>
            <div className="flex flex-wrap gap-10 md:gap-[70px] justify-center md:mt-[60px] mt-10">
                {data.map((item)=>(
                    <div className="fade-up md:w-[640px] md:min-h-[600px] w-full md:pt-[50px] md:pb-10 pt-8 pb-7 md:px-[55px] px-5 border border-white rounded-[20px] [box-shadow:0px_4px_50px_0px_rgba(34,_143,_206,_0.20)]" key={item.id}>
                        <p className="md:text-[24px] text-[18px] leading-none">Benefits {item.id}</p>
                        <p className="md:text-[32px] text-[21px] leading-[1.3] font-bold">{item.title}</p>
                        <div className="leading-[1.3] space-y-2.5 mt-2.5">
                            {item.contents.map((content, index)=>(
                                <div className="bg-white/20 rounded-[10px] p-5 md:pt-[30px]" key={index}>
                                    <div className="md:px-4">
                                        <p className="md:text-[20px] text-[16px] font-bold mb-2.5">{content.contentTitle}</p>
                                        <p className="md:text-[18px] text-[14px] font-medium">{content.contentText}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
      </div>
    </section>
  );
};

export default GatewayBenefits;
