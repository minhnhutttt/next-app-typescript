"use client";
import { useRef, useState } from "react";
import ScaledDivs from "./components/ScaledDivs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

export default function Home() {
  const divRef = useRef(null);
  const [rotate, setRotate] = useState(false);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Bạn có thể thêm các animation khác tại đây nếu cần.
    });

    return () => ctx.revert();
  }, []);

  const handleClick = () => {
    setRotate(!rotate);
    gsap.to(divRef.current, {
      width: "100vh",
      height: "20vw",
      rotate: -270,
      duration: 1, // thời gian thực hiện animation
      ease: "power2.inOut", // kiểu easing cho animation
    });
  };

  return (
    <main>
      <div
        ref={divRef}
        className="bg-red w-full h-screen origin-[10vw]"
        onClick={handleClick}
      >
        <ScaledDivs rotate={rotate} />
      </div>
    </main>
  );
}
