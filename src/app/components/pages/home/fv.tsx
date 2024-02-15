"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
export default function FV() {
  const animateRefs = useScrollAnimation("zoom");
  return (
    <section className="bg-[url('/images/bg.png')] h-screen bg-cover bg-center">
    </section>
  );
}
