'use client';

import { useEffect, useRef, useCallback } from 'react';
import { gsap } from 'gsap';

interface InfiniteScrollProps {
  children: React.ReactNode;
  count?: number;
  duration?: string;
  direction?: 'left' | 'right';
  className?: string;
  scrollBoostMultiplier?: number;
  decelerationTime?: number;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  children,
  count = 3,
  duration = "20s",
  direction = 'left',
  className = "",
  scrollBoostMultiplier = 5,
  decelerationTime = 1000
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef<boolean>(false);
  const lastScrollTimeRef = useRef<number>(0);
  const lastScrollYRef = useRef<number>(0);
  const currentDirectionRef = useRef<'left' | 'right'>(direction);

  const getAnimationDuration = useCallback(() => {
    if (/ms/.test(duration)) {
      return parseFloat(duration) / 1000; 
    } else {
      return parseFloat(duration);
    }
  }, [duration]);

  const createAnimation = useCallback((newDirection: 'left' | 'right', boost: boolean = false) => {
    if (!containerRef.current) return null;

    const container = containerRef.current;
    const translateX = 100 / count;
    const animationDuration = getAnimationDuration();

    if (animationRef.current) {
      animationRef.current.kill();
    }

    let animation;
    if (newDirection === 'left') {
      animation = gsap.fromTo(
        container,
        { x: '0%' },
        {
          x: `-${translateX}%`,
          duration: animationDuration,
          ease: 'none',
          repeat: -1,
        }
      );
    } else {
      animation = gsap.fromTo(
        container,
        { x: `-${translateX}%` },
        {
          x: '0%',
          duration: animationDuration,
          ease: 'none',
          repeat: -1,
        }
      );
    }

    if (boost) {
      animation.timeScale(scrollBoostMultiplier);
    }

    animationRef.current = animation;
    currentDirectionRef.current = newDirection;
    
    return animation;
  }, [count, getAnimationDuration, scrollBoostMultiplier]);

  const handleScroll = useCallback(() => {
    const now = Date.now();
    const currentScrollY = window.scrollY;
    lastScrollTimeRef.current = now;
    
    const scrollDelta = currentScrollY - lastScrollYRef.current;
    
    if (Math.abs(scrollDelta) > 1) { 
      const scrollDirection = scrollDelta > 0 ? 'down' : 'up';
      let newDirection: 'left' | 'right';

      if (direction === 'left') {
        newDirection = scrollDirection === 'up' ? 'right' : 'left';
      } else {
        newDirection = scrollDirection === 'up' ? 'left' : 'right';
      }

      if (newDirection !== currentDirectionRef.current) {
        createAnimation(newDirection, true);
      } else if (!isScrollingRef.current && animationRef.current) {
        gsap.to(animationRef.current, {
          timeScale: scrollBoostMultiplier,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
    
    lastScrollYRef.current = currentScrollY;
    isScrollingRef.current = true;

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
      
      if (animationRef.current) {
        gsap.to(animationRef.current, {
          timeScale: 1,
          duration: decelerationTime / 1000,
          ease: "power2.out"
        });
      }
    }, 150);
  }, [direction, scrollBoostMultiplier, decelerationTime, createAnimation]);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const originalChild = container.children[0] as HTMLElement;
    
    if (!originalChild) return;

    while (container.children.length > 1) {
      container.removeChild(container.lastChild!);
    }

    for (let i = 1; i < count; i++) {
      const clonedChild = originalChild.cloneNode(true) as HTMLElement;
      container.appendChild(clonedChild);
    }

    lastScrollYRef.current = window.scrollY;
    currentDirectionRef.current = direction;

    createAnimation(direction);

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      animationRef.current = null;
    };
  }, [count, duration, direction, handleScroll, createAnimation]);

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