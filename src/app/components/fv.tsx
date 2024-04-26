"use client";

import { useEffect, useRef } from "react";

const FV = () => {
  const videoPCRef = useRef<HTMLVideoElement>(null);
  const videoSPRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoPCRef.current || !videoSPRef.current) return;
    videoPCRef.current.play();
    videoSPRef.current.play();
  }, []);

  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden aspect-[4/5] md:aspect-video">
      <video
        ref={videoPCRef}
        muted
        loop
        className="absolute inset-0 z-10 h-full w-full object-cover max-md:hidden"
        poster=""
      >
        <source src="/videos/fv.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        ref={videoSPRef}
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
