"use client";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { CardItem } from "@/components/card/CardItem";
import { Product } from "@/types";
import "@splidejs/react-splide/css";
import { useRef, useEffect } from "react";

interface ProductSliderProps {
  products: Product[];
  rank?: boolean;
}

export const ProductSlider = ({
  products,
  rank = false,
}: ProductSliderProps) => {
  const splideRef = useRef<any>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const splide = splideRef.current?.splide;
    const paginationEl = paginationRef.current;
    if (!splide || !paginationEl) return;

    // renderPagination và updateActive được định nghĩa ở ngoài handler để có thể off()
    const renderPagination = () => {
      const slidesCount = splide.length ?? 0;
      if (!slidesCount) {
        paginationEl.innerHTML = "";
        return;
      }

      const percent = 100 / slidesCount;
      // reset
      paginationEl.innerHTML = "";

      for (let i = 0; i < slidesCount; i++) {
        // Dùng button để accessible và dễ focus
        const segment = document.createElement("button");
        segment.type = "button";
        segment.className = "pagination-segment";
        segment.style.width = `${percent}%`;
        segment.style.height = "100%";
        segment.setAttribute("aria-label", `Go to slide ${i + 1}`);
        segment.dataset.index = String(i);

        if (i === splide.index) segment.classList.add("active");

        // khi click -> chuyển slide
        segment.addEventListener("click", () => splide.go(i));
        paginationEl.appendChild(segment);
      }
    };

    const moveHandler = (newIndex: number) => {
      const segments = Array.from(paginationEl.children);
      segments.forEach((seg, idx) => {
        seg.classList.toggle("active", idx === newIndex);
      });
    };

    const mountedHandler = () => {
      renderPagination();
    };

    if (splide.root) {
      renderPagination();
    } else {
      splide.on("mounted", mountedHandler);
    }

    splide.on("move", moveHandler);

    const onResize = () => {
      renderPagination();
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      splide.off("move", moveHandler);
      splide.off("mounted", mountedHandler);
    };
  }, [products.length]);

  return (
    <div className="w-full pl-5 md:pl-[60px]">
      <Splide
        options={{
          type: "loop",
          pagination: false,
          arrows: false,
          autoWidth: true,
           perMove: 1,
        }}
        className="w-full"
        ref={splideRef}
        hasTrack={false}
      >
        <SplideTrack>
          {products.map((item, index) => (
            <SplideSlide key={index} className="fade-item relative px-3 md:px-[15px] pt-4">
              <CardItem product={item} rank={rank ? index + 1 : null} sm />
            </SplideSlide>
          ))}
        </SplideTrack>

        <div ref={paginationRef} className="custom-pagination pagination-bar mt-5 md:mt-8" />
      </Splide>
    </div>
  );
};
