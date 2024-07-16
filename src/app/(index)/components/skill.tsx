// components/AnimatedCanvas.tsx
"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const isMobile = () => {
  return window.innerWidth <= 768; // Adjust the width threshold as needed
};

const Skill = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d")!;
    const isMobileDevice = isMobile();
    
    // Set canvas dimensions based on device type
    if (isMobileDevice) {
      canvas.width = 1170;
      canvas.height = 2352;
    } else {
      canvas.width = 1440;
      canvas.height = 1024;
    }

    const frameCount = isMobileDevice ? 540 : 480;
    const imagePath = isMobileDevice ? "/assets/images/skill-sp/" : "/assets/images/skill/";
    const currentFrame = (index: number) =>
      isMobileDevice
        ? `${imagePath}png-sequence-s_${index.toString().padStart(6, "0")}.png`
        : `${imagePath}png-sequence${index.toString().padStart(3, "0")}.png`;

    const images: HTMLImageElement[] = [];
    const animationObject = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    const ctx = gsap.context(() => {
      gsap.to(animationObject, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: ".canvas-container",
          start: "top top",
          end: "+=3500",
          pin: ".pin",
          scrub: 0.5,
        },
        onUpdate: render,
      });
    });

    images[0].onload = render;

    function render() {
      if (!canvas) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[animationObject.frame], 0, 0);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      ctx.revert();
    };
  }, []);

  return (
    <div className="bg-[#174D59]">
      <div className="overflow-hidden">
        <div className="pin relative w-screen h-screen">
          <div className="canvas-container w-full h-screen flex justify-center items-center">
            <canvas
              ref={canvasRef}
              className="max-w-[100vw] h-full md:aspect-[1440/1024] aspect-[1170/2352]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
