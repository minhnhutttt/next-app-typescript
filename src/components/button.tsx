"use client"
import React, { ReactNode, useEffect, useRef } from 'react';
import gsap from 'gsap';

interface ButtonProps {
  rect?: string;
  href: string;
  children: ReactNode
}

const Button: React.FC<ButtonProps> = ({ rect, children, href = "#" }) => {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    const buttonElement = buttonRef.current;
    const el = gsap.utils.selector(buttonElement);

    const DOM = {
      button: buttonElement,
      flair: el('.button__flair')[0] as HTMLElement
    };

    const xSet = gsap.quickSetter(DOM.flair, 'xPercent');
    const ySet = gsap.quickSetter(DOM.flair, 'yPercent');
    const hasFill = DOM.button.classList.contains('button--fill');

    const getXY = (e: MouseEvent) => {
      const { left, top, width, height } = DOM.button.getBoundingClientRect();

      const xTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, width, 0, 100),
        gsap.utils.clamp(0, 100)
      );

      const yTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, height, 0, 100),
        gsap.utils.clamp(0, 100)
      );

      return {
        x: xTransformer(e.clientX - left),
        y: yTransformer(e.clientY - top)
      };
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const { x, y } = getXY(e);

      xSet(x);
      ySet(y);

      if (hasFill) {
        gsap.to(DOM.flair, {
          opacity: 1,
          duration: 1,
          ease: 'power2.out'
        });
      } else {
        gsap.to(DOM.flair, {
          scale: 1,
          duration: 0.4,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const { x, y } = getXY(e);

      gsap.killTweensOf(DOM.flair);

      if (hasFill) {
        gsap.to(DOM.flair, {
          xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
          yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
          opacity: 0,
          duration: 1,
          ease: 'power2.out'
        });
      } else {
        gsap.to(DOM.flair, {
          xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
          yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
          scale: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const { x, y } = getXY(e);

      gsap.to(DOM.flair, {
        xPercent: x,
        yPercent: y,
        duration: hasFill ? 1 : 0.4,
        ease: 'power2'
      });
    };

    DOM.button.addEventListener('mouseenter', handleMouseEnter);
    DOM.button.addEventListener('mouseleave', handleMouseLeave);
    DOM.button.addEventListener('mousemove', handleMouseMove);

    return () => {
      DOM.button.removeEventListener('mouseenter', handleMouseEnter);
      DOM.button.removeEventListener('mouseleave', handleMouseLeave);
      DOM.button.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <a href={href} ref={buttonRef} className={`group button flex items-center justify-center rounded-[60px] border-2 border-white [box-shadow:0px_0px_40px_0px_rgba(100,_0,_136,_0.20)] relative text-white font-bold overflow-hidden button--stroke border-box ${rect}`} data-block="button">
      
      <span className="button__flair">
        </span>
        <span className="absolute inset-0 z-20 flex items-center justify-center gap-2.5 text-white">{children}</span>
    </a>
  );
};

export default Button;
