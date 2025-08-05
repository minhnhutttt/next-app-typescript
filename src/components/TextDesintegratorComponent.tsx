'use client';

import TextDesintegrator from '@/hooks/TextDesintegrator';
import React, { useEffect, useRef } from 'react';

interface TextDesintegratorComponentProps {
  text: string;
  options?: {
    padding?: number;
    density?: number;
    duration?: number;
  };
  className?: string;
}

const TextDesintegratorComponent: React.FC<TextDesintegratorComponentProps> = ({
  text,
  options,
  className = ''
}) => {
  const elementRef = useRef<HTMLHeadingElement>(null);
  const desintegratorRef = useRef<TextDesintegrator | null>(null);

  useEffect(() => {
    if (elementRef.current && typeof window !== 'undefined') {
      // Cleanup previous instance
      if (desintegratorRef.current) {
        desintegratorRef.current.stop();
      }
      
      // Create new instance
      desintegratorRef.current = new TextDesintegrator(
        elementRef.current,
        options
      );
    }

    // Cleanup on unmount
    return () => {
      if (desintegratorRef.current) {
        desintegratorRef.current.stop();
      }
    };
  }, [text, options]);

  return (
    <>
      <style jsx>{`
        .td-hide {
          opacity: 0;
        }
        .td-wrapper {
          display: inline-block;
        }
      `}</style>
      <h1 ref={elementRef} className={className}>
        <span>{text}</span>
      </h1>
    </>
  );
};

export default TextDesintegratorComponent;