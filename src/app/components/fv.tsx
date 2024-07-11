"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";


const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative pl-[80px] md:pl-[215px]">
        <div className="relative aspect-[1224/746]">
        <video
            muted
            loop
            autoPlay
            playsInline
            className="object-cover w-full h-full object-left-bottom"
            poster=""
            >
            <source src="/assets/videos/fv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        </div>
    </section>
  );
};

export default FV;
