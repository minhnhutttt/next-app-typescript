interface TextDesintegratorOptions {
  padding?: number;
  density?: number;
  duration?: number;
  delay?: number; // Thêm delay option
  start?: number; // Thêm start delay option
}

interface PixelData {
  alpha: number;
  longevity: number;
  x: number;
  y: number;
  initialX: number;
  initialY: number;
  finalX: number;
  finalY: number;
}

class TextDesintegrator {
  private step: number = 0;
  private count: number = 0;
  private data: PixelData[] = [];
  private scale: number = 2;
  private el: HTMLElement;
  private inner!: HTMLSpanElement;
  private options: Required<TextDesintegratorOptions>;
  private reverse: boolean = false;
  private canvas!: HTMLCanvasElement;
  private context!: CanvasRenderingContext2D;
  private height!: number;
  private width!: number;
  private color!: string;
  private t0: number = 0;
  private id?: number;
  private delayTimeout?: number; // Thêm timeout cho delay
  private isInDelay: boolean = false; // Flag để track trạng thái delay
  private startTimeout?: number; // Thêm timeout cho start delay
  private hasStarted: boolean = false; // Flag để track đã bắt đầu chưa

  constructor(el: HTMLElement, options: TextDesintegratorOptions = {}) {
    const defaultOptions: Required<TextDesintegratorOptions> = {
      padding: 160,
      density: 4,
      duration: 2500,
      delay: 0, // Default delay là 0
      start: 0 // Default start delay là 0
    };

    this.el = el;
    this.el.style.position = "relative";
    this.el.innerHTML = `<span class="td-wrapper">${this.el.textContent}</span>`;
    this.inner = this.el.querySelector("span") as HTMLSpanElement;
    this.options = { ...defaultOptions, ...options };

    // Đảm bảo fonts đã load xong trước khi tạo canvas
    if (typeof document !== 'undefined') {
      document.fonts.ready.then(() => {
        this.createCanvas();
        this.fillCanvas();
        this.pixelize();
        
        // Nếu có start delay thì chờ, không thì chạy ngay
        if (this.options.start > 0) {
          this.startTimeout = window.setTimeout(() => {
            this.hasStarted = true;
            this.start();
          }, this.options.start);
        } else {
          this.hasStarted = true;
          setTimeout(() => {
            this.start();
          }, 0);
        }
      });
    }
  }

  private createCanvas(): void {
    const { width, height } = this.el.getBoundingClientRect();
    this.height = height;
    this.width = width;
    
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

  private clearContext(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  private fillCanvas(): void {
    const style = getComputedStyle(this.el);
    this.color = style.getPropertyValue("color");
    this.context.fillStyle = this.color;
    this.context.font = style.getPropertyValue("font");
    this.context.textBaseline = "ideographic";
    this.context.fillText(
      this.el.textContent || "",
      this.options.padding,
      (this.canvas.height / this.scale + this.height) / 2
    );
  }

  private start(): void {
    this.t0 = 0;
    this.isInDelay = false;
    this.id = window.requestAnimationFrame((t) => this.render(t));
  }

  public stop(): void {
    if (this.id) {
      window.cancelAnimationFrame(this.id);
    }
    if (this.delayTimeout) {
      clearTimeout(this.delayTimeout);
    }
    if (this.startTimeout) {
      clearTimeout(this.startTimeout);
    }
  }

  private pixelize(): void {
    const { padding, density, duration } = this.options;
    
    for (
      let y = 0;
      y < this.canvas.height + 2 * padding - Math.floor(density / 2);
      y += density
    ) {
      for (
        let x = 0;
        x < this.canvas.width + 2 * padding - Math.floor(density / 2);
        x += density
      ) {
        const { data } = this.context.getImageData(
          x + Math.floor(density / 4),
          y + Math.floor(density / 4),
          1,
          1
        );
        const a = data[3];
        
        if (a > 0) {
          this.data.push({
            alpha: a / 255,
            longevity: Math.min(
              duration * 0.25 + Math.random() * duration * 0.75,
              duration - 1
            ),
            x,
            y,
            initialX: x,
            initialY: y,
            finalX: x + 2 * (Math.random() - 0.5) * this.canvas.width,
            finalY: y + 2 * (Math.random() - 0.5) * this.canvas.width
          });
        }
      }
    }
  }

  private render(timestamp: number): void {
    // Nếu chưa started hoặc đang trong delay thì không render
    if (!this.hasStarted || this.isInDelay) {
      this.id = requestAnimationFrame((t) => this.render(t));
      return;
    }

    if (!this.t0) {
      this.t0 = timestamp;
    }
    
    const elapsed = timestamp - this.t0;
    
    if (this.step < Math.min(500, this.options.duration * 0.5)) {
      if (this.reverse) {
        this.inner.classList.remove("td-hide");
      } else {
        this.inner.classList.add("td-hide");
      }
    }
    
    this.updateData();
    this.clearContext();
    
    for (const sq of this.data) {
      this.context.globalAlpha = sq.alpha;
      this.context.fillStyle = this.color;
      this.context.fillRect(
        sq.x / 2,
        sq.y / 2,
        this.options.density / 2,
        this.options.density / 2
      );
    }
    
    this.step = this.reverse ? this.options.duration - elapsed : elapsed;
    
    if (elapsed > this.options.duration) {
      this.onComplete();
    } else {
      this.id = requestAnimationFrame((t) => this.render(t));
    }
  }

  private onComplete(): void {
    // Nếu có delay, thì tạm dừng animation
    if (this.options.delay > 0) {
      this.isInDelay = true;
      this.delayTimeout = window.setTimeout(() => {
        this.isInDelay = false;
        this.reverse = !this.reverse;
        this.t0 = 0;
        this.id = requestAnimationFrame((t) => this.render(t));
      }, this.options.delay);
    } else {
      // Không có delay thì chạy tiếp bình thường
      this.reverse = !this.reverse;
      this.t0 = 0;
      this.id = requestAnimationFrame((t) => this.render(t));
    }
  }

  private updateData(): void {
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

  private calculatePosition(xS: number, xE: number, l: number, x: number): number {
    const expo = (l: number, x: number): number => {
      return x < l ? 1 - Math.pow(2, 10 * (x / l) - 10) : 0;
    };
    const val = (xS - xE) * expo(l, x) + xE;
    return val;
  }

  private calculateOpacity(l: number, x: number): number {
    return x <= l ? 1 - Math.pow(x / l, 1) : 0;
  }
}

export default TextDesintegrator;