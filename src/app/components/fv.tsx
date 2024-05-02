"use client";
import { Splide, SplideSlide, SplideTrack } from "react-splide-ts";
import '@splidejs/splide/css';
import '@splidejs/splide/css/core';
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useEffect, useRef } from "react";

const FV = () => {
  const ref = useScrollAnimations();

  const mainRef = useRef<Splide>(null)
  const thumbsRef = useRef<Splide>(null)
  const thumbsRef2= useRef<Splide>(null)
  useEffect(()=>{
    if ( mainRef.current && thumbsRef.current && thumbsRef.current.splide && thumbsRef2.current && thumbsRef2.current.splide ) {
        mainRef.current.sync( thumbsRef.current.splide );
        mainRef.current.sync( thumbsRef2.current.splide );
      }
  })

  return (
    <section className="relative bg-white">
      <a href="/" className="absolute left-[96px] top-[30px]">
        <img src="/images/logo.png" alt="" />
      </a>
      <div className="md:pt-[120px] relative">
        <div className="w-[282px] absolute z-10">
      <Splide
      ref={thumbsRef}
          options={{
            rewind: true,
            type: 'fade',
            arrows: false,
            pagination: false,
            isNavigation: true,
          }}
          className=""
        >
            <SplideSlide>
                <img className="w-full" src="/images/fv-img-01-circle.png" alt="" />
            </SplideSlide>
            <SplideSlide>
                <img className="w-full" src="/images/fv-img-02-circle.png" alt="" />
            </SplideSlide>
            <SplideSlide>
                <img className="w-full" src="/images/fv-img-03-circle.png" alt="" />
            </SplideSlide>
        </Splide>
        <Splide
      ref={thumbsRef2}
          options={{
            rewind: true,
            type: 'fade',
            arrows: false,
            pagination: false,
            isNavigation: true,
          }}
          className=""
        >
            <SplideSlide>
                <img className="w-full" src="/images/fv-img-01-circle.png" alt="" />
            </SplideSlide>
            <SplideSlide>
                <img className="w-full" src="/images/fv-img-02-circle.png" alt="" />
            </SplideSlide>
            <SplideSlide>
                <img className="w-full" src="/images/fv-img-03-circle.png" alt="" />
            </SplideSlide>
        </Splide>
        </div>
        <Splide
        ref={mainRef}
          hasTrack={false}
          options={{
            type: "loop",
            rewind: true,
            arrows: false
          }}
          className="w-full  flex justify-end"
        >
          <div className="w-[70%] relative">
            <div className="w-full">
              <SplideTrack>
                <SplideSlide>
                  <img className="w-full" src="/images/fv-img-01.png" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img className="w-full" src="/images/fv-img-02.png" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img className="w-full" src="/images/fv-img-03.png" alt="" />
                </SplideSlide>
              </SplideTrack>
            </div>
          </div>
          <ul className="splide__pagination"></ul>
        </Splide>
      </div>
    </section>
  );
};

export default FV;
