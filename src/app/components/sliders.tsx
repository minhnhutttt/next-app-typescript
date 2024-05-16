"use client"
import { useRef } from "react";
import { Splide, SplideSlide } from "react-splide-ts";
import "@splidejs/splide/css";
import "@splidejs/splide/css/core";
import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function Sliders() {
    const mainRef = useRef<Splide>(null);
    const ref = useScrollAnimations();
    return (
        <section ref={ref}>
          <div className="fade-up">
            <Splide
            ref={mainRef}
            options={{
              autoplay: true,
              type   : 'loop',
              perPage: 3,
              focus  : 'center',
              arrows: false,
              pagination: false,
              autoWidth: true,
            }}
            className=""
          >
            {[...Array(6)].map((_, index) => (
                <SplideSlide key={index}>
                    <div className="lg:px-10 md:px-6 px-2">
                        <img
                        className="w-[260px] md:w-[500px] lg:w-full"
                        src={`/assets/images/slider-${index + 1}.png`}
                        alt=""
                        />
                    </div>
                </SplideSlide>
            ))}
          </Splide>
          </div>
        </section>
    );
}
