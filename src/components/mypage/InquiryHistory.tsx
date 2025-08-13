"use client";

import { useState, useRef, useEffect } from "react";
import { Product } from "@/types";
import { InquiryItem } from "./InquiryItem";
import gsap from "gsap";
import { Button } from "../common/Button";

export type InquiryGroup = {
  date: string;
  items: { product: Product; type: "inquiry" | "responses" | "completion" }[];
};

interface InquiryHistoryProps {
  data: InquiryGroup[];
}

export const InquiryHistory = ({ data }: InquiryHistoryProps) => {
     const INITIAL_COUNT = 2;
  const LOAD_MORE_COUNT = 2;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const containerRef = useRef<HTMLDivElement>(null);
  const prevCountRef = useRef(LOAD_MORE_COUNT);

  useEffect(() => {
    if (!containerRef.current) return;

    const newItems = Array.from(containerRef.current.children).slice(
      prevCountRef.current,
      visibleCount
    );

    if (newItems.length > 0) {
      gsap.fromTo(
        newItems,
        { height: 0, opacity: 0, y: -20 },
        {
          height: "auto",
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.1,
        }
      );
    }

    prevCountRef.current = visibleCount;
  }, [visibleCount]);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, data.length));
  };

  return (
    <div>
      <p className="md:text-[40px] text-[24px] font-bold">商品問い合わせ履歴</p>

      <div ref={containerRef}>
        {data.slice(0, visibleCount).map((group) => (
          <div key={group.date} className="md:mt-10 mt-5 overflow-hidden">
            <div className="md:text-[24px] text-[18px] font-bold mb-2.5 md:mb-5">
              {group.date}
            </div>
            <div className="border-y border-[#666] divide-y divide-[#666]">
              {group.items.map((item, i) => (
                <InquiryItem
                  key={i}
                  product={item.product}
                  type={item.type}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {visibleCount < data.length && (
        <div className="flex justify-center md:mt-10 mt-5">
          <Button onClick={handleShowMore} sm>
            <span className="flex items-center gap-2">
              もっと見る
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
