"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import Starfield from "@/module/starfield.js";
// @ts-ignore
import p5 from "p5";


export default function ShowImge() {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    Starfield.setup({});
  });

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const sketch = (p: any) => {
        let imageUrls = [
          "/assets/images/GET-REAL-Sticker_08.png",
          "/assets/images/GET-REAL-Sticker_08.png",
          "/assets/images/GET-REAL-Sticker_08.png",
          "/assets/images/GET-REAL-Sticker_08.png",
          "/assets/images/GET-REAL-Sticker_08.png",
          "/assets/images/GET-REAL-Sticker_08.png",
          "/assets/images/GET-REAL-Sticker_08.png",
          "/assets/images/GET-REAL-Sticker_08.png",
          "/assets/images/GET-REAL-Sticker_08.png",
          "/assets/images/GET-REAL-Sticker_08.png",
          "/assets/images/GET-REAL-Sticker_08.png",
          "/assets/images/GET-REAL-Sticker_08.png",
          "/assets/images/GET-REAL-Sticker_08.png",
          "/assets/images/GET-REAL-Sticker_08.png",
          "/assets/images/GET-REAL-Sticker_08.png",
        ];
        let distThreshold = 100;
        let scaleFactor = 4;
  
        let images: any[] = [];
        let queue: any[] = [];
        let lastMousePos = { x: 0, y: 0 };
        let imgIndex = 0;
        let imageTimes: any[] = [];
  
        p.preload = () => {
          for (let i = 0; i < imageUrls.length; i++) {
            images[i] = p.loadImage(imageUrls[i]);
          }
        };
  
        p.setup = () => {
          let cnv = p.createCanvas(p.windowWidth, p.windowHeight);
          cnv.parent(canvasRef.current || "");
          cnv.style("display", "block");
          cnv.style("position", "absolute");
          cnv.style("inset", "0");
          cnv.style("z-index", "-1");
          lastMousePos = { x: p.mouseX, y: p.mouseY };
        };
  
        p.draw = () => {
          p.clear();
  
          let d = p.dist(p.mouseX, p.mouseY, lastMousePos.x, lastMousePos.y);
  
          if (d > distThreshold) {
            queue.unshift({ x: p.mouseX, y: p.mouseY, index: imgIndex });
            imageTimes.unshift(p.millis());
            lastMousePos = { x: p.mouseX, y: p.mouseY };
            imgIndex = (imgIndex + 1) % images.length;
          }
  
          if (queue.length > images.length) {
            queue.pop();
            imageTimes.pop();
          }
  
          for (let i = 0; i < queue.length; i++) {
            if (p.millis() - imageTimes[i] > 1000) {
              queue.splice(i, 1);
              imageTimes.splice(i, 1);
              i--;
            }
          }
  
          let scale = p.width / scaleFactor;
  
          for (let i = queue.length - 1; i >= 0; i--) {
            let img = images[queue[i].index];
            if (img) {
              let imgWidth = (img.width * scale) / img.width / 2;
              let imgHeight = (img.height * scale) / img.width / 2;
              p.image(
                img,
                queue[i].x - imgWidth / 2,
                queue[i].y - imgHeight / 2,
                imgWidth,
                imgHeight
              );
            }
          }
        };
  
        p.windowResized = () => {
          p.resizeCanvas(p.windowWidth, p.windowHeight);
        };
      };
  
      const myP5 = new p5(sketch);

      return () => {
        myP5.remove();
      };
    }
  }, []);

  return (
    <main id="canvas-parent" ref={canvasRef} >
      <div id="starfield-container" className="starfield w-screen h-screen">
        <span className="starfield-origin absolute left-1/2 top-1/2 size-px pointer-events-none opacity-0"></span>
        <div className="size-full flex items-center justify-center">
          <div className="text-white text-center ">
            <h3 className="md:text-[80px] text-[40px] font-bold leading-tight mb-8">
              SKALE's <br />
              Showcase
            </h3>
            <a href="/view-works" className="button-starfield-origin leading-none h-[50px] w-[200px] bg-black flex items-center justify-center rounded-[10px] md:text-[24px] text-[20px] mx-auto  border whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gradient-rainbow-button px-4 py-2 jumper-shadow shaky">
            Go to Gallery
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
