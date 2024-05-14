"use client"
import { useRef } from "react";
import { Splide, SplideSlide } from "react-splide-ts";
import "@splidejs/splide/css";
import "@splidejs/splide/css/core";

export default function Sliders() {
    const mainRef = useRef<Splide>(null);
    return (
        <section>
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
        </section>
    );
}
