"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const dataTeams = [
  {
    image: '/assets/images/team-img-01.png',
    title: 'Core Team',
    items: [
        'project lead',
        'Technology development team',
        'business development team',
        'Legal/Compliance Team',
    ]
  },
  {
    image: '/assets/images/team-img-02.png',
    title: 'Advisory Board',
    items: [
        'crypto asset expert',
        'Payment system expert',
        'digital advertising experts',
        'legal advisor',
        'security expert'
    ]
  },
  {
    image: '/assets/images/team-img-03.png',
    title: 'Partnership',
    items: [
        'exchange partner',
        'payment provider',
        'security audit agency',
        'Legal/accounting firm',
        'Technology development partner'
    ]
  },
]

const Team = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative px-5 md:pb-[138px] pb-20"
    >
      <div className="w-full max-w-[1360px] mx-auto md:rounded-[100px] rounded-[60px] px-5 xl:px-[50px] bg-white/90 md:pb-[182px] pb-[110px] [box-shadow:0px_4px_100px_0px_rgba(0,_0,_0,_0.10)] md:pt-[160px] pt-24">
        <h5 className="fade-up text-center md:text-[64px] text-[32px] font-medium leading-none">Team and Partners</h5>
        <p className="fade-up text-center md:text-[18px] text-[15px] leading-none md:mt-[29px] mt-5">The AIAD Coin project is powered by a team of blockchain technology and payment system experts.</p>
        <div className="flex flex-wrap justify-center md:gap-[30px] gap-5 md:mt-14 mt-10">
            {dataTeams.map((team, index) => (
                <div className="fade-up md:w-[400px] border border-[#F20C3E] rounded-[40px] overflow-hidden" key={index}>
                    <figure>
                        <img src={team.image} alt="" />
                    </figure>
                    <div className="p-5 md:p-[30px]">
                        <p className="text-center md:text-[18px] text-[15px] font-bold tracking-widest">{team.title}</p>
                        <ul className="list-disc pl-6 md:text-[18px] text-[15px] font-bold md:mt-8 mt-6 pb-2">
                            {team.items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
            
        </div>
      </div>
    </section>
  );
};

export default Team;
