"use client";
import gsap, { Power2 } from "gsap";
import { useEffect, useRef } from "react";

const useBgText = () => {
  const spanRef = useRef(null);

  useEffect(() => {
    if (spanRef.current) {
      const spanTween = gsap.to(spanRef.current, {
        width: "100%",
        alpha: 1,
        duration: 1.6,
        ease: Power2.easeInOut,
        scrollTrigger: {
          trigger: spanRef.current,
          start: "top bottom-=60",
          toggleActions: "play none none none",
        },
      });

      return () => {
        spanTween.kill();
      };
    }
  }, []);

  return spanRef;
};

export default useBgText;
