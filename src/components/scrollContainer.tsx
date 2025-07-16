"use client"
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import "lenis/dist/lenis.css";
type ScrollContainerPropsType = {
    children: ReactNode;
  };
export default function ScrollContainer({children}: ScrollContainerPropsType) {
  const lenisRef = useRef<LenisRef>(null);
  
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <div>
       <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
        {children}
    </div>
  );
}
