'use client';

import { useTranslations } from "next-intl";

const RoadmapItem = ({
  phase,
  title,
  list
}: { phase: string; title: string; list: string[] }) => (
  <div className="fade-up group md:w-[23.44vw] xl:w-[265px] flex flex-col relative md:odd:justify-end md:even:justify-start">
    <div className="flex flex-col md:items-center w-full md:h-[35vw] xl:h-[440px] md:group-even:justify-start justify-start md:group-even:flex-col-reverse xl:group-even:mb-[220px] md:group-even:mb-[17.25vw]">
      <div className="flex flex-row-reverse md:flex-col md:items-center justify-end md:justify-center md:group-even:flex-col-reverse max-md:gap-10">
        <div className="md:text-[2.19vw] xl:text-[28px] text-[20px] text-[#688BF5] font-medium md:my-[2.03vw] xl:my-[26px] my-5">
          {phase}
        </div>
        <div>
          <img
            className="md:group-even:rotate-180 max-md:-rotate-90 max-xl:w-[2.5vw] max-md:w-4"
            src="/assets/images/line.png"
            alt=""
          />
        </div>
      </div>
      <div className="md:my-[1.56vw] xl:my-5">
        <p className="text-center md:text-[1.88vw] xl:text-[24px] text-[18px] font-semibold mb-[0.78vw] xl:mb-2.5 whitespace-pre-line">
          {title}
        </p>
        <ul className="lg:text-[1.3vw] md:text-[1.25vw] xl:text-[14px] text-[12px] font-light leading-relaxed list-disc pl-5">
          {list.map((item, index) => (
            <li className="break-keep" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default function Roadmap() {
  const t = useTranslations('Roadmap');

  const dataRoadmap = [
    {
      phase: t('phase1_phase'),
      title: t('phase1_title'),
      list: [
        t('phase1_item1'),
        t('phase1_item2'),
        t('phase1_item3'),
        t('phase1_item4')
      ]
    },
    {
      phase: t('phase2_phase'),
      title: t('phase2_title'),
      list: [
        t('phase2_item1'),
        t('phase2_item2'),
        t('phase2_item3'),
        t('phase2_item4')
      ]
    },
    {
      phase: t('phase3_phase'),
      title: t('phase3_title'),
      list: [
        t('phase3_item1'),
        t('phase3_item2'),
        t('phase3_item3'),
        t('phase3_item4')
      ]
    },
    {
      phase: t('phase4_phase'),
      title: t('phase4_title'),
      list: [
        t('phase4_item1'),
        t('phase4_item2'),
        t('phase4_item3'),
        t('phase4_item4')
      ]
    }
  ];

  return (
    <section className="relative pt-16 md:pt-[100px] px-5 bg-[url(/assets/images/bg-roadmap.png)] bg-cover pb-32 md:pb-[190px]">
      <div className="w-full max-w-[1440px] mx-auto">
        <h4 className="fade-up text-center md:text-[64px] text-[32px] font-medium text-[#C8D6FF] xl:leading-loose py-5 px-2.5 tracking-widest">
          {t('heading')}
        </h4>
        <div className="relative md:mt-[60px] mt-10 max-md:max-w-[380px] max-md:mx-auto max-md:w-full max-md:px-6">
          <div className="absolute md:w-full w-px h-full md:h-px max-md:inset-y-0 md:inset-x-0 max-md:left-[4px] md:top-1/2 flex justify-center max-md:pb-36">
            <div className="md:h-px bg-[#688BF5] w-px md:w-[90%] max-w-[1020px] relative md:right-[55px] lg:right-[55px] xl:right-10"></div>
          </div>
          <div className="flex w-full max-w-[1300px] mx-auto gap-10 md:gap-[2.34vw] xl:gap-[50px] relative @container justify-center max-md:flex-col">
            {dataRoadmap.map((item, index) => (
              <RoadmapItem
                key={index}
                phase={item.phase}
                title={item.title}
                list={item.list}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
