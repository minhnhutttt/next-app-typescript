"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative h-[800px] bg-[url('/assets/images/bg-fv.png')] bg-cover bg-no-repeat">
        
    </section>
  );
};

export default FV;
