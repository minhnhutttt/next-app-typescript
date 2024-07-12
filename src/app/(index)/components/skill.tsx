// components/AnimatedCanvas.tsx
"use client"
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skill = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useLayoutEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d")!;
    canvas.width = 1440;
    canvas.height = 1024;

    const frameCount = 480;
    const currentFrame = (index: number) =>
      `/assets/images/skill/png-sequence${index.toString().padStart(3, "0")}.png`;

    const images: HTMLImageElement[] = [];
    const animationObject = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    let ctx = gsap.context(() => {
       
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
      })
  

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
            <div className=" pin relative  w-screen h-screen">
            <div className="canvas-container w-full h-screen flex justify-center items-center">
                <canvas ref={canvasRef} className="max-w-[100vw] aspect-[1440/1024]"/>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Skill;
