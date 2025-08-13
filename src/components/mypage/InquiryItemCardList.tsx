"use client";

import { useState, useRef, useEffect } from "react";
import { Product } from "@/types";
import gsap from "gsap";
import CardList from "../card/CardList";
import { Button } from "../common/Button";

interface LoadMoreCardListProps {
  products: Product[];
}

export const InquiryItemCardList = ({ products }: LoadMoreCardListProps) => {
  const INITIAL_COUNT = 12;
  const LOAD_MORE_COUNT = 8;

  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const containerRef = useRef<HTMLDivElement>(null);
  const prevCountRef = useRef(INITIAL_COUNT);

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
          duration: 0.4,
          ease: "power2.out",
          stagger: 0.05,
        }
      );
    }

    prevCountRef.current = visibleCount;
  }, [visibleCount]);

  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + LOAD_MORE_COUNT, products.length));
  };

  return (
    <div>
      <div ref={containerRef}>
        <CardList products={products.slice(0, visibleCount)} />
      </div>

      {visibleCount < products.length && (
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
