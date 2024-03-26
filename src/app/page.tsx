"use client"
import { ReactNode, useEffect, useRef } from "react";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import ScrollOut from "scroll-out";
import Anchors from "./components/pages/home/anchors";
import FAQ from "./components/pages/home/faq/faq";
import Fixed from "./components/pages/home/fixed";
import FV from "./components/pages/home/fv";
import SectionError from "./components/pages/home/sectionError";
import SectionFeatures from "./components/pages/home/sectionFeatures";
import SectionPopular from "./components/pages/home/sectionPopular";
import SectionPrice from "./components/pages/home/sectionPrice";
import SectionSupport from "./components/pages/home/sectionSupport";
import SectionVoice from "./components/pages/home/sectionVoice";

export default function Home() {
    useEffect(()=>{
        setTimeout(() => {
        if ( window && document ) {
                const Splitting = require('Splitting');
                Splitting();
            }
        });
        ScrollOut({
          });
    },[])
  return (
    <main>
      <FV />
      <Fixed />
      <Anchors />
      <div className="bg-[#FFF0A6] md:pt-[160px] pt-[80px]">
        <div className="bg-[url('/images/deco.png')] bg-[length:100%_auto] px-5 md:pt-[76px] pt-10 md:space-y-[100px] space-y-[60px]">
          <SectionError />
          <SectionFeatures />
          <SectionPrice />
          <SectionPopular />
          <SectionVoice />
          <SectionSupport />
          <FAQ />
        </div>
      </div>
    </main>
  );
}
