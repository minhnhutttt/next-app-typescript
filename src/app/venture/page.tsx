"use client";
import ParticleScene, { SceneConfig } from "../../components/ParticleScene";
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import "lenis/dist/lenis.css";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { useScramble } from "use-scramble";
import { useLoading } from "@/contexts/LoadingContext";

const SCENE_CONFIGS: Record<string, SceneConfig> = {
  venture: {
    modelPath: "/models/models02.glb",
    texturePath: "/textures/pattern.jpg",
    particleSize: 0.06,
    particleColor: {
      hover: [1.0, 0.35, 0.05],
      normal: [0.04, 0.04, 0.04],
    },
    backgroundEffect: {
      speed: 0.2,
      intensity: 0.3,
    },
  },
};

const data = [
  {
    id: "0",
    name: "Agnostic 01",
    text: "A platform that helps teams build and analyse indexed-blockchain data",
    image: "/assets/images/agnostic-gray.svg",
    morph: 0,
  },
  {
    id: "1",
    name: "Agnostic 02",
    text: "A platform that helps teams build and analyse indexed-blockchain data",
    image: "/assets/images/agnostic-gray.svg",
    morph: 1,
  },
  {
    id: "2",
    name: "Agnostic 03",
    text: "A platform that helps teams build and analyse indexed-blockchain data",
    image: "/assets/images/agnostic-gray.svg",
    morph: 2,
  },
  {
    id: "3",
    name: "Agnostic 04",
    text: "A platform that helps teams build and analyse indexed-blockchain data",
    image: "/assets/images/agnostic-gray.svg",
    morph: 0,
  },
  {
    id: "4",
    name: "Agnostic 05",
    text: "A platform that helps teams build and analyse indexed-blockchain data",
    image: "/assets/images/agnostic-gray.svg",
    morph: 1,
  },
  {
    id: "5",
    name: "Agnostic 06",
    text: "A platform that helps teams build and analyse indexed-blockchain data",
    image: "/assets/images/agnostic-gray.svg",
    morph: 2,
  },
  {
    id: "6",
    name: "Agnostic 07",
    text: "A platform that helps teams build and analyse indexed-blockchain data",
    image: "/assets/images/agnostic-gray.svg",
    morph: 0,
  },
  {
    id: "7",
    name: "Agnostic 08",
    text: "A platform that helps teams build and analyse indexed-blockchain data",
    image: "/assets/images/agnostic-gray.svg",
    morph: 1,
  },
];

const VenturePage: NextPage = () => {
  const ref = useScrollAnimations()
  const { isLoading } = useLoading();
  const lenisRef = useRef<LenisRef>(null);
  const allItemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [shouldStartScramble, setShouldStartScramble] = useState(false);

  // Create scramble instances at top level - one for each original item and one for each clone
  const scrambleInstances = [
    // Original items
    useScramble({ text: data[0].text, speed: 2.0 }),
    useScramble({ text: data[1].text, speed: 2.0 }),
    useScramble({ text: data[2].text, speed: 2.0 }),
    useScramble({ text: data[3].text, speed: 2.0 }),
    useScramble({ text: data[4].text, speed: 2.0 }),
    useScramble({ text: data[5].text, speed: 2.0 }),
    useScramble({ text: data[6].text, speed: 2.0 }),
    useScramble({ text: data[7].text, speed: 2.0 }),
    // Clone items
    useScramble({ text: data[0].text, speed: 2.0 }),
    useScramble({ text: data[1].text, speed: 2.0 }),
    useScramble({ text: data[2].text, speed: 2.0 }),
    useScramble({ text: data[3].text, speed: 2.0 }),
    useScramble({ text: data[4].text, speed: 2.0 }),
    useScramble({ text: data[5].text, speed: 2.0 }),
    useScramble({ text: data[6].text, speed: 2.0 }),
    useScramble({ text: data[7].text, speed: 2.0 }),
  ];

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  const [morphIndex, setMorphIndex] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const findCenterItem = () => {
    const screenCenter = window.innerHeight / 2;
    let closestItemIndex = 0;
    let minDistance = Infinity;

    allItemRefs.current.forEach((ref, refIndex) => {
      if (ref) {
        const rect = ref.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        const distance = Math.abs(screenCenter - itemCenter);

        if (distance < minDistance) {
          minDistance = distance;
          const actualIndex = refIndex % data.length;
          closestItemIndex = actualIndex;
        }
      }
    });

    return closestItemIndex;
  };

  const scrollFirstItemToCenter = () => {
    const firstItemRef = allItemRefs.current[0];
    const lenis = lenisRef.current?.lenis;
    
    if (firstItemRef && lenis) {
      const rect = firstItemRef.getBoundingClientRect();
      const screenCenter = window.innerHeight / 2;
      const itemCenter = rect.top + rect.height / 2;
      const scrollDistance = itemCenter - screenCenter;
      
      lenis.scrollTo(window.scrollY + scrollDistance, {
        duration: 0.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isInitialized) return;
      
      const centerItemIndex = findCenterItem();
      if (centerItemIndex !== activeItemIndex) {
        setActiveItemIndex(centerItemIndex);
        setMorphIndex(data[centerItemIndex].morph);
      }
    };

    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    const lenis = lenisRef.current?.lenis;
    if (lenis) {
      lenis.on("scroll", throttledHandleScroll);

      return () => {
        lenis.off("scroll", throttledHandleScroll);
      };
    }
  }, [activeItemIndex, isInitialized]);

  useEffect(() => {
    if (!isLoading) { 
      const timer = setTimeout(() => {
        setActiveItemIndex(0);
        setMorphIndex(data[0].morph);
        
        scrollFirstItemToCenter();
        
        setTimeout(() => {
          setIsInitialized(true);
          setShouldStartScramble(true); 
        }, 500);
      }, 200);

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  useEffect(() => {
    if (shouldStartScramble && !isLoading) {
      const scrambleTimer = setTimeout(() => {
        scrambleInstances.forEach(({ replay }) => {
          replay();
        });
      }, 400);

      const nameFlickerTimer = setTimeout(() => {
        const nameElements = document.querySelectorAll('[data-name-element]');
        
        nameElements.forEach((element, index) => {
          const delay = index * 0.1;
          
          gsap.set(element, { 
            opacity: 0,
            scale: 0.8
          });
          
          const tl = gsap.timeline({ delay });
          
          tl.to(element, {
            opacity: 1,
            duration: 0.08,
            ease: "power2.out"
          })
          .to(element, {
            opacity: 0,
            duration: 0.08,
            ease: "power2.out"
          })
          .to(element, {
            opacity: 1,
            duration: 0.08,
            ease: "power2.out"
          })
          .to(element, {
            opacity: 0,
            duration: 0.08,
            ease: "power2.out"
          })
          .to(element, {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            ease: "back.out(1.7)"
          });
        });
      }, 10);

      const iconFlickerTimer = setTimeout(() => {
        const iconElements = document.querySelectorAll('[data-icon-element]');
        
        iconElements.forEach((element, index) => {
          const delay = index * 0.15 + 0.3;
          
          gsap.set(element, { 
            opacity: 0,
            scale: 0.6,
          });
          
          const tl = gsap.timeline({ delay });
          
          tl.to(element, {
            opacity: 1,
            duration: 0.1,
            ease: "power2.out"
          })
          .to(element, {
            opacity: 0,
            duration: 0.1,
            ease: "power2.out"
          })
          .to(element, {
            opacity: 1,
            duration: 0.1,
            ease: "power2.out"
          })
          .to(element, {
            opacity: 0,
            duration: 0.1,
            ease: "power2.out"
          })
          .to(element, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "back.out(2)"
          });
        });
      }, 150);

        const textElements = document.querySelectorAll('[data-text-element]');
        
        textElements.forEach((element, index) => {
          
          gsap.set(element, { 
            opacity: 0,
          });
          
          const tl = gsap.timeline();
          
          tl.to(element, {
            opacity: 1,
            duration: 0.1,
            ease: "power2.out"
          })
        });

      return () => {
        clearTimeout(scrambleTimer);
        clearTimeout(nameFlickerTimer);
        clearTimeout(iconFlickerTimer);
      };
    }
  }, [shouldStartScramble, isLoading]);

  const ItemComponent = ({
    item,
    index,
    isClone = false,
    refIndex,
  }: {
    item: (typeof data)[0];
    index: number;
    isClone?: boolean;
    refIndex: number;
  }) => {
    const actualIndex = index % data.length;
    const isActive = activeItemIndex === actualIndex;
    const nameRef = useRef<HTMLParagraphElement>(null);
    const iconRef = useRef<SVGSVGElement>(null);
    
    const scrambleInstanceIndex = isClone ? data.length + actualIndex : actualIndex;
    const scrambleRef = scrambleInstances[scrambleInstanceIndex].ref;

    return (
      <div
        ref={(el) => {
          allItemRefs.current[refIndex] = el;
        }}
        className={`flex items-center gap-5 md:gap-10 cursor-pointer transition-all duration-500 ${
          isActive ? "opacity-100" : "opacity-60 hover:opacity-90"
        }`}
        key={`${isClone ? "clone-" : ""}${refIndex}`}
      >
        <div>
          <svg
            ref={iconRef}
            data-icon-element
            xmlns="http://www.w3.org/2000/svg"
            className={`w-8 md:w-20 transition-colors duration-500 ${
              isActive ? "drop-shadow-lg" : ""
            }`}
            viewBox="0 0 39 39"
            fill="none"
          >
            <path
              d="M19.4727 1.38538C9.51215 1.38538 1.4375 9.46002 1.4375 19.4205C1.4375 29.381 9.51215 37.4557 19.4727 37.4557C29.4332 37.4557 37.5078 29.381 37.5078 19.4205C37.5078 9.46002 29.4335 1.38538 19.4727 1.38538ZM32.1455 21.1033L21.1554 32.0934C20.226 33.0229 18.719 33.0229 17.7899 32.0934L6.79982 21.1033C5.87032 20.1738 5.87032 18.6669 6.79982 17.7377L17.7899 6.74769C18.7194 5.8182 20.2263 5.8182 21.1554 6.74769L32.1455 17.7377C33.075 18.6672 33.075 20.1742 32.1455 21.1033Z"
              fill={isActive ? "#FF9016" : "#999999"}
              className="transition-colors duration-500"
            />
          </svg>
        </div>
        <div className="">
          <p
            ref={nameRef}
            data-name-element
            className={`md:text-[70px] text-[24px] font-bold transition-colors duration-500 origin-left ${
              isActive ? "text-[#FF9016] drop-shadow-md" : "text-[#999999]"
            }`}
          >
            {item.name}
          </p>
          <p
            ref={scrambleRef}
            data-text-element
            className={`md:text-[20px] text-[14px] font-bold transition-all duration-500 ${
              isActive ? "text-[#FF9016] drop-shadow-sm" : "text-[#999999]"
            }`}
          >
            {item.text}
          </p>
        </div>
      </div>
    );
  };

  return (
    <main ref={ref} className="w-full h-screen overflow-hidden">
      <ReactLenis
        root
        options={{
          autoRaf: false,
          infinite: true,
          syncTouch: true,
          wheelMultiplier: 0.1,
        }}
        ref={lenisRef}
      />
      <ParticleScene
        config={SCENE_CONFIGS.venture}
        indexMorph={morphIndex}
        isLeft
      />
      <div className="fade-up flex justify-end absolute inset-0 font-bold p-10">
        <div 
          ref={containerRef}
          className="md:w-1/2 space-y-20"
        >
          {data.map((item, index) => (
            <ItemComponent
              key={`original-${item.id}`}
              item={item}
              index={index}
              refIndex={index}
            />
          ))}

          <div id="clone" className="h-screen overflow-hidden space-y-20">
            {data.map((item, index) => (
              <ItemComponent
                key={`clone-${item.id}`}
                item={item}
                index={index}
                isClone={true}
                refIndex={data.length + index}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default VenturePage;