"use client";

import { useEffect, useRef } from "react";

const FV = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.play();
  }, []);

  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden aspect-[4/5] md:aspect-video">
      <video
        ref={videoRef}
        muted
        loop
        className="absolute inset-0 z-10 h-full w-full object-cover max-md:hidden"
        poster=""
      >
        <source src="/videos/fv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        ref={videoRef}
        muted
        loop
        className="absolute inset-0 z-10 h-full w-full object-cover md:hidden"
        poster=""
      >
        <source src="/videos/fv-for-smartphone.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FV;
