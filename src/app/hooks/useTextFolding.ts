import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextAnimationProps {
  delay?: number;
}

const useTextFolding = ({ delay = 0 }: TextAnimationProps = {}) => {
  const containerRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    containerRefs.current.forEach((containerRef, index) => {
      if (containerRef) {
        const aniText = containerRef.innerText;

        if (!aniText) return;

        const characters = aniText.split('');

        const splitText = characters
          .map(
            (char, charIndex) =>
              `<span class="char-${index}-${charIndex} origin-bottom inline-block">${char === ' ' ? '&nbsp;' : char}</span>`
          )
          .join('');

        containerRef.innerHTML = splitText;

        characters.forEach((char, charIndex) => {
          gsap.set(`.char-${index}-${charIndex}`, {
            rotationX: 90,
            opacity: 0
          });
          gsap.to(`.char-${index}-${charIndex}`, {
            rotationX: 0,
            opacity: 1,
            duration: 2,
            delay: charIndex * 0.025 + delay,
            ease: 'Power3.easeOut',
            scrollTrigger: {
              trigger: containerRef,
              start: 'top 80%'
            }
          });
        });
      }
    });
  }, [delay]);

  const addContainerRef = (ref: HTMLDivElement | null) => {
    if (ref) {
      containerRefs.current.push(ref);
    }
  };

  return addContainerRef;
};

export default useTextFolding;
