import { useEffect, useRef } from 'react';

class PixelImage {
    private canvas!: HTMLCanvasElement;
    private ctx!: CanvasRenderingContext2D;
    private width: number;
    private height: number;
    private styleWidth: number;
    private styleHeight: number;
    private percent: number;
    private scaledWidth: number = 0;
    private scaledHeight: number = 0;
    private onComplete: () => void;

    constructor(
        private id: string,
        private image: HTMLImageElement,
        width: number,
        height: number,
        onComplete: () => void
    ) {
        this.styleWidth = width;
        this.styleHeight = height;
        this.width = width * window.devicePixelRatio;
        this.height = height * window.devicePixelRatio;
        this.percent = 1;
        this.onComplete = onComplete;
        this.applyCanvas();
        this.draw();
    }

    private applyCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.classList.add(this.id);
        this.ctx = this.canvas.getContext('2d')!;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.style.width = `${this.styleWidth}px`;
        this.canvas.style.height = `${this.styleHeight}px`;
        this.scaledWidth = this.width * this.percent;
        this.scaledHeight = this.height * this.percent;

        this.ctx.imageSmoothingEnabled = false;

        if (this.canvas.width > 0 && this.canvas.height > 0) {
            this.image.parentElement?.appendChild(this.canvas);
        } else {
            console.error('Canvas has invalid dimensions.');
        }
    }

    private draw() {
        if (this.image.complete && this.image.naturalWidth > 0 && this.image.naturalHeight > 0) {
            this.ctx.drawImage(this.image, 0, 0, this.width, this.height);
        } else {
            console.error('Image is not loaded or has invalid dimensions.');
        }
    }

    private reveal() {
        this.canvas.classList.add('active');
        this.percent = this.percent > 0.1 ? this.percent -= 0.01 : this.percent -= 0.001;
        if (this.percent < 0) this.percent = 0;
        this.scaledWidth = this.width * this.percent;
        this.scaledHeight = this.height * this.percent;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.image.complete && this.canvas.width > 0 && this.canvas.height > 0) {
            this.ctx.drawImage(this.image, 0, 0, this.scaledWidth, this.scaledHeight);
            this.ctx.drawImage(this.canvas, 0, 0, this.scaledWidth, this.scaledHeight, 0, 0, this.width, this.height);
        } else {
            console.error('Image or canvas has invalid dimensions.');
        }

        if (this.percent > 0) {
            requestAnimationFrame(() => this.reveal());
        } else {
            this.canvas.remove();
            this.onComplete();
        }
    }

    public startReveal() {
        this.reveal();
    }
}

const PixelImageComponent = ({ loadingComplete, onComplete }: { loadingComplete: boolean; onComplete: () => void }) => {
    const pcImgRef = useRef<HTMLImageElement>(null);
    const spImgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        if (loadingComplete) {
            const images = [
                { ref: pcImgRef, id: 'pc' },
                { ref: spImgRef, id: 'sp' }
            ];

            images.forEach(({ ref, id }) => {
                if (ref.current) {
                    const image = ref.current;
                    const { width, height } = image.getBoundingClientRect();

                    if (image.complete) {
                        const pixelImage = new PixelImage(id, image, width, height, onComplete);
                        pixelImage.startReveal();
                    } else {
                        image.onload = () => {
                            const pixelImage = new PixelImage(id, image, width, height, onComplete);
                            pixelImage.startReveal();
                        };
                    }
                }
            });
        }
    }, [loadingComplete, onComplete]);

    return (
        <section>
            <div className="loading-screen">
                <img className='max-md:hidden' ref={pcImgRef} src="/assets/images/loading.png" />
                <img className='md:hidden' ref={spImgRef} src="/assets/images/loading-sp.png" />
            </div>
        </section>
    );
};

export default PixelImageComponent;
