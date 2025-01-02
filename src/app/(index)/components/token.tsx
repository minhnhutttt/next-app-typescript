"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        title: 'Governance and decision making',
        text: (<>
        EXO token holders have the right to vote on the direction of the project and the allocation of funds within the DAO. <br />
        This decentralized governance system ensures project transparency and fairness, creating an ecosystem where all stakeholders can participate equally.
        </>)
    },
    {
        title: 'Funding and R&D support',
        text: (<>
        EXO tokens will serve as a funding vehicle to support research and development of exosome technology. <br />
        Through the sale of tokens, research institutions and companies will be provided with funds to accelerate the development of new treatments and applied technologies.
        </>)
    },
    {
        title: 'Incentive and reward design',
        text: (<>
        EXO tokens serve as a reward for individuals and organizations that contribute to the dissemination and commercialization of exosome technology. This encourages active participation in technology development and projects, and helps revitalize the entire ecosystem.
        </>)
    },
    {
        title: 'Expanding the ecosystem',
        text: (<>
        EXO DAO expands its ecosystem through global partnerships. <br />
        This includes universities, research institutes, medical institutions, environmental organizations, technology companies, etc., and will promote research and application of exosome technology across multiple fields.
        </>)
    },
]

const Token = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative bg-[url(/assets/images/token-bg.png)] bg-cover md:py-[198px] py-[100px] px-5"
    >
      <div className="w-full max-w-[1224px] mx-auto">
        <h3 className="fade-up text-center xl:text-[64px] md:text-[44px] text-[32px] font-medium tracking-[0.095em]">Role and ecosystem of EXO token</h3>
        <div className="w-full max-w-[1200px] mx-auto grid md:grid-cols-2 md:mt-[60px] mt-9 md:gap-x-[60px] md:gap-y-[100px] gap-14">
            {data.map((item,index) => (
                <div className="fade-up" key={index}>
                    <h5 className="md:text-[24px] text-[18px] font-bold tracking-widest">{item.title}</h5>
                    <p className="md:text-[16px] text-[13px] md:mt-10 mt-6 tracking-widest">{item.text}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Token;
