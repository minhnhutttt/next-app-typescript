import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

export default function SvgMotionPath({
  color = "#3A86FF",
  className,
}: { color: string; className: string }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    gsap.registerPlugin(MotionPathPlugin);

    if (!svgRef.current) return;

    const path = svgRef.current.querySelector<SVGPathElement>(".motion-path");
    const arrow = svgRef.current.querySelector<SVGPathElement>(".arrow-head");
    if (!path || !arrow) return;

    const pathLength = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    const tl = gsap.timeline({
      repeat: -1,
      defaults: { ease: "power1.inOut" },
    });

    tl.to(path, {
      strokeDashoffset: 0,
      duration: 5,
    }, 0);

    tl.to(arrow, {
      duration: 5,
      motionPath: {
        path: path,
        align: path,
        alignOrigin: [0.5, 0.5],
        autoRotate: -25,
      },
    }, 0);
  }, []);

  return (
    <svg
      ref={svgRef}
      className={className}
      width="236"
      height="299"
      viewBox="0 0 236 299"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
    >
      <path
        className="motion-path"
        d="M41.1505 146.554C39.1255 145.978 30.2246 139.054 28.6562 137.697C6.01679 118.089 -3.11573 87.8756 4.81898 58.8473C8.55801 45.1574 15.8309 32.8444 25.8436 23.2323C36.5313 12.9781 50.1441 6.10661 65.1995 3.37259C95.5155 -2.27418 125.07 10.3897 142.343 36.4257C150.675 48.9771 155.307 63.4283 155.737 78.2105C156.187 93.807 151.839 109.106 143.157 122.498L207.62 171.108C207.905 171.326 207.965 171.73 207.759 172.021C194.855 190.16 189.316 212.376 192.168 234.579C195.06 257.127 206.383 276.993 224.039 290.517H224.046"
        stroke={color}
        strokeWidth="4"
      />
      <path
        className="arrow-head"
        d="M235.736 298.08L227.92 277.81C227.735 277.333 227.047 277.366 226.914 277.863L223.976 288.68C223.936 288.819 223.844 288.938 223.711 289.011L213.5 294.432C213.05 294.671 213.162 295.346 213.665 295.425L235.153 298.795C235.557 298.861 235.875 298.464 235.729 298.08H235.736Z"
        fill={color}
      />
    </svg>
  );
}
