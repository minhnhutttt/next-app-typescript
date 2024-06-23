"use client"
import Header from "@/components/header";
import FAQ from "./components/faq/faq";
import Fear from "./components/fear";
import FV from "./components/fv";
import Introduction from "./components/introduction";
import Memories from "./components/memories";
import Recover from "./components/recover";
import Story from "./components/story";
import Trust from "./components/trust";
import { useEffect } from "react";
import ScrollOut from "scroll-out";

export default function Home() {
  
  useEffect(()=>{
    ScrollOut({
      once: true
    });
    setTimeout(() => {
      if ( window && document ) {
          const splitting = require('splitting');
          splitting();
      }
    });
},[])
  return (
    <main>
      <Header />
      <FV />
      <Fear />
      <Recover />
      <Introduction />
      <Story />
      <Trust />
      <Memories />
      <FAQ />
    </main>
  );
}
