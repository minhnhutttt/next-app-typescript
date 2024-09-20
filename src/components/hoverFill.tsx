import { useState, useEffect, useRef, useLayoutEffect, ReactNode } from "react";
import { gsap } from 'gsap';

const HoverFill = ({children}: {children: ReactNode}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [previousMousePos, setPreviousMousePos] = useState<{ x: number, y: number } | null>(null);

  const handleMouseMove = (e: MouseEvent) => {
    setPreviousMousePos({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (e: MouseEvent) => {
    if (!divRef.current || !previousMousePos) return;

    const rect = divRef.current.getBoundingClientRect();
    const mouseX = previousMousePos.x;
    const mouseY = previousMousePos.y;
    const tl = gsap.timeline();
    if (mouseX < rect.left) {
    //   EL
      tl.set(pathRef.current, {
        attr: { d: "M 0 0 H 20 Q 25 50 20 100 H 0 V 0 z" },
      });
      tl.to(pathRef.current, {
        attr: { d: "M 0 0 H 100 Q 110 50 100 100 H 0 V 0 z" },
      });
    } else if (mouseX > rect.right) {
    //   ER
      tl.set(pathRef.current, {
        attr: { d: "M 100 0 H 90 Q 65 50 90 100 H 100 V 0 z" },
      });
      tl.to(pathRef.current, {
        attr: { d: "M 100 0 H 0 Q -10 50 0 100 H 100 V 0 z" },
      });
    } else if (mouseY < rect.top) {
    //   ET
      tl.set(pathRef.current, {
        attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 0 H 0 z" },
      });
      tl.to(pathRef.current, {
        attr: { d: "M 0 100 V 100 Q 50 125 100 100 V 0 H 0 z" },
      });
    } else if (mouseY > rect.bottom) {
    //   EB
      tl.set(pathRef.current, {
        attr: { d: "M 0 100 V 80 Q 50 50 100 80 V 100 z" },
      });
      tl.to(pathRef.current, {
        attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 100 z" },
      });
    }
  };

  const handleMouseLeave = (e: MouseEvent) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const tl = gsap.timeline();
    if (mouseX < rect.left) {
    //   LL
      tl.set(pathRef.current, {
        attr: { d: "M 0 0 H 60 Q 25 50 60 100 H 0 V 0 z" },
      });
      tl.to(pathRef.current, {
        attr: { d: "M 0 0 H 0 Q 0 50 0 100 H 0 V 0 z" },
      });
    } else if (mouseX > rect.right) {
    //   LR
      tl.set(pathRef.current, {
        attr: { d: "M 100 0 H 20 Q 65 50 20 100 H 100 V 0 z" },
      });
      tl.to(pathRef.current, {
        attr: { d: "M 100 0 H 100 Q 100 50 100 100 H 100 V 0 z" },
      });
    } else if (mouseY < rect.top) {
    //   LT
      tl.set(pathRef.current, {
        attr: { d: "M 0 100 V 100 Q 50 60 100 100 V 0 H 0 z" },
      });
      tl.to(pathRef.current, {
        attr: {d: "M 0 100 V 0 Q 50 0 100 0 V 0 H 0 z" },
      });
    } else if (mouseY > rect.bottom) {
    //   LB
      tl.set(pathRef.current, {
        attr: { d: "M 0 100 V 0 Q 50 50 100 0 V 100 z" },
      });
      tl.to(pathRef.current, {
        attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
      });
    }
  };
 
  useLayoutEffect(() => {

  })
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    const divElement = divRef.current;
    if (!divElement) return;

    divElement.addEventListener("mouseenter", handleMouseEnter);
    divElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (divElement) {
        divElement.removeEventListener("mouseenter", handleMouseEnter);
        divElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [previousMousePos]);

  return (
    <div ref={divRef} className="relative mix-blend-difference">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" data-animate="card-hover-fill" className="fill-white absolute w-full h-full inset-0 mix-blend-difference"><path ref={pathRef} d="M 0 100 V 0 Q 0 50 0 100 V 0 H 0 z"></path></svg>
      {children}
    </div>
  );
};

export default HoverFill;
