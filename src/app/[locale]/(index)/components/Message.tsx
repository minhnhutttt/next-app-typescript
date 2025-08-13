'use client';

import { useTranslations } from "next-intl";

export default function Message() {
  const t = useTranslations('Message');

  return (
    <section className="relative py-40 md:pt-[495px] md:pb-[400px] px-5 flex items-center justify-center flex-col">
      <div className="absolute bg-cover bg-center w-full z-10 pointer-events-none flex justify-center">
        <img className="w-full md:min-w-[1440px] min-w-[100px] object-center" src="/assets/images/deco-center.png" alt="" />
      </div>
      <div className="w-full relative max-w-[1250px] mx-auto">
        <p className="fade-up w-full max-w-[884px] mx-auto text-center leading-loose md:text-[32px] text-[20px] font-extralight tracking-widest md:mt-8 mt-5">
          {t('body')}
        </p>
      </div>
    </section>
  );
}
