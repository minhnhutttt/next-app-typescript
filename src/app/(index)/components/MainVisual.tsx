"use client";

import useScrollAnimations from "@/app/hooks/useScrollAnimations";
import ButtonLine from "@/components/buttonLine";
import { useCallback, useState } from "react";

const MainVisual = () => {
  const ref = useScrollAnimations();
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <section ref={ref}>
      <div className="fixed w-full inset-0 z-[2000] pointer-events-none ">
        <div>
          <div className="max-lg:hidden absolute xl:w-[calc(50%-320px)] w-[calc(50%-250px)] left-0 top-0 bottom-0 flex items-center justify-center flex-col gap-5 md:gap-[50px] p-5 pointer-events-auto">
            <h1>
              <img src="/assets/images/open-fave.png" alt="" />
            </h1>
            <ButtonLine />
          </div>
          <div className="absolute xl:w-[calc(50%-320px)] w-full lg:w-[calc(50%-250px)] right-0 bottom-0 top-0 flex items-center justify-center flex-col gap-5 md:gap-[50px] lg:p-5">
            <div
              className="group lg:hidden ml-auto w-[50px] h-[52px] border-2 border-black flex flex-col items-center justify-center cursor-pointer fixed  z-40 bg-white right-5 top-5 pointer-events-auto"
              onClick={() => setNavOpen((prev) => !prev)}
            >
              <div
                className={`stick stick-1 ${NavOpen ? "open" : "close"}`}
              ></div>
              <div
                className={`stick stick-2 ${NavOpen ? "open" : "close"}`}
              ></div>
              <div
                className={`stick stick-3 ${NavOpen ? "open" : "close"}`}
              ></div>
            </div>
            <div
              className={`z-30 flex h-screen pointer-events-auto justify-center items-center  top-0 right-0 w-full flex-col max-lg:bg-[linear-gradient(16deg,_rgba(236,157,188,1)_0%,_rgba(142,129,185,1)_48%,_rgba(126,202,240,1)_100%)] max-lg:p-5 ${
                NavOpen
                  ? "visible opacity-100"
                  : "max-lg:invisible max-lg:opacity-0"
              }`}
            >
              <div className="w-full max-w-[378px] rounded-[30px] border-[1px] border-[solid] border-[#FFF] bg-[radial-gradient(50%_50%_at_50%_50%,_rgba(218,_90,_133,_0.20)_0%,_rgba(0,_0,_0,_0.00)_100%),_rgba(255,_255,_255,_0.10)] xl:py-[60px] py-8 xl:px-[50px] px-5 relative overflow-hidden z-30">
                <div className="bg-white/10 absolute inset-0"></div>

                <ul className="dt:text-[clamp(10px,2.6vw,28px)] lg:text-[clamp(10px,2vw,20px)] text-[20px] font-medium text-center flex flex-col gap-[clamp(10px,5vmin,40px)] dt:gap-[clamp(10px,5.556vmin,60px)] relative">
                  <li>
                    <a
                      href="/"
                      className="text-[#21012D]/[0.5]"
                      onClick={close}
                    >
                      見るから所有するへ
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-[#21012D]/[0.5]"
                      onClick={close}
                    >
                      What’s OPEN FAVE
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-[#21012D]/[0.5]"
                      onClick={close}
                    >
                      8つの未来
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-[#21012D]/[0.5]"
                      onClick={close}
                    >
                      スペシャルイベント
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-[#21012D]/[0.5]"
                      onClick={close}
                    >
                      はじめ方
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="text-[#21012D]/[0.5]"
                      onClick={close}
                    >
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        >
          <source src="/assets/videos/fv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default MainVisual;
