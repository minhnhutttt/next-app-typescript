"use client";

import { useEffect, useRef } from "react";

interface Options {
  padding?: number;
  density?: number;
  duration?: number;
}

class ImageDesintegrator {
  el: HTMLElement;
  canvas!: HTMLCanvasElement;
  context!: CanvasRenderingContext2D;
  image: HTMLImageElement;
  options: Required<Options>;
  scale = 2;
  data: any[] = [];
  step = 0;
  t0 = 0;
  id: number | null = null;
  width = 0;
  height = 0;
  reverse = false;
  visibilityHandled = false;

  constructor(el: HTMLElement, image: HTMLImageElement, options: Options = {}) {
    const defaultOptions: Required<Options> = {
      padding: 160,
      density: 4,
      duration: 2500,
    };
    this.options = { ...defaultOptions, ...options };
    this.el = el;
    this.image = image;

    this.init();
  }

  async init() {
    await this.loadImage();
    this.createCanvas();
    this.drawImage();
    this.pixelize();
    this.start();
  }

  loadImage(): Promise<void> {
    return new Promise((resolve) => {
      if (this.image.complete) {
        resolve();
      } else {
        this.image.onload = () => resolve();
      }
    });
  }

  createCanvas() {
    this.width = this.image.naturalWidth;
    this.height = this.image.naturalHeight;

    this.canvas = document.createElement("canvas");
    this.canvas.width = this.scale * (this.width + 2 * this.options.padding);
    this.canvas.height = this.scale * (this.height + 2 * this.options.padding);
    this.canvas.style.width = `${this.width + 2 * this.options.padding}px`;
    this.canvas.style.height = `${this.height + 2 * this.options.padding}px`;
    this.canvas.style.transform = `translate3d(${-this.options.padding}px, ${-this.options.padding}px, 0)`;
    this.context = this.canvas.getContext("2d")!;
    this.context.scale(this.scale, this.scale);
    this.el.appendChild(this.canvas);
  }

  drawImage() {
    this.context.drawImage(
      this.image,
      this.options.padding,
      this.options.padding,
      this.width,
      this.height
    );
  }

  pixelize() {
    const { padding, density, duration } = this.options;

    for (
      let y = 0;
      y < this.canvas.height - Math.floor(density / 2);
      y += density
    ) {
      for (
        let x = 0;
        x < this.canvas.width - Math.floor(density / 2);
        x += density
      ) {
        const imageData = this.context.getImageData(
          x + Math.floor(density / 4),
          y + Math.floor(density / 4),
          1,
          1
        );
        const r = imageData.data[0];
        const g = imageData.data[1];
        const b = imageData.data[2];
        const a = imageData.data[3];
        if (a > 0) {
          this.data.push({
            alpha: a / 255,
            color: `rgba(${r}, ${g}, ${b}, ${a / 255})`,
            longevity: Math.min(
              duration * 0.25 + Math.random() * duration * 0.75,
              duration - 1
            ),
            x,
            y,
            initialX: x,
            initialY: y,
            finalX: x + 2 * (Math.random() - 0.5) * this.canvas.width,
            finalY: y + 2 * (Math.random() - 0.5) * this.canvas.height,
          });
        }
      }
    }
  }

  start() {
    this.t0 = 0;
    this.id = window.requestAnimationFrame((t) => this.render(t));
  }

  render(timestamp: number) {
    if (!this.t0) {
      this.t0 = timestamp;
      this.visibilityHandled = false; // reset cờ mỗi chu kỳ
    }

    const elapsed = timestamp - this.t0;
    const { duration, density } = this.options;
    this.step = this.reverse ? duration - elapsed : elapsed;

    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const sq of this.data) {
      this.context.globalAlpha = sq.alpha;
      this.context.fillStyle = sq.color;
      this.context.fillRect(sq.x / 2, sq.y / 2, density / 2, density / 2);
    }

    this.updateData();

    // 0.1s sau khi bắt đầu tan rã → ẩn text
    if (!this.reverse && elapsed >= 100 && !this.visibilityHandled) {
      this.image.classList.add("invisible");
      this.visibilityHandled = true;
    }

    // 0.1s trước khi kết thúc hội tụ → hiện text
    if (this.reverse && elapsed >= duration - 100 && !this.visibilityHandled) {
      this.image.classList.remove("invisible");
      this.visibilityHandled = true;
    }

    // Nếu hết chu kỳ thì đảo chiều và reset
    if (elapsed > duration) {
      this.reverse = !this.reverse;
      this.t0 = 0;
      this.visibilityHandled = false;
    }

    this.id = window.requestAnimationFrame((t) => this.render(t));
  }

  updateData() {
    for (const sq of this.data) {
      sq.alpha = this.calculateOpacity(sq.longevity, this.step);
      sq.x = this.calculatePosition(
        sq.initialX,
        sq.finalX,
        sq.longevity,
        this.step
      );
      sq.y = this.calculatePosition(
        sq.initialY,
        sq.finalY,
        sq.longevity,
        this.step
      );
    }
  }

  calculateOpacity(l: number, x: number) {
    return x <= l ? 1 - Math.pow(x / l, 1) : 0;
  }

  calculatePosition(xS: number, xE: number, l: number, x: number) {
    const expo = (l: number, x: number) => {
      return x < l ? 1 - Math.pow(2, 10 * (x / l) - 10) : 0;
    };
    return (xS - xE) * expo(l, x) + xE;
  }
}

export default function ImageDisintegrator() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const img = imgRef.current;

    if (el && img) {
      new ImageDesintegrator(el, img, {
        duration: 3000,
        density: 4,
        padding: 100,
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="relative inline-block">
      <img
        ref={imgRef}
        src="/assets/images/fv-01.png"
        alt="Logo"
        className="invisible" // sẽ được điều khiển hiển thị/ẩn bằng hiệu ứng
      />
    </div>
  );
}
