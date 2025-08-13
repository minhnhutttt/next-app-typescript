'use client';

import { useTranslations } from "next-intl";

export default function Features() {
  const t = useTranslations('Features');

  const cards = [
    {
      ic: "/assets/images/ic-feature-01.png",
      title: t('starter_title'),
      data: t('starter_data'),
      text: t('starter_text')
    },
    {
      ic: "/assets/images/ic-feature-02.png",
      title: t('basic_title'),
      data: t('basic_data'),
      text: t('basic_text')
    },
    {
      ic: "/assets/images/ic-feature-03.png",
      title: t('standard_title'),
      data: t('standard_data'),
      text: t('standard_text')
    },
    {
      ic: "/assets/images/ic-feature-04.png",
      title: t('pro_title'),
      data: t('pro_data'),
      text: t('pro_text')
    }
  ];

  const extras = [
    { title: t('agent_title'),   text: t('agent_text') },
    { title: t('premium_title'), text: t('premium_text') }
  ];

  return (
    <section className="relative bg-[url(/assets/images/bg-features.png)] bg-cover px-5 pt-16 md:pt-20 md:pb-[157px] pb-24">
      <div className="w-full max-w-[1210px] mx-auto">
        <h4 className="fade-up text-center md:text-[64px] text-[30px] font-medium text-[#C8D6FF] leading-loose py-5 px-2.5 tracking-widest">
          {t('heading')}
        </h4>

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4 md:gap-[30px] mt-3 md:mt-5">
          {cards.map((item, index) => (
            <div className="fade-up h-[240px] md:h-[285px] relative md:rounded-[60px] rounded-[30px] overflow-hidden leading-none tracking-wider" key={index}>
              <span className="absolute inset-0 z-0 backdrop-filter backdrop-blur-[0px] [filter:url(#lg-dist)] isolate"></span>
              <span className="absolute inset-0 z-[1] bg-[#D2EAFB]/[0.1]"></span>
              <span className="absolute inset-0 z-[2] [border-radius:inherit] overflow-hidden [box-shadow:inset_1px_1px_0_rgba(255,_255,_255,_0.75),_inset_0_0_5px_rgba(255,_255,_255,_0.75)]"></span>
              <div className="relative h-full flex justify-center items-center z-10 px-5 md:px-10">
                <div>
                  <p><img className="max-md:w-14" src={item.ic} alt="" /></p>
                  <p className="md:text-[24px] text-[16px] text-[#00CAC2] font-semibold mt-5">{item.title}</p>
                  <p className="md:text-[48px] text-[24px] text-black font-bold my-2.5">{item.data}</p>
                  <p className="md:text-[18px] text-[15px] text-white whitespace-pre-line">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center max-md:items-center max-md:flex-col gap-[30px] mt-[30px]">
          {extras.map((item, index) => (
            <div className="fade-up relative max-md:w-full max-w-[504px] flex-1 rounded-[30px] overflow-hidden" key={index}>
              <span className="absolute inset-0 z-0 backdrop-filter backdrop-blur-[0px] [filter:url(#lg-dist)] isolate"></span>
              <span className="absolute inset-0 z-[1] bg-[#D2EAFB]/[0.1]"></span>
              <span className="absolute inset-0 z-[2] [border-radius:inherit] overflow-hidden [box-shadow:inset_1px_1px_0_rgba(255,_255,_255,_0.75),_inset_0_0_5px_rgba(255,_255,_255,_0.75)]"></span>
              <div className="relative py-5 px-[54px] leading-[1.2]">
                <p className="md:text-[24px] text-[18px] text-[#00CAC2] mb-2.5">{item.title}</p>
                <p className="md:text-[18px] text-[15px]">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center md:py-10 py-6">
          <p className="max-w-[800px] md:text-[15px] text-[13px]">
            {t('note')}
          </p>
        </div>
      </div>
    </section>
  );
}
