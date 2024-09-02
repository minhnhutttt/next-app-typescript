"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

  
  export default function TitleDeco04() {
    const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll("path");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".title-deco04",
        start: "top 80%",
        end: "top 20%",
      },
    });

    paths?.forEach((path, index) => {
      tl.fromTo(
        path,
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: "none" },
        index * 0.15
      );
    });
    tl.to('.title-flash04', { opacity: 1 })
    tl.to('.title-flash04', { opacity: 0, duration: 0.2, repeat: 3, yoyo: true })
  }, []);
  
  return (
    <>
        <div className="absolute md:top-[17.14%] top-[12%] md:left-[52.27%] left-[5%] title-deco04 md:w-[12.424%] w-[30%]">
             <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 144 16" fill="none">
             <g opacity="0.7">
             <path d="M0 7.99771C0 4.38112 2.81802 1.44664 6.28568 1.44664C9.75334 1.44664 12.567 4.38112 12.567 7.99771C12.567 11.6143 9.75334 14.5534 6.28568 14.5534C2.81802 14.5534 0 11.6189 0 7.99771Z" fill="url(#paint3_linear_170_2459)"/>
             <path d="M20.8411 7.99771C20.8411 4.38112 23.6547 1.44664 27.1224 1.44664C30.59 1.44664 33.408 4.38112 33.408 7.99771C33.408 11.6143 30.59 14.5534 27.1224 14.5534C23.6547 14.5534 20.8411 11.6189 20.8411 7.99771Z" fill="url(#paint2_linear_170_2459)"/>
             <path d="M41.6777 7.99771C41.6777 4.38112 44.4914 1.44664 47.959 1.44664C51.4267 1.44664 54.2403 4.38112 54.2403 7.99771C54.2403 11.6143 51.4267 14.5534 47.959 14.5534C44.4914 14.5534 41.6777 11.6189 41.6777 7.99771Z" fill="url(#paint1_linear_170_2459)"/>
               <path d="M62.5188 7.99771C62.5188 4.38112 65.3368 1.44664 68.8045 1.44664C72.2721 1.44664 75.0858 4.38112 75.0858 7.99771C75.0858 11.6143 72.2721 14.5534 68.8045 14.5534C65.3368 14.5534 62.5188 11.6189 62.5188 7.99771Z" fill="url(#paint0_linear_170_2459)"/>
               <path d="M83.3555 0L98.0074 7.99771L83.3555 16V0Z" fill="url(#paint4_linear_170_2459)"/>
               <path d="M106.286 0L120.938 7.99771L106.286 16V0Z" fill="url(#paint5_linear_170_2459)"/>
               <path d="M129.208 0L144 7.7093L129.497 15.9954L129.208 0Z" fill="url(#paint6_linear_170_2459)"/>
             </g>
             <defs>
               <linearGradient id="paint0_linear_170_2459" x1="49.6436" y1="-37.3333" x2="49.6436" y2="107.048" gradientUnits="userSpaceOnUse">
                 <stop stopColor="#F88907"/>
                 <stop offset="1" stopColor="#995300"/>
               </linearGradient>
               <linearGradient id="paint1_linear_170_2459" x1="49.6436" y1="-37.3333" x2="49.6436" y2="107.048" gradientUnits="userSpaceOnUse">
                 <stop stopColor="#F88907"/>
                 <stop offset="1" stopColor="#995300"/>
               </linearGradient>
               <linearGradient id="paint2_linear_170_2459" x1="49.6436" y1="-37.3333" x2="49.6436" y2="107.048" gradientUnits="userSpaceOnUse">
                 <stop stopColor="#F88907"/>
                 <stop offset="1" stopColor="#995300"/>
               </linearGradient>
               <linearGradient id="paint3_linear_170_2459" x1="49.6436" y1="-37.3333" x2="49.6436" y2="107.048" gradientUnits="userSpaceOnUse">
                 <stop stopColor="#F88907"/>
                 <stop offset="1" stopColor="#995300"/>
               </linearGradient>
               <linearGradient id="paint4_linear_170_2459" x1="49.6436" y1="-37.3333" x2="49.6436" y2="107.048" gradientUnits="userSpaceOnUse">
                 <stop stopColor="#F88907"/>
                 <stop offset="1" stopColor="#995300"/>
               </linearGradient>
               <linearGradient id="paint5_linear_170_2459" x1="49.6436" y1="-37.3333" x2="49.6436" y2="107.048" gradientUnits="userSpaceOnUse">
                 <stop stopColor="#F88907"/>
                 <stop offset="1" stopColor="#995300"/>
               </linearGradient>
               <linearGradient id="paint6_linear_170_2459" x1="49.6436" y1="-37.3333" x2="49.6436" y2="107.048" gradientUnits="userSpaceOnUse">
                 <stop stopColor="#F88907"/>
                 <stop offset="1" stopColor="#995300"/>
               </linearGradient>
             </defs>
           </svg>
        </div>
        <div className="absolute right-[3.8512%] md:top-[24%] top-[12%] title-flash04 opacity-0 md:w-[12.9367%] w-[24%] flex justify-end">
        <svg xmlns="http://www.w3.org/2000/svg"  className="w-full" viewBox="0 0 137 26" fill="none">
  <g opacity="0.8">
    <path d="M124.963 23.9638C124.525 24.81 123.378 25.5 122.409 25.5L116 25.5C115.035 25.5 114.601 24.81 115.039 23.9638L126.406 2.03619C126.844 1.18998 127.99 0.5 128.96 0.5L135.369 0.5C136.333 0.5 136.767 1.18998 136.329 2.03619L124.963 23.9638Z" fill="url(#paint0_linear_170_5957)"/>
    <path d="M108.657 23.9638C108.219 24.81 107.072 25.5 106.103 25.5L99.6939 25.5C98.729 25.5 98.2953 24.81 98.7335 23.9638L110.1 2.03619C110.538 1.18998 111.684 0.5 112.654 0.5L119.063 0.5C120.027 0.5 120.461 1.18998 120.023 2.03619L108.657 23.9638Z" fill="url(#paint1_linear_170_5957)"/>
    <path d="M92.3511 23.9638C91.9129 24.81 90.7665 25.5 89.7972 25.5L83.3882 25.5C82.4233 25.5 81.9895 24.81 82.4277 23.9638L93.794 2.03619C94.2322 1.18998 95.3785 0.5 96.3479 0.5L102.757 0.5C103.722 0.5 104.156 1.18998 103.717 2.03619L92.3511 23.9638Z" fill="url(#paint2_linear_170_5957)"/>
    <path d="M76.0451 23.9638C75.6069 24.81 74.4606 25.5 73.4913 25.5L67.0823 25.5C66.1174 25.5 65.6836 24.81 66.1218 23.9638L77.488 2.03619C77.9262 1.18998 79.0726 0.5 80.0419 0.5L86.4509 0.5C87.4158 0.5 87.8496 1.18998 87.4114 2.03619L76.0451 23.9638Z" fill="url(#paint3_linear_170_5957)"/>
    <path d="M59.7351 23.9638C59.2969 24.81 58.1506 25.5 57.1812 25.5L50.7722 25.5C49.8073 25.5 49.3736 24.81 49.8117 23.9638L61.178 2.03619C61.6162 1.18998 62.7626 0.5 63.7319 0.5L70.1409 0.5C71.1058 0.5 71.5395 1.18998 71.1013 2.03619L59.7351 23.9638Z" fill="url(#paint4_linear_170_5957)"/>
    <path d="M43.4291 23.9638C42.991 24.81 41.8446 25.5 40.8753 25.5L34.4663 25.5C33.5014 25.5 33.0676 24.81 33.5058 23.9638L44.8765 2.03619C45.3147 1.18998 46.461 0.5 47.4304 0.5L53.8394 0.5C54.8042 0.5 55.238 1.18998 54.7998 2.03619L43.4336 23.9638L43.4291 23.9638Z" fill="url(#paint5_linear_170_5957)"/>
    <path d="M27.1234 23.9638C26.6852 24.81 25.5389 25.5 24.5695 25.5L18.1605 25.5C17.1956 25.5 16.7619 24.81 17.2001 23.9638L28.5708 2.03619C29.0089 1.18998 30.1553 0.5 31.1246 0.5L37.5336 0.5C38.4985 0.5 38.9323 1.18998 38.4941 2.03619L27.1278 23.9638L27.1234 23.9638Z" fill="url(#paint6_linear_170_5957)"/>
    <path d="M10.8177 23.9638C10.3795 24.81 9.23314 25.5 8.26382 25.5L1.85481 25.5C0.889923 25.5 0.456154 24.81 0.894341 23.9638L12.265 2.03619C12.7032 1.18998 13.8496 0.5 14.8189 0.5L21.2279 0.5C22.1928 0.5 22.6266 1.18998 22.1884 2.03619L10.8221 23.9638L10.8177 23.9638Z" fill="url(#paint7_linear_170_5957)"/>
  </g>
  <defs>
    <linearGradient id="paint0_linear_170_5957" x1="-64.5" y1="13" x2="136.5" y2="13" gradientUnits="userSpaceOnUse">
      <stop stopColor="#E4FC51"/>
      <stop offset="1" stopColor="#24FFA3"/>
    </linearGradient>
    <linearGradient id="paint1_linear_170_5957" x1="-64.5" y1="13" x2="136.5" y2="13" gradientUnits="userSpaceOnUse">
      <stop stopColor="#E4FC51"/>
      <stop offset="1" stopColor="#24FFA3"/>
    </linearGradient>
    <linearGradient id="paint2_linear_170_5957" x1="-64.5" y1="13" x2="136.5" y2="13" gradientUnits="userSpaceOnUse">
      <stop stopColor="#E4FC51"/>
      <stop offset="1" stopColor="#24FFA3"/>
    </linearGradient>
    <linearGradient id="paint3_linear_170_5957" x1="-64.5" y1="13" x2="136.5" y2="13" gradientUnits="userSpaceOnUse">
      <stop stopColor="#E4FC51"/>
      <stop offset="1" stopColor="#24FFA3"/>
    </linearGradient>
    <linearGradient id="paint4_linear_170_5957" x1="-64.5" y1="13" x2="136.5" y2="13" gradientUnits="userSpaceOnUse">
      <stop stopColor="#E4FC51"/>
      <stop offset="1" stopColor="#24FFA3"/>
    </linearGradient>
    <linearGradient id="paint5_linear_170_5957" x1="-64.5" y1="13" x2="136.5" y2="13" gradientUnits="userSpaceOnUse">
      <stop stopColor="#E4FC51"/>
      <stop offset="1" stopColor="#24FFA3"/>
    </linearGradient>
    <linearGradient id="paint6_linear_170_5957" x1="-64.5" y1="13" x2="136.5" y2="13" gradientUnits="userSpaceOnUse">
      <stop stopColor="#E4FC51"/>
      <stop offset="1" stopColor="#24FFA3"/>
    </linearGradient>
    <linearGradient id="paint7_linear_170_5957" x1="-64.5" y1="13" x2="136.5" y2="13" gradientUnits="userSpaceOnUse">
      <stop stopColor="#E4FC51"/>
      <stop offset="1" stopColor="#24FFA3"/>
    </linearGradient>
  </defs>
</svg>
        </div>
    </>
  );
}
