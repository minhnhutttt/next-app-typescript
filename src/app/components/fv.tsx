"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";


const FV = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative pl-[80px] md:pl-[215px]">
        <div className="relative aspect-[1224/746] overflow-hidden">
        <video
            muted
            loop
            autoPlay
            playsInline
            className="object-cover absolute w-[calc(100%+4px)] h-[calc(100%+4px)] right-[-2px] left-[-2px] object-left-bottom outline-0 border-0"
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
