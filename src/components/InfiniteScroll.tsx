'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface InfiniteScrollProps {
  children: React.ReactNode;
  count?: number; // Số lần lặp lại
  duration?: string; // Thời gian animation (ví dụ: "20s" hoặc "20000ms")
  direction?: 'left' | 'right'; // Hướng di chuyển
  className?: string;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  children,
  count = 3,
  duration = "20s",
  direction = 'left',
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const originalChild = container.children[0] as HTMLElement;
    
    if (!originalChild) return;

    // Xóa các phần tử clone cũ (nếu có)
    while (container.children.length > 1) {
      container.removeChild(container.lastChild!);
    }

    // Clone phần tử gốc theo số lần count
    for (let i = 1; i < count; i++) {
      const clonedChild = originalChild.cloneNode(true) as HTMLElement;
      container.appendChild(clonedChild);
    }

    // Tính toán khoảng cách di chuyển
    const translateX = 100 / count;

    // Parse duration
    let animationDuration: number;
    if (/ms/.test(duration)) {
      animationDuration = parseFloat(duration) / 1000; // Convert ms to seconds
    } else {
      animationDuration = parseFloat(duration); // Already in seconds
    }

    // Tạo animation với GSAP dựa theo direction
    let animation;
    if (direction === 'left') {
      // Di chuyển từ phải sang trái (mặc định)
      animation = gsap.fromTo(
        container,
        {
          x: '0%'
        },
        {
          x: `-${translateX}%`,
          duration: animationDuration,
          ease: 'none',
          repeat: -1, // Infinite repeat
        }
      );
    } else {
      // Di chuyển từ trái sang phải
      animation = gsap.fromTo(
        container,
        {
          x: `-${translateX}%`
        },
        {
          x: '0%',
          duration: animationDuration,
          ease: 'none',
          repeat: -1, // Infinite repeat
        }
      );
    }

    // Cleanup function
    return () => {
      animation.kill();
    };
  }, [count, duration, direction]);

  return (
    <div 
      ref={containerRef}
      className={`inline-flex ${className}`}
      style={{
        whiteSpace: 'nowrap'
      }}
    >
      {children}
    </div>
  );
};

export default InfiniteScroll;