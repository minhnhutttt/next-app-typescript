"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        title: 'Short term goals',
        text: (<>
        We will select projects that have the necessary infrastructure for research and development of exosome technology and support prototype development and early clinical trials. <br />
        We will also optimize the exosome production and purification process and help prepare the technology for market launch.
        </>)
    },
    {
        title: 'Funding and R&D support',
        text: (<>
        EXO tokens will serve as a funding vehicle to support research and development of exosome technology.
        Through the sale of tokens, research institutions and companies will be provided with funds to accelerate the development of new treatments and applied technologies.
        </>)
    },
    {
        title: 'Long term goals',
        text: (<>
        We will widely disseminate exosome technology and establish global standards in regenerative medicine, personalized medicine, and environmental protection.
        We will also support the development of new biotechnology that applies exosome technology and contribute to the realization of a sustainable society.
        </>)
    },
]

const Solutions = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative md:pt-[209px] pt-[110px] md:pb-[298px] pb-[150px]"
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <h3 className="fade-up text-center xl:text-[64px] md:text-[44px] text-[32px] font-medium tracking-[0.095em]">EXO DAO <br className="md:hidden" />strategic goals</h3>
        <div className="relative md:mt-20 mt-12">
            <div className="absolute lg:top-1/2 top-0 max-md:bottom-0 lg:-translate-y-1/2 left-1/2 max-lg:-translate-x-1/2 lg:left-0 md:[filter:drop-shadow(0px_4px_110px_#2786A8)]">
                <img className="fade-up max-lg:hidden" src="/assets/images/arrow.png" alt="" />
                <img className="fade-up lg:hidden h-full" src="/assets/images/arrow-sp.png" alt="" />
            </div>
            <div className="w-full max-w-[550px] lg:max-w-[1224px] mx-auto grid lg:grid-cols-3 px-5 xl:gap-[60px] md:gap-8 gap-6 relative">
                {data.map((item,index) => (
                    <div className="fade-up bg-[#00164A]/[0.8] border border-[#357BF9] md:rounded-[80px] rounded-[40px] lg:px-10 px-5 md:py-[60px] py-10" key={index}>
                        <h5 className="text-center md:text-[24px] text-[18px] font-bold tracking-widest lg:min-h-[72px]">{item.title}</h5>
                        <p className="md:text-[16px] text-[13px] md:mt-10 mt-6 tracking-widest leading-loose">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
