"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useState } from "react";

const Projects = () => {
  const ref = useScrollAnimations();
  const [tab, setTab] = useState<number>(1);

  const handleToggle = (index: number) => {
    setTab(tab === index ? 1 : index);
  };
  return (
    <section ref={ref} className="relative mt-[175px] px-5 z-10">
      <div className="w-full max-w-[1360px] mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h5 className="text-center md:text-[48px] text-[36px] font-bold text-white leading-[1.3] mt-5">
            DRC20 Token Projects
          </h5>
          <p className="text-center text-[20px] md:text-[32px] flex items-center">
            <span>-</span> The essence of a world created by free <span>-</span>
          </p>
        </div>
        <div className="relative rounded-[60px] border border-[#005FD7] overflow-hidden mt-7 pt-[111px] px-[30px]">
          <span className="absolute inset-0 opacity-20 bg-[radial-gradient(28.72%_24.56%_at_21.47%_29.47%,_#CBC8C8_0%,_#000_100%)]"></span>
          <div className="grid grid-cols-4 md:text-[20px] text-[18px] font-semibold bg-white relative rounded-[20px]">
            <span
              className="top-0 absolute w-1/4 h-full bg-[linear-gradient(145deg,_#3576FE_33.61%,_#0B3FAD_79.25%)] rounded-[20px] transition-transform duration-300"
              style={{ transform: `translateX(${(tab - 1) * 100}%)` }}
            ></span>
            <button
              onClick={() => handleToggle(1)}
              className={`relative h-20 flex items-center justify-center rounded-[20px] gap-[3px] ${tab === 1 ? "text-white" : "text-[#212534]"}`}
            >
              <span className="relative">
                <img
                  className={`${tab !== 1 ? "opacity-0" : "opacity-100"}`}
                  src="/assets/images/ic-wrapping-on.svg"
                  alt=""
                />
                <img
                  className={`absolute inset-0 ${tab === 1 ? "opacity-0" : "opacity-100"}`}
                  src="/assets/images/ic-wrapping-off.svg"
                  alt=""
                />
              </span>
              <span>Wrapping</span>
            </button>
            <button
              onClick={() => handleToggle(2)}
              className={`relative h-20 flex items-center justify-center rounded-[20px] gap-[3px] ${tab === 2 ? "text-white" : "text-[#212534]"}`}
            >
              <span className="relative">
                <img
                  className={`${tab !== 2 ? "opacity-0" : "opacity-100"}`}
                  src="/assets/images/ic-medical-on.svg"
                  alt=""
                />
                <img
                  className={`absolute inset-0 ${tab === 2 ? "opacity-0" : "opacity-100"}`}
                  src="/assets/images/ic-medical-off.svg"
                  alt=""
                />
              </span>
              <span>Medical</span>
            </button>
            <button
              onClick={() => handleToggle(3)}
              className={`relative h-20 flex items-center justify-center rounded-[20px] gap-[3px] ${tab === 3 ? "text-white" : "text-[#212534]"}`}
            >
              <span className="relative">
                <img
                  className={`${tab !== 3 ? "opacity-0" : "opacity-100"}`}
                  src="/assets/images/ic-donations-on.svg"
                  alt=""
                />
                <img
                  className={`absolute inset-0 ${tab === 3 ? "opacity-0" : "opacity-100"}`}
                  src="/assets/images/ic-donations-off.svg"
                  alt=""
                />
              </span>
              <span>Donations</span>
            </button>
            <button
              onClick={() => handleToggle(4)}
              className={`relative h-20 flex items-center justify-center rounded-[20px] gap-[3px] ${tab === 4 ? "text-white" : "text-[#212534]"}`}
            >
              <span className="relative">
                <img
                  className={`${tab !== 4 ? "opacity-0" : "opacity-100"}`}
                  src="/assets/images/ic-other-on.svg"
                  alt=""
                />
                <img
                  className={`absolute inset-0 ${tab === 4 ? "opacity-0" : "opacity-100"}`}
                  src="/assets/images/ic-other-off.svg"
                  alt=""
                />
              </span>
              <span>Other</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
