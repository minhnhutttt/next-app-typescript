"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
  {
    image: '/assets/images/market-img-01.png',
    title: 'Growth of the global advertising market',
    content: (<>
      The global advertising market is valued at approximately $780 billion in 2022 and is predicted to reach approximately $1 trillion by 2027
    </>),
    source: (<>Source: Statista, 2023, "<span className="u-text-gradient">Global Advertising Market Size</span>"</>)
  },
  {
    image: '/assets/images/market-img-02.png',
    title: 'Increased demand for advertising optimization using AI',
    content: (<>
      he market size of AI technology is predicted to reach approximately $1.8 trillion in 2030 from approximately $200 billion in 2023
    </>),
    source: (<>Source: Grand View Research, 2023, "<span className="u-text-gradient">Expansion of AI market</span>"</>)
  },
  {
    image: '/assets/images/market-img-03.png',
    title: 'Demands and challenges of cross-border payments',
    content: (<>
      In 2023, the global payments industry will process a total of $1.8 quadrillion, of which cross-border payments will account for a significant portion and are expected to continue to grow
    </>),
    source: (<>Source: Market size, 2024, "<span className="u-text-gradient">Market size</span>"</>)
  },
]

const Market = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-5 md:pt-12 pt-10"
    >
      <div className="w-full max-w-[1360px] mx-auto md:pt-14 pt-10">
        <h5 className="fade-up text-center md:text-[64px] text-[40px] font-bold">Market analysis</h5>
        <div className="md:mt-7 mt-5 md:space-y-16 space-y-10">
          {data.map((item, index) => (
            <div className="fade-up group flex items-center max-md:flex-col max-md:gap-5 md:even:flex-row-reverse" key={index}>
                <figure>
                    <img src={item.image} alt="" />
                </figure>
                <div className="md:w-[510px] md:group-odd:-ml-10 md:group-even:-mr-10 md:space-y-7 space-y-4 relative">
                    <h5 className="md:text-[24px] text-[20px] font-bold">{item.title}</h5>
                    <p className="md:text-[16px] text-[13px]">
                        {item.content}
                    </p>
                    <div className="flex">
                        <div className="bg-[#F5F5F5] py-5 px-[30px] text-[#777] md:text-[14px] text-[13px]">
                            {item.source}
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Market;
