"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import gsap, { Power3 } from "gsap";
import { useEffect, useRef } from "react";

export default function FVText() {
  const animateRefs = useScrollAnimation("fadeUp");
  const boxRef = useRef<SVGSVGElement>(null);
  const refs = {
    n1Shadow: useRef<SVGPathElement>(null),
    n3Shadow: useRef<SVGPathElement>(null),
    f1: useRef<SVGPathElement>(null),
    f2: useRef<SVGPathElement>(null),
    f3: useRef<SVGPathElement>(null),
    f3Shadow: useRef<SVGPathElement>(null),
    t1: useRef<SVGPathElement>(null),
    t2: useRef<SVGPathElement>(null),
    t1Shadow: useRef<SVGPathElement>(null),
    dash: useRef<SVGPathElement>(null),
    dashShadow: useRef<SVGPathElement>(null),
    l1: useRef<SVGPathElement>(null),
    l2: useRef<SVGPathElement>(null),
    l2Shadow: useRef<SVGPathElement>(null),
    i1: useRef<SVGPathElement>(null),
    i2: useRef<SVGPathElement>(null),
    i2shadow: useRef<SVGPathElement>(null),
    iLow1: useRef<SVGPathElement>(null),
    iLow2: useRef<SVGPathElement>(null),
    iLow3: useRef<SVGPathElement>(null),
    iLow1Shadow: useRef<SVGPathElement>(null),
    iLow2Shadow: useRef<SVGPathElement>(null),
    k1: useRef<SVGPathElement>(null),
    k2: useRef<SVGPathElement>(null),
    k3: useRef<SVGPathElement>(null),
    k3Shadow: useRef<SVGPathElement>(null),
  };
  useEffect(() => {
    if (!boxRef.current) return;
    let ctx = gsap.context(() => {
      const n_tl = gsap.timeline();

      // N //
      n_tl
        .to(refs.n1Shadow.current, { opacity: 0, duration: 0.5 }, 0.3)
        .to(refs.n3Shadow.current, { opacity: 0, duration: 1.5 }, 0.3);

      // F //
      const f_tl = gsap.timeline();
      f_tl
        .from(refs.f3Shadow.current, { opacity: 0 })
        .from(refs.f3.current, { scaleY: 0, duration: 0.15 }, 0)
        .from(refs.f2.current, { scaleX: 0, duration: 0.33 }, 0.1)
        .from(refs.f1.current, { scaleX: 0, duration: 0.15 }, 0.28)
        .to(refs.f3Shadow.current, { opacity: 0, duration: 0.86 });

      // T //
      const t_tl = gsap.timeline();
      t_tl
        .from(refs.t1Shadow.current, { opacity: 0 })
        .from(refs.t1.current, { scaleY: 0, duration: 0.1 }, 0)
        .from(refs.t2.current, { scaleX: 0, duration: 0.25 }, 0.1)
        .to(refs.t1Shadow.current, { opacity: 0, duration: 0.82 });

      // Dash //
      const dash_tl = gsap.timeline();
      dash_tl
        .from(refs.dashShadow.current, { opacity: 0 })
        .from(refs.dash.current, { scaleX: 0, duration: 0.1 }, 0)
        .to(refs.dashShadow.current, { opacity: 0, duration: 0.82 });

      // L //
      const l_tl = gsap.timeline();
      l_tl
        .from(refs.l2Shadow.current, { opacity: 0 }, 0.11)
        .from(refs.l1.current, { scaleX: 0, duration: 0.22 }, 0)
        .from(refs.l2.current, { scaleY: 0, duration: 0.33 }, 0.1)
        .to(refs.l2Shadow.current, { opacity: 0, duration: 0.83 });

      // I //
      const i_tl = gsap.timeline();
      i_tl
        .from(refs.i2shadow.current, { opacity: 0 })
        .from(
          refs.i1.current,
          { scaleY: -0, transformOrigin: "100% 0%", duration: 0.18 },
          0,
        )
        .from(
          refs.i2.current,
          { scaleY: -0, transformOrigin: "100% 0%", duration: 0.18 },
          0,
        )
        .to(refs.i2shadow.current, { opacity: 0, duration: 0.83 });

      // n //
      const nLow_tl = gsap.timeline();
      nLow_tl
        .from(refs.iLow1Shadow.current, { opacity: 0 }, 0.31)
        .from(refs.iLow2Shadow.current, { opacity: 0 }, 0.21)
        .from(refs.iLow3.current, { scaleY: 0, duration: 0.18 }, 0.1)
        .from(refs.iLow2.current, { scaleX: 0, duration: 0.18 }, 0.2)
        .from(refs.iLow1.current, { scaleY: 0, duration: 0.18 }, 0.3)
        .to([refs.iLow1Shadow.current, refs.iLow2Shadow.current], {
          opacity: 0,
          duration: 0.83,
        });

      // K //
      const k_tl = gsap.timeline();
      k_tl
        .from(refs.k3Shadow.current, { opacity: 0 }, 0.31)
        .from(refs.k1.current, { scaleY: 0, duration: 0.18 }, 0.1)
        .from(refs.k2.current, { scaleX: 0, duration: 0.18 }, 0.2)
        .from(refs.k3.current, { scaleY: 0, duration: 0.18 }, 0.3)
        .to(refs.k3Shadow.current, { opacity: 0, duration: 0.83 });

      const movement_tl = gsap.timeline();
      movement_tl
        .from(boxRef.current, { opacity: 0, duration: 0.7 }, 0)
        .from(
          boxRef.current,
          { xPercent: 50, left: "50%", duration: 1.9, ease: Power3.easeInOut },
          0.7,
        )
        .to(
          boxRef.current,
          {
            xPercent: 0,
            left: "0%",
            opacity: 1,
            duration: 1.9,
            ease: Power3.easeInOut,
          },
          0.7,
        );

      const exit_tl = gsap.timeline();

      const master_tl = gsap.timeline();
      master_tl
        .add(movement_tl, 0)
        .add(n_tl, 0.7)
        .add(f_tl, 0.8)
        .add(t_tl, 1.08)
        .add(dash_tl, 1.18)
        .add(l_tl, 1.33)
        .add(i_tl, 1.63)
        .add(nLow_tl, 1.7)
        .add(k_tl, 1.8);
    });
    return () => ctx.revert();
  }, []);
  return (
    <div className="flex justify-center overflow-hidden">
      <h1 ref={animateRefs} className="opacity-0">
        <svg
          ref={boxRef}
          className="w-[73.264vw] min-[1440px]:w-[1055px] aspect-[1055/287]"
          viewBox="0 0 1055 287"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="N">
            <path
              className="base"
              id="N1-base"
              d="M86.6 282.1C88.2 283.8 90 284 107.2 284C124.7 284 126.1 283.9 128 282C130 280 130 278.7 130 152.7V26L129.5 24.5L128.5 23.3C126.6 21.6 124.1 21.5 105.9 21.5C88.2 21.5 85.9 21.7 84.3 23.3C82.6 24.9 82.5 29 82 79.6L81.5 134.2C83.1909 183.274 82.6591 167.774 86.6 282.1Z"
              fill="#EC4015"
            />
            <path
              ref={refs.n1Shadow}
              id="N1-shadow"
              d="M86.6 282.1C88.2 283.8 90 284 107.2 284C124.7 284 126.1 283.9 128 282C130 280 130 278.7 130 152.7V26L129.5 24.5L128.5 23.3C126.6 21.6 124.1 21.5 105.9 21.5C88.2 21.5 85.9 21.7 84.3 23.3C82.6 24.9 82.5 29 82 79.6L81.5 134.2C83.1909 183.274 82.6591 167.774 86.6 282.1Z"
              fill="url(#N1-shadowFill)"
            />
            <path
              className="base"
              id="N3-base"
              d="M2.37332 23.5983C0.375401 25.0967 0.375401 26.3954 0.0757135 153.663C-0.124078 273.837 -0.0241823 282.328 1.57415 283.427C3.97165 285.225 44.3296 285.225 45.5283 283.427C45.9279 282.828 46.5273 257.454 46.827 227.286L47.3264 172.343C45.7995 135.5 41.5101 32 41.1329 22.899C39.8342 22.3995 30.9435 21.9999 21.5533 21.9999C7.76769 22.0998 3.97165 22.3995 2.37332 23.5983Z"
              fill="#EC4015"
            />
            <path
              ref={refs.n3Shadow}
              id="N3-shadow"
              d="M2.37332 23.5983C0.375401 25.0967 0.375401 26.3954 0.0757135 153.663C-0.124078 273.837 -0.0241823 282.328 1.57415 283.427C3.97165 285.225 44.3296 285.225 45.5283 283.427C45.9279 282.828 46.5273 257.454 46.827 227.286L47.3264 172.343C45.7995 135.5 41.5101 32 41.1329 22.899C39.8342 22.3995 30.9435 21.9999 21.5533 21.9999C7.76769 22.0998 3.97165 22.3995 2.37332 23.5983Z"
              fill="url(#N3-shadowFill)"
            />
            <path
              className="base"
              id="N2-base"
              d="M5.2 21.4261C4.4 21.7261 2.9 22.6261 2 23.5261C21.0202 84.5 29.9103 113 46.2 165.226L65.6 222.626C76.3 254.126 85.9 280.826 86.8 281.826C88.4 283.526 90.2 283.726 107.4 283.726C124.9 283.726 126.3 283.626 128.2 281.726C103.432 203 98.5551 187.5 81.7 133.926L63.3 79.3261C51.3 43.7261 44.3 24.2261 43 23.0261C41.3 21.4261 38.8 21.2261 23.8 21.0261C14.4 20.9261 6 21.1261 5.2 21.4261Z"
              fill="#EC4015"
            />
            <defs>
              <linearGradient
                id="N1-shadowFill"
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                gradientUnits="userSpaceOnUse"
              >
                <stop className="shadow-start" offset="0%" />
                <stop className="shadow-end" offset="100%" />
              </linearGradient>
              <linearGradient
                id="N3-shadowFill"
                x1="50%"
                y1="100%"
                x2="50%"
                y2="0%"
                gradientUnits="userSpaceOnUse"
              >
                <stop className="shadow-start" offset="0%" />
                <stop className="shadow-end" offset="100%" />
              </linearGradient>
            </defs>
          </g>
          <g id="F">
            <path
              ref={refs.f3}
              className="base"
              id="F3-base"
              d="M178 24.4261C177.2 24.7261 175.7 25.6261 174.8 26.5261C173.1 27.9261 173 35.3261 173 155.726C173 278.126 173.1 283.526 174.8 285.026C176.4 286.526 179.4 286.726 196.3 286.726C214.7 286.726 216.1 286.626 218 284.726C220 282.726 220 281.426 220 228.226V173.726C220 145 220 143 220 130.726V98.7261V66.7261C220 48.5 220 31 220 24.0097C197.19 23.954 178.745 24.1466 178 24.4261Z"
              fill="#EC4015"
            />
            <path
              ref={refs.f3Shadow}
              id="F3-shadow"
              d="M178 24.4261C177.2 24.7261 175.7 25.6261 174.8 26.5261C173.1 27.9261 173 35.3261 173 155.726C173 278.126 173.1 283.526 174.8 285.026C176.4 286.526 179.4 286.726 196.3 286.726C214.7 286.726 216.1 286.626 218 284.726C220 282.726 220 281.426 220 228.226V173.726C220 145 220 143 220 130.726V98.7261V66.7261C220 48.5 220 31 220 24.0097C197.19 23.954 178.745 24.1466 178 24.4261Z"
              fill="url(#F3-shadowFill)"
            />
            <path
              ref={refs.f1}
              className="base"
              id="F1-base"
              d="M177.901 22.4255C177.101 22.7255 175.601 23.6255 174.701 24.5255C173.591 25.4396 173.163 28.9116 173 64.7255C194.401 64.7256 187.401 64.7256 219.901 64.7255H245.801C271.501 64.7255 271.801 64.7255 273.301 62.5255C274.601 60.7255 274.901 57.0255 274.901 43.1255C274.901 27.0255 274.801 25.9255 272.801 24.1255C270.801 22.3255 268.401 22.2255 225.001 22.0255C199.901 21.9255 178.701 22.1255 177.901 22.4255Z"
              fill="#EC4015"
            />
            <path
              ref={refs.f2}
              className="base"
              id="F2-base"
              d="M174.002 128C174.001 135.739 174 144.058 174 153C174 159.305 174 165.3 174.001 171C197.501 170.999 203.5 171 221 171H243.9H266.9L268.9 168.4C270.8 165.9 271 164.4 271 149.3C271 133.2 271 132.9 268.5 130.5L266.1 128H243.5H221C211 128 199 128 174.002 128Z"
              fill="#EC4015"
            />
            <defs>
              <linearGradient
                id="F3-shadowFill"
                x1="50%"
                y1="0%"
                x2="50%"
                y2="40%"
                gradientUnits="userSpaceOnUse"
              >
                <stop className="shadow-start" offset="0%" />
                <stop className="shadow-end" offset="100%" />
              </linearGradient>
            </defs>
          </g>
          <g id="T">
            <path
              ref={refs.t1}
              className="base"
              id="T1-base"
              d="M356 64.7261V172.226C356 278.426 356 279.726 358 281.726C359.9 283.626 361.3 283.726 379.5 283.726C397.7 283.726 399.1 283.626 401 281.726C403 279.726 403 278.426 403 172.226V64.7261C403 40 403 36.5 403 21.1079L380.2 21.0261C371.605 20.998 363.39 20.9935 356 21.0084C356.001 35.5 356.002 44 356 64.7261Z"
              fill="#EC4015"
            />
            <path
              ref={refs.t1Shadow}
              id="T1-shadow"
              d="M356 64.7261V172.226C356 278.426 356 279.726 358 281.726C359.9 283.626 361.3 283.726 379.5 283.726C397.7 283.726 399.1 283.626 401 281.726C403 279.726 403 278.426 403 172.226V64.7261C403 40 403 36.5 403 21.1079L380.2 21.0261C371.605 20.998 363.39 20.9935 356 21.0084C356.001 35.5 356.002 44 356 64.7261Z"
              fill="url(#T1-shadowFill)"
            />
            <path
              ref={refs.t2}
              className="base"
              id="T2-base"
              d="M323 21.4257C318.2 23.2257 318 24.0258 318 43.2258C318 59.6258 318.2 61.6258 319.8 63.0258C321.4 64.4258 324.3 64.7258 338.8 64.7258H356C379.5 64.7256 375 64.726 403 64.7258H419.8C442 64.7258 440.5 66.2258 440.5 43.1258C440.5 26.4258 440.4 25.7257 438.2 23.5257L435.9 21.2257L380.2 21.0257C349.6 20.9257 323.8 21.1257 323 21.4257Z"
              fill="#EC4015"
            />
            <defs>
              <linearGradient
                id="T1-shadowFill"
                x1="50%"
                y1="0%"
                x2="50%"
                y2="40%"
                gradientUnits="userSpaceOnUse"
              >
                <stop className="shadow-start" offset="0%" />
                <stop className="shadow-end" offset="100%" />
              </linearGradient>
            </defs>
          </g>

          <g id="em">
            <path
              ref={refs.dash}
              className="base"
              id="EM-base"
              d="M438.6 174.2C437.3 176 437 179.5 437 191.1C437 204.1 437.2 206.1 438.9 208.1L440.8 210.5H472.8C502.9 210.5 504.9 210.4 506.9 208.6C508.9 206.8 509 205.7 509 191C509 177.1 508.8 175.1 507.2 173.7C505.5 172.2 501.7 172 472.7 172C440.2 172 440.1 172 438.6 174.2Z"
              fill="#EC4015"
            />
            <path
              ref={refs.dashShadow}
              id="EM-shadow"
              d="M438.6 174.2C437.3 176 437 179.5 437 191.1C437 204.1 437.2 206.1 438.9 208.1L440.8 210.5H472.8C502.9 210.5 504.9 210.4 506.9 208.6C508.9 206.8 509 205.7 509 191C509 177.1 508.8 175.1 507.2 173.7C505.5 172.2 501.7 172 472.7 172C440.2 172 440.1 172 438.6 174.2Z"
              fill="url(#EM-shadowFill)"
            />
            <defs>
              <linearGradient
                id="EM-shadowFill"
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
                gradientUnits="objectBoundingBox"
              >
                <stop className="shadow-start" offset="0%" />
                <stop className="shadow-end" offset="100%" />
              </linearGradient>
            </defs>
          </g>
          <g id="L">
            <path
              ref={refs.l2}
              className="base"
              id="L2-base"
              d="M550.9 22.8188C549.5 23.3188 547.8 24.9188 547.1 26.3188C546.3 28.1188 546 62.2188 546 154.319V279.819L548.5 282.219L550.9 284.719H594C594 263.219 594 258.5 594 241.719V133.919V26.0188L591.9 24.1188C590 22.4188 587.9 22.2188 571.6 22.0188C561.6 21.9188 552.3 22.2188 550.9 22.8188Z"
              fill="#EC4015"
            />

            <path
              ref={refs.l2Shadow}
              id="L2-shadow"
              d="M550.9 22.8188C549.5 23.3188 547.8 24.9188 547.1 26.3188C546.3 28.1188 546 62.2188 546 154.319V279.819L548.5 282.219L550.9 284.719H594C594 263.219 594 258.5 594 241.719V133.919V26.0188L591.9 24.1188C590 22.4188 587.9 22.2188 571.6 22.0188C561.6 21.9188 552.3 22.2188 550.9 22.8188Z"
              fill="url(#L2-shadowFill)"
            />

            <path
              ref={refs.l1}
              className="base"
              id="L1-base"
              d="M546 242V280.1L547.5 283.5L550.9 285H597.8H644.1L646.8 282.7C649 279 649 279.4 649 263.6C649 247.2 649.5 246.4 647 244L644.1 242H619H594C574 242 563.5 242 546 242Z"
              fill="#EC4015"
            />
            <defs>
              <linearGradient
                id="L2-shadowFill"
                x1="50%"
                y1="100%"
                x2="50%"
                y2="0%"
                gradientUnits="userSpaceOnUse"
              >
                <stop className="shadow-start" offset="0%" />
                <stop className="shadow-end" offset="100%" />
              </linearGradient>
            </defs>
          </g>

          <g id="I">
            <path
              ref={refs.i1}
              className="base"
              id="I1-base"
              d="M705.762 47.0679C695.362 52.6679 691.362 55.3679 690.262 57.6679C688.762 60.4679 688.562 77.2679 689.862 80.8679C691.062 83.9679 707.462 93.5679 711.462 93.5679C714.562 93.5679 728.262 86.3679 731.762 82.8679C733.762 80.8679 733.962 79.7679 733.962 69.8679C733.962 62.0679 733.562 58.4679 732.562 56.9679C730.962 54.6679 716.462 45.9679 712.762 45.0679C711.362 44.7679 708.762 45.4679 705.762 47.0679Z"
              fill="#EC4015"
            />
            <path
              ref={refs.i2}
              className="base"
              id="I2-base"
              d="M691.5 108.5L689 110.9V197C689 281.7 689 283 691 285C692.9 286.9 694.3 287 711.5 287C728.7 287 730.1 286.9 732 285C734 283 734 281.7 734 196.6V110.1L731.4 108.1C728.9 106.2 727.4 106 711.3 106C694.2 106 693.9 106 691.5 108.5Z"
              fill="#EC4015"
            />
            <path
              ref={refs.i2shadow}
              id="I2-shadow"
              d="M691.5 108.5L689 110.9V197C689 281.7 689 283 691 285C692.9 286.9 694.3 287 711.5 287C728.7 287 730.1 286.9 732 285C734 283 734 281.7 734 196.6V110.1L731.4 108.1C728.9 106.2 727.4 106 711.3 106C694.2 106 693.9 106 691.5 108.5Z"
              fill="url(#I2-shadowFill)"
            />
            <defs>
              <linearGradient
                id="I2-shadowFill"
                x1="50%"
                y1="100%"
                x2="50%"
                y2="0%"
                gradientUnits="userSpaceOnUse"
              >
                <stop className="shadow-start" offset="0%" />
                <stop className="shadow-end" offset="100%" />
              </linearGradient>
            </defs>
          </g>

          <g id="N">
            <path
              ref={refs.iLow1}
              className="base"
              id="N21-base"
              d="M841 149.36C842.9 153.06 843 155.76 843.5 218.06C844 280.76 844.1 282.96 845.9 284.36C847.5 285.46 852 285.76 866.5 285.76C883.5 285.76 885.3 285.56 886.9 283.86C888.5 282.16 888.6 276.56 888.2 208.66C887.9 128.76 888 130.36 882.1 120.36C878.6 114.26 871.4 108.26 864.6 105.66C859.102 103.54 848.361 102.529 841 103.211C841.001 115.5 841.002 110 841 149.36Z"
              fill="#EC4015"
            />
            <path
              ref={refs.iLow1Shadow}
              id="N21-shadow"
              d="M841 149.36C842.9 153.06 843 155.76 843.5 218.06C844 280.76 844.1 282.96 845.9 284.36C847.5 285.46 852 285.76 866.5 285.76C883.5 285.76 885.3 285.56 886.9 283.86C888.5 282.16 888.6 276.56 888.2 208.66C887.9 128.76 888 130.36 882.1 120.36C878.6 114.26 871.4 108.26 864.6 105.66C859.102 103.54 848.361 102.529 841 103.211C841.001 115.5 841.002 110 841 149.36Z"
              fill="url(#N22-shadowFill)"
            />
            <path
              ref={refs.iLow3}
              className="base"
              id="N23-base"
              d="M821 111.3L818.9 108.7L816.9 106H798L779.5 106.5L777.1 108.6C775 111.3 775 111.8 775 196C775 280.2 775 280.7 777.1 283.4L779.1 286H797.9C815.7 286 816.8 285.9 818.6 283.9C820.4 281.9 820.5 278.9 821 217.6C821.5 156.6 821.6 153.3 823.4 149.7C822.465 134.74 822.2 130.5 821 111.3Z"
              fill="#EC4015"
            />
            <path
              ref={refs.iLow2Shadow}
              id="N23-shadow"
              d="M821 111.3L818.9 108.7L816.9 106H798L779.5 106.5L777.1 108.6C775 111.3 775 111.8 775 196C775 280.2 775 280.7 777.1 283.4L779.1 286H797.9C815.7 286 816.8 285.9 818.6 283.9C820.4 281.9 820.5 278.9 821 217.6C821.5 156.6 821.6 153.3 823.4 149.7C822.465 134.74 822.2 130.5 821 111.3Z"
              fill="url(#N22-shadowFill)"
            />

            <path
              ref={refs.iLow2}
              className="base"
              id="N22-base"
              d="M835.373 104.16C833.173 104.86 828.973 106.76 826.173 108.26L820.973 111.06L818.873 108.46L816.873 105.76H797.973L779 106.5L777.073 108.36C775.463 110.431 775.087 111.208 775 149.46C792.48 149.46 797.98 149.461 823.373 149.46C824.873 146.76 826.373 145.46 829.073 144.66C834.373 143.06 838.073 144.46 840.473 149.36C863.837 149.41 852.98 149.386 887.2 149.46C886.657 128.396 885.335 126.735 881.573 120.36C878.073 114.26 870.873 108.26 864.073 105.66C857.073 102.96 841.573 102.06 835.373 104.16Z"
              fill="#EC4015"
            />
            <defs>
              <linearGradient
                id="N22-shadowFill"
                x1="50%"
                y1="100%"
                x2="50%"
                y2="0%"
                gradientUnits="userSpaceOnUse"
              >
                <stop className="shadow-start" offset="0%" />
                <stop className="shadow-end" offset="50%" />
              </linearGradient>
            </defs>
          </g>

          <g id="K">
            <path
              ref={refs.k1}
              className="base"
              id="K1-base"
              d="M928 220V274C947.5 252.213 957.5 241.041 973.2 223.5C997.088 197.5 989.6 205.65 1006 187.8C1006 187.5 1015.2 171.1 1026.5 151.4C1037.8 131.6 1047 114.5 1047 113.2C1047 111.9 1045.9 109.8 1044.5 108.5C1042.1 106 1042 106 1022.6 106C1003.8 106 1003 106.1 1000.6 108.2C999.3 109.5 992.5 121.3 985.6 134.5L973 158.5C958 179 964.951 169.5 928 220Z"
              fill="#EC4015"
            />
            <path
              ref={refs.k2}
              className="base"
              id="K2-base"
              d="M930.001 117C930 125.163 930 133.916 930 143.3V170.5C954.5 199.228 961.981 208 975.2 223.5L990 253.3C998.1 269.7 1005.6 284 1006.5 285C1008.2 286.9 1009.7 287 1029.6 287H1050.9L1052.9 284.4C1054.1 282.9 1055 281 1055 280.2C1055 279.4 1044.4 258.3 1031.5 233.5C1018.6 208.6 1008 188.1 1008 187.8C991.5 173.15 988.515 170.5 975 158.5C952.5 137.75 949.5 134.983 930.001 117Z"
              fill="#EC4015"
            />
            <path
              ref={refs.k3}
              className="base"
              id="K3-base"
              d="M930 2.00012C928 4.00012 928 5.29999 928 143.3V282.7L930.3 284.8C932.5 286.9 933.5 287 950.8 287C967.7 287 969.1 286.9 971 285C972.9 283.1 973 281.6 973.1 253.2L973.2 223.5C973.118 197 973.092 188.5 973 158.5V80.9C973 6.99998 972.9 3.2001 971.2 1.7001C969.6 0.200104 966.6 0.00012207 950.7 0.00012207C933.3 0.00012207 931.9 0.100122 930 2.00012Z"
              fill="#EC4015"
            />

            <path
              ref={refs.k3Shadow}
              id="K3-shadow"
              d="M930 2.00012C928 4.00012 928 5.29999 928 143.3V282.7L930.3 284.8C932.5 286.9 933.5 287 950.8 287C967.7 287 969.1 286.9 971 285C972.9 283.1 973 281.6 973.1 253.2L973.2 223.5C973.118 197 973.092 188.5 973 158.5V80.9C973 6.99998 972.9 3.2001 971.2 1.7001C969.6 0.200104 966.6 0.00012207 950.7 0.00012207C933.3 0.00012207 931.9 0.100122 930 2.00012Z"
              fill="url(#K-shadowFill)"
            />

            <defs>
              <linearGradient
                id="K-shadowFill"
                x1="50%"
                y1="100%"
                x2="50%"
                y2="0%"
                gradientUnits="userSpaceOnUse"
              >
                <stop className="shadow-start" offset="0%" />
                <stop className="shadow-end" offset="50%" />
              </linearGradient>
            </defs>
          </g>
        </svg>
      </h1>
    </div>
  );
}
