"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextAnataDakeNo from "./texts/text-anata-dake-no";
import TextKyujitsu from "./texts/text-kyujitsu";
import TextKonsheruju from "./texts/text-konsheruju";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

export default function Home() {
  const [color01, setColor01] = useState<string>("white");
  const [color02, setColor02] = useState<string>("white");

  useEffect(() => {
    const overlay = document.querySelector("#overlay");
    const main = document.querySelector("#main");
    const container = document.querySelector("#container");
    
    const logo = document.querySelector("#logo");
    const text01 = document.querySelector("#text01");
    const text02 = document.querySelector("#text02");
    const text03 = document.querySelector("#text03");

    const svgCircle01 = document.querySelector("#svg-circle01");
    const svgCircle02 = document.querySelector("#svg-circle02");

    const textSvg = document.querySelectorAll(".text-svg");

    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      gsap.set(main, {
        height: '100vh'
      });
      gsap.set(text01, {
        x: -50,
      });
      gsap.set(text03, {
        x: 50,
      });

      gsap.set(container, {
        yPercent: -50,
        top: "50%",
      });

      tl.fromTo(
        text01,
        {
          yPercent: -100,
          duration: 0.8,
        },
        {
          yPercent: 0,
          opacity: 100,
          duration: 1,
          ease: 'expo.out'
        },
        "<"
      )
        .fromTo(
          text02,
          {
            yPercent: 100,
            duration: 0.8,
          },
          {
            yPercent: 0,
            opacity: 100,
            duration: 1,
            ease: 'expo.out'
          },
          "<"
        )
        .fromTo(
          text03,
          {
            yPercent: -100,
            duration: 0.8,
          },
          {
            yPercent: 0,
            opacity: 100,
            duration: 1,
            ease: 'expo.out'
          },
          "<"
        )
        .to(text01, {
          x: 0,
            ease: 'expo.inOut'
        })
        .to(
          text03,
          {
            x: 0,
            ease: 'expo.inOut',
            onComplete: () => {
              setColor01("black");
              setColor02("black");
            },
          },
          "<"
        )
        .to(overlay, {
          yPercent: -100,
          duration: 1,
          ease: 'expo.out'
        })
        .to(container, {
          top: 0,
          yPercent: 0,
          ease: 'expo.out',
          onStart: () => {
            setColor02("#F52895");
          },
        })
        .to(main, {
          height: 'auto',
        },'<')
        .to(logo, {
          opacity: 1
        },'<')
        .fromTo(
          svgCircle01,
          {
            strokeDasharray: 697.7505493164062,
            strokeDashoffset: 697.7505493164062,
          },
          { strokeDashoffset: 0, duration: 0.5, ease: "expo.inOut" }
        )
        .fromTo(
          svgCircle02,
          {
            strokeDasharray: 697.7505493164062,
            strokeDashoffset: 697.7505493164062,
          },
          { strokeDashoffset: 0, duration: 0.5, ease: "expo.inOut",
           },
          "-=0.3"
        )
        .to(
          textSvg,
          {
            y: 0,
            stagger: 0.3,
            duration: 0.3, ease: "linear"
          }
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <div className="relative overflow-hidden">
        <div id="overlay" className="fixed inset-0 bg-black"></div>
        {/* <div className="fixed inset-0  bg-[url('/assets/images/bg.png')] bg-cover bg-right-bottom"></div> */}
        <div id="main" className="relative px-5 md:px-[30px] py-5 md:py-10 z-10">
          <div id="container" className="flex md:items-center relative max-md:flex-col max-md:gap-10">
            <a id="logo" href="/" className="opacity-0 max-md:w-[70px]"><img src="/assets/images/logo.svg" alt="" /></a>
            <div className="flex items-center px-2 md:px-6">
              <div id="text01" className="relative opacity-0">
                <div className="absolute top-1/2 -left-4 -right-4 -translate-y-1/2">
                  <svg
                  className="w-full"
                    viewBox="0 0 332 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="svg-circle01"
                      d="M131.671 90.6694C120.649 90.6694 109.825 90.6694 98.3252 89.7284C84.8252 89.7284 73.5966 87.1028 59.8252 86.2284C49.9807 85.6034 38.4746 82.5149 28.8544 80.3103C24.2941 79.2652 18.6578 76.6866 14.624 74.3298C12.1538 72.8865 9.58237 70.8307 8.16292 68.2959C5.41307 63.3855 5.14809 60.1679 8.16273 54.7284C12.0654 47.6866 22.0938 41.7571 28.8544 38.2284C39.4409 32.7027 47.0377 27.976 58.6767 25.3378C80.6628 18.7769 105.459 14.7872 105.821 14.729C105.833 14.7272 105.817 14.7298 105.828 14.728C106.194 14.6696 144.343 8.5954 153.325 8.72839C164.825 7.72839 172.574 7.96674 183.825 8.22839C205.325 8.72837 205.866 9.05734 216 10C231.754 11.4655 246.73 15.7199 262.307 18.3161C277.638 20.8713 289.535 24.9499 304.325 29.7284C306.51 30.4344 311.878 33.0169 313.825 34.2284C322.825 39.8284 326.325 42.2284 328.825 45.7284C331.325 51.2284 330.325 57.7284 326.325 62.7284C321.825 67.2284 315.342 70.075 310.825 72.2284C303.251 75.8392 295.35 77.9407 287.325 80.3103C276.288 83.5697 264.603 85.4704 253.325 87.8126C240.833 90.4071 230.825 90.6694 216.825 92.7284C202.916 95.6494 186.69 96.9791 172.52 97.7712C161.361 98.395 144.503 99.2284 133.325 99.2284"
                      stroke="#48D7DC"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      id="svg-circle02"
                      d="M126.671 83.6694C115.649 83.6694 104.825 83.6694 93.3252 82.7284C79.8252 82.7284 68.5966 80.1028 54.8252 79.2284C44.9807 78.6034 33.4746 75.5149 23.8544 73.3103C19.2941 72.2652 13.6578 69.6866 9.62399 67.3298C7.15379 65.8865 4.58237 63.8307 3.16292 61.2959C0.413075 56.3855 0.148087 53.1679 3.16273 47.7284C7.06542 40.6866 17.0938 34.7571 23.8544 31.2284C34.4409 25.7027 42.0377 20.976 53.6767 18.3378C75.6628 11.7769 100.459 7.78719 100.821 7.72903C100.833 7.72721 100.817 7.72977 100.828 7.72796C101.194 7.66965 139.343 1.5954 148.325 1.72839C159.825 0.728386 167.574 0.966742 178.825 1.22839C200.325 1.72837 200.366 2.55734 210.5 3.5C226.254 4.96553 241.73 8.71986 257.307 11.3161C272.638 13.8713 284.535 17.9499 299.325 22.7284C301.51 23.4344 306.878 26.0169 308.825 27.2284C317.825 32.8284 321.325 35.2284 323.825 38.7284C326.325 44.2284 325.325 50.7284 321.325 55.7284C316.825 60.2284 310.342 63.075 305.825 65.2284C298.251 68.8392 290.35 70.9407 282.325 73.3103C271.288 76.5697 259.603 78.4704 248.325 80.8126C235.833 83.4071 225.825 83.6694 211.825 85.7284C197.916 88.6494 181.69 89.9791 167.52 90.7712C156.361 91.395 139.503 92.2284 128.325 92.2284"
                      stroke="#FB9A6A"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <TextAnataDakeNo color={color01} />
              </div>
              <div id="text02" className="relative opacity-0 px-4">
                <TextKyujitsu color={color02} />
              </div>
              <div id="text03" className="relative opacity-0">
                <TextKonsheruju color={color02} />
              </div>
            </div>
          </div>
          <div className="flex items-end flex-col w-full max-w-[1000px] md:mt-8 mt-6 gap-1">
              <h3 className="md:pr-5 relative overflow-hidden max-md:w-[90vw]"><img className="text-svg translate-y-full relative" src="/assets/images/text-svg-01.svg" alt="" /></h3>
              <h3 className="relative overflow-hidden max-md:w-[63vw]"><img className="text-svg translate-y-full relative" src="/assets/images/text-svg-02.svg" alt="" /></h3>
          </div>
          <div className="relative flex flex-col items-start -mt-20">
            <div className="inline-flex animate-[fuwafuwa_3s_ease-in-out_infinite_alternate] [animation-delay:0.3s]"><img src="/assets/images/img-01.png" alt="" /></div>
            <div className="inline-flex animate-[fuwafuwa_3s_ease-in-out_infinite_alternate] [animation-delay:0.1s] mt-10 ml-10 relative z-10"><img src="/assets/images/img-02.png" alt="" /></div>
            <div className="inline-flex animate-[fuwafuwa_3s_ease-in-out_infinite_alternate] [animation-delay:0.5s] relative -mt-10 ml-32"><img src="/assets/images/img-03.png" alt="" /></div>
          </div>

          <div className="absolute right-32 top-0">
            <div className="inline-flex animate-[fuwafuwa_3s_ease-in-out_infinite_alternate] [animation-delay:0.3s]"><img src="/assets/images/img-04.png" alt="" /></div>
          </div>
          <div className="absolute right-0 top-[300px]">
            <div className="inline-flex animate-[fuwafuwa_3s_ease-in-out_infinite_alternate] [animation-delay:0.3s]"><img src="/assets/images/img-05.png" alt="" /></div>
          </div>
        </div>
      </div>
    </main>
  );
}
