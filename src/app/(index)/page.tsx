"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";
import About from "./components/About";
import FV from "./components/Fv";
import Structure from "./components/Structure";
import Worries from "./components/Worries";
import Reason from "./components/Reason";
import Spot from "./components/Spot";
import Intr from "./components/Intr";
import Effect from "./components/Effect";
import Exe from "./components/Exe";
import Cta from "./components/Cta";
import Faq from "./components/Faq";

export default function Home() {

  const ref = useScrollAnimations()
  return (
    <main ref={ref}>
        <FV />
        <About />
        <Structure />
        <Worries />
        <Reason />
        <Spot />
        <Intr />
        <Effect />
        <Exe />
        <Cta />
        <Faq />
    </main>
  );
}
