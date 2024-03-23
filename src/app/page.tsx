"use client"
import { useEffect } from "react";
import FV from "./components/pages/home/fv";
import ScrollOut from "scroll-out";
import Principle from "./components/pages/home/principle";
import Service from "./components/pages/home/service";
import Team from "./components/pages/home/team";
import Tool from "./components/pages/home/tool";
export default function Home() {
  useEffect(()=>{
    ScrollOut({
      cssProps: {
        visibleY: true,
        viewportY: true
      }
    });
  },[])
  return (
    <main>
      <FV />
      <Principle />
      <Service />
      <Team />
      <Tool />
      <Service />
      <Team />
    </main>
  );
}
