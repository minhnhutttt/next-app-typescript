"use client"
import { useEffect, useState } from 'react';

const VariableWord: React.FC = () => {
  const [mouseX, setMouseX] = useState<number>(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX(event.clientX);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Get the width of the container
  const containerWidth = 500; // Adjust based on your container width

  // Calculate the font-variation-settings value based on mouseX
  const calculateFontVariation = (index: number) => {
    const spanWidth = containerWidth / 3; // Assuming 3 spans, adjust as needed
    const center = containerWidth / 2;
    const distance = Math.abs(mouseX - (index * spanWidth + spanWidth / 2));
    const maxWidth = containerWidth / 3;
    const minValue = 100; // Minimum font-variation-settings value
    const maxValue = 400; // Maximum font-variation-settings value
    const percentage = 1 - Math.min(distance / maxWidth, 1);
    return minValue + (maxValue - minValue) * percentage;
  };

  return (
    <div className="variable-word">
      <div className="variable-word-inner" style={{ opacity: 1, transform: 'translateY(0px) scaleY(1)' }}>
        <span
          data-char="A"
          className="variable-word-letter"
          style={{ fontVariationSettings: `wdth ${calculateFontVariation(0)}` }}
        >
          A
        </span>
        <span
          data-char="R"
          className="variable-word-letter"
          style={{ fontVariationSettings: `wdth ${calculateFontVariation(1)}` }}
        >
          R
        </span>
        <span
          data-char="T"
          className="variable-word-letter"
          style={{ fontVariationSettings: `wdth ${calculateFontVariation(2)}` }}
        >
          T
        </span>
      </div>
    </div>
  );
};

export default VariableWord;
