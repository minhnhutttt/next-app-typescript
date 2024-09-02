"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TitleDecoProps {
  }
  
  export default function TitleDeco01() {
    const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const paths = svgRef.current?.querySelectorAll("path");
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".title-deco01",
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
    tl.to('.title-flash01', { opacity: 1 })
    tl.to('.title-flash01', { opacity: 0, duration: 0.2, repeat: 3, yoyo: true })
  }, []);
  
  return (
    <>
        <div className="absolute md:top-[17.14%] top-[12%] md:left-[42.27%] left-[5%] title-deco01 md:w-[12.424%] w-[30%]">
            <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 144 16" fill="none">
                <g opacity="0.7">
                <path className="path1" d="M0 7.99771C0 4.38112 2.81802 1.44664 6.28568 1.44664C9.75334 1.44664 12.567 4.38112 12.567 7.99771C12.567 11.6143 9.75334 14.5534 6.28568 14.5534C2.81802 14.5534 0 11.6189 0 7.99771Z" fill="url(#paint3_linear_170_2075)"/>
                <path className="path2" d="M20.8411 7.99771C20.8411 4.38112 23.6547 1.44664 27.1224 1.44664C30.59 1.44664 33.408 4.38112 33.408 7.99771C33.408 11.6143 30.59 14.5534 27.1224 14.5534C23.6547 14.5534 20.8411 11.6189 20.8411 7.99771Z" fill="url(#paint2_linear_170_2075)"/>
                <path className="path3" d="M41.6777 7.99771C41.6777 4.38112 44.4914 1.44664 47.959 1.44664C51.4267 1.44664 54.2403 4.38112 54.2403 7.99771C54.2403 11.6143 51.4267 14.5534 47.959 14.5534C44.4914 14.5534 41.6777 11.6189 41.6777 7.99771Z" fill="url(#paint1_linear_170_2075)"/>
                <path className="path4" d="M62.5188 7.99771C62.5188 4.38112 65.3368 1.44664 68.8045 1.44664C72.2721 1.44664 75.0858 4.38112 75.0858 7.99771C75.0858 11.6143 72.2721 14.5534 68.8045 14.5534C65.3368 14.5534 62.5188 11.6189 62.5188 7.99771Z" fill="url(#paint0_linear_170_2075)"/>
                <path className="path5" d="M83.3555 0L98.0074 7.99771L83.3555 16V0Z" fill="url(#paint4_linear_170_2075)"/>
                <path className="path6" d="M106.286 0L120.938 7.99771L106.286 16V0Z" fill="url(#paint5_linear_170_2075)"/>
                <path className="path7" d="M129.208 0L144 7.7093L129.497 15.9954L129.208 0Z" fill="url(#paint6_linear_170_2075)"/>
                </g>
                <defs>
                <linearGradient id="paint0_linear_170_2075" x1="49.6436" y1="-37.3333" x2="49.6436" y2="107.048" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#F88907" />
                <stop offset="1" stopColor="#995300" />
                </linearGradient>
                <linearGradient id="paint1_linear_170_2075" x1="49.6436" y1="-37.3333" x2="49.6436" y2="107.048" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#F88907" />
                <stop offset="1" stopColor="#995300" />
                </linearGradient>
                <linearGradient id="paint2_linear_170_2075" x1="49.6436" y1="-37.3333" x2="49.6436" y2="107.048" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F88907"/>
                    <stop offset="1" stopColor="#995300"/>
                </linearGradient>
                <linearGradient id="paint3_linear_170_2075" x1="49.6436" y1="-37.3333" x2="49.6436" y2="107.048" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F88907"/>
                    <stop offset="1" stopColor="#995300"/>
                </linearGradient>
                <linearGradient id="paint4_linear_170_2075" x1="49.6436" y1="-37.3333" x2="49.6436" y2="107.048" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F88907"/>
                    <stop offset="1" stopColor="#995300"/>
                </linearGradient>
                <linearGradient id="paint5_linear_170_2075" x1="49.6436" y1="-37.3333" x2="49.6436" y2="107.048" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F88907"/>
                    <stop offset="1" stopColor="#995300"/>
                </linearGradient>
                <linearGradient id="paint6_linear_170_2075" x1="49.6436" y1="-37.3333" x2="49.6436" y2="107.048" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#F88907"/>
                    <stop offset="1" stopColor="#995300"/>
                </linearGradient>
                </defs>
            </svg>
        </div>
        <div className="absolute right-[3.4512%] md:top-[28.5714%] top-[12%] title-flash01 opacity-0 md:w-[17.3425%] w-[35%]">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-full" viewBox="0 0 201 25" fill="none">
                <path d="M189.463 23.4638C189.025 24.31 187.878 25 186.909 25L180.5 25C179.535 25 179.101 24.31 179.539 23.4638L190.906 1.53619C191.344 0.689984 192.49 -3.53682e-08 193.46 -3.55463e-08L199.869 -3.67239e-08C200.833 -3.69012e-08 201.267 0.689984 200.829 1.53619L189.463 23.4638Z" fill="url(#paint0_linear_170_2074)"/>
                <path d="M173.157 23.4638C172.719 24.31 171.572 25 170.603 25L164.194 25C163.229 25 162.795 24.31 163.233 23.4638L174.6 1.53619C175.038 0.689984 176.184 -3.23722e-08 177.154 -3.25503e-08L183.563 -3.37279e-08C184.527 -3.39051e-08 184.961 0.689984 184.523 1.53619L173.157 23.4638Z" fill="url(#paint1_linear_170_2074)"/>
                <path d="M156.851 23.4638C156.413 24.31 155.267 25 154.297 25L147.888 25C146.923 25 146.49 24.31 146.928 23.4638L158.294 1.53619C158.732 0.689984 159.879 -2.93761e-08 160.848 -2.95542e-08L167.257 -3.07318e-08C168.222 -3.09091e-08 168.656 0.689984 168.217 1.53619L156.851 23.4638Z" fill="url(#paint2_linear_170_2074)"/>
                <path d="M140.545 23.4638C140.107 24.31 138.961 25 137.991 25L131.582 25C130.617 25 130.184 24.31 130.622 23.4638L141.988 1.53619C142.426 0.689984 143.573 -2.63801e-08 144.542 -2.65582e-08L150.951 -2.77358e-08C151.916 -2.79131e-08 152.35 0.689984 151.911 1.53619L140.545 23.4638Z" fill="url(#paint3_linear_170_2074)"/>
                <path d="M124.235 23.4638C123.797 24.31 122.651 25 121.681 25L115.272 25C114.307 25 113.874 24.31 114.312 23.4638L125.678 1.53619C126.116 0.689984 127.263 -2.33833e-08 128.232 -2.35614e-08L134.641 -2.4739e-08C135.606 -2.49162e-08 136.04 0.689984 135.601 1.53619L124.235 23.4638Z" fill="url(#paint4_linear_170_2074)"/>
                <path d="M107.929 23.4638C107.491 24.31 106.345 25 105.375 25L98.9663 25C98.0014 25 97.5676 24.31 98.0058 23.4638L109.376 1.53619C109.815 0.689984 110.961 -2.0388e-08 111.93 -2.05661e-08L118.339 -2.17437e-08C119.304 -2.1921e-08 119.738 0.689984 119.3 1.53619L107.934 23.4638L107.929 23.4638Z" fill="url(#paint5_linear_170_2074)"/>
                <path d="M91.6234 23.4638C91.1852 24.31 90.0389 25 89.0695 25L82.6605 25C81.6956 25 81.2619 24.31 81.7001 23.4638L93.0708 1.53619C93.5089 0.689984 94.6553 -1.7392e-08 95.6246 -1.75701e-08L102.034 -1.87477e-08C102.999 -1.8925e-08 103.432 0.689984 102.994 1.53619L91.6278 23.4638L91.6234 23.4638Z" fill="url(#paint6_linear_170_2074)"/>
                <path d="M75.3177 23.4638C74.8795 24.31 73.7331 25 72.7638 25L66.3548 25C65.3899 25 64.9562 24.31 65.3943 23.4638L76.765 1.53619C77.2032 0.689984 78.3496 -1.4396e-08 79.3189 -1.45741e-08L85.7279 -1.57517e-08C86.6928 -1.5929e-08 87.1266 0.689984 86.6884 1.53619L75.3221 23.4638L75.3177 23.4638Z" fill="url(#paint7_linear_170_2074)"/>
                <path d="M59.0117 23.4638C58.5736 24.31 57.4272 25 56.4579 25L50.0489 25C49.084 25 48.6502 24.31 49.0884 23.4638L60.4547 1.53619C60.8928 0.689984 62.0392 -1.13991e-08 63.0085 -1.15772e-08L69.4175 -1.27548e-08C70.3824 -1.29321e-08 70.8162 0.689984 70.378 1.53619L59.0117 23.4638Z" fill="url(#paint8_linear_170_2074)"/>
                <path d="M42.706 23.4638C42.2678 24.31 41.1215 25 40.1521 25L33.7431 25C32.7782 25 32.3445 24.31 32.7827 23.4638L44.1489 1.53619C44.5871 0.689984 45.7335 -8.40308e-09 46.7028 -8.58119e-09L53.1118 -9.75878e-09C54.0767 -9.93607e-09 54.5105 0.689984 54.0723 1.53619L42.706 23.4638Z" fill="url(#paint9_linear_170_2074)"/>
                <path d="M26.4003 23.4638C25.9621 24.31 24.8157 25 23.8464 25L17.4374 25C16.4725 25 16.0388 24.31 16.4769 23.4638L27.8432 1.53619C28.2814 0.689984 29.4277 -5.40706e-09 30.3971 -5.58517e-09L36.8061 -6.76276e-09C37.771 -6.94005e-09 38.2047 0.689984 37.7665 1.53619L26.4003 23.4638Z" fill="url(#paint10_linear_170_2074)"/>
                <path d="M10.0943 23.4638C9.65616 24.31 8.5098 25 7.54048 25L1.13147 25C0.166577 25 -0.267182 24.31 0.171003 23.4638L11.5373 1.53619C11.9754 0.689984 13.1218 -2.411e-09 14.0911 -2.58911e-09L20.5001 -3.7667e-09C21.465 -3.94399e-09 21.8988 0.689984 21.4606 1.53619L10.0943 23.4638Z" fill="url(#paint11_linear_170_2074)"/>
                <defs>
                    <linearGradient id="paint0_linear_170_2074" x1="2.29675e-09" y1="12.5" x2="201" y2="12.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFB525"/>
                    <stop offset="1" stopColor="#F64646"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_170_2074" x1="2.29675e-09" y1="12.5" x2="201" y2="12.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFB525"/>
                    <stop offset="1" stopColor="#F64646"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_170_2074" x1="2.29675e-09" y1="12.5" x2="201" y2="12.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFB525"/>
                    <stop offset="1" stopColor="#F64646"/>
                    </linearGradient>
                    <linearGradient id="paint3_linear_170_2074" x1="2.29675e-09" y1="12.5" x2="201" y2="12.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFB525"/>
                    <stop offset="1" stopColor="#F64646"/>
                    </linearGradient>
                    <linearGradient id="paint4_linear_170_2074" x1="2.29675e-09" y1="12.5" x2="201" y2="12.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFB525"/>
                    <stop offset="1" stopColor="#F64646"/>
                    </linearGradient>
                    <linearGradient id="paint5_linear_170_2074" x1="2.29675e-09" y1="12.5" x2="201" y2="12.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFB525"/>
                    <stop offset="1" stopColor="#F64646"/>
                    </linearGradient>
                    <linearGradient id="paint6_linear_170_2074" x1="2.29675e-09" y1="12.5" x2="201" y2="12.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFB525"/>
                    <stop offset="1" stopColor="#F64646"/>
                    </linearGradient>
                    <linearGradient id="paint7_linear_170_2074" x1="2.29675e-09" y1="12.5" x2="201" y2="12.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFB525"/>
                    <stop offset="1" stopColor="#F64646"/>
                    </linearGradient>
                    <linearGradient id="paint8_linear_170_2074" x1="2.29675e-09" y1="12.5" x2="201" y2="12.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFB525"/>
                    <stop offset="1" stopColor="#F64646"/>
                    </linearGradient>
                    <linearGradient id="paint9_linear_170_2074" x1="2.29675e-09" y1="12.5" x2="201" y2="12.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFB525"/>
                    <stop offset="1" stopColor="#F64646"/>
                    </linearGradient>
                    <linearGradient id="paint10_linear_170_2074" x1="2.29675e-09" y1="12.5" x2="201" y2="12.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFB525"/>
                    <stop offset="1" stopColor="#F64646"/>
                    </linearGradient>
                    <linearGradient id="paint11_linear_170_2074" x1="2.29675e-09" y1="12.5" x2="201" y2="12.5" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FFB525"/>
                    <stop offset="1" stopColor="#F64646"/>
                    </linearGradient>
                </defs>
                </svg>
        </div>
    </>
  );
}
