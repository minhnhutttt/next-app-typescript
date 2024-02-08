"use client"
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import useIsMobile from '../_hooks/useIsMobile';


export default function Cursor()  {
    const ballRef = useRef<HTMLDivElement>(null);
    const cursorRef = useRef<HTMLDivElement>(null);
    const isMobile = useIsMobile();
  
    useEffect(() => {
      if (isMobile) {
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
  
        const handleLinkHover = () => {
          const links = document.querySelectorAll('a');
          links.forEach(link => {
            link.addEventListener('mouseenter', () => {
              gsap.to(cursor, {
                scale: 4,
                duration: 0.25,
                ease: 'power4',
              });
            });
  
            link.addEventListener('mouseleave', () => {
              gsap.to(cursor, {
                scale: 1,
                duration: 0.25,
                ease: 'power4',
              });
            });
          });
        };
        handleLinkHover();
        window.addEventListener('load', () => {
          handleLoad();
        });
      }
    }, []);

  return (
    <>
      <div className="max-md:hidden fixed opacity-[.6] top-[0] left-[0] w-[600px] h-[600px] rounded-[50%] bg-[radial-gradient(circle,#706ab6_15%,#000_70%)] pointer-events-none mix-blend-color-dodge z-[999]" ref={ballRef}></div>
      <div className="max-md:hidden fixed block top-[0] left-[0] w-[10px] h-[10px] rounded-[5px] bg-[#fff] pointer-events-none mix-blend-difference [transition:transform_30ms_linear] z-[150]" ref={cursorRef}></div>
    </>
  );
};

