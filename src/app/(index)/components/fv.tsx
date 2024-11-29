"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useCallback, useState } from "react";

const FV = () => {
  const ref = useScrollAnimations()
  const [NavOpen, setNavOpen] = useState(false);

  const close = useCallback(() => {
    setNavOpen(false);
  }, []);
  return (
    <section ref={ref} className="relative h-screen bg-[url(/assets/images/bg-01.png)] bg-cover overflow-hidden">
      <a href="/" className="absolute top-6 left-5 md:left-10">
        <img
          className="max-md:w-[124px]"
          src="/assets/images/logo.svg"
          alt="SAKE Coin"
        />
      </a>
      <div
        className={`fixed left-0 top-0 h-screen w-full bg-black/90 z-[99] overflow-y-scroll flex items-center justify-center flex-col ${
          NavOpen ? "" : "invisible opacity-0"
        }`}
      >
        <ul className="flex items-center max-md:flex-col text-[18px] gap-10 mr-10 mb-10">
          <li>
            <a href="/" onClick={close} className="">
              SAKE Coin
            </a>
          </li>
        </ul>
      </div>
      <button
        className={`group absolute top-0 right-0 z-[99] size-20 md:size-[100px] flex items-center justify-center  ${
          NavOpen ? "active fixed" : ""
        }`}
        onClick={() => setNavOpen((prev) => !prev)}
      >
        <span className="relative block w-9 md:w-[46px] md:h-8 h-7">
          <span className="absolute left-0 top-0 block h-0.5 md:h-[3px] w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:rotate-45"></span>
          <span className="absolute md:top-3.5 top-3 left-0 block h-0.5 md:h-[3px] w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:opacity-0"></span>
          <span className="absolute bottom-0 left-0 block h-0.5 md:h-[3px] w-full -translate-y-1/2 bg-white transition-transform duration-500 ease-in-out group-[.active]:top-1/2 group-[.active]:-rotate-45"></span>
        </span>
      </button>

      <div className="text-white px-5 h-full max-md:flex max-md:items-start">
        <div className="w-full max-w-[1360px] mx-auto flex gap-[1.667vw] dt:gap-6 md:h-full max-md:flex-wrap">
          <div className="fade-up flex items-center flex-1 max-md:order-2">
            <h1 className="text-[5vw] md:text-[5.417vw] dt:text-[78px] leading-[1.3]">
              Cheers to Sake. <br  />
              Cheers to Rewards <br  />
              That Last Forever.
            </h1>
          </div>
          <div className="fade-up flex flex-col justify-between items-center max-md:w-full max-md:order-1 max-md:mb-[4vw]">
            <figure className="pt-[100px] md:pt-7 max-md:w-[80px] max-dt:w-[13.056vw]">
              <img src="/assets/images/sake.svg" alt="" />
            </figure>
          </div>
          <div className="fade-up flex items-center flex-1 max-md:order-3">
            <p className="dt:text-[28px] text-[3vw] md:text-[1.944vw] leading-[1.3] tracking-wider">
              Sake Coin is a permanent sake point system. <br />
              The points you earn cannot be infringed upon by anyone, not even
              the issuing or operating company.
            </p>
          </div>
        </div>
        <div className="absolute w-px flex items-center justify-center flex-col bottom-0 left-0 right-0 mx-auto gap-2">
              <div className="[writing-mode:vertical-rl] [text-orientation:mixed] text-[10px] md:text-[14px] font-medium">
                SCROLL
              </div>
              <div className="w-px h-[71px] overflow-hidden z-10">
                <div className="w-full h-full block bg-[linear-gradient(to_bottom,_white_50%,_rgba(255,_255,_255,_0)_50%)] bg-[0_-71px] [background-size:100%_200%] animate-[scrolldown_2.2s_cubic-bezier(0.76,_0,_0.3,_1)_forwards_infinite]"></div>
              </div>
            </div>
      </div>
    </section>
  );
};

export default FV;
