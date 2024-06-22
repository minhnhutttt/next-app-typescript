"use client";

import { useEffect, useRef } from "react";

const FV = () => {
    const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.play();
  }, []);
  return (
    <div>
      <div className="pt-[30vh] max-md:pt-[20vh]">
        <h1 className="font-anton text-[calc(24px_+_20vw)] mb-[-1.5em]  px-[32px] relative leading-none uppercase">
          Global
          <br />
          <span className="stroke">Digital</span>
          <br />
          <span className="text-white">Agency</span>
        </h1>
        <div>
          <video
            ref={videoRef}
            muted
            loop
            className="w-full"
            poster=""
          >
            <source src="/assets/videos/mv.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default FV;
