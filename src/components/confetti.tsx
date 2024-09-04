"use client";
import { useEffect } from 'react';

const Confetti = () => {
  useEffect(() => {
    const initConfetti = () => {
      const confettiContainer = document.querySelector(".confetti") as HTMLDivElement;
      const canvas = document.querySelector("#canvas1") as HTMLCanvasElement;
      if (!canvas || !confettiContainer) return;

      canvas.width = confettiContainer.clientWidth;
      canvas.height = confettiContainer.clientHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.globalCompositeOperation = "source-over";
      const particles: any = [];
      let pIndex = 0;
      let frameId: number;

      class Dot {
        x: number;
        y: number;
        vx: number;
        vy: number;
        color: string;
        size: number;
        degree: number;
        life: number;
        maxlife: number;
        id: number;

        constructor(x: number, y: number, vx: number, vy: number, color: string) {
          this.x = x;
          this.y = y;
          this.vx = vx;
          this.vy = vy;
          this.color = color;
          particles[pIndex] = this;
          this.id = pIndex;
          pIndex++;
          this.life = 0;
          this.maxlife = 1000;
          this.degree = getRandom(0, 360);
          this.size = Math.floor(getRandom(8, 10));
        }

        draw() {
          this.degree += 1;
          this.vx *= 0.99;
          this.vy *= 0.999;
          this.x += this.vx + Math.cos(this.degree * Math.PI / 600);
          this.y += this.vy;
          const width = this.size;
          const height = Math.cos(this.degree * Math.PI / 40) * this.size;
          if (!ctx) {
            console.error("2D context not available");
            return;
          }
          ctx.fillStyle = this.color;
          ctx.beginPath();
          ctx.moveTo(this.x + this.x / 2, this.y + this.y / 2);
          ctx.lineTo(this.x + this.x / 2 + width / 2, this.y + this.y / 2 + height);
          ctx.lineTo(this.x + this.x / 2 + width + width / 2, this.y + this.y / 2 + height);
          ctx.lineTo(this.x + this.x / 2 + width, this.y + this.y / 2);
          ctx.closePath();
          ctx.fill();

          this.life++;
          if (this.life >= this.maxlife) {
            delete particles[this.id];
          }
        }
      }

      const getRandom = (min: number, max: number) => {
        return Math.random() * (max - min) + min;
      };

      const loop = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (frameId % 2 === 0) {
          new Dot(canvas.width * Math.random() - canvas.width + canvas.width * Math.random(), -canvas.height / 2, getRandom(1, 3), getRandom(2, 4), "#ED1A3D");
          new Dot(canvas.width * Math.random() - canvas.width + canvas.width * Math.random(), -canvas.height / 2, getRandom(1, 3), getRandom(2, 4), "#FFEB3D");
        }

        for (const i in particles) {
          particles[i].draw();
        }
        frameId = requestAnimationFrame(loop);
      };

      window.addEventListener("resize", () => {
        canvas.width = confettiContainer.clientWidth;
        canvas.height = confettiContainer.clientHeight;
      });

      frameId = requestAnimationFrame(loop);

      return () => {
        cancelAnimationFrame(frameId);
      };
    };

    initConfetti();
  }, []);

  return (
    <div className="confetti absolute inset-0">
      <canvas id='canvas1' className="w-full h-full"></canvas>
    </div>
  );
};

export default Confetti;
