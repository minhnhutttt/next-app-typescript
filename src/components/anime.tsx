"use client"
import React, { useEffect, useRef } from 'react';

const Anime: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const imageCount: number = 48;
  const imageWidth: number = 44;
  const imageHeight: number = 44;
  const animationSpeed: number = 2000;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    for (let i = 1; i <= imageCount; i++) {
      const img = new Image();
      img.src = `/assets/images/anime/${i}.png`;
      imagesRef.current.push(img);
    }

    let currentImageIndex: number = 0;
    let startTime: number | null = null;

    const drawCurrentImage = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        imagesRef.current[currentImageIndex],
        0,
        0,
        imageWidth,
        imageHeight
      );
    };

    const updateImage = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;

      if (elapsedTime >= animationSpeed) {
        drawCurrentImage();
        return;
      }

      const progress: number = elapsedTime / animationSpeed;
      currentImageIndex = Math.floor(progress * imageCount);

      drawCurrentImage();
      requestAnimationFrame(updateImage);
    };

    requestAnimationFrame(updateImage);
  }, []);
  return <canvas ref={canvasRef} width={imageWidth} height={imageHeight} />;
};

export default Anime;
