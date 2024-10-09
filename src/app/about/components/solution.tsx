"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        id: '01',
        image: '/assets/images/solution-img-01.png',
        title: 'Establishing Economic Sovereignty',
        challenge: (<>
        Restrictions on individual economic activities due to centralized financial systems
        </>),
        solution: (<>Development of a wallet with a completely free transaction system</>),
        impacts: ["Promotion of financial inclusion and individual economic independence","Activation of peer-to-peer economic activitie","Realization of borderless economic participation"]
    },
    {
        id: '02',
        image: '/assets/images/solution-img-02.png',
        title: 'Maximizing Individual Potential',
        challenge: (<>
        Limitations on individual possibilities by existing systems
        </>),
        solution: (<>A comprehensive platform enabling diverse value creation</>),
        impacts: ["Marketization of individual talents and skills","Construction of a fair and transparent evaluation system","Emergence of new value creation models"]
    },
    {
        id: '03',
        image: '/assets/images/solution-img-03.png',
        title: 'Realizing Sustainability and Equity',
        challenge: (<>
        Environmental issues and widening economic disparities
        </>),
        solution: (<>Support for individual-led environmental protection activities and a fair value distribution system</>),
        impacts: ["Construction of a reliable information ecosystem led by individuals","Enhancement of individual information dissemination power and influence","Realization of self-management and valorization of personal data"]
    },
    {
        id: '04',
        image: '/assets/images/solution-img-04.png',
        title: 'Human-Centered Technological Development',
        challenge: (<>
        Restrictions on individual economic activities due to centralized financial systems
        </>),
        solution: (<>Development of a wallet with a completely free transaction system</>),
        impacts: ["Promotion of financial inclusion and individual economic independence","Activation of peer-to-peer economic activities","Realization of borderless economic participation"]
    },
    {
        id: '05',
        image: '/assets/images/solution-img-05.png',
        title: 'Establishing Information Sovereignty',
        challenge: (<>
        Risks of centralized information management and manipulation
        </>),
        solution: (<>Individual-led decentralized information verification and sharing system</>),
        impacts: ["Promotion of financial inclusion and individual economic independence","Activation of peer-to-peer economic activities","Realization of borderless economic participation"]
    },
]

const AboutSolution = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative pt-14 md:pt-[70px] z-10 px-5 md:pb-[100px] pb-[60px]">
      <div className="w-full mx-auto max-w-[1360px]">
        <h3 className="fade-up text-center md:text-[64px] text-[32px] leading-none font-bold tracking-wide">Developing Functions to Solve Global Issues</h3>
        <p className="fade-up text-center md:text-[18px] text-[16px] text-white font-bold leading-none md:mt-5 mt-3">DIVER is developing innovative solutions to the following global challenges to realize a future where individuals drive global progress.</p>
        <div className="leading-[1.3] w-full max-w-[1200px] mx-auto md:mt-[70px] mt-10 md:space-y-[60px] space-y-14">
            {data.map((item,index)=>(
                <div className="fade-up flex items-center max-md:flex-col-reverse max-md:gap-7" key={index}>
                    <div className="max-w-[600px] md:mr-[-130px] relative">
                        <h5 className="md:text-[40px] text-[24px] font-bold tracking-tight">{item.title}</h5>
                        <div className="md:mt-10 mt-6 space-y-5">
                            <div className="flex gap-5">
                                <p className="md:text-[18px] text-[16px] font-bold md:w-[120px] w-[100px]">ISSUE</p>
                                <p className="flex-1 md:text-[16px] text-[14px]">
                                    {item.challenge}
                                </p>
                            </div>
                            <div className="flex gap-5">
                                <p className="md:text-[18px] text-[16px] font-bold md:w-[120px] w-[100px]">DIVER'S <br />SOLUTION</p>
                                <p className="flex-1 md:text-[16px] text-[14px]">
                                    {item.solution}
                                </p>
                            </div>
                            <div className="flex gap-5 pt-5">
                                <p className="md:text-[18px] text-[16px] font-bold md:w-[120px] w-[100px]">IMPACT</p>
                                <ul className="flex-1 md:text-[20px] text-[16px] list-decimal md:pl-8 pl-5 tracking-wide">
                                    {item.impacts.map((impact,index) => (
                                        <li key={index}>{impact}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <img src={item.image} alt="" />
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSolution;
