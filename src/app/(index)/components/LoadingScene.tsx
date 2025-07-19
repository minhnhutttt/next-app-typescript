"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const LoadingScene = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [imageSet, setImageSet] = useState<'a' | 'b'>('a');

  useEffect(() => {
    const visitCount = parseInt(localStorage.getItem('visitCount') || '0', 10);
    
    const newVisitCount = visitCount + 1;
    localStorage.setItem('visitCount', newVisitCount.toString());
    
    setImageSet(newVisitCount % 2 === 1 ? 'a' : 'b');
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const itemElements = gsap.utils.toArray(".js-item");
      let completedAnimations = 0;
      
      itemElements.forEach((item: any, index) => {
        const card = item.querySelector('.js-scene-card');
        const icon = item.querySelector('.js-scene-ic');
        const scene = item.querySelector('.js-scene');
        
        const tl = gsap.timeline({
          delay: index * 0.6,
          onComplete: () => {
            completedAnimations++;
            if (completedAnimations === itemElements.length) {
              if (sectionRef.current) {
                gsap.to(sectionRef.current, {
                  opacity: 0,
                  duration: 0.3,
                  ease: "power1.inOut"
                });
              }
            }
          }
        });
        
        tl.from(scene, {
          opacity: 0,
          xPercent: gsap.utils.random(-200, 200, 50),
          yPercent: gsap.utils.random(-200, 200, 50),
          duration: 0.6,
           ease: "power1.in"
        })
        .to(scene, {
          scale: 1,
          duration: 0.3,
           ease: "power1.inOut"
        })
        .to(card, {
          opacity: 1,
          duration: 0.3,
           ease: "power1.inOut"
        })
        .to(icon, {
          opacity: 0,
          duration: 0.3,
           ease: "power1.inOut"
        }, '<')
        .to(item, {
          y: "-150vh",
          x: gsap.utils.random(-150,150),
          rotate: gsap.utils.random(-12,12),
          duration: 2.5,
          ease: "power1.inOut"
        }, '<');
      });

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [imageSet]);

  const getImagePath = (type: 'card' | 'ic', index: number) => {
    return `/assets/images/${type}-${imageSet}-${index.toString().padStart(2, '0')}.png`;
  };

  const items = Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    position: index % 2 === 0 ? 'left-[50%]' : 'right-[50%]'
  }));

  return (
    <section ref={sectionRef} className="overflow-hidden fixed inset-0 z-[99] [background:linear-gradient(45deg,rgba(236,157,188,1)_0%,rgba(142,129,185,1)_48%,rgba(126,202,240,1)_100%)] pointer-events-none">
      <div className="relative h-screen overflow-hidden scene-container">
        {items.map((item) => (
          <div key={item.id} className={`absolute top-[60%] ${item.position}`}>
            <div className="js-item origin-center">
              <div className="js-scene md:w-[500px] w-[200px] relative scale-[0.5] flex items-center justify-center">
                <div className="js-scene-card absolute inset-0 opacity-0">
                  <img src={getImagePath('card', item.id)} />
                </div>
                <div className="js-scene-ic relative">
                  <img src={getImagePath('ic', item.id)} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LoadingScene;