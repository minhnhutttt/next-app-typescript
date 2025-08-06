"use client";

import { useEffect, useRef } from "react";

interface Options {
  padding?: number;
  density?: number;
  duration?: number;
}

interface Props {
  imageSrc: string;
  startDisintegrate: boolean;
  startReintegrate: boolean;
}

class ImageDesintegrator {
  el: HTMLElement;
  canvas!: HTMLCanvasElement;
  context!: CanvasRenderingContext2D;
  image: HTMLImageElement;
  options: Required<Options>;
  scale = 2;
  data: any[] = [];
  width = 0;
  height = 0;
  visibilityHandled = false;
  reverse = false;
  t0 = 0;
  id: number | null = null;

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
  }

  loadImage(): Promise<void> {
    return new Promise((resolve) => {
      if (this.image.complete) resolve();
      else this.image.onload = () => resolve();
    });
  }

  createCanvas() {
    const rect = this.image.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;

    const existingCanvas = this.el.querySelector("canvas");
    if (existingCanvas) {
      this.el.removeChild(existingCanvas);
    }

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
    const { density, duration } = this.options;

    this.data = [];

    for (let y = 0; y < this.canvas.height - Math.floor(density / 2); y += density) {
      for (let x = 0; x < this.canvas.width - Math.floor(density / 2); x += density) {
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

  updateData(step: number) {
    for (const sq of this.data) {
      sq.alpha = this.calculateOpacity(sq.longevity, step);
      sq.x = this.calculatePosition(sq.initialX, sq.finalX, sq.longevity, step);
      sq.y = this.calculatePosition(sq.initialY, sq.finalY, sq.longevity, step);
    }
  }

  calculateOpacity(l: number, x: number) {
    return x <= l ? 1 - Math.pow(x / l, 1) : 0;
  }

  calculatePosition(xS: number, xE: number, l: number, x: number) {
    const expo = (l: number, x: number) =>
      x < l ? 1 - Math.pow(2, 10 * (x / l) - 10) : 0;
    return (xS - xE) * expo(l, x) + xE;
  }

  runAnimation(reverse: boolean) {
    this.reverse = reverse;
    this.t0 = 0;
    this.visibilityHandled = false;

    const render = (timestamp: number) => {
      if (!this.t0) this.t0 = timestamp;

      const elapsed = timestamp - this.t0;
      const { duration, density } = this.options;
      const step = reverse ? duration - elapsed : elapsed;

      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      for (const sq of this.data) {
        this.context.globalAlpha = sq.alpha;
        this.context.fillStyle = sq.color;
        this.context.fillRect(sq.x / 2, sq.y / 2, density / 2, density / 2);
      }

      this.updateData(step);

      if (!this.visibilityHandled) {
        if (!reverse && elapsed >= 100) {
          this.image.classList.add("invisible");
          this.visibilityHandled = true;
        }
        if (reverse && elapsed >= duration) {
          this.image.classList.remove("invisible");
          this.visibilityHandled = true;
        }
      }

      if (elapsed < duration) {
        this.id = requestAnimationFrame(render);
      } else {
        if (reverse) {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        }
      }
    };

    this.id = requestAnimationFrame(render);
  }

  disintegrate() {
    this.runAnimation(false);
  }

  reintegrate() {
    this.runAnimation(true);
  }

  destroy() {
    if (this.id) cancelAnimationFrame(this.id);
    if (this.canvas && this.el.contains(this.canvas)) {
      this.el.removeChild(this.canvas);
    }
  }
}

export default function ImageDisintegrator({
  imageSrc,
  startDisintegrate,
  startReintegrate,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const desintegratorRef = useRef<ImageDesintegrator | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    const img = imgRef.current;

    if (el && img && !desintegratorRef.current) {
      desintegratorRef.current = new ImageDesintegrator(el, img, {
        duration: 3000,
        density: 4,
        padding: 100,
      });
    }

    return () => {
      desintegratorRef.current?.destroy();
      desintegratorRef.current = null;
    };
  }, [imageSrc]);

  useEffect(() => {
    const handleResize = () => {
      if (desintegratorRef.current && containerRef.current && imgRef.current) {
        desintegratorRef.current.destroy();
        desintegratorRef.current = new ImageDesintegrator(
          containerRef.current,
          imgRef.current,
          {
            duration: 3000,
            density: 4,
            padding: 100,
          }
        );
      }
    };

    let resizeTimeout: NodeJS.Timeout;
    const debounceResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 300);
    };

    window.addEventListener("resize", debounceResize);
    return () => {
      window.removeEventListener("resize", debounceResize);
    };
  }, []);

  useEffect(() => {
    if (startDisintegrate && desintegratorRef.current) {
      desintegratorRef.current.disintegrate();
    }
  }, [startDisintegrate]);

  useEffect(() => {
    if (startReintegrate && desintegratorRef.current) {
      desintegratorRef.current.reintegrate();
    }
  }, [startReintegrate]);

  return (
    <div ref={containerRef} className="relative w-full h-auto">
      <img
        ref={imgRef}
        src={imageSrc}
        alt="Image"
        className="invisible w-full h-auto"
      />
    </div>
  );
}
