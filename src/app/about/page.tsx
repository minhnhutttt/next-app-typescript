"use client";

import { ReactNode } from "react";

const trends = [
  {
    title: "Content Convergence",
    description:
      "Boundaries between anime, gaming, film, and music continue to blur, creating demand for comprehensive rights management",
  },
  {
    title: "Digital Transformation",
    description:
      "Streaming platforms are revolutionizing content consumption patterns globally",
  },
  {
    title: "Cross-Cultural Appeal",
    description:
      "Asian entertainment content is experiencing explosive popularity in Western markets",
  },
  {
    title: "Emerging Markets",
    description:
      "ASEAN countries represent the next frontier of entertainment consumption growth",
  },
];

const AboutItem = ({
  title,
  content,
  image,
  even = false,
}: {
  title: ReactNode;
  content: ReactNode;
  image: string;
  even?: boolean;
}) => (
  <div className="w-full max-w-[1440px] mx-auto">
    <p className="xl:text-[260px] md:text-[20vw] text-[12vw] font-bold leading-[0.88] tracking-[-0.07em] xl:ml-[-24px] md:ml-[-12px]">
      {title}
    </p>
    <div
      className={`flex md:gap-10 gap-7  xl:-mt-[110px] md:-mt-[5vw] -mt-[3vw] max-xl:flex-col-reverse max-xl:items-center max-xl:justify-center ${
        even ? "flex-row-reverse xl:pr-[100px]" : "xl:pl-[100px]"
      }`}
    >
      <div className="flex-1 xl:pt-[260px]">
        <div className="leading-loose md:text-[20px] text-[16px] font-medium w-full max-w-[860px] xl:max-w-[440px] max-xl:px-5">
          {content}
        </div>
      </div>
      <div className="max-w-[860px] w-full xl:w-[65%]">
        <img src={image} alt="" />
      </div>
    </div>
  </div>
);

export default function About() {
  return (
    <main className="mt-[150px] overflow-hidden">
      <section>
        <h1 className="md:text-[64px] font-bold text-[32px] text-center md:py-[60px] py-8 leading-[1.8]">
          ABOUT US
        </h1>
        <div>
          <div className="mb-[210px]">
            <AboutItem
              title={
                <>
                  COMPANY <br />
                  VISION
                </>
              }
              content={
                <p>
                  A NEXUS stands at the intersection of global entertainment
                  markets, serving as the vital gateway connecting North
                  America, ASEAN, and East Asian creative economies. We envision
                  a world where cultural exchange through entertainment
                  transcends traditional barriers, creating unprecedented value
                  for creators, investors, and audiences alike. Our mission is
                  to establish the definitive platform for cross-border
                  entertainment rights management and content distribution,
                  leveraging our deep industry expertise and strategic global
                  presence.
                </p>
              }
              image="/assets/images/about-01.png"
            />
          </div>
          <div className="">
            <AboutItem
              title={
                <>
                  MARKET <br />
                  OVERVIEW
                </>
              }
              content={
                <p>
                  The global entertainment and media market continues to
                  experience unprecedented growth, with Asia Pacific emerging as
                  the fastest-growing region. Key trends driving our strategic
                  position
                </p>
              }
              image="/assets/images/about-02.png"
              even
            />
            <div className="max-w-[1120px] mx-auto px-5 mt-16">
              <div className="border border-[#111]/[0.2]">
                {trends.map((trend, index) => (
                  <div
                    key={index}
                    className="flex border-b border-[#111]/[0.2] last:border-b-0"
                  >
                    <div className="xl:w-[400px] md:w-[280px] w-[120px] md:text-[18px] text-[14px] font-bold p-5 border-r border-[#111]/[0.2] bg-[#EEEEEE] text-center flex items-center justify-center min-h-[94px]">
                      {trend.title}
                    </div>
                    <div className="flex items-center max-w-[680px] md:text-[18px] text-[14px] flex-1 p-5">{trend.description}</div>
                  </div>
                ))}
              </div>

              <div className="mt-8 md:mt-[60px] text-center font-bold md:text-[24px] text-[18px]">
                <p>
                  A NEXUS is uniquely positioned at the center of these
                  converging trends.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-[210px]">
            <AboutItem
              title={
                <>
                  BUSINESS <br />
                  APPROACH
                </>
              }
              content={
                <p>
                  A NEXUS creates value through an integrated, end-to-end approach to entertainment  businessa
                </p>
              }
              image="/assets/images/about-03.png"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
