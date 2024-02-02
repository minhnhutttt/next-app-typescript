"use client"
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

const Cursor: React.FC = () => {
  const ballRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isMobile()) {
      gsap.to([ballRef.current, cursorRef.current], {
        display: 'none',
      });
    } else {
      const ball = ballRef.current;
      const cursor = cursorRef.current;

      gsap.set(ball, {
        xPercent: -50,
        yPercent: -50,
      });

      gsap.set(cursor, {
        xPercent: -50,
        yPercent: -50,
      });

      const initialPosition = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
      };

      const currentPosition = {
        x: initialPosition.x,
        y: initialPosition.y,
      };

      const setX = gsap.quickSetter(ball, 'x', 'px');
      const setY = gsap.quickSetter(ball, 'y', 'px');

      const handleMouseMove = (e: MouseEvent) => {
        currentPosition.x = e.x;
        currentPosition.y = e.y;
      };

      window.addEventListener('mousemove', handleMouseMove);

      gsap.ticker.add(() => {
        const delta = 1 - Math.pow(0.875, gsap.ticker.deltaRatio());
        initialPosition.x += (currentPosition.x - initialPosition.x) * delta;
        initialPosition.y += (currentPosition.y - initialPosition.y) * delta;

        setX(initialPosition.x);
        setY(initialPosition.y);

        gsap.to(cursor, {
          y: currentPosition.y,
          x: currentPosition.x,
          ease: 'linear',
          duration: 0.01,
        });
      });

      const handleLoad = () => {
        const handleMouseOut = (e: MouseEvent) => {
          e = e || window.event;
          const relatedTarget = e.relatedTarget || (e as any).toElement;
          if (!relatedTarget || relatedTarget.nodeName === 'HTML') {
            gsap.to(cursor, {
              scale: 0,
              duration: 0.4,
              ease: 'power4',
            });
          }
        };

        const handleMouseEnter = () => {
          gsap.to(cursor, {
            scale: 1,
            duration: 0.4,
            ease: 'power4',
          });
        };

        document.addEventListener('mouseout', handleMouseOut);
        document.addEventListener('mouseenter', handleMouseEnter);
      };

      window.addEventListener('load', handleLoad);
    }
  }, []);

  return (
    <>
      {/* Your cursor elements with appropriate IDs */}
      <div id="ball" ref={ballRef}></div>
      <div id="cursor" ref={cursorRef}></div>
    </>
  );
};

export default Cursor;
