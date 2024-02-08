"use client";
import { ReactNode, useEffect, useRef } from "react";
import { ReactLenis } from '@studio-freight/react-lenis'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

type SmoothScrollPropsType = {
    children: ReactNode;
};
export default function SmoothScroll({children}: SmoothScrollPropsType) {
    const lenisRef = useRef<any>()
  
    useEffect(() => {
      function update(time: number) {
        lenisRef.current?.lenis?.raf(time * 1000)
      }
    
      gsap.ticker.add(update)
    
      return () => {
        gsap.ticker.remove(update)
      }
    })
    return (
      <main>
        <ReactLenis root>
            {children}
        </ReactLenis>
      </main>
    );
}
