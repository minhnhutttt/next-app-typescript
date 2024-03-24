"use client"
import { useEffect } from "react";
import FV from "./components/pages/home/fv";
import ScrollOut from "scroll-out";
import Principle from "./components/pages/home/principle";
import Service from "./components/pages/home/service";
import Team from "./components/pages/home/team";
import Tool from "./components/pages/home/tool";
import Request from "./components/pages/home/request";
import Flow from "./components/pages/home/flow";
import Message from "./components/pages/home/message";
import Contact from "./components/pages/home/contact";
export default function Home() {
  useEffect(()=>{
    ScrollOut({
      cssProps: {
        visibleY: true,
        viewportY: true,
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
      <Request />
      <Flow />
      <Message />
      <Contact />
    </main>
  );
}
