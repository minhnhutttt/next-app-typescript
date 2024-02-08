import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useMarquise = (containerRef: React.RefObject<HTMLDivElement> | null) => {
  useEffect(() => {
    const container = containerRef?.current;

    if (container) {
     var ctx = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play pause reverse pause",
          scrub: true,
        },
      }).to(container, {
        xPercent: -50,
        ease: "linear",
      });
    }
    
    return () => {
      ctx.revert();
    };
  }, [containerRef]);
};

export default useMarquise;
