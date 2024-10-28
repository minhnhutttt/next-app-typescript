"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
const FV = () => {
  const ref = useScrollAnimations();
  return (
    <div ref={ref}>
    a
    </div>
  );
};

export default FV;
