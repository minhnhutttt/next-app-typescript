"use client";
import { ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

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

const business = [
  {
    id: 1,
    title: "Rights Acquisition & Management",
    description:
      "Strategic acquisition and optimization of  entertainment IP rights across multiple markets, with specialized legal expertise in cross border licensing ",
  },
  {
    id: 2,
    title: "Cross-Platform Distribution",
    description:
      "Facilitating content distribution across diverse platforms and  regions, leveraging proprietary technology and market intelligence ",
  },
  {
    id: 3,
    title: "Production Services",
    description: (
      <>
        Enabling content creation through financing, production support, 
        <br />
        and creative development tailored to both local and global audience
        preferences
      </>
    ),
  },
  {
    id: 4,
    title: "Market Access",
    description:
      "Providing established channels and cultural expertise for content creators  to successfully enter and thrive in new markets ",
  },
  {
    id: 5,
    title: "Brand Development",
    description:
      "Transforming entertainment properties into global franchises  through strategic promotion and localized marketing approaches",
  },
  {
    id: 6,
    title: "Technology Integration",
    description:
      "Implementing cutting-edge digital solutions that enhance  discovery, consumption, and monetization of content across borders",
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
    <p
      data-scroll="out"
      className="text--enter overflow-hidden xl:text-[260px] md:text-[20vw] text-[12vw] font-bold leading-[0.88] tracking-[-0.07em] xl:ml-[-24px] md:ml-[-12px]"
    >
      <span data-splitting>{title}</span>
    </p>
    <div
      className={`flex md:gap-10 gap-7  xl:-mt-[110px] md:-mt-[5vw] -mt-[3vw] max-xl:flex-col-reverse max-xl:items-center max-xl:justify-center ${
        even ? "flex-row-reverse xl:pr-[100px]" : "xl:pl-[100px]"
      }`}
    >
      <div className="flex-1 xl:pt-[260px]">
        <div
          data-scroll="out"
          className="ani-fade-up leading-loose md:text-[20px] text-[16px] font-medium w-full max-w-[860px] xl:max-w-[440px] max-xl:px-5"
        >
          {content}
        </div>
      </div>
      <div data-scroll className="ani-blur max-w-[860px] w-full xl:w-[65%]">
        <img src={image} alt="" />
      </div>
    </div>
  </div>
);
const AboutContent = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".panel");
      const sliderContainer = sliderRef.current;
      const container = containerRef.current;

      if (!sliderContainer || !container) return;


      const endValue = () => "+=" + sliderContainer.offsetWidth;

      gsap.to(panels, {
        left: 0,
        scrollTrigger: {
          trigger: animationRef.current,
          start: "top top",
        },
      });

      gsap.to(panels, {
        x: -sliderContainer.offsetWidth + window.innerWidth,
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "center center",
          end: endValue,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div className="md:mb-[210px] mb-[110px]">
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
              markets, serving as the vital gateway connecting North America,
              ASEAN, and East Asian creative economies. We envision a world
              where cultural exchange through entertainment transcends
              traditional barriers, creating unprecedented value for creators,
              investors, and audiences alike. Our mission is to establish the
              definitive platform for cross-border entertainment rights
              management and content distribution, leveraging our deep industry
              expertise and strategic global presence.
            </p>
          }
          image="/assets/images/about-01.png"
        />
      </div>
      <div className="md:mb-[210px] mb-[110px]">
        <AboutItem
          title={
            <>
              MARKET <br />
              OVERVIEW
            </>
          }
          content={
            <p>
              The global entertainment and media market continues to experience
              unprecedented growth, with Asia Pacific emerging as the
              fastest-growing region. Key trends driving our strategic position
            </p>
          }
          image="/assets/images/about-02.png"
          even
        />
        <div className="max-w-[1120px] mx-auto px-5 md:mt-16 mt-10">
          <div data-scroll="out" className="ani-fade-up border border-[#111]/[0.2]">
            {trends.map((trend, index) => (
              <div
                key={index}
                className="flex border-b border-[#111]/[0.2] last:border-b-0"
              >
                <div className="xl:w-[400px] md:w-[280px] w-[120px] md:text-[18px] text-[14px] font-bold p-5 border-r border-[#111]/[0.2] bg-[#EEEEEE] text-center flex items-center justify-center min-h-[94px]">
                  {trend.title}
                </div>
                <div className="flex items-center max-w-[680px] md:text-[18px] text-[14px] flex-1 p-5">
                  {trend.description}
                </div>
              </div>
            ))}
          </div>

          <div data-scroll="out" className="ani-fade-up mt-8 md:mt-[60px] text-center font-bold md:text-[24px] text-[18px]">
            <p>
              A NEXUS is uniquely positioned at the center of these converging
              trends.
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
              A NEXUS creates value through an integrated, end-to-end approach
              to entertainment businessa
            </p>
          }
          image="/assets/images/about-03.png"
        />
        <div className="w-full relative pb-20 md:mt-[-60px] mt-12">
          <div
            ref={animationRef}
            className="md:pt-[9em] pt-[3em] overflow-hidden"
          >
            <div ref={containerRef} className="flex items-center">
              <div className="relative">
                <div
                  ref={sliderRef}
                  className="flex items-center w-[calc(((350px_*_6)_+_(4vw_*_5))_+_41vw)] gap-[4vw] md:w-[calc(((564px_*_6)_+_(3vw_*_5))_+_80vw)] mx-[10vw] md:gap-[3vw] my-[7rem] h-[60rem] md:max-h-[calc(100vh-10rem)] max-h-[calc(100vh-8rem)]"
                >
                  {business.map((item) => (
                    <div
                      key={item.id}
                      className="panel md:!w-[564px] md:!h-[472px] !h-[350px] bg-[#EEEEEE] !w-[330px] mx-2.5 rounded-[30px] border border-[#F34927]"
                    >
                      <div className="relative p-5 md:p-[30px]">
                        <div className="md:w-[130px] md:h-[167px] w-16 h-[90px] flex justify-between relative">
                          <span className="md:text-[120px] text-[50px] leading-none font-medium text-[#F34927]">
                            {item.id}
                          </span>
                          <span className="w-px h-[80px] md:h-[160px] absolute bg-[#111] rotate-[30deg] md:left-10 left-4 top-0 origin-bottom"></span>
                          <span className="md:text-[64px] text-[32px] leading-none font-medium flex items-end pb-3">
                            {business.length}
                          </span>
                        </div>
                        <div className="md:py-10 py-5 px-2 md:px-[18px]">
                          <p className="text-center md:text-[24px] font-semibold text-[20px]">
                            {item.title}
                          </p>
                          <p className="md:text-[18px] text-[15px] md:mt-[30px] mt-[20px]">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
