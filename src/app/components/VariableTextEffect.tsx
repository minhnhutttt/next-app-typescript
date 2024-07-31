"use client"
import React, { useEffect, useRef, useState } from 'react';
import useMousePosition from './useMousePosition'; // Điều chỉnh đường dẫn nếu cần

const FullWidthSpans: React.FC = () => {
  const { x } = useMousePosition();
  const containerRef = useRef<HTMLDivElement>(null);
  const [leftSpanWdth, setLeftSpanWdth] = useState(200);
  const [rightSpanWdth, setRightSpanWdth] = useState(200);
  const [scaleX, setScaleX] = useState(1);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const halfContainerWidth = containerWidth / 2;
      const spanElements = containerRef.current.querySelectorAll('span');

      let totalSpanWidth = 0;
      spanElements.forEach((span) => {
        totalSpanWidth += span.offsetWidth;
      });

      const newScaleX = containerWidth / totalSpanWidth;
      setScaleX(newScaleX);

      if (x < halfContainerWidth) {
        // Cursor on the left side
        const distanceFromCenter = halfContainerWidth - x;
        const newLeftSpanWdth = Math.min(400, 200 + distanceFromCenter / 5);
        const newRightSpanWdth = Math.max(10, 200 - distanceFromCenter / 5);
        setLeftSpanWdth(newLeftSpanWdth);
        setRightSpanWdth(newRightSpanWdth);
      } else {
        // Cursor on the right side
        const distanceFromCenter = x - halfContainerWidth;
        const newLeftSpanWdth = Math.max(10, 200 - distanceFromCenter / 5);
        const newRightSpanWdth = Math.min(400, 200 + distanceFromCenter / 5);
        setLeftSpanWdth(newLeftSpanWdth);
        setRightSpanWdth(newRightSpanWdth);
      }
    }
  }, [x]);

  return (
    <div 
      ref={containerRef} 
      className='text-[500px]'
      style={{ 
        display: 'flex', 
        transform: `scaleX(${scaleX})`,
        transformOrigin: 'left'
      }}
    >
      <span style={{ fontVariationSettings: `"wdth" ${leftSpanWdth}` }}>A</span>
      <span style={{ fontVariationSettings: `"wdth" ${rightSpanWdth}` }}>A</span>
    </div>
  );
};

export default FullWidthSpans;
