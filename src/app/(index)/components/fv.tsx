"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative">
      
    </section>
  );
};

export default FV;
