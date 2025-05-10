"use client";

import { ReactNode, useLayoutEffect, useRef } from "react";

import { ReactLenis } from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollPropsType {
  children: ReactNode;
}

const SmoothScroll = ({ children }: SmoothScrollPropsType) => {
  const lenisRef = useRef<any>();

  useLayoutEffect(() => {
    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <main>
      <ReactLenis root>{children}</ReactLenis>
    </main>
  );
};

export default SmoothScroll;
