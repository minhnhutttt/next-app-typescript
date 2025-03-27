"use client";
import { useEffect } from "react";
import ScrollOut from "scroll-out";
import Splitting from "splitting";

const Message = () => {
  useEffect(() => {
    Splitting();
    ScrollOut({once: true});
  });

 
  return (
    <section className="relative overflow-hidden md:h-[833px]">
      <video
            autoPlay
            muted
            playsInline
            loop
            preload="auto"
            className="w-full h-full object-cover absolute inset-0"
          >
            <source src="/assets/images/about.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="h-full bg-[linear-gradient(0deg,_rgba(250,_226,_215,_0.60)_0%,_rgba(250,_226,_215,_0.60)_100%)] flex justify-center p-5 relative">
                <div className="w-full max-w-[886px] mx-auto max-md:py-[150px] md:pt-[285px]">
                    <p data-scroll className="ani-slide-bottom md:text-[36px] text-[20px] tracking-widest">A NEXUS offers comprehensive production and promotion services, from stage design to  original content creation and global marketing campaigns. </p>
                    <div data-scroll className="ani-slide-bottom flex justify-end md:mt-12 mt-8">
                        <a href="/about" className="flex items-center md:text-[32px] text-[20px] font-semibold tracking-widest gap-2 border-b border-[#111] px-4">
                        <span className="md:text-[21px] text-[17px">★</span><span>ABOUT US</span>
                        </a>
                    </div>
                </div>
          </div>
    </section>
  );
};

export default Message;