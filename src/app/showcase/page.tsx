"use client";
import React, { useEffect, useRef } from "react";
import Starfield from "@/module/starfield.js";
// @ts-ignore
import p5 from "p5";


export default function Showcase() {
  const canvasRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    Starfield.setup({
      container: document.getElementById("starfield-container"),
      starColor: "rgb(255, 255, 255)",
      hueJitter: 0,
      trailLength: 0.8,
      baseSpeed: 2,
      maxAcceleration: 2,
      accelerationRate: 0.05,
      decelerationRate: 0.05,
      minSpawnRadius: 10,
      maxSpawnRadius: 300,
    });
  });
  useEffect(() => {
    
  }, []);

  useEffect(() => {
    const sketch = (p: any) => {
      // CONSTANTS
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
  }, []);

  return (
    <main id="canvas-parent" ref={canvasRef} >
      <div id="starfield-container" className="starfield w-screen h-screen">
        <span className="starfield-origin absolute left-1/2 top-1/2 size-px pointer-events-none opacity-0"></span>
        <div className="size-full flex items-center justify-center">
          <div className="text-white text-center ">
            <h3 className="md:text-[80px] text-[40px] font-bold leading-tight">
              SKALE's <br />
              Showcase
            </h3>
            <p className="md:text-[24px] text-[18px] md:py-12 py-8">
              - 実績が確認できます -
            </p>
            <button className="button-starfield-origin h-[50px] w-[200px] bg-white/10 flex items-center justify-center rounded-[10px] md:text-[24px] text-[18px]  mx-auto font-bold">
              ログイン
            </button>
            <p className="md:text-[12px] text-[12px] py-5 flex items-center justify-center gap-2">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 10.5V8M7.5 5.5H7.50625M13.75 8C13.75 11.4518 10.9518 14.25 7.5 14.25C4.04822 14.25 1.25 11.4518 1.25 8C1.25 4.54822 4.04822 1.75 7.5 1.75C10.9518 1.75 13.75 4.54822 13.75 8Z"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              閲覧申請はこちらから
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
