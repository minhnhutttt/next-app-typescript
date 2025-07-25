"use client";

import { useLoading } from "@/contexts/LoadingContext";
import { useEffect, useRef } from "react";

const Fv = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isAnimationComplete } = useLoading();

  useEffect(() => {
    if (!isAnimationComplete || !videoRef.current) return;

    const video = videoRef.current;
    
    const timer = setTimeout(async () => {
      try {
        if (video.paused) {
          await video.play();
        }
      } catch (error) {
        console.log('Video autoplay failed:', error);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isAnimationComplete]);

  return (
    <section className="overflow-hidden relative w-full bg-white mx-auto md:w-[640px]">
      <video
        ref={videoRef}
        className="w-full aspect-[9/16] object-cover object-center"
        preload="metadata"
        loop
        muted
        src="/assets/videos/fv.mp4"
        playsInline
      />
    </section>
  );
};

export default Fv;