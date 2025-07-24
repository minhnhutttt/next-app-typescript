"use client";

import { useLoading } from "@/contexts/LoadingContext";
import { useEffect, useRef } from "react";

const Fv = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isAnimationComplete } = useLoading();

  useEffect(() => {
    if (isAnimationComplete && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, [isAnimationComplete]);

  return (
    <section className="overflow-hidden relative w-full bg-white mx-auto md:w-[640px]">
      <video
        ref={videoRef}
        className="w-full aspect-[9/16] object-cover object-center"
        data-lazy-video=""
        data-lazy=""
        data-autoplay="true"
        preload="none"
        loop
        muted
        src="/assets/videos/fv.mp4"
        playsInline
        data-loaded="true"
      ></video>
    </section>
  );
};

export default Fv;