'use client';

import { useTranslations } from "next-intl";

export default function Vm() {
  const t = useTranslations('Vm');

  const missionItems = [
    t('mission_item_1'),
    t('mission_item_2'),
    t('mission_item_3'),
    t('mission_item_4'),
    t('mission_item_5'),
  ];

  return (
    <section className="relative pt-20 md:pt-[128px] md:pb-[102px] pb-16">
      <div className="vm-animation animation-ltr border-b border-[#C8D6FF]">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="vm-animation-inner px-5 py-10 md:py-16">
            <div className="w-full max-w-[1200px] mx-auto md:min-h-[232px] flex items-center max-md:flex-col">
              <p className="lg:text-[96px] md:text-[60px] text-[48px] leading-loose text-[#C8D6FF] tracking-widest md:w-[350px] lg:w-[550px]">
                {t('vision_heading')}
              </p>
              <p className="md:text-[20px] text-[16px] leading-loose flex-1">
                {t('vision_text')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="vm-animation animation-rtl border-b border-[#C8D6FF]">
        <div className="w-full max-w-[1400px] mx-auto">
          <div className="vm-animation-inner px-5 py-10 md:py-16">
            <div className="w-full max-w-[1200px] mx-auto md:min-h-[232px] flex items-center max-md:flex-col">
              <p className="lg:text-[96px] md:text-[60px] text-[48px] leading-loose text-[#C8D6FF] tracking-widest md:w-[350px] lg:w-[550px]">
                {t('mission_heading')}
              </p>
              <ul className="md:text-[20px] text-[16px] leading-loose flex-1 list-decimal pl-5">
                {missionItems.map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
