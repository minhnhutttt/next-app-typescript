"use client"
import React, { useEffect, useRef, useState } from 'react';
import useMousePosition from './useMousePosition'; // Điều chỉnh đường dẫn nếu cần

const FullWidthSpans: React.FC = () => {
  const { x } = useMousePosition();
  const containerRef = useRef<HTMLDivElement>(null);
  const [spanWidths, setSpanWidths] = useState<number[]>([200, 200, 200, 200, 200]);
  const [scaleX, setScaleX] = useState(1);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const spanElements = containerRef.current.querySelectorAll('span');
      
      let totalSpanWidth = 0;
      spanElements.forEach((span) => {
        totalSpanWidth += span.offsetWidth;
      });

      const newScaleX = containerWidth / totalSpanWidth;
      setScaleX(newScaleX);

      const newSpanWidths = [...spanWidths];
      spanElements.forEach((span, index) => {
        const spanRect = span.getBoundingClientRect();
        const spanCenter = (spanRect.left + spanRect.right) / 2;

        if (spanCenter < containerWidth / 2) {
          // Span is on the left side of the container
          if (x < spanCenter) {
            newSpanWidths[index] = Math.min(400, 200 + ((spanCenter - x) / containerWidth) * 400);
          } else {
            newSpanWidths[index] = Math.max(100, 200 - ((x - spanCenter) / containerWidth) * 200);
          }
        } else {
          // Span is on the right side of the container
          if (x > spanCenter) {
            newSpanWidths[index] = Math.min(400, 200 + ((x - spanCenter) / containerWidth) * 400);
          } else {
            newSpanWidths[index] = Math.max(100, 200 - ((spanCenter - x) / containerWidth) * 200);
          }
        }
      });

      setSpanWidths(newSpanWidths);
    }
  }, [x]);

  return (
    <div 
      ref={containerRef} 
      className='text-[400px]'
      style={{ 
        display: 'flex', 
        transform: `scaleX(${scaleX})`,
        transformOrigin: 'left'
      }}
    >
      {spanWidths.map((width, index) => (
        <span 
          key={index} 
          style={{ fontVariationSettings: `"wdth" ${width}` }}
        >
          A
        </span>
      ))}
    </div>
  );
};

export default FullWidthSpans;
