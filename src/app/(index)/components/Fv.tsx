"use client";

import { useEffect, useState } from "react";
import ImageDisintegrator from "./ImageDisintegrator";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Fv = () => {
  const ref = useScrollAnimations();

  const [activeIndex, setActiveIndex] = useState<0 | 1>(0);
  const [dis1, setDis1] = useState(false);
  const [re1, setRe1] = useState(false);
  const [dis2, setDis2] = useState(false);
  const [re2, setRe2] = useState(false);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsShow(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      if (activeIndex === 0) {
        setDis1(true);
        setRe2(true);
        setTimeout(() => {
          setIsShow(true)
          setDis1(false);
          setRe2(false);
        }, 100);
        setActiveIndex(1);
      } else {
        setDis2(true);
        setRe1(true);
        setTimeout(() => {
          setDis2(false);
          setRe1(false);
        }, 100);
        setActiveIndex(0);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section
      ref={ref}
      className="relative bg-[url(/assets/images/bg-fv.png)] bg-bottom overflow-hidden sm:pb-[140px] pb-20"
    >
      <div className="fade-up flex justify-center items-center pt-[130px] px-5">
        <h1>
          <img src="/assets/images/fv-text.svg" alt="" />
        </h1>
      </div>

      <div className="flex items-center justify-center -mt-6 relative">
        <p className="fade-up-200">
          <img src="/assets/images/fv-people-01.png" alt="" />
        </p>
        <div className="fade-up-400 max-md:w-[25vw] absolute left-0 md:bottom-[-75px] -bottom-10 z-10">
          <img src="/assets/images/fv-people-02.png" alt="" />
        </div>
        <div className="fade-up-600 max-md:w-[30vw] absolute right-[-20px] -bottom-9 md:bottom-[-70px] z-10">
          <img src="/assets/images/fv-people-03.png" alt="" />
        </div>
      </div>

      <div className="fade-up-200 flex items-center justify-center -mt-[37vw] md:-mt-[240px] relative">
        <div className="relative">
          <p className="[filter:drop-shadow(0_4px_50px_rgba(74,_0,_39,_0.20))]">
            <img src="/assets/images/frame.png" alt="" />
          </p>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="max-md:max-w-[70vw]">
              <ImageDisintegrator
                imageSrc="/assets/images/fv-01.png"
                startDisintegrate={dis1}
                startReintegrate={re1}
              />
            </div>
          </div>

          <div className={`absolute inset-0 flex items-center justify-center ${isShow ? 'opacity-100' : 'opacity-0'}`}>
            <div className="max-md:max-w-[70vw]">
              <ImageDisintegrator
                imageSrc="/assets/images/fv-02.png"
                startDisintegrate={dis2}
                startReintegrate={re2}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Fv;
