"use client";

import { Splide, SplideSlide, Splide as SplideClass } from "@splidejs/react-splide";
import { CardItem } from "@/components/card/CardItem";
import { Product } from "@/types";
import "@splidejs/react-splide/css";
import { useRef, useState, useEffect } from "react";

interface ProductSliderProps {
  products: Product[];
  rank?: boolean;
}

export const ProductSlider = ({
  products,
  rank = false,
}: ProductSliderProps) => {
  const splideRef = useRef<any>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const splide = splideRef.current?.splide;

    if (!splide) return;

    const updateProgress = () => {
      const total = splide.length;
      const index = splide.index + 1;
      const ratio = index / total;
      setProgress(ratio * 100);
    };

    splide.on("mounted move", updateProgress);
    updateProgress();

    return () => {
      splide.off("mounted move", updateProgress);
    };
  }, []);

  return (
    <div className="w-full pl-5 md:pl-[60px]">
      <Splide
        options={{
          pagination: false,
          arrows: false,
          autoWidth: true,
        }}
        className="w-full"
        ref={splideRef}
      >
        {products.map((item, index) => (
          <SplideSlide
            key={index}
            className="fade-item relative px-3 md:px-[15px] pt-4"
          >
            <CardItem product={item} rank={rank ? index + 1 : null} sm />
          </SplideSlide>
        ))}
      </Splide>
      <div className="px-5 mt-3 md:mt-4">
        <div className="w-full bg-[#F2F2F2] h-[5px] mb-2 relative overflow-hidden rounded max-w-[1000px] mx-auto">
            <div
            className="bg-[#3E7976] h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
            />
        </div>
      </div>
    </div>
  );
};
