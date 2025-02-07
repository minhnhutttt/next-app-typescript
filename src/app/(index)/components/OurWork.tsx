"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import lottieRevealPoska from "@/data/lottie-revealPoska";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const WorkItem = ({
  title,
  sub,
  content,
  link,
}: {
  title: string;
  sub: string;
  content: string;
  link: string;
}) => (
  <div className="p-[30px] xl:p-[60px]">
    <div>
      <p className="md:text-[50px] text-[25px] font-lalezar">{title}</p>
      <p className="md:text-[20px] text-[16px]">{sub}</p>
    </div>
    <div className="flex md:gap-8 gap-5 items-center mt-4">
      <p className="md:text-[25px] text-[18px] flex-1">
        {content}
      </p>
      <a href={link} className="size-[80px] md:size-[164px] flex items-center justify-center bg-[#D9D9D9] rounded-full hover:opacity-75 duration-150">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 84 16"
          fill="none"
          className="md:w-[84px] w-12"
        >
          <path
            d="M83.7071 8.70711C84.0976 8.31658 84.0976 7.68342 83.7071 7.29289L77.3431 0.928932C76.9526 0.538408 76.3195 0.538408 75.9289 0.928932C75.5384 1.31946 75.5384 1.95262 75.9289 2.34315L81.5858 8L75.9289 13.6569C75.5384 14.0474 75.5384 14.6805 75.9289 15.0711C76.3195 15.4616 76.9526 15.4616 77.3431 15.0711L83.7071 8.70711ZM0 9H83V7H0V9Z"
            fill="black"
          />
        </svg>
      </a>
    </div>
  </div>
);

const OurWork = () => {
  const workContainer = useRef<HTMLDivElement>(null);
  const cloneDrawRef = useRef<HTMLDivElement>(null);
  const animPoskaRef = useRef<any>(null);
  const drawRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (cloneDrawRef.current) {
      const animPoska = Lottie.loadAnimation({
        container: cloneDrawRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        animationData: lottieRevealPoska,
      });
      animPoskaRef.current = animPoska;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: workContainer.current,
          start: "top top",
          end: "+=3000",
          pin: true,
          onUpdate: (self) => {
            if (
              drawRef.current &&
              cloneDrawRef.current &&
              cloneDrawRef.current.querySelector("path")
            ) {
              const progress = self.progress;
              const totalFrames = animPoska.totalFrames;
              const frame = Math.round(progress * totalFrames);

              animPoska.goToAndStop(frame, true);

              drawRef.current.setAttribute(
                "d",
                cloneDrawRef.current
                  .querySelector("path")!
                  .getAttribute("d") as string
              );
              if (frame === 0) {
                drawRef.current.setAttribute("d", "");
              }
            }
          },
        },
        onComplete: () => {
          animPoska.goToAndStop(animPoska.totalFrames - 1, true);
          if (
            drawRef.current &&
            cloneDrawRef.current &&
            cloneDrawRef.current.querySelector("path")
          ) {
            drawRef.current.setAttribute(
              "d",
              cloneDrawRef.current
                .querySelector("path")!
                .getAttribute("d") as string
            );
          }
        },
      });

      return () => {
        tl.scrollTrigger?.refresh();
        tl.kill();
        animPoska.destroy();
      };
    }
  }, []);

  return (
    <section className="relative bg-[#DDDDDD] overflow-hidden">
      <div ref={workContainer} className="works relative">
        <div className="absolute top-0 inset-x-0 w-screen h-screen flex items-center justify-center">
          <div className="overflow-hidden">
            <div className="md:text-[50px] text-[32px] px-5 md:px-[100px] mb-10 md:mb-20">OurWork</div>
            <div className="flex justify-center overflow-hidden relative max-md:mt-12">
              <div className="whitespace-nowrap space-y-5">
                <div className="flex gap-5 animate-[scroll-1-3_32s_linear_infinite] font-bold">
                  <div className="text-[30px] md:text-[60px] text-center">
                    Coroprate Site Landing Page Coroprate Site Landing Page
                  </div>
                  <div className="text-[30px] md:text-[60px] text-center">
                    Coroprate Site Landing Page Coroprate Site Landing Page
                  </div>
                  <div className="text-[30px] md:text-[60px] text-center">
                    Coroprate Site Landing Page Coroprate Site Landing Page
                  </div>
                </div>
                <div className="flex gap-5 animate-[scroll-1-3-left_32s_linear_infinite] font-bold">
                  <div className="text-[30px] md:text-[60px] text-center">
                    Coroprate Site Landing Page Coroprate Site Landing Page
                  </div>
                  <div className="text-[30px] md:text-[60px] text-center">
                    Coroprate Site Landing Page Coroprate Site Landing Page
                  </div>
                  <div className="text-[30px] md:text-[60px] text-center">
                    Coroprate Site Landing Page Coroprate Site Landing Page
                  </div>
                </div>
                <div className="flex gap-5 animate-[scroll-1-3_32s_linear_infinite] font-bold">
                  <div className="text-[30px] md:text-[60px] text-center">
                    Coroprate Site Landing Page Coroprate Site Landing Page
                  </div>
                  <div className="text-[30px] md:text-[60px] text-center">
                    Coroprate Site Landing Page Coroprate Site Landing Page
                  </div>
                  <div className="text-[30px] md:text-[60px] text-center">
                    Coroprate Site Landing Page Coroprate Site Landing Page
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen bg-white [clip-path:url('#poskaClipPath')]">
          <div
            id="revealPoska"
            className="absolute w-full h-full top-0 left-0 pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1920 1080"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <clipPath
                  id="poskaClipPath"
                  clipPathUnits="objectBoundingBox"
                  transform="scale(0.000625, 0.0011111111)"
                >
                  <path
                    ref={drawRef}
                    fill="#ffffff"
                    transform="matrix(1,0,0,1,958,539)"
                    clipRule="nonzero"
                    d=""
                    fillOpacity="1"
                  ></path>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div ref={cloneDrawRef} id="revealPoskaProxy" className="hidden">
            
          </div>
        <div className="min-h-screen flex items-center justify-center">
          <div className="grid lg:grid-cols-2 w-full max-w-[1440px] mx-auto max-lg:divide-y lg:divide-x divide-black">
            <WorkItem
              title="ROGYXでの働き方"
              sub="ROGYX社員の一日"
              content="ROGYXの社員がどのような1日を過ごしているのか、その働き方をご紹介します。"
              link="/"
            />
            <WorkItem
              title="ROGYXが求める人材"
              sub="デザイナーとフロントエンドエンジニア"
              content="クリエイティブな発想力と柔軟な対応力を持つ、デザイナーとフロントエンドエンジニアを求めています。"
              link="/"
            />
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurWork;
