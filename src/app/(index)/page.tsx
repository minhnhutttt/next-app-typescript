"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";
import Fv from "./components/Fv";
import About from "./components/About";
export default function Home() {

  const ref = useScrollAnimations()
  return (
    <main ref={ref}>
        <Fv />
        <About />
    </main>
  );
}
