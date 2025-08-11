"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";
import Fv from "./components/Fv";
import Overview from "./components/Overview";
import Vm from "./components/Vm";
import Features from "./components/Features";
import Token from "./components/Token";
import Roadmap from "./components/Roadmap";
import Revenue from "./components/Revenue";
import Incentive from "./components/Incentive";
import Architecture from "./components/Architecture";
import Governance from "./components/Governance";
import Message from "./components/Message";
export default function Home() {

  const ref = useScrollAnimations()
  return (
    <main ref={ref} className="relative pb-16 md:pb-[100px]">
      <div className="overflow-hidden">
        <Fv />
        <div className="bg-[url(/assets/images/bg.png)] bg-top bg-[size:100%_auto]">
          <Overview />
          <Vm />
        </div>
        <Features />
        <Token />
        <Roadmap />
        <Revenue />
        <Incentive />
        <Architecture />
        <Governance />
        <Message />
        </div>
        <div className="flex justify-center items-center sticky inset-x-0 md:bottom-10 bottom-5 z-[99]">
          <a href="/" className="fade-up group flex items-center justify-center w-[260px] md:w-[300px] h-16 md:h-20 md:text-[18px] text-[15px] font-medium rounded-full relative bg-transparent overflow-hidden tracking-wider">
            <span className="absolute inset-0 z-0 backdrop-filter backdrop-blur-[0px] [filter:url(#lg-dist)] isolate"></span>
            <span className="absolute inset-0 z-[1] bg-[#00021C]/[0.2]"></span>
            <span className="absolute inset-0 z-[2] [border-radius:inherit] overflow-hidden [box-shadow:inset_1px_1px_0_rgba(255,_255,_255,_0.75),_inset_0_0_5px_rgba(255,_255,_255,_0.75)]"></span>
            <span className="relative z-10 text-shadow-lg">WHITEPAPER</span>
          </a>
        </div>
    </main>
  );
}
