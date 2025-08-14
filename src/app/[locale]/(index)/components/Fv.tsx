'use client';

import { useTranslations } from "next-intl";

export default function Fv() {
  const t = useTranslations('Fv');

  return (
    <section className="relative z-10 min-h-[550px] md:min-h-[800px] flex justify-center pt-[150px] md:pt-[170px]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url(/assets/images/fv-bg.png)] bg-cover bg-center z-10"></div>
        <video
          className="w-full h-full max-xl:object-cover relative opacity-40"
          data-lazy-video=""
          data-lazy=""
          data-autoplay="true"
          preload="none"
          loop
          muted
          autoPlay
          src="/assets/videos/fv.mp4"
          playsInline
          data-loaded="true"
        ></video>
      </div>
      <div className="w-full max-w-[500px] md:max-w-[1440px] md:px-[60px] px-5 relative z-20">
        <h1
          className="fade-up md:text-[78px] text-[28px] font-bold text-[#C8D6FF] text-shadow-[0_4px_100px_#000] leading-[1.3] whitespace-pre-line"
        >
          {t('heading')}
        </h1>
        <p className="fade-up w-full max-w-[500px] md:text-[18px] text-[15px] leading-loose font-extralight md:mt-10 mt-6 whitespace-pre-line">
          {t('description')}
        </p>
      </div>
    </section>
  )
}
