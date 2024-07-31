"use client"
import React from 'react';
import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return mouseX;
};

const useFontVariationSettings = (mouseX: number) => {
  const [fontSettings, setFontSettings] = useState<string[]>(['wdth 200', 'wdth 200', 'wdth 200', 'wdth 200', 'wdth 200']);

  useEffect(() => {
    const center = window.innerWidth / 2;
    const maxVal = 400;
    const minVal = 10;

    const range = maxVal - minVal;
    const numChars = 5;
    const values = Array(numChars).fill(minVal);

    if (mouseX < center) {
      // x < center: Decrease from A to E
      for (let i = 0; i < numChars; i++) {
        values[i] = maxVal - (i * range) / (numChars - 1);
      }
    } else {
      // x > center: Decrease from E to A
      for (let i = 0; i < numChars; i++) {
        values[i] = minVal + (i * range) / (numChars - 1);
      }
    }

    setFontSettings(values.map(value => `wdth ${Math.round(value)}`));
  }, [mouseX]);

  return fontSettings;
};

const FontVariationComponent: React.FC = () => {
  const mouseX = useMousePosition();
  const fontSettings = useFontVariationSettings(mouseX);

  return (
    <div style={{ display: 'flex' }}>
      {['A', 'B', 'C', 'D', 'E'].map((char, index) => (
        <span
          key={char}
          style={{ fontVariationSettings: fontSettings[index] }}
        >
          {char}
        </span>
      ))}
    </div>
  );
};

export default FontVariationComponent;
