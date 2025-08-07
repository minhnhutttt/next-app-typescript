"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";
import Fv from "./components/Fv";
export default function Home() {

  const ref = useScrollAnimations()
  return (
    <main ref={ref}>
        <Fv />
    </main>
  );
}
