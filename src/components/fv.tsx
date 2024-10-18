"use client";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
const Fv = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const boxRef3 = useRef<HTMLDivElement>(null);
  const boxRef4 = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.set(wrapperRef.current, { width: "10%", height: "10%" });
      gsap.set(boxRef1.current, { opacity: 0, y: 10, scale: 0 });
      gsap.set(boxRef2.current, { opacity: 0, y: 10, scale: 0 });
      gsap.set(boxRef3.current, { opacity: 0, y: 10, scale: 0 });
      gsap.set(boxRef4.current, { opacity: 0, y: 10, scale: 0 });
      tl.to(wrapperRef.current, {
        width: "100%",
        height: "35%",
        duration: 0.25,
      })
        .to(
          boxRef1.current,
          { opacity: 1, y: 0, scale: 1.1, duration: 0.15 },
          "0.2"
        )
        .to(boxRef1.current, { scale: 1, duration: 0.3 }, "0.4")
        .to(
          wrapperRef.current,
          { width: "100%", height: "75%", duration: 0.25 },
          "0.75"
        )
        .to(
          boxRef2.current,
          { opacity: 1, y: 0, scale: 1.1, duration: 0.15 },
          "1"
        )
        .to(boxRef2.current, { scale: 1, duration: 0.15 }, "1.2")
        .to(boxRef1.current, { height: 0, opacity: 0, duration: 0.15 }, "2")
        .to(boxRef2.current, { height: 0, opacity: 0, duration: 0.15 }, "<")
        .to(
          boxRef3.current,
          { opacity: 1, y: "15%", scale: 1.1, duration: 0.25 },
          "2.25"
        )
        .to(boxRef3.current, { scale: 1, duration: 0.25 }, "2.5")
        .to(
          wrapperRef.current,
          { width: "100%", height: "45%", duration: 0.25 },
          "3.65"
        )
        .to(boxRef3.current, { y: "-40%", duration: 0.25 }, "<")
        .to(
          wrapperRef.current,
          { width: "100%", height: "100%", duration: 0.25 },
          "4"
        )
        .to(
          boxRef1.current,
          { height: "100%", opacity: 1, duration: 0.25 },
          "<"
        )
        .to(
          boxRef2.current,
          { height: "100%", opacity: 1, duration: 0.25 },
          "<"
        )
        .to(boxRef3.current, { y: "0", duration: 0.25 }, "<")
        .to(boxRef4.current, { opacity: 1, scale: 1, y: "0", duration: 0.25 }, "<");
    });

    return () => ctx.revert();
  }, []);
  return (
    <div
      className="flex w-full justify-center items-center xl:pt-[clamp(10px,2.222vmin,24px)] xl:pb-[clamp(10px,2.182vmin,24px)] px-5 font-semibold"
    >
      <div className="flex items-center justify-center aspect-[600/844] xl:h-[78vmin] md:max-h-[844px] max-h-[705px] w-full max-w-[600px]">
        <div
          ref={wrapperRef}
          className="w-[10%] h-[10%] relative overflow-hidden xl:rounded-[30px] rounded-[20px] p-5 xl:p-[2.182vmin] before: before:absolute before:z-[1] before:flex xl:before:h-[calc(100%-20px)] before:h-[calc(100%-15px)] xl:before:w-[calc(100%-20px)] before:w-[calc(100%-15px)] before:items-center before:justify-center before:rounded-[30px] before:bg-[url('/assets/images/bg-01.jpg')] before:bg-cover after:absolute after:h-[2000px] after:w-[2000px] after:aspect-square after:animate-[border-animation_5s_linear_infinite] after:rounded-[30px] after:bg-[conic-gradient(_transparent_0%12.5%,_transparent_12.5%25%,_#FF7DD3_25%37.5%,_#FF7DD3_37.5%50%,_transparent_50%62.5%,_transparent_62.5%75%,_#3CE8FF_75%87.5%,_#3CE8FF_87.5%100%_)] after:content-[''] flex flex-col items-center justify-center"
        >
          <div className="relative z-10 h-full w-full xl:rounded-[30px] rounded-[20px] bg-white/80 p-2 xl:p-[clamp(5px,0.741vmin,8px)]">
            <div className="flex justify-end pt-2.5 xl:pt-[clamp(5px,0.926vmin,10px)]">
              <svg
                width="94"
                height="14"
                viewBox="0 0 94 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_86_2037)">
                  <path
                    className="relative animate-[arrow-movement_2s_0.2s_ease-in-out_infinite]"
                    opacity="0.6"
                    d="M18 7.14483L12 3.71727L6 0.285714L6 7.14483L6 14L12 10.5724L18 7.14483Z"
                    fill="#FF7DD3"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_0.4s_ease-in-out_infinite]"
                    opacity="0.6"
                    d="M32 7.14483L26 3.71727L20 0.285714L20 7.14483L20 14L26 10.5724L32 7.14483Z"
                    fill="#3CE8FF"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_0.6s_ease-in-out_infinite]"
                    opacity="0.6"
                    d="M46 7.14483L40 3.71727L34 0.285714L34 7.14483L34 14L40 10.5724L46 7.14483Z"
                    fill="#FF7DD3"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_0.8s_ease-in-out_infinite]"
                    opacity="0.6"
                    d="M60 7.14483L54 3.71727L48 0.285714L48 7.14483L48 14L54 10.5724L60 7.14483Z"
                    fill="#3CE8FF"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_1s_ease-in-out_infinite]"
                    opacity="0.6"
                    d="M74 7.14483L68 3.71727L62 0.285714L62 7.14483L62 14L68 10.5724L74 7.14483Z"
                    fill="#FF7DD3"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_1.2s_ease-in-out_infinite]"
                    opacity="0.6"
                    d="M88 7.14483L82 3.71727L76 0.285714L76 7.14483L76 14L82 10.5724L88 7.14483Z"
                    fill="#3CE8FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_86_2037">
                    <rect
                      width="94"
                      height="13.7143"
                      fill="white"
                      transform="matrix(1 0 0 -1 0 14)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="px-3 md:pt-5 pt-3 xl:pt-[clamp(5px,1.852vmin,20px)]">
              <div className="">
                <div ref={boxRef1} className="overflow-hidden flex justify-center">
                <img
                className="h-[100px] md:h-[clamp(1px,14.352vmin,155px)]"
                    src="/assets/images/17logo.svg"
                    alt=""
                  />
                </div>
                <div ref={boxRef2} className="md:mt-10 xl:mt-[clamp(5px,3.704vmin,40px)] mt-5 flex justify-center">
                  <img
                  className="h-[90px] md:h-[clamp(1px,13.333vmin,144px)]"
                      src="/assets/images/text-3000.svg"
                      alt=""
                    />
                </div>
              </div>
              <div ref={boxRef3}>
                <div className="mt-4 md:mt-7 xl:mt-[clamp(5px,2.593vmin,28px)] flex justify-center">
                  <img
                    className="animate-[anim-bounce_0.6s_infinite_ease-in-out] h-[75px] md:h-[clamp(1px,10.926vmin,118px)]"
                    src="/assets/images/bubble.svg"
                    alt=""
                  />
                </div>
                <div className="flex justify-center -mt-5">
                  <img
                  className="h-[65px] md:h-[clamp(1px,9.444vmin,102px)]"
                    src="/assets/images/no1.svg"
                    alt=""
                  />
                </div>
              </div>
              <div ref={boxRef4}>
                <div className="mt-2 flex justify-center">
                  <img
                  className="h-[79px] md:h-[clamp(1px,10.278vmin,111px)]"
                    src="/assets/images/logo-good.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-start absolute inset-x-0 bottom-4 px-4">
              <svg
                className="rotate-180 max-xl:w-[76px] xl:w-[94px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 94 17"
                fill="none"
              >
                <g clipPath="url(#clip0_86_2037)">
                  <path
                    className="relative animate-[arrow-movement_2s_0.2s_ease-in-out_infinite]"
                    opacity="0.6"
                    d="M18 7.14483L12 3.71727L6 0.285714L6 7.14483L6 14L12 10.5724L18 7.14483Z"
                    fill="#FF7DD3"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_0.4s_ease-in-out_infinite]"
                    opacity="0.6"
                    d="M32 7.14483L26 3.71727L20 0.285714L20 7.14483L20 14L26 10.5724L32 7.14483Z"
                    fill="#3CE8FF"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_0.6s_ease-in-out_infinite]"
                    opacity="0.6"
                    d="M46 7.14483L40 3.71727L34 0.285714L34 7.14483L34 14L40 10.5724L46 7.14483Z"
                    fill="#FF7DD3"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_0.8s_ease-in-out_infinite]"
                    opacity="0.6"
                    d="M60 7.14483L54 3.71727L48 0.285714L48 7.14483L48 14L54 10.5724L60 7.14483Z"
                    fill="#3CE8FF"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_1s_ease-in-out_infinite]"
                    opacity="0.6"
                    d="M74 7.14483L68 3.71727L62 0.285714L62 7.14483L62 14L68 10.5724L74 7.14483Z"
                    fill="#FF7DD3"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_1.2s_ease-in-out_infinite]"
                    opacity="0.6"
                    d="M88 7.14483L82 3.71727L76 0.285714L76 7.14483L76 14L82 10.5724L88 7.14483Z"
                    fill="#3CE8FF"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_86_2037">
                    <rect
                      width="94"
                      height="13.7143"
                      fill="white"
                      transform="matrix(1 0 0 -1 0 14)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fv;
