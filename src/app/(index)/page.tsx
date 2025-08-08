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
    <main ref={ref} className="overflow-hidden">
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
    </main>
  );
}
