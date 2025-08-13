'use client';

import { useTranslations } from "next-intl";

export default function Overview() {
  const t = useTranslations('Overview');

  const items = [
    {
      image: '/assets/images/ic-capacity.png',
      title: t('card1_title'),
      content: t('card1_content'),
    },
    {
      image: '/assets/images/ic-agent.png',
      title: t('card2_title'),
      content: t('card2_content'),
    },
    {
      image: '/assets/images/ic-staking.png',
      title: t('card3_title'),
      content: t('card3_content'),
    },
    {
      image: '/assets/images/ic-infinite.png',
      title: t('card4_title'),
      content: t('card4_content'),
    },
  ];

  return (
    <section className="relative pt-8 md:pt-[58px] px-5">
      <div className="w-full max-w-[1440px] mx-auto">
        <h4 className="fade-up text-center md:text-[64px] text-[32px] font-medium text-[#C8D6FF] leading-loose py-5 px-2.5 tracking-widest">
          {t('heading')}
        </h4>

        <p className="fade-up w-full max-w-[800px] mx-auto font-light leading-loose md:text-[20px] text-[16px] tracking-widest">
          {t('description')}
        </p>

        <div className="grid lg:grid-cols-4 grid-cols-2 w-full max-w-[1300px] mx-auto gap-6 lg:gap-[50px] md:mt-[60px] mt-10">
          {items.map((item, index) => (
            <div className="fade-up flex flex-col items-center md:tracking-widest" key={index}>
              <span><img src={item.image} alt="" /></span>
              <p className="text-center md:text-[18px] text-[15px] font-bold md:mt-8 mt-4 md:min-h-[54px] min-h-[40px]">
                {item.title}
              </p>
              <p className="md:text-[18px] text-[15px] md:mt-5 mt-2">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
