"use client";
import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useEffect, useRef } from "react";
const FV = () => {
  const ref = useScrollAnimations();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
const canvasContainerRef = useRef<HTMLDivElement | null>(null);
let width: number, height: number, centerX: number, centerY: number;
let frames = 0;
let circle: Circle | null = null;


class Circle {
  x: number;
  y: number;
  r: number;
  xSpeed: number;
  ySpeed: number;
  xAngle: number;
  yAngle: number;

  constructor(x: number, y: number, r: number) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.xSpeed = 0.01;
    this.ySpeed = 0.02;
    this.xAngle = 0;
    this.yAngle = 0;
  }

  update(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  show(context: CanvasRenderingContext2D, frames: number) {
    context.beginPath();
    context.fillStyle = `hsl(${frames}, 100%, 80%)`;
    context.arc(this.x, this.y, this.r * 2, 0, Math.PI * 2);
    context.fill();
  }
}

useEffect(() => {
  const canvas = canvasRef.current;
  const container = canvasContainerRef.current;
  if (!canvas || !container) return;

  const context = canvas.getContext('2d');
  if (!context) return;

  const createCanvas = () => {
    width = container.clientWidth;
    height = container.clientHeight;
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    centerX = width / 2;
    centerY = height / 2;
  };

  const setup = () => {
    createCanvas();
    circle = new Circle(centerX, centerY, (container.clientWidth / 60));
  };

  const draw = () => {
    frames++;
    const x = centerX + Math.cos(circle!.xAngle) * 2 * (container.clientWidth / 5);
    const y = centerY + Math.sin(circle!.yAngle) * (container.clientWidth / 5);
    circle!.update(x, y);
    circle!.show(context, frames);
    circle!.xAngle += circle!.xSpeed;
    circle!.yAngle += circle!.ySpeed;
    requestAnimationFrame(draw);
  };

  setup();
  requestAnimationFrame(draw);

  return () => {};
}, []);
  return (
    <div ref={ref}>
    <section className="h-[120vw] md:h-[55.556vw] dt:h-[800px] bg-[#73E3DC] rounded-br-[20%] overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto h-full relative">
        <div ref={canvasContainerRef} className="w-full max-w-[100vw] md:max-w-[71.528vw] dt:max-w-[1030px] absolute left-0 max-md:top-[50vw] aspect-[1920/945]">
        <canvas ref={canvasRef} />
        </div>
        
        <div className="fade-up md:text-[8.889vw] text-[12vw] dt:text-[128px] font-extrabold md:[writing-mode:vertical-rl] md:[text-orientation:mixed] absolute right-0 max-md:left-0 max-md:text-center md:right-[5.556vw] dt:right-20 top-[8vw] md:top-[2.222vw] dt:top-8 tracking-[0.2em] leading-[1.2]">
          <p className="">社員の力</p>
          <p className="md:mr-5 md:mt-[18.75vw] dt:mt-[270px]">無限大</p>
        </div>
        <div className="fade-up absolute bottom-0 left-0">
          <div className="absolute right-[-28vw] md:-right-[12.5vw] dt:right-[-180px] top-0 md:top-20">
            <img className="animate-bounce [animation-delay:0.2s] max-md:w-[40vw] max-dt:w-[21.389vw]" src="/assets/images/fv-bubble-01.png" alt="近くで使える！" />
          </div>
          <figure className="max-md:ml-[-5vw]">
            <img className="max-md:w-[45vw] max-dt:w-[35.486vw]" src="/assets/images/fv-img-01.png" alt="" />
          </figure>
        </div>
        <div className="fade-up absolute bottom-0 max-md:right-0 md:left-[39.5%]">
          <div className="absolute md:-left-[2.083vw] -left-[11vw] dt:-left-[30px] top-[15.278vw] dt:top-[220px]">
            <img className="animate-bounce max-md:w-[26vw] max-dt:w-[13.681vw]" src="/assets/images/fv-bubble-02.png" alt="うちの会社最高！" />
          </div>
          <figure className="max-md:mr-[-5vw]">
            <img className="max-md:w-[48vw] max-dt:w-[37.222vw]" src="/assets/images/fv-img-02.png" alt="" />
          </figure>
        </div>
      </div>
    </section>
    <section className="md:pt-[54px] pt-10 px-5">
        <p className="fade-up text-center md:text-[32px] text-[19px] leading-loose font-extrabold mb-4 md:mb-7">
        福利厚生クエストで社員へ豊かな毎日<br />をサポートし、働く喜びを最大化！
        </p>
        <Button>今すぐ導入相談</Button>
    </section>
    </div>
  );
};

export default FV;
