"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";
import Fv from "./components/Fv";
import Overview from "./components/Overview";
import Vm from "./components/Vm";
import Features from "./components/Features";
import Token from "./components/Token";
import Roadmap from "./components/Roadmap";
export default function Home() {

  const ref = useScrollAnimations()
  return (
    <main ref={ref}>
        <Fv />
        <div className="bg-[url(/assets/images/bg.png)] bg-top bg-[size:100%_auto]">
          <Overview />
          <Vm />
        </div>
        <Features />
        <Token />
        <Roadmap />
    </main>
  );
}
