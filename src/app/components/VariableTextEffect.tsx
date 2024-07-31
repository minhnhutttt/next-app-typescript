"use client"
import { FC, useEffect, useRef } from 'react';
import useMousePosition from './useMousePosition'; // Cập nhật đường dẫn nếu cần

const VariableWord: FC = () => {
  const { x } = useMousePosition();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const spans = containerRef.current.querySelectorAll('.variable-word-letter');
      const containerWidth = containerRef.current.offsetWidth;
      const maxVariation = 400; // Giá trị tối đa của font-variation-settings
      const minVariation = 10;  // Giá trị tối thiểu của font-variation-settings
      const centerX = containerWidth / 2;

      spans.forEach(span => {
        const spanX = span.getBoundingClientRect().left + span.clientWidth / 2;
        const distanceFromCenter = Math.abs(centerX - spanX);
        const maxDistance = containerWidth / 2;
        const variation = Math.max(minVariation, maxVariation - (distanceFromCenter / maxDistance) * (maxVariation - minVariation));
        (span as HTMLElement).style.fontVariationSettings = `'wdth' ${variation}`;
      });
    }
  }, [x]);

  return (
    <div className="variable-word text-[400px]" ref={containerRef}>
      <div className="variable-word-inner" style={{ opacity: 1, transform: 'translateY(0px) scaleY(1)' }}>
        <span data-char="A" className="variable-word-letter" style={{ fontVariationSettings: 'wdth 200' }}>A</span>
        <span data-char="R" className="variable-word-letter" style={{ fontVariationSettings: 'wdth 200' }}>R</span>
        <span data-char="T" className="variable-word-letter" style={{ fontVariationSettings: 'wdth 200' }}>T</span>
      </div>
    </div>
  );
};

export default VariableWord;
