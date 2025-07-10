
"use client"
import About from "./components/About";
import Brands from "./components/Brands";
import Fv from "./components/Fv";
import Signature from "./components/Signature";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import "lenis/dist/lenis.css";
import { useEffect, useRef } from "react";
import Speaking from "./components/Speaking";
import Press from "./components/Press";
import Author from "./components/Author";

export default function Home() {
  const lenisRef = useRef<LenisRef>(null);
  
  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <main className="bg-white relative">
       <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <Fv />
      <About />
      <Brands />
      <Signature />
      <Speaking />
      <Press />
      <Author />
    </main>
  );
}
