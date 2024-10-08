"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const BoxNumber = ({number, text}: {number: string, text: string}) => (
    <div className="w-[260px] h-[150px] flex items-center justify-center flex-col gap-3 px-2">
        <p className="md:text-[48px] text-[28px] leading-none font-bold">{number}</p>
        <p className="md:text-[18px] text-[16px] leading-none">{text}</p>
    </div>
)

const BoxCountry = ({country, text}: {country: string, text: string}) => (
    <div className="w-[260px] h-[150px] flex items-center justify-center flex-col gap-3 px-2">
        <p className="md:text-[36px] text-[24px] leading-none font-bold">{country}</p>
        <p className="md:text-[16px] text-[14px] leading-none">{text}</p>
    </div>
)

const Consortium = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative bg-[#010856] pt-20 md:pt-[170px] z-10 px-5 md:pb-[100px] pb-[60px]">
      <div className="w-full mx-auto max-w-[1364px]">
        <h3 className="text-center md:text-[64px] text-[32px] leading-none font-bold tracking-wide">Team Composition and Supply Ratio</h3>
        <div className="w-full max-w-[1076px] mx-auto md:mt-12 mt-6">
            <div className="w-full max-w-[840px]">
                <p className="md:text-[28px] text-[20px] font-bold text-white tracking-wide">Roles and Composition of the Consortium</p>
                <p className="md:text-[18px] text-[16px] text-white md:pt-4 tracking-wide">
                The Consortium is an international cooperative organization responsible for the development, operation, and promotion of the DIVER platform. It aims to transition to a DAO (Decentralized Autonomous Organization) in the future, but is currently made up of legal entities spread across 12 locations in 7 countries. Partner companies based in Australia, Belize, Canada, Cyprus, Japan, the UK, and the US are promoting product development, including technology provision, in their respective areas of expertise.
                </p>
            </div>
            <div className="w-full mx-auto md:mt-12 flex flex-col items-center">
                <div className="border border-white/20 divide-y divide-white/20">
                    <div className="flex divide-x divide-white/20">
                        <BoxNumber number="73%" text="DEVELOPER" />
                        <BoxNumber number="7%" text="OBSERVER" />
                        <BoxNumber number="6%" text="ADVISOR" />
                    </div>
                    <div className="flex divide-x divide-white/20">
                        <BoxNumber number="6%" text="DIRECTOR" />
                        <BoxNumber number="5%" text="MARKETER" />
                        <BoxNumber number="3%" text="PUBLICIST" />
                    </div>
                </div>
                <div className="border border-white/20 divide-y divide-white/20 mt-6">
                    <div className="flex divide-x divide-white/20">
                        <BoxCountry country="Australia" text="Based in Sydney and Melbourne" />
                        <BoxCountry country="Belize" text="Based in Belize City" />
                        <BoxCountry country="Canada" text="Based in Toronto and Montreal" />
                        <BoxCountry country="Cyprus" text="Based in Nicosia and Limassol" />
                    </div>
                </div>
                <div className="border border-t-0 border-white/20 divide-y divide-white/20">
                    <div className="flex divide-x divide-white/20">
                        <BoxCountry country="Japan" text="Based in Tokyo" />
                        <BoxCountry country="UK" text="Based in London and Oxford" />
                        <BoxCountry country="USA" text="Based in New York City and Phoenix" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Consortium;
