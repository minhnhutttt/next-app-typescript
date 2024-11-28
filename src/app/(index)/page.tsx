"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FV from "./components/fv";
import Footer from "@/components/footer";
// @ts-ignore
import Introduction from "./components/introduction";
import Activation from "./components/activation";
import Introduction2 from "./components/introduction2";
import Contents from "./components/contents";
import Technical from "./components/technical";
import Impact from "./components/impact";
import Future from "./components/future";
import Roadmap from "./components/roadmap";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sectionsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    
  }, []);

  return (
    <main>
          <FV />
          <Introduction />
          <Activation />
          <Contents />
          <Technical />
          <Impact />
          <Future />
          <Roadmap />
          {/* <Introduction2 /> */}
    </main>
  );
}
