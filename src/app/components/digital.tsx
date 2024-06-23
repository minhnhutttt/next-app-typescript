"use client";
import useBackground from '@/hooks/useBackground';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLayoutEffect } from 'react';

gsap.registerPlugin(ScrollTrigger)

const Digital = () => {

    useBackground();
  return (
    <section className="mb-[256px] max-md:mb-[82px]">
      <div>
        <div className="font-anton text-[calc(18px_+_8vw)] mb-[-.7em] relative z-10 container">
          <h2 className="uppercase leading-[1.25]">
            <span className="stroke">FACILITATING</span> BUSINESS GROWTH THROUGH GLOBAL TALENT ACQUISITION.
          </h2>
        </div>
        <div className="relative overflow-hidden aspect-[2.4/1] max-md:aspect-[4/3]">
          <div className="img-container absolute bottom-[-100px] left-0 h-[calc(100%_+_100px)] w-[calc(100%_+_100px)] bg-center bg-cover bg-[url('/assets/images/about.jpg')]"></div>
        </div>
        <div className="overflow-hidden bg-[#eee] relative">
          <a className="block" href="/about/">
            <div className="font-anton text-[calc(16px_+_3vw)] flex justify-end items-center py-[3%] pr-[16px]">
              <div className="flex items-center gap-[16px] uppercase leading-none">
                More <span className="stroke">About</span> Us
                <div className="text-[21px] bg-white w-[3em] flex justify-center items-center rounded-full aspect-square">
                  <img
                    src="/assets/images/arrow.svg"
                    className="max-h-[50%]"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Digital;
