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

  return (
    <main>
        <ScaledDivs />
    </main>
  );
}
