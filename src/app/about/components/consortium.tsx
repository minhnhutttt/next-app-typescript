"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const data = [
    {
        title: 'Decentralized Development and Operation System',
        contents: ["24/7 development and operation through geographically dispersed locations","Efficient role distribution leveraging each country's strengths","Risk diversification and improved fault tolerance"]
    },
    {
        title: 'Ensuring Global Compliance',
        contents: ["Service deployment compliant with each country's regulations","Security measures compliant with international standards","Platform design considering diverse cultures and customs"]
    },
    {
        title: 'Building an International Ecosystem',
        contents: ["Forming partnerships leveraging each country's characteristics","Nurturing a global user community","Promoting innovation by incorporating diverse perspectives"]
    },
    {
        title: 'Phased Approach Towards DAO Transition',
        contents: ["Accumulating know-how on decentralized organizational management","Maintaining overall consistency while increasing autonomy of each location","Gradually introducing community participation mechanisms"]
    },
]

const BoxNumber = ({number, text}: {number: string, text: string}) => (
    <div className="fade-up w-1/2 max-md:text-center md:w-[260px] h-[150px] flex items-center justify-center flex-col gap-3 px-2 border border-white/20">
        <p className="md:text-[48px] text-[28px] leading-none font-bold">{number}</p>
        <p className="md:text-[18px] text-[16px] leading-none">{text}</p>
    </div>
)

const BoxCountry = ({country, text}: {country: string, text: string}) => (
    <div className="fade-up w-1/2 max-md:text-center md:w-[260px] h-[150px] flex items-center justify-center flex-col gap-3 px-2 border border-white/20">
        <p className="md:text-[36px] text-[24px] leading-none font-bold">{country}</p>
        <p className="md:text-[16px] text-[14px] leading-none">{text}</p>
    </div>
)

const AboutConsortium = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative bg-[#010856] pt-20 md:pt-[170px] z-10 px-5 md:pb-[145px] pb-[100px]">
      <div className="w-full mx-auto max-w-[1364px]">
        <h3 className="fade-up text-center md:text-[64px] text-[32px] leading-none font-bold tracking-wide">Team Composition and Supply Ratio</h3>
        <div className="w-full max-w-[1076px] mx-auto md:mt-12 mt-6">
            <div className="w-full max-w-[840px]">
                <p className="fade-up md:text-[28px] text-[20px] font-bold text-white tracking-wide">Roles and Composition of the Consortium</p>
                <p className="fade-up md:text-[18px] text-[16px] text-white md:pt-4 tracking-wide">
                The Consortium is an international cooperative organization responsible for the development, operation, and promotion of the DIVER platform. It aims to transition to a DAO (Decentralized Autonomous Organization) in the future, but is currently made up of legal entities spread across 12 locations in 7 countries. Partner companies based in Australia, Belize, Canada, Cyprus, Japan, the UK, and the US are promoting product development, including technology provision, in their respective areas of expertise.
                </p>
            </div>
            <div className="w-full mx-auto mt-8 md:mt-12 flex flex-col items-center">
                <div className=" w-full max-w-[792px]">
                    <div className="flex flex-wrap justify-center">
                        <BoxNumber number="73%" text="DEVELOPER" />
                        <BoxNumber number="7%" text="OBSERVER" />
                        <BoxNumber number="6%" text="ADVISOR" />
                        <BoxNumber number="6%" text="DIRECTOR" />
                        <BoxNumber number="5%" text="MARKETER" />
                        <BoxNumber number="3%" text="PUBLICIST" />
                    </div>
                </div>
                <div className="mt-6">
                    <div className="flex flex-wrap justify-center">
                        <BoxCountry country="Australia" text="Based in Sydney and Melbourne" />
                        <BoxCountry country="Belize" text="Based in Belize City" />
                        <BoxCountry country="Canada" text="Based in Toronto and Montreal" />
                        <BoxCountry country="Cyprus" text="Based in Nicosia and Limassol" />
                        <BoxCountry country="Japan" text="Based in Tokyo" />
                        <BoxCountry country="UK" text="Based in London and Oxford" />
                        <BoxCountry country="USA" text="Based in New York City and Phoenix" />
                    </div>
                </div>
            </div>
        </div>
        <div className="md:mt-[155px] mt-20">
            <h4 className="fade-up text-center md:text-[28px] text-[20px] font-bold leading-none">Main Functions of the Consortium</h4>
            <div className="flex flex-wrap justify-center gap-5 md:mt-12 mt-8 font-inter">
                {data.map((item,index)=>(
                    <div className="fade-up md:w-[326px] rounded-[20px] bg-black/20 border border-[#5F93FF] md:pt-10 pt-8 md:pb-[30px] pb-5 px-[22px]" key={index}>
                        <p className="md:text-[18px] text-[16px] font-bold leading-[1.3] pb-4 border-b border-white/20 px-4 mb-4">{item.title}</p>
                        <div className="space-y-5">
                            {item.contents.map((content,index)=>(
                                <div className="flex md:text-[16px] text-[14px] gap-2.5 leading-[1.3] font-semibold" key={index}>
                                    <span>●</span>
                                    <span>{content}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="fade-up flex justify-center md:mt-16 mt-10">
                <a href="/" className="w-[355px] h-[86px] flex items-center justify-center bg-[#005FD7] rounded-[80px] [box-shadow:-3px_-4px_20px_0px_rgba(255,_255,_255,_0.15)_inset,_4px_22px_50px_0px_rgba(24,_83,_158,_0.80)] text-white/90 md:text-[24px] text-[20px] font-poppins font-bold [text-shadow:1px_1px_1px_rgba(0,_0,_0,_0.25)] tracking-widest">
                WHITEPAPER
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutConsortium;
