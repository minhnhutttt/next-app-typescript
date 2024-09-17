"use client";
import { useEffect, useRef, useState } from 'react';
import { createNoise3D } from 'simplex-noise';

interface NoiseAnimationProps {
  triggerAnimation: boolean;
}

const NoiseAnimation: React.FC<NoiseAnimationProps> = ({ triggerAnimation }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setIsComplete(false);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const scale = 25;
    const noiseScale = 30;
    const noise = createNoise3D();
    const timeGain = 0.0035;
    const colors = [
      '#2155f9',
      '#f7b520',
      '#1b1b19',
      '#813ecc',
      '#50d488',
      '#04275f',
      '#116aa6',
      '#a9a4da',
      '#1b1b19',
      '#c6e5aa',
    ];

    const duration = 2000;
    const displayDuration = 500;
    let displayStartTime = Date.now();
    let transitionStartTime: number | null = null;
    let time = 0;

    const draw = () => {
      const displayElapsed = Date.now() - displayStartTime;
      const transitionElapsed = transitionStartTime ? Date.now() - transitionStartTime : 0;

      let currentColors = [];
      if (displayElapsed < displayDuration) {
        const displayProgress = Math.min(displayElapsed / displayDuration, 1);
        const colorIndex = Math.floor(displayProgress * colors.length);
        currentColors = colors.map((color, index) => {
          if (index < colorIndex) {
            return color;
          } else if (index === colorIndex) {
            const alpha = displayProgress * colors.length - colorIndex;
            return interpolateColor(color, 'rgba(0, 0, 0, 0)', alpha);
          } else {
            if (triggerAnimation) {
              return 'rgba(0, 0, 0, 0.5)';
            } else {
              return 'rgba(0, 0, 0, 1)';
            }
            
          }
        });
      } else {
        if (!transitionStartTime) {
          transitionStartTime = Date.now();
        }

        const progress = Math.min(transitionElapsed / duration, 1);
        const colorIndex = Math.floor(progress * colors.length);
        currentColors = colors.map((color, index) => {
          if (index < colorIndex) {
            return 'rgba(0, 0, 0, 0)';
          } else if (index === colorIndex) {
            const alpha = progress * colors.length - colorIndex;
            return interpolateColor(color, 'rgba(0, 0, 0, 0)', alpha);
          } else {
            return color;
          }
        });
      }

      time += timeGain;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      for (let y = 0; y < Math.ceil(canvas.height / scale); y++) {
        for (let x = 0; x < Math.ceil(canvas.width / scale); x++) {
          ctx.fillStyle = currentColors[~~(noise(x / noiseScale, y / noiseScale, time) * 7) + 2];
          ctx.fillRect(x * scale, y * scale, scale, scale);
        }
      }

      if (displayElapsed < displayDuration || transitionElapsed < duration) {
        window.requestAnimationFrame(draw);
      } else {
        setIsComplete(true);
      }
    };

    function interpolateColor(color1: string, color2: string, factor: number) {
      const [r1, g1, b1] = hexToRgb(color1);
      const [r2, g2, b2] = hexToRgb(color2);
      const r = Math.round(r1 + factor * (r2 - r1));
      const g = Math.round(g1 + factor * (g2 - g1));
      const b = Math.round(b1 + factor * (b2 - b1));
      return `rgba(${r}, ${g}, ${b}, ${1 - factor})`;
    }

    function hexToRgb(hex: string) {
      let r = 0,
        g = 0,
        b = 0;
      if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
      } else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
      }
      return [r, g, b];
    }

    draw();

    return () => {
      setIsComplete(true);
    };
  }, [triggerAnimation]);

  return <canvas ref={canvasRef} className={`fixed inset-0 ${isComplete ? 'z-0' : 'z-[99]'}`} />;
};

export default NoiseAnimation;
