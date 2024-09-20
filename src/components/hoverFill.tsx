import { useState, useEffect, useRef, useLayoutEffect, ReactNode } from "react";
import { gsap } from 'gsap';

const MouseDirectionDiv = ({children}: {children: ReactNode}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [direction, setDirection] = useState<string>("");
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
      setDirection("EL");
    } else if (mouseX > rect.right) {
      setDirection("ER");
    } else if (mouseY < rect.top) {
      setDirection("ET");
      tl.set(pathRef.current, {
        attr: { d: "M 0 100 V 0 Q 50 0 100 0 V 0 H 0 z" },
      });
      tl.to(pathRef.current, {
        attr: { d: "M 0 100 V 100 Q 50 125 100 100 V 0 H 0 z" },
      });
    } else if (mouseY > rect.bottom) {
      setDirection("EB");
    }
  };

  const handleMouseLeave = (e: MouseEvent) => {
    if (!divRef.current) return;

    const rect = divRef.current.getBoundingClientRect();
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const tl = gsap.timeline();
    if (mouseX < rect.left) {
      setDirection("LL");
    } else if (mouseX > rect.right) {
      setDirection("LR");
    } else if (mouseY < rect.top) {
      setDirection("LT");
      tl.set(pathRef.current, {
        attr: { d: "M 0 100 V 0 Q 50 50 100 0 V 100 z" },
      });
      tl.to(pathRef.current, {
        attr: {d: "M 0 100 V 0 Q 50 0 100 0 V 0 H 0 z" },
      });
    } else if (mouseY > rect.bottom) {
      setDirection("LB");
      tl.set(pathRef.current, {
        attr: { d: "M 0 100 V 0 Q 50 50 100 0 V 100 z" },
      });
      tl.to(pathRef.current, {
        attr: { d: "M 0 100 V 100 Q 50 100 100 100 V 100 z" },
      });
    }
  };
 
  useLayoutEffect(() => {

  },[direction])
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
      <p>Mouse Direction: {direction}</p>
    </div>
  );
};

export default MouseDirectionDiv;
