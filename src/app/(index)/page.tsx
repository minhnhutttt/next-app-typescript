"use client"
import FV from "./components/fv";
import { useEffect, useLayoutEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

export default function Home() {

  useEffect(() => {
    let ctx = gsap.context(() => {
      
      gsap.utils.toArray(".section-start").forEach((panel: any, i) => {
        ScrollTrigger.create({
          trigger: panel,
          start: "top top", 
          pin: true, 
          pinSpacing: false
        });
      });
      
      ScrollTrigger.create({
        snap:1
      });
      
    });

    return () => ctx.revert();
  }, []);
  return (
    <main>
        <div className="relative">
          <div className="section-start">
          <FV />
          </div>
          <div className="section-start">
          <FV />
          </div>
          <div className="section-start">
          <FV />
          </div>
        </div>
    </main>
  );
}
