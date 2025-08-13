"use client";
import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { Button } from "@/components/common/Button";

type Survey = {
  id: number;
  avatar: string;
  text: string;
  date: string;
};

const mockSurvey: Survey[] = [
  { id: 1, avatar: "/assets/images/user-icon-03.png", text: "アンケートテキスト 1", date: "2025/08/10" },
  { id: 2, avatar: "/assets/images/user-icon-03.png", text: "アンケートテキスト 2", date: "2025/08/11" },
  { id: 3, avatar: "/assets/images/user-icon-03.png", text: "アンケートテキスト 3", date: "2025/08/12" },
  { id: 4, avatar: "/assets/images/user-icon-03.png", text: "アンケートテキスト 4", date: "2025/08/13" },
  { id: 5, avatar: "/assets/images/user-icon-03.png", text: "アンケートテキスト 5", date: "2025/08/14" },
  { id: 6, avatar: "/assets/images/user-icon-03.png", text: "アンケートテキスト 6", date: "2025/08/15" }
];

export default function SurveyList() {
  const INITIAL_COUNT = 2;
  const LOAD_MORE_COUNT = 2;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef.current && visibleCount > INITIAL_COUNT) {
      const allItems = containerRef.current.querySelectorAll(".survey-item");
      const newItems = Array.from(allItems).slice(visibleCount - LOAD_MORE_COUNT);

      gsap.fromTo(
        newItems,
        { opacity: 0, y: 30, height: 0 },
        {
          opacity: 1,
          y: 0,
          height: "auto",
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1
        }
      );
    }
  }, [visibleCount]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, mockSurvey.length));
  };

  return (
    <div>
      <div ref={containerRef}>
        {mockSurvey.slice(0, visibleCount).map((survey) => (
            <div key={survey.id} className="survey-item flex items-center gap-4 md:gap-20 md:mt-[72px] mt-8">
                <div className="flex flex-col items-center justify-center gap-2 md:gap-2.5">
                    <p><img className="max-md:max-w-[52px]" src={survey.avatar} alt="" /></p>
                </div>
                <div className="flex-1 md:border-4 border-2 border-[#ccc] px-5 py-5 md:py-[52px] md:rounded-[60px] rounded-[30px] relative flex items-center justify-center md:before:aspect-[53/68] before:aspect-[15/17] md:before:bg-[url(/assets/images/sppech-bubble.png)] before:bg-[url(/assets/images/sppech-bubble-sp.png)] before:absolute before:right-full before:w-[15px] md:before:w-[53px]">
                    <div className="w-full max-w-[728px] mx-auto">
                        <p className="md:text-[24px] text-[18px]">{survey.text}</p>
                        <p className="md:text-[24px] text-[16px] md:mt-8 mt-2.5 text-right">{survey.date}</p>
                    </div>
                </div>
            </div>
        ))}
      </div>

      {visibleCount < mockSurvey.length && (
        <div className="flex justify-center md:mt-10 mt-5">
          <Button onClick={handleLoadMore} sm>
            <span className="flex items-center gap-2">
              もっと見る
              <img className="max-md:w-4" src="/assets/images/ic-plus.svg" alt="" />
            </span>
          </Button>
        </div>
      )}
    </div>
  );
}
