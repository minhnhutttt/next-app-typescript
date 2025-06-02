"use client"
import { useLoading } from '@/contexts/LoadingContext';
import { useState, useEffect } from 'react';

interface Pattern {
  id: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
}

const LoadingScreen: React.FC = () => {
  const { isLoading, setIsLoading } = useLoading();
  const [patterns, setPatterns] = useState<Pattern[]>([]);

  useEffect(() => {
    const generatePatterns = (): void => {
      const patternArray: Pattern[] = [];
      for (let i = 0; i < 20; i++) {
        patternArray.push({
          id: i,
          x: Math.random() * 85,
          y: Math.random() * 85,
          delay: Math.random() * 1.5,
          duration: 1 + Math.random() * 25,
        });
      }
      setPatterns(patternArray);
    };

    generatePatterns();

    const timer: NodeJS.Timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [setIsLoading]);

  return (
    <div 
      className={`fixed inset-0 bg-black z-[99] transition-opacity duration-[3s] ${
        isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {patterns.map((pattern: Pattern) => (
        <div
          key={pattern.id}
          className={`absolute w-[26px] h-[180px] scale-[2] opacity-0 glitch-${(pattern.id % 3) + 1}`}
          style={{
            left: `${pattern.x}%`,
            top: `${pattern.y}%`,
            animationDelay: `${pattern.delay}s`,
            animationDuration: `${pattern.duration}s`,
          }}
        >
          <div
            className={`w-full h-full bg-[url(/textures/pattern02.png)] bg-cover slow-fall-1`}
            style={{
              animationDelay: `${pattern.delay}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default LoadingScreen;