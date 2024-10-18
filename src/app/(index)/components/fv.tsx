"use client";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
const Fv = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const boxRef1 = useRef<HTMLDivElement>(null);
  const boxRef2 = useRef<HTMLDivElement>(null);
  const boxRef3 = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      gsap.set(wrapperRef.current, { width: '10%', height: '10%' });
      gsap.set(boxRef1.current, { opacity: 0, y: 10, scale: 0 });
      gsap.set(boxRef2.current, { opacity: 0, y: 10, scale: 0 });
      gsap.set(boxRef3.current, { opacity: 0, y: 10, scale: 0 });
      tl.to(wrapperRef.current, { width: '100%', height: '35%', duration: 0.25 })
        .to(boxRef1.current, { opacity: 1, y: 0, scale: 1.1, duration: 0.15 }, "0.2")
        .to(boxRef1.current, { scale: 1, duration: 0.3 }, "0.4")
        .to(wrapperRef.current, { width: '100%', height: '75%', duration: 0.25 }, '0.75')
        .to(boxRef2.current, { opacity: 1, y: 0, scale: 1.1, duration: 0.15 }, "1")
        .to(boxRef2.current, { scale: 1, duration: 0.15 }, "1.2")
        .to(boxRef1.current, { height: 0, opacity: 0, duration: 0.15 }, "2")
        .to(boxRef2.current, { height: 0, opacity: 0, duration: 0.15 }, "<")
        .to(boxRef3.current, { opacity: 1, y: "15%", scale: 1.1,  duration: 0.25 }, "2.25")
        .to(boxRef3.current, {  scale: 1,  duration: 0.25 }, "2.5")
        .to(wrapperRef.current, { width: '100%', height: '45%', duration: 0.25 }, '3.65')
        .to(boxRef3.current, { y: "-40%",duration: 0.25 }, "<")
        .to(wrapperRef.current, { width: '100%', height: '100%', duration: 0.25 }, '4')
        .to(boxRef1.current, { height: "100%", opacity: 1, duration: 0.25 }, "<")
        .to(boxRef2.current, { height: "100%", opacity: 1, duration: 0.25 }, "<")
        .to(boxRef3.current, { y: "0",duration: 0.25 }, "<")
    });

    return () => ctx.revert();
  }, []);
  return (
    <div data-scroll="out" className="flex justify-center items-center xl:pt-[clamp(10px,3.818vmin,42px)] xl:pb-[clamp(10px,2.182vmin,24px)] pt-[2.5vw] md:pt-8 px-5 font-semibold">
      <div className="flex items-center justify-center xl:aspect-[540/830] max-md:h-[132vw] max-xl:h-[686px] max-xl:w-[450px] xl:h-[75.455vmin] md:max-h-[830px] max-h-[705px] w-full max-w-[540px]">
        <div ref={wrapperRef} className="w-[10%] h-[10%] relative  flex items-center justify-center overflow-hidden xl:rounded-tl-[55px] xl:rounded-br-[55px] rounded-tl-[45px] rounded-br-[45px] p-5 xl:p-[2.182vmin] before: before:absolute before:z-[1] before:flex xl:before:h-[calc(100%-20px)] before:h-[calc(100%-15px)] xl:before:w-[calc(100%-20px)] before:w-[calc(100%-15px)] before:items-center before:justify-center before:rounded-tl-[55px] before:rounded-br-[55px] before:bg-[url('/assets/images/bg_03.jpg')] before:bg-cover after:absolute after:h-[2000px] after:w-[2000px] after:aspect-square after:animate-[border-animation_5s_linear_infinite] after:rounded-tl-[55px] after:rounded-br-[55px] after:bg-[conic-gradient(_transparent_0%12.5%,_transparent_12.5%25%,_#BD84FA_25%37.5%,_#BD84FA_37.5%50%,_transparent_50%62.5%,_transparent_62.5%75%,_#43ABFC_75%87.5%,_#43ABFC_87.5%100%_)] after:content-[''] flex flex-col items-center justify-center">
          <div className="relative z-10 h-full w-full xl:rounded-tl-[55px] xl:rounded-br-[55px] rounded-tl-[45px] rounded-br-[45px] bg-white/80 p-2 xl:p-[clamp(5px,1.091vmin,12px)]">
            <div className="flex justify-end">
              <svg
                  className="max-xl:w-[76px] xl:w-[94px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 94 17"
                fill="none"
              >
                <g clipPath="url(#clip0_63_1105)">
                  <path
                    className="relative animate-[arrow-movement_2s_1.2s_ease-in-out_infinite]"
                    d="M85.1107 16.4851C84.8231 16.4851 84.5355 16.3723 84.3156 16.1524C83.8758 15.7126 83.8758 14.9964 84.3156 14.5565L90.3044 8.56769L84.3156 2.57886C83.8758 2.13901 83.8758 1.42283 84.3156 0.982969C84.7555 0.543112 85.4716 0.543112 85.9115 0.982969L93.4962 8.56769L85.9115 16.1524C85.6916 16.3723 85.404 16.4851 85.1164 16.4851H85.1107Z"
                    fill="#BD84FA"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_1s_ease-in-out_infinite]"
                    d="M71.2495 16.4851C70.9619 16.4851 70.6743 16.3723 70.4544 16.1524C70.0145 15.7126 70.0145 14.9964 70.4544 14.5565L76.4432 8.56769L70.4544 2.57886C70.0145 2.13901 70.0145 1.42283 70.4544 0.982969C70.8943 0.543112 71.6104 0.543112 72.0503 0.982969L79.635 8.56769L72.0503 16.1524C71.8304 16.3723 71.5428 16.4851 71.2552 16.4851H71.2495Z"
                    fill="#43ABFC"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_0.8s_ease-in-out_infinite]"
                    d="M57.3884 16.4851C57.1008 16.4851 56.8132 16.3723 56.5933 16.1524C56.1535 15.7126 56.1535 14.9964 56.5933 14.5565L62.5821 8.56769L56.5933 2.57886C56.1535 2.13901 56.1535 1.42283 56.5933 0.982969C57.0332 0.543112 57.7494 0.543112 58.1892 0.982969L65.7739 8.56769L58.1892 16.1524C57.9693 16.3723 57.6817 16.4851 57.3941 16.4851H57.3884Z"
                    fill="#BD84FA"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_0.6s_ease-in-out_infinite]"
                    d="M43.5272 16.4851C43.2396 16.4851 42.952 16.3723 42.7321 16.1524C42.2923 15.7126 42.2923 14.9964 42.7321 14.5565L48.7209 8.56769L42.7321 2.57886C42.2923 2.13901 42.2923 1.42283 42.7321 0.982969C43.172 0.543112 43.8882 0.543112 44.328 0.982969L51.9127 8.56769L44.328 16.1524C44.1081 16.3723 43.8205 16.4851 43.5329 16.4851H43.5272Z"
                    fill="#43ABFC"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_0.4s_ease-in-out_infinite]"
                    d="M29.6662 16.4851C29.3786 16.4851 29.091 16.3723 28.871 16.1524C28.4312 15.7126 28.4312 14.9964 28.871 14.5565L34.8599 8.56769L28.871 2.57886C28.4312 2.13901 28.4312 1.42283 28.871 0.982969C29.3109 0.543112 30.0271 0.543112 30.4669 0.982969L38.0516 8.56769L30.4669 16.1524C30.247 16.3723 29.9594 16.4851 29.6718 16.4851H29.6662Z"
                    fill="#BD84FA"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_0.2s_ease-in-out_infinite]"
                    d="M15.805 16.4851C15.5174 16.4851 15.2298 16.3723 15.0098 16.1524C14.57 15.7126 14.57 14.9964 15.0098 14.5565L20.9987 8.56769L15.0098 2.57886C14.57 2.13901 14.57 1.42283 15.0098 0.982969C15.4497 0.543112 16.1659 0.543112 16.6057 0.982969L24.1904 8.56769L16.6057 16.1524C16.3858 16.3723 16.0982 16.4851 15.8106 16.4851H15.805Z"
                    fill="#43ABFC"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_ease-in-out_infinite]"
                    d="M1.94395 16.4852C1.65635 16.4852 1.36875 16.3724 1.14882 16.1525C0.708962 15.7126 0.708962 14.9964 1.14882 14.5566L7.13765 8.56775L1.14882 2.57892C0.703323 2.13906 0.703323 1.42852 1.14882 0.988664C1.58868 0.543167 2.29922 0.543167 2.73907 0.988664L10.3238 8.57339L2.73907 16.1525C2.51915 16.3724 2.23155 16.4852 1.94395 16.4852Z"
                    fill="#BD84FA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_63_1105">
                    <rect
                      width="92.6746"
                      height="15.8292"
                      fill="white"
                      transform="translate(0.81604 0.655762)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="xl:pt-[clamp(5px,2.182vmin,24px)] xl:pb-[clamp(5px,1.818vmin,20px)] px-5 md:pt-5 pt-3 ">
              <div className="">
                <div ref={boxRef1} className="overflow-hidden u-bg-gradient-01 mx-auto w-full max-w-[430px] p-px">
                  <div className="bg-white py-2 xl:py-[clamp(1px,0.727vmin,8px)] font-semibold">
                    <h2 className="text-center text-[clamp(14px,5.818vw,32px)] md:text-[32px] xl:text-[clamp(1px,3.455vmin,38px)]">
                      ライバー数
                    </h2>
                    <p className="text-center text-[clamp(12px,5.273vw,29px)] md:text-[29px] leading-[1.1] xl:text-[clamp(1px,3.182vmin,35px)]">
                      累計
                      <span className="text-[clamp(12px,8vw,44px)] md:text-[44px] xl:text-[clamp(1px,4.818vmin,53px)] font-extrabold">
                        3,000
                      </span>
                      名以上
                    </p>
                  </div>
                </div>
                <div ref={boxRef2}>
                <div className="mt-4 md:mt-9 flex items-end justify-center xl:mt-[clamp(1px,4.364vmin,48px)] ">
                  <figure>
                    <img className="h-[clamp(1px,7.818vw,43px)] md:h-[clamp(1px,3.909vmin,43px)]" src="/assets/images/live17.png" alt="" />
                  </figure>
                  <p className="leading-none text-[clamp(12px,6.545vw,36px)] md:text-[36px] xl:text-[clamp(1px,4vmin,44px)] whitespace-nowrap">
                    最高ランク<span className="text-[29px] xl:text-[clamp(1px,3.182vmin,35px)]">の</span>
                  </p>
                </div>
                <p className="u-stroke u-bg-gradient-02 mt-[clamp(1px,1.818vmin,20px)] text-center xl:text-[clamp(1px,3.636vmin,40px)] text-[clamp(1px,6vw,33px)] md:text-[33px] whitespace-nowrap">
                  GOLD PARTNER
                </p>
                <p className="text-center md:text-[36px] text-[clamp(12px,6.545vw,36px)] xl:text-[clamp(1px,4vmin,44px)]">
                  経験がある
                </p>
                <p className="text-center text-[clamp(1px,7.091vw,39px)] md:text-[39px] xl:text-[clamp(1px,4.364vmin,48px)] whitespace-nowrap">
                  ライバー事務所が
                </p>
              </div>
              </div>
              <div ref={boxRef3}>
              <div className="mt-4 md:mt-7 xl:mt-[clamp(1px,2.182vmin,24px)] flex justify-center">
                <img
                  className="animate-[anim-bounce_0.6s_infinite_ease-in-out] h-[clamp(1px,18.182vw,100px)] md:h-[100px] xl:h-[clamp(1px,11.182vmin,123px)]"
                  src="/assets/images/fv-bubble.png"
                  alt=""
                />
              </div>
              <div className="flex justify-center">
                <img className="h-[clamp(1px,13.455vw,74px)] md:h-[74px] xl:h-[clamp(1px,8.273vmin,91px)]" src="/assets/images/tiktok.png" alt="" />
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
                <g clipPath="url(#clip0_63_1105)">
                  <path
                    className="relative animate-[arrow-movement_2s_1.2s_ease-in-out_infinite]"
                    d="M85.1107 16.4851C84.8231 16.4851 84.5355 16.3723 84.3156 16.1524C83.8758 15.7126 83.8758 14.9964 84.3156 14.5565L90.3044 8.56769L84.3156 2.57886C83.8758 2.13901 83.8758 1.42283 84.3156 0.982969C84.7555 0.543112 85.4716 0.543112 85.9115 0.982969L93.4962 8.56769L85.9115 16.1524C85.6916 16.3723 85.404 16.4851 85.1164 16.4851H85.1107Z"
                    fill="#BD84FA"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_1s_ease-in-out_infinite]"
                    d="M71.2495 16.4851C70.9619 16.4851 70.6743 16.3723 70.4544 16.1524C70.0145 15.7126 70.0145 14.9964 70.4544 14.5565L76.4432 8.56769L70.4544 2.57886C70.0145 2.13901 70.0145 1.42283 70.4544 0.982969C70.8943 0.543112 71.6104 0.543112 72.0503 0.982969L79.635 8.56769L72.0503 16.1524C71.8304 16.3723 71.5428 16.4851 71.2552 16.4851H71.2495Z"
                    fill="#43ABFC"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_0.8s_ease-in-out_infinite]"
                    d="M57.3884 16.4851C57.1008 16.4851 56.8132 16.3723 56.5933 16.1524C56.1535 15.7126 56.1535 14.9964 56.5933 14.5565L62.5821 8.56769L56.5933 2.57886C56.1535 2.13901 56.1535 1.42283 56.5933 0.982969C57.0332 0.543112 57.7494 0.543112 58.1892 0.982969L65.7739 8.56769L58.1892 16.1524C57.9693 16.3723 57.6817 16.4851 57.3941 16.4851H57.3884Z"
                    fill="#BD84FA"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_0.6s_ease-in-out_infinite]"
                    d="M43.5272 16.4851C43.2396 16.4851 42.952 16.3723 42.7321 16.1524C42.2923 15.7126 42.2923 14.9964 42.7321 14.5565L48.7209 8.56769L42.7321 2.57886C42.2923 2.13901 42.2923 1.42283 42.7321 0.982969C43.172 0.543112 43.8882 0.543112 44.328 0.982969L51.9127 8.56769L44.328 16.1524C44.1081 16.3723 43.8205 16.4851 43.5329 16.4851H43.5272Z"
                    fill="#43ABFC"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_0.4s_ease-in-out_infinite]"
                    d="M29.6662 16.4851C29.3786 16.4851 29.091 16.3723 28.871 16.1524C28.4312 15.7126 28.4312 14.9964 28.871 14.5565L34.8599 8.56769L28.871 2.57886C28.4312 2.13901 28.4312 1.42283 28.871 0.982969C29.3109 0.543112 30.0271 0.543112 30.4669 0.982969L38.0516 8.56769L30.4669 16.1524C30.247 16.3723 29.9594 16.4851 29.6718 16.4851H29.6662Z"
                    fill="#BD84FA"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_0.2s_ease-in-out_infinite]"
                    d="M15.805 16.4851C15.5174 16.4851 15.2298 16.3723 15.0098 16.1524C14.57 15.7126 14.57 14.9964 15.0098 14.5565L20.9987 8.56769L15.0098 2.57886C14.57 2.13901 14.57 1.42283 15.0098 0.982969C15.4497 0.543112 16.1659 0.543112 16.6057 0.982969L24.1904 8.56769L16.6057 16.1524C16.3858 16.3723 16.0982 16.4851 15.8106 16.4851H15.805Z"
                    fill="#43ABFC"
                  />
                  <path
                    className="relative animate-[arrow-movement_2s_ease-in-out_infinite]"
                    d="M1.94395 16.4852C1.65635 16.4852 1.36875 16.3724 1.14882 16.1525C0.708962 15.7126 0.708962 14.9964 1.14882 14.5566L7.13765 8.56775L1.14882 2.57892C0.703323 2.13906 0.703323 1.42852 1.14882 0.988664C1.58868 0.543167 2.29922 0.543167 2.73907 0.988664L10.3238 8.57339L2.73907 16.1525C2.51915 16.3724 2.23155 16.4852 1.94395 16.4852Z"
                    fill="#BD84FA"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_63_1105">
                    <rect
                      width="92.6746"
                      height="15.8292"
                      fill="white"
                      transform="translate(0.81604 0.655762)"
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
