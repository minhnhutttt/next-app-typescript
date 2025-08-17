"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";
import Fv from "./components/Fv";
import About from "./components/About";
import Token from "./components/Token";
import DChain from "./components/Dchain";
import Benefits from "./components/Benefits";
import Program from "./components/Program";
import Roadmap from "./components/Roadmap";
import Security from "./components/Security";
import Cta from "./components/Cta";
import Disclaimer from "./components/Disclaimer";
export default function Home() {

  const ref = useScrollAnimations()
  return (
    <main ref={ref}>
        <Fv />
        <About />
        <Token />
        <DChain />
        <Benefits />
        <Program />
        <Roadmap />
        <Security />
        <Cta />
        <Disclaimer />
    </main>
  );
}
