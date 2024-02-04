import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const useSplitTextAnimation = () => {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-split-text]");

    elements.forEach((element, refIndex) => {
      const target = element as HTMLDivElement;
         const delay: number = Number(element.getAttribute('data-delay'))

      const aniText = target?.innerText;

      if (!aniText) return;

      const characters = aniText.split('');

      const splitText = characters
        .map((char, index) => `<span class="relative inline-block char-${refIndex}-${index}">${char === " " ? "&nbsp;" : char}</span>`)
        .join('');

      target.innerHTML = splitText;
      characters.forEach((char, index) => {
        gsap.set(`.char-${refIndex}-${index}`, {
            transformOrigin: "0% 100%",
            xPercent: -50,
            scaleX: .25,
            opacity: 0
        });
        gsap.to(`.char-${refIndex}-${index}`, {
            opacity: 1,
            duration: 1,
            scaleX: 1,
            xPercent: 0,
            delay: delay * index * 0.015,
            stagger: {
                amount: .25
            },
            ease: "expo",
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
              },
        });
      });
    });
  }, []);

};

export default useSplitTextAnimation;
