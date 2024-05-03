"use client";
import { Splide, SplideSlide, SplideTrack } from "react-splide-ts";
import "@splidejs/splide/css";
import "@splidejs/splide/css/core";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useEffect, useRef } from "react";

const FV = () => {
  const ref = useScrollAnimations();

  const mainRef = useRef<Splide>(null);
  const thumbsRef = useRef<Splide>(null);
  const thumbsRef2 = useRef<Splide>(null);
  useEffect(() => {
    if (
      mainRef.current &&
      thumbsRef.current &&
      thumbsRef.current.splide &&
      thumbsRef2.current &&
      thumbsRef2.current.splide
    ) {
      mainRef.current.sync(thumbsRef.current.splide);
      mainRef.current.sync(thumbsRef2.current.splide);
    }
  });

  return (
    <section className="relative bg-white">
      <a href="/" className="absolute xl:left-[96px] left-[7%] top-[30px]">
        <img className="max-xl:w-[100px]" src="/images/logo.png" alt="" />
      </a>
      <div className="pt-[10%] xl:pt-[120px] relative bg-[url('/images/fv-bg.png')] bg-bottom bg-[length:100%_auto] bg-no-repeat">
        <div className="w-[15%] xl:w-[282px] top-[54%] right-[64.5%] absolute z-10">
          <Splide
            ref={thumbsRef}
            options={{
              rewind: true,
              type: "fade",
              arrows: false,
              pagination: false,
              isNavigation: true,
            }}
            className=""
          >
            <SplideSlide>
              <img
                className="w-full"
                src="/images/fv-img-01-circle.png"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className="w-full"
                src="/images/fv-img-02-circle.png"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className="w-full"
                src="/images/fv-img-03-circle.png"
                alt=""
              />
            </SplideSlide>
          </Splide>
        </div>
        <div className="w-[12%] xl:w-[202px] top-[26%] right-[24%] absolute z-10">
          <Splide
            ref={thumbsRef2}
            options={{
              rewind: true,
              type: "fade",
              arrows: false,
              pagination: false,
              isNavigation: true,
            }}
            className=""
          >
            <SplideSlide>
              <img
                className="w-full"
                src="/images/fv-img-01-lb.png"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className="w-full"
                src="/images/fv-img-02-lb.png"
                alt=""
              />
            </SplideSlide>
            <SplideSlide>
              <img
                className="w-full"
                src="/images/fv-img-03-lb.png"
                alt=""
              />
            </SplideSlide>
          </Splide>
        </div>
        <Splide
          ref={mainRef}
          hasTrack={false}
          options={{
            type: "loop",
            rewind: true,
            arrows: false,
          }}
          className="w-full flex justify-end"
        >
          <div className="w-[80%] relative pb-[60px]">
            <div className="w-full">
              <SplideTrack>
                <SplideSlide>
                  <img className="w-full object-cover aspect-[590/630] md:aspect-[1175/634]" src="/images/fv-img-01.png" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img className="w-full object-cover aspect-[590/630] md:aspect-[1175/634]" src="/images/fv-img-02.png" alt="" />
                </SplideSlide>
                <SplideSlide>
                  <img className="w-full object-cover aspect-[590/630] md:aspect-[1175/634]" src="/images/fv-img-03.png" alt="" />
                </SplideSlide>
              </SplideTrack>
            </div>
            <div className="flex absolute bottom-0 inset-x-0">
              <div className="relative pt-5 flex items-end gap-14">
                <figure>
                  <img src="/images/kanmi.png" alt="kanmi" />
                </figure>
                <figure className="">
                  <img src="/images/ippuku.png" alt="ippuku" />
                </figure>
              </div>
            </div>
          </div>
          <ul className="splide__pagination !bottom-[-44px]"></ul>
        </Splide>
      </div>
    </section>
  );
};

export default FV;
