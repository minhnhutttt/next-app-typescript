"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

interface TagListProps {
  tags: string[];
}

export const TagList = ({ tags }: TagListProps) => {
    const INITIAL_COUNT = 3;
  const [isMobile, setIsMobile] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (showAll && containerRef.current) {
      const allItems = Array.from(containerRef.current.children);
      const newItems = allItems.slice(INITIAL_COUNT);

      gsap.fromTo(
        newItems,
        { height: 0 },
        {
          height: "auto",
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    }
  }, [showAll]);

  const displayedTags =
    isMobile && !showAll ? tags.slice(0, INITIAL_COUNT) : tags;

  return (
    <div className="flex flex-col items-center">
      <div
        ref={containerRef}
        className="flex flex-wrap md:gap-5 gap-3 md:my-10 mt-8 mb-5 max-md:max-w-[312px] mx-auto"
      >
        {displayedTags.map((tag, index) => (
          <label
            key={index}
            className="cursor-pointer overflow-hidden"
          >
            <input
              type="checkbox"
              name="tags"
              value={tag}
              className="peer hidden"
            />
            <span
              className="flex items-center justify-center w-[96px] h-8 md:w-[184px] md:h-[56px] 
                         rounded-full text-center text-[16px] font-bold bg-[#EBEBEB] 
                         peer-checked:bg-[#3E7976] duration-300 hover:opacity-70 
                         peer-checked:text-white"
            >
              {tag}
            </span>
          </label>
        ))}
      </div>

      {isMobile && (
        <button  onClick={() => setShowAll(!showAll)} className="text-[#3E7976] md:text-[24px] text-[18px] flex items-center justify-center gap-3">
            商品ジャンルをさらに表示する
            <span className={`group relative size-5 flex items-center justify-center ${showAll && 'active'}`}>
                <span className="w-full h-0.5 rounded-full bg-[#3E7976]"></span>
                <span className="absolute top-0 w-0.5 h-full rounded-full bg-[#3E7976] group-[.active]:rotate-90 duration-300"></span>
            </span>
        </button>
      )}
    </div>
  );
};
