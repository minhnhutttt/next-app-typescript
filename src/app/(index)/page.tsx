"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";
import Fv from "./components/Fv";
import About from "./components/About";
import Token from "./components/Token";
import DChain from "./components/Dchain";
export default function Home() {

  const ref = useScrollAnimations()
  return (
    <main ref={ref}>
        <Fv />
        <About />
        <Token />
        <DChain />
    </main>
  );
}
