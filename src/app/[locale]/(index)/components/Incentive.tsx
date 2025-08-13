'use client';

import { useTranslations } from "next-intl";

export default function Incentive() {
  const t = useTranslations('Incentive');

  const initialList = [
    {
      label: t('first_purchase'),
      detail: t('first_purchase_detail')
    },
    {
      label: t('friend_referral'),
      detail: t('friend_referral_detail')
    }
  ];

  const continuousList = [
    t('monthly_usage_improve'),
    t('consecutive_days_bonus'),
    t('community_contribution')
  ];

  return (
    <section className="relative pt-24 md:pt-[131px] px-5">
      <div className="w-full max-w-[1320px] mx-auto">
        <div className="flex gap-5 max-lg:flex-col max-lg:items-center">
          <div className="md:w-[620px] flex flex-col items-center py-6">
            <h4 className="fade-up text-center md:text-[48px] text-[28px] font-medium text-[#688BF5] leading-none">
              {t('heading')}
            </h4>
            <div className="md:mt-20 mt-12">
              <img src="/assets/images/incentive-img.png" alt="" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="fade-up md:py-10 py-6 px-5 rounded-xl border-[0.5px] border-[#3C3C3C] bg-[linear-gradient(318deg,_rgba(104,_139,_245,_0.20)_0%,_rgba(104,_139,_245,_0.20)_30%,_rgba(0,_2,_28,_0.00)_97.92%)]">
              <p className="md:text-[32px] text-[20px] font-medium leading-none">
                {t('initial_heading')}
              </p>
              <ul className="list-disc text-white pl-5 md:pl-7 md:text-[18px] text-[15px] font-bold leading-none mt-4 space-y-4">
                {initialList.map((item, i) => (
                  <li key={i}>
                    <span className="flex gap-2.5 max-md:flex-col">
                      <span className="w-[210px]">{item.label}</span>
                      <span className="md:text-[16px] text-[13px] font-normal flex-1">
                        {item.detail}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fade-up md:py-10 py-6 px-5 rounded-xl border-[0.5px] border-[#3C3C3C] bg-[linear-gradient(318deg,_rgba(104,_139,_245,_0.20)_0%,_rgba(104,_139,_245,_0.20)_30%,_rgba(0,_2,_28,_0.00)_97.92%)]">
              <p className="md:text-[32px] text-[20px] font-medium leading-none">
                {t('continuous_heading')}
              </p>
              <ul className="list-disc text-white pl-5 md:pl-7 md:text-[18px] text-[15px] font-bold leading-loose mt-4">
                {continuousList.map((text, i) => (
                  <li key={i}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
