"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

import React, { useState, useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface SidebarItemProps {
  title: string;
  content: ReactNode;
  bgColor: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, content, bgColor }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    
    if (contentRef.current) {
      gsap.set(contentRef.current, { 
        width: 0, 
        opacity: 0,
        x: 0 
      });
      
      timeline.current
        .to(contentRef.current, { 
          width: "50vw", 
          opacity: 1, 
          x: 0, 
          duration: 0.6, 
          ease: "power3.out" 
        })
        .to(buttonRef.current, {
          duration: 0.3,
          ease: "power1.out"
        }, 0);
    }
    
    return () => {
      if (timeline.current) {
        timeline.current.kill();
      }
    };
  }, []);

  // Toggle expansion state
  useEffect(() => {
    if (!timeline.current) return;
    
    if (isExpanded) {
      timeline.current.play();
    } else {
      timeline.current.reverse();
    }
  }, [isExpanded]);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        contentRef.current && 
        !contentRef.current.contains(event.target as Node) && 
        event.target !== buttonRef.current
      ) {
        setIsExpanded(false);
      }
    };

    if (isExpanded) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isExpanded]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative mb-2">
      <button
        ref={buttonRef}
        onClick={toggleExpand}
        className={`${bgColor} w-10 md:w-[50px] h-[160px] md:h-[215px] flex items-center justify-center md:text-[16px] text-[13px] font-bold [writing-mode:vertical-rl] [text-orientation:mixed] transition-all`}
      >
        {title}
      </button>
      <div
        ref={contentRef}
        className={`${bgColor} absolute top-0 right-10 md:right-[50px]  text-black p-4 overflow-hidden rounded-l-md h-[160px] md:h-[215px]`}
        style={{
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
          width: 0,
          opacity: 0 
        }}
      >
        <div className="h-full overflow-auto pr-2">
          {content}
        </div>
      </div>
    </div>
  );
};
const Fv = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="relative">
      <div className="h-[500px] md:h-[695px] bg-top md:bg-[size:100%_auto] bg-[url(/assets/images/fv.png)] bg-no-repeat">
        <div className="h-full flex justify-center items-center relative">
          <div className="md:hidden w-full h-full">
            <svg
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="text-mask-mobile">
                  <text
                    x="30"
                    y="250"
                    fontSize="70"
                    textAnchor="start"
                    alignmentBaseline="middle"
                  >
                    <tspan x="30" dy="0">
                      Tokyo
                    </tspan>
                    <tspan x="30" dy="60">
                      University
                    </tspan>
                    <tspan x="30" dy="60">
                      Hospital
                    </tspan>
                  </text>
                </clipPath>
              </defs>

              <foreignObject
                width="100%"
                height="100%"
                clipPath="url(#text-mask-mobile)"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                >
                  <source src="/assets/videos/fv.mp4" type="video/mp4" />
                </video>
              </foreignObject>
            </svg>
          </div>

          <div className="hidden md:block w-full h-full">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <clipPath id="text-mask-desktop">
                  <text
                    x="100"
                    y="250"
                    fontSize="120"
                    textAnchor="start"
                    alignmentBaseline="middle"
                  >
                    <tspan x="100" dy="0">
                      Tokyo
                    </tspan>
                    <tspan x="100" dy="120">
                      University
                    </tspan>
                    <tspan x="100" dy="120">
                      Hospital
                    </tspan>
                  </text>
                </clipPath>
              </defs>

              <foreignObject
                width="100%"
                height="100%"
                clipPath="url(#text-mask-desktop)"
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                >
                  <source src="/assets/videos/fv.mp4" type="video/mp4" />
                </video>
              </foreignObject>
            </svg>
          </div>
        </div>
      </div>
      <div className="relative h-[60px] flex items-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-bottom absolute inset-0"
        >
          <source src="/assets/videos/fv.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="w-full max-w-[1100px] mx-auto px-4 md:px-5">
          <p className="md:text-[17px] text-[12px] relative text-white">
            重要なお知らせ − 2025.02.12令和7(2025)年度の〇〇〇について
          </p>
        </div>
      </div>
      <div className="fixed right-0 top-1/2 -translate-y-1/2  text-white z-50">
      <SidebarItem 
        title="初診の方／再診の方1" 
        content="" 
        bgColor="bg-[#6AC53A]" 
      />
      <SidebarItem 
        title="初診の方／再診の方2" 
        content="" 
        bgColor="bg-[#4668C5]" 
      />
      </div>
    </section>
  );
};

export default Fv;
