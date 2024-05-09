"use client";
import { Splide, SplideSlide, SplideTrack } from "react-splide-ts";
import "@splidejs/splide/css";
import "@splidejs/splide/css/core";
import { useEffect, useRef } from "react";
import useScrollAnimations from "@/hooks/useScrollAnimations";

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
    <section ref={ref} className="relative bg-white overflow-hidden">
      <a href="/" className="absolute xl:left-[96px] left-0 md:left-[7%] top-[30px] max-md:w-[20%] max-xl:w-[100px] max-w-[145px] z-20">
        <img className="" src="/images/logo.png" alt="" />
      </a>
      <div className="pt-[10%] xl:pt-[120px] relative bg-[url('/images/fv-bg.png')] bg-bottom md:bg-[length:100%_auto] bg-[length:auto_40%] bg-no-repeat">
        <div className="zoom-out md:w-[15%] w-[35%] xl:w-[282px] md:top-[54%] top-[60%] md:right-[64.5%] right-[60%] absolute z-10 overflow-hidden rounded-full">
          <Splide
            ref={thumbsRef}
            options={{
              autoplay: true,
              rewind: true,
              type: "fade",
              arrows: false,
              pagination: false,
              isNavigation: true,
              speed: 1000
            }}
            className="bg-white"
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
        <div className="zoom-out md:w-[12%] w-[25%] xl:w-[202px] top-[12%] md:top-[26%] right-[5%] md:right-[24%] absolute z-10">
          <Splide
            ref={thumbsRef2}
            options={{
              autoplay: true,
              rewind: true,
              type: "fade",
              arrows: false,
              pagination: false,
              isNavigation: true,
              speed: 1000
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
            autoplay: true,
            type: "fade",
            rewind: true,
            arrows: false,
            speed: 1000
          }}
          className="w-full flex justify-end js-slider fade-right"
        >
          <div className="w-[80%] md:w-[70%] relative md:pb-[60px] pb-[40px]">
            <div className="w-full bg-white  aspect-[590/630] md:aspect-[1175/634]">
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
              <div className="relative pt-5 flex items-end md:gap-14 gap-5 pr-5">
                <figure>
                  <img className="max-md:w-[150px]" src="/images/kanmi.png" alt="kanmi" />
                </figure>
                <figure className="">
                  <img className="max-md:w-[200px]" src="/images/ippuku.png" alt="ippuku" />
                </figure>
              </div>
            </div>
          </div>
          <ul className="splide__pagination md:!bottom-[-44px] !bottom-[-32px]"></ul>
        </Splide>
      </div>
      <div className="fade-up px-8 md:pt-[100px] md:pb-[140px] pt-[50px] pb-[70px]">
        <h2 className="flex justify-center items-center">
          <img className="max-md:hidden" src="/images/title.png" alt="" />
          <img className="md:hidden" src="/images/title-sp.png" alt="" />
        </h2>
      </div>
    </section>
  );
};

export default FV;
