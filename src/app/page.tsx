"use client";
import ScaledDivs from "./components/ScaledDivs";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
