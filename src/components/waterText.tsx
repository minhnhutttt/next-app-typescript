import React, { useState, useRef, useEffect } from 'react';
//@ts-ignore
import { LiquidDistortionText, DistortionText } from 'react-text-fun';

export default function WaterText() {
  const [speed, setSpeed] = useState(0.45);
  const targetSpeed = useRef(0.45);
  const animationFrameId = useRef<number | null>(null);

  const smoothSpeedChange = () => {
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    const updateSpeed = () => {
      setSpeed((currentSpeed) => {
        const diff = targetSpeed.current - currentSpeed;
        const step = 0.001;

        if (Math.abs(diff) < step) {
          return targetSpeed.current;
        }

        return currentSpeed + Math.sign(diff) * step;
      });

      if (speed !== targetSpeed.current) {
        animationFrameId.current = requestAnimationFrame(updateSpeed);
      }
    };

    updateSpeed();
  };

  const handleMouseMove = () => {
    targetSpeed.current = 0.6;
    smoothSpeedChange();
  };

  const handleMouseLeave = () => {
    targetSpeed.current = 0.45;
    smoothSpeedChange();
  };

  useEffect(() => {
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="flex justify-center">
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ display: 'inline-block' }}
    >
        
      <DistortionText
  text="　　DIVER　　"
  fill="white"
        fontFamily="League Spartan"
        fontSize={120}
        speed={speed}
        rotation={45}
        distortX={0.5}
        distortY={0.5}
        noiseAmplitude={0.12}
        noiseVolatility={1}
/>
<DistortionText
  text="　　Time Network　　"
  fill="white"
        fontFamily="League Spartan"
  fontSize={120}
  speed={speed}
  rotation={45}
  distortX={0.5}
  distortY={0.5}
  noiseAmplitude={0.12}
  noiseVolatility={1}
/>
    </div>
    </div>
  );
}
