"use client"
import { ReactNode, useRef, useState, useEffect } from "react";
import gsap from 'gsap';

type CaseItemPropsType = {
  id: string;
  title: ReactNode;
  text: ReactNode;
};

const caseData: CaseItemPropsType[] = [
  {
    id: "1",
    title: "The Psychological Impact of Gratitude",
    text: (
      <>
        Gratitude is defined as "the manifestation of feelings towards something valuable and meaningful to oneself. <br />
          It is currently attracting attention in social psychology.<br />
          Research consistently shows that practicing gratitude significantly improves individual happiness and social relationships.
      </>
    ),
  },
  {
    id: "2",
    title: "The Physical Benefits of Gratitude",
    text: (
      <>
        The effects of expressing gratitude to others go beyond psychological benefits and also impact one's physical health and bodily functions: <br />
        <br />
      Stress reduction: Expressing gratitude to others has been shown to lead to a decrease in cortisol levels, a major stress hormone (Algoe and Way, 2014).<br />
      Improved heart health: Regular expressions of gratitude are associated with improved heart rate variability, an important indicator of cardiovascular health (Kok et al., 2013).<br />
      <br />
      Enhanced immune function: Expressing gratitude to others is associated with improved immune system responses (Bono et al., 2015).
      </>
    ),
  },
  {
    id: "3",
    title: "The Socioeconomics of Gratitude",
    text: (
      <>
        On a broader level, gratitude plays a crucial role in social cohesion and economic activity: <br />
        <br />
          Increase in socially beneficial behaviors: People who express gratitude to others are more likely to engage in helping others and making charitable donations (Bartlett and DeSteno, 2006).<br />
          Improved workplace productivity: Organizations that foster a culture of gratitude report increased employee motivation and lower turnover rates (Waters, 2012).<br />
          Strengthened social relationships: Regular expressions of gratitude contribute to building and maintaining strong interpersonal relationships (Algoe et al., 2008).
      </>
    ),
  },
];

function CaseItem({ id, title, text }: CaseItemPropsType) {
  const contentRef = useRef(null);
  const arrowRef = useRef(null);
  const isClosedRef = useRef(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleExpand = () => {
    const $content = contentRef.current;
    const $arrow = arrowRef.current;
    if (isClosedRef.current) {
      gsap.set($content, { height: "auto" });
      gsap.from($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: -45, transformOrigin: 'center' });
    } else {
      gsap.to($content, { duration: 0.2, height: 0 });
      gsap.to($arrow, { duration: 0.1, rotation: 0 });
    }
    isClosedRef.current = !isClosedRef.current;
  };

  const handleMouseEnter = () => {
    if (!isMobile && isClosedRef.current) handleExpand();
  };

  const handleMouseLeave = () => {
    if (!isMobile && !isClosedRef.current) handleExpand();
  };

  const handleClick = () => {
    if (isMobile) handleExpand();
  };

  return (
    <div
      className="fade-up px-3 md:px-6 border-b border-[#777]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        type="button"
        className="flex w-full items-center duration-200 hover:opacity-75 cursor-pointer md:pb-[24px] pb-4"
        onClick={handleClick}
      >
        <p className="flex-1 text-center text-[24px] md:text-[36px] lg:text-[50px] xl:text-[74px] leading-[1.3]">{title}</p>
        <div
          className="relative ml-2 flex items-center justify-center duration-150 size-7 md:size-12 lg:size-[70px]"
        >
          <svg ref={arrowRef} xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
            <rect x="1" y="1" width="58" height="58" rx="29" stroke="black" strokeWidth="2" />
            <path d="M28.4194 23.1163L29.2452 22.2691C29.5949 21.9103 30.1603 21.9103 30.5062 22.2691L37.7375 29.6845C38.0872 30.0433 38.0872 30.6234 37.7375 30.9783L30.5062 38.3976C30.1566 38.7564 29.5911 38.7564 29.2452 38.3976L28.4194 37.5503C28.066 37.1878 28.0734 36.5962 28.4343 36.2413L32.9167 31.8599H22.2259C21.7312 31.8599 21.3331 31.4516 21.3331 30.944V29.7227C21.3331 29.2151 21.7312 28.8067 22.2259 28.8067H32.9167L28.4343 24.4254C28.0697 24.0705 28.0623 23.4789 28.4194 23.1163Z" fill="black" />
          </svg>
        </div>
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden">
        <p className="text-[16px] leading-[1.4] md:text-[18px] md:pl-3 pb-6 w-full max-w-[960px] mx-auto pt-2.5 md:pt-[20px]">
          {text}
        </p>
      </div>
    </div>
  );
}

const Analysis = () => {
  return (
    <section className="relative px-5 md:pt-[146px] pt-[70px] md:pb-[180px] pb-20 z-10 dark:text-white">
      <div className="w-full max-w-[1280px] mx-auto relative h-full">
        <h3 className="fade-up text-center font-semibold md:text-[48px] text-[28px]">Scientific Analysis of Expressing Gratitude</h3>
        <div className="md:mt-[130px] mt-[70px]">
          <div className="mx-auto mt-5 w-full space-y-[20px] md:mt-[70px] md:space-y-[16px]">
            {caseData.map(({ id, title, text }) => (
              <CaseItem key={id} id={id} title={title} text={text} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analysis;
