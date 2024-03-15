import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextAnimationProps {
  delay?: number;
}

const useTextAnimation = ({ delay = 0 }: TextAnimationProps = {}): React.RefObject<HTMLDivElement> => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const aniText = containerRef.current.innerText;

      if (!aniText) return;

      const characters = aniText.split('');

      const splitText = characters
        .map((char, index) => `<span class="opacity-0 char-${index}">${char === " " ? "&nbsp;" : char}</span>`)
        .join('');

      containerRef.current.innerHTML = splitText;

      characters.forEach((char, index) => {
        gsap.set(`.char-${index}`, {
          transformOrigin: "0% 100%",
          opacity: 0
        });
        gsap.to(`.char-${index}`, {
          opacity: 1,
          duration: 1.2,
          delay: index * 0.025 + delay,
          stagger: {
            amount: .25
          },
          ease: "expo.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        });
      });
    }
  }, [delay]);

  return containerRef;
};

export default useTextAnimation;
