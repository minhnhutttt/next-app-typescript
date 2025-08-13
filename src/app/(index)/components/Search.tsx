"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/common/Button";
import { ButtonItem } from "@/components/common/ButtonItem";

interface SearchProps {
  title: string;
  items: string[];
}

export const Search = ({ title, items }: SearchProps) => {
  const [showAll, setShowAll] = useState(false);
  const extraRefs = useRef<HTMLDivElement[]>([]);

  const initialItems = items.slice(0, 8);
  const extraItems = items.slice(8);

  useEffect(() => {
    if (showAll) {
      gsap.fromTo(
        extraRefs.current,
        { y: -10, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
        }
      );
    }
  }, [showAll]);

  return (
    <div className="w-full md:px-10 mx-auto">
      <div className="fade-up md:text-[40px] text-[24px] font-bold max-md:text-center">
        {title}
      </div>

      <div className="max-md:grid-cols-3 max-sm:grid-cols-2 grid md:flex items-center flex-wrap md:gap-x-[50px] md:gap-y-10 gap-y-6 gap-x-1 md:mt-9 mt-5">
        {initialItems.map((item, index) => (
          <ButtonItem key={index}>{item}</ButtonItem>
        ))}

        {showAll &&
          extraItems.map((item, index) => (
            <div className="max-w-[224px] w-full"
              key={item}
              ref={(el) => {
                if (el) extraRefs.current[index] = el;
              }}
            >
              <ButtonItem>{item}</ButtonItem>
            </div>
          ))}
      </div>

      {!showAll && extraItems.length > 0 && (
        <div className="flex justify-center md:mt-10 mt-7">
          <Button sm onClick={() => setShowAll(true)}>
            <span className="flex items-center gap-2">
              もっと見る{" "}
              <img
                className="max-md:w-4"
                src="/assets/images/ic-plus.svg"
                alt=""
              />
            </span>
          </Button>
        </div>
      )}
    </div>
  );
};
