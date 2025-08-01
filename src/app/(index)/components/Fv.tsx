"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Fv = () => {
  return (
    <section className="h-screen relative">
    </section>
  );
};

export default Fv;
