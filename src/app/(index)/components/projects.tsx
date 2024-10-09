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
    <section ref={ref} className="relative md:mt-[175px] mt-[100px] px-5 z-10">
      <div className="w-full max-w-[1360px] mx-auto">
        <div className="fade-up flex flex-col items-center justify-center">
          <h5 className="text-center md:text-[48px] text-[36px] font-bold text-white leading-[1.3] mt-5">
            DRC20 Token Projects
          </h5>
          <p className="text-center text-[20px] md:text-[32px] flex items-center">
            <span>-</span> The essence of a world created by free <span>-</span>
          </p>
        </div>
        <div className="fade-up relative md:rounded-[60px] rounded-[30px] border border-[#005FD7] overflow-hidden mt-7 p-5 md:pt-[111px] md:pb-[101px] md:px-[30px]">
          <span className="absolute inset-0 opacity-20 bg-[radial-gradient(28.72%_24.56%_at_21.47%_29.47%,_#CBC8C8_0%,_#000_100%)]"></span>
          <div className="grid md:grid-cols-4 grid-cols-2 md:text-[20px] text-[18px] font-semibold bg-white relative rounded-[20px]">
            <span
              className="max-md:hidden top-0 absolute md:w-1/4 w-1/2 h-full bg-[linear-gradient(145deg,_#3576FE_33.61%,_#0B3FAD_79.25%)] rounded-[20px] transition-transform duration-300"
              style={{ transform: `translateX(${(tab - 1) * 100}%)` }}
            ></span>
            <span
              className={`md:hidden absolute md:w-1/4 w-1/2 h-20 bg-[linear-gradient(145deg,_#3576FE_33.61%,_#0B3FAD_79.25%)] rounded-[20px] transition-all duration-300 ${tab <= 2 ? "top-0 " : "bottom-0"}`}
              style={{
                transform: `translateX(${(tab - (tab <= 2 ? 1 : 3)) * 100}%)`,
              }}
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
          {tab === 1 && (
            <div className="min-h-[430px] md:min-h-[640px] bg-[#EAF6FF] rounded-[30px] relative mt-[18px] px-5 flex flex-col items-center justify-center gap-[30px] py-5">
              <p className="md:text-[24px] text-[18px] font-medium text-center text-black">
                Enabling efficient cross-chain asset movement, breaking down
                walls between blockchains
              </p>
              <div>
                <p className="text-center font-bold md:text-[36px] text-[24px] text-black mb-5">
                  DwETH
                </p>
                <div className="size-[200px] md:size-[280px] mx-auto bg-white rounded-full flex items-center justify-center">
                  <img className="max-md:w-[100px]" src="/assets/images/logo-dweth.svg" alt="" />
                </div>
              </div>
              <a
                href="/"
                className="md:w-[290px] w-[220px] md:h-[70px] h-[50px] flex justify-center items-center bg-[#005FD7] rounded-[80px] [box-shadow:-3px_-4px_20px_0px_rgba(255,_255,_255,_0.15)_inset,_4px_10px_30px_0px_rgba(24,_83,_158,_0.50)] md:text-[20px] text-[18px] font-semibold"
              >
                DwETH
              </a>
            </div>
          )}
          {tab === 2 && (
            <div className="min-h-[430px] md:min-h-[640px] bg-[#EAF6FF] rounded-[30px] relative mt-[18px] px-5 flex flex-col items-center justify-center gap-[30px] py-5">
              <p className="md:text-[24px] text-[18px] font-medium text-center text-black">
              From nano-level innovations to new therapies, a new medical frontier is here
              </p>
              <div className="flex max-md:gap-10 flex-wrap justify-center xl:divide-x divide-[#53A1D8]">
                <div className="px-10">
                  <div>
                    <p className="text-center font-bold md:text-[36px] text-[24px] text-black mb-5">
                      EXO
                    </p>
                    <div className="size-[200px] md:size-[280px] mx-auto  bg-white rounded-full flex items-center justify-center mb-[30px]">
                      <img src="/assets/images/logo-exo.svg" alt="" />
                    </div>
                  </div>
                  <a
                    href="https://exodao.org/"
                    target="_blank"
                    className="md:w-[290px] w-[220px] md:h-[70px] h-[50px] flex justify-center items-center bg-[#005FD7] rounded-[80px] [box-shadow:-3px_-4px_20px_0px_rgba(255,_255,_255,_0.15)_inset,_4px_10px_30px_0px_rgba(24,_83,_158,_0.50)] md:text-[20px] text-[18px] font-semibold"
                  >
                    EXO
                  </a>
                </div>
                <div className="px-10">
                  <div>
                    <p className="text-center font-bold md:text-[36px] text-[24px] text-black mb-5">
                      iPS
                    </p>
                    <div className="size-[200px] md:size-[280px] mx-auto  bg-white rounded-full flex items-center justify-center mb-[30px]">
                      <img
                        className="md:w-[100px]"
                        src="/assets/images/logo-ips.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <a
                    href="https://ipsdao.org/"
                    target="_blank"
                    className="md:w-[290px] w-[220px] md:h-[70px] h-[50px] flex justify-center items-center bg-[#005FD7] rounded-[80px] [box-shadow:-3px_-4px_20px_0px_rgba(255,_255,_255,_0.15)_inset,_4px_10px_30px_0px_rgba(24,_83,_158,_0.50)] md:text-[20px] text-[18px] font-semibold"
                  >
                    iPS
                  </a>
                </div>
                <div className="px-10">
                  <div>
                    <p className="text-center font-bold md:text-[36px] text-[24px] text-black mb-5">
                    HGF
                    </p>
                    <div className="size-[200px] md:size-[280px] mx-auto  bg-white rounded-full flex items-center justify-center mb-[30px]">
                      <img
                        className="md:w-[100px]"
                        src="/assets/images/logo-hgf.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <a
                    href="https://hgfdao.org/"
                    target="_blank"
                    className="md:w-[290px] w-[220px] md:h-[70px] h-[50px] flex justify-center items-center bg-[#005FD7] rounded-[80px] [box-shadow:-3px_-4px_20px_0px_rgba(255,_255,_255,_0.15)_inset,_4px_10px_30px_0px_rgba(24,_83,_158,_0.50)] md:text-[20px] text-[18px] font-semibold"
                  >
                    HGF
                  </a>
                </div>
              </div>
            </div>
          )}
          {tab === 3 && (
            <div className="min-h-[430px] md:min-h-[640px] bg-[#EAF6FF] rounded-[30px] relative mt-[18px] px-5 flex flex-col items-center justify-center gap-[30px] py-5">
            <p className="md:text-[24px] text-[18px] font-medium text-center text-black">
            Creating new standards for social contribution with highly transparent donation systems
            </p>
            <div>
              <p className="text-center font-bold md:text-[36px] text-[24px] text-black mb-5">
              CIP
              </p>
              <div className="size-[200px] md:size-[280px] mx-auto bg-white rounded-full flex items-center justify-center">
              </div>
            </div>
            <a
              href="/"
              className="md:w-[290px] w-[220px] md:h-[70px] h-[50px] flex justify-center items-center bg-[#005FD7] rounded-[80px] [box-shadow:-3px_-4px_20px_0px_rgba(255,_255,_255,_0.15)_inset,_4px_10px_30px_0px_rgba(24,_83,_158,_0.50)] md:text-[20px] text-[18px] font-semibold"
            >
              CIP
            </a>
          </div>
          )}
          {tab === 4 && (
            <div className="min-h-[430px] md:min-h-[640px] bg-[#EAF6FF] rounded-[30px] relative mt-[18px] px-5 flex flex-col items-center justify-center gap-[30px] py-5">
            <p className="md:text-[24px] text-[18px] font-medium text-center text-black">
            Innovative ideas beyond categories become reality on DIVER
            </p>
            <div className="flex max-md:gap-10 flex-wrap justify-center xl:divide-x divide-[#53A1D8]">
              <div className="px-10">
                <div>
                  <p className="text-center font-bold md:text-[36px] text-[24px] text-black mb-5">
                    EXO
                  </p>
                  <div className="size-[200px] md:size-[280px] mx-auto  bg-white rounded-full flex items-center justify-center mb-[30px]">
                    <img src="/assets/images/logo-exo.svg" alt="" />
                  </div>
                </div>
                <a
                  href="https://exodao.org/"
                  target="_blank"
                  className="md:w-[290px] w-[220px] md:h-[70px] h-[50px] flex justify-center items-center bg-[#005FD7] rounded-[80px] [box-shadow:-3px_-4px_20px_0px_rgba(255,_255,_255,_0.15)_inset,_4px_10px_30px_0px_rgba(24,_83,_158,_0.50)] md:text-[20px] text-[18px] font-semibold"
                >
                  EXO
                </a>
              </div>
              <div className="px-10">
                <div>
                  <p className="text-center font-bold md:text-[36px] text-[24px] text-black mb-5">
                    iPS
                  </p>
                  <div className="size-[200px] md:size-[280px] mx-auto  bg-white rounded-full flex items-center justify-center mb-[30px]">
                    <img
                      className="md:w-[100px]"
                      src="/assets/images/logo-ips.svg"
                      alt=""
                    />
                  </div>
                </div>
                <a
                  href="https://ipsdao.org/"
                  target="_blank"
                  className="md:w-[290px] w-[220px] md:h-[70px] h-[50px] flex justify-center items-center bg-[#005FD7] rounded-[80px] [box-shadow:-3px_-4px_20px_0px_rgba(255,_255,_255,_0.15)_inset,_4px_10px_30px_0px_rgba(24,_83,_158,_0.50)] md:text-[20px] text-[18px] font-semibold"
                >
                  iPS
                </a>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
