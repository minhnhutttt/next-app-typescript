"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";
import About from "./components/About";
import FV from "./components/Fv";

export default function Home() {

  const ref = useScrollAnimations()
  return (
    <main ref={ref}>
        <FV />
        <About />
    </main>
  );
}
