"use client"
import ParticleScene, {  SceneConfig } from '../../components/ParticleScene';
import type { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap'
import { ReactLenis, useLenis } from 'lenis/react'
import type { LenisRef } from 'lenis/react';
import 'lenis/dist/lenis.css'

const SCENE_CONFIGS: Record<string, SceneConfig> = {
  venture: {
    modelPath: '/models/models02.glb',
    texturePath: '/textures/pattern.jpg',
    particleSize: 0.1,
    particleColor: {
      hover: [1.0, 0.7, 0.0],
      normal: [0.1, 0.1, 0.1],
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
]

const HomePage: NextPage = () => {
  const lenisRef = useRef<LenisRef>(null)
  const allItemRefs = useRef<(HTMLDivElement | null)[]>([])
  
  useEffect(() => {
    function update(time: number ) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }
  
    gsap.ticker.add(update)
  
    return () => gsap.ticker.remove(update)
  }, [])
  
  const [morphIndex, setMorphIndex] = useState(0);
  const [activeItemIndex, setActiveItemIndex] = useState(0); // Đổi thành index thay vì id

  // Hàm tính toán item nào đang ở trung tâm (bao gồm cả clone)
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
          // Tính toán index thực tế trong data array (xử lý infinite)
          const actualIndex = refIndex % data.length;
          closestItemIndex = actualIndex;
        }
      }
    });

    return closestItemIndex;
  };

  // Xử lý scroll event
  useEffect(() => {
    const handleScroll = () => {
      const centerItemIndex = findCenterItem();
      if (centerItemIndex !== activeItemIndex) {
        setActiveItemIndex(centerItemIndex);
        setMorphIndex(data[centerItemIndex].morph);
      }
    };

    // Throttle scroll event để tối ưu performance
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

    // Lắng nghe scroll event từ Lenis
    const lenis = lenisRef.current?.lenis;
    if (lenis) {
      lenis.on('scroll', throttledHandleScroll);
      
      // Cleanup
      return () => {
        lenis.off('scroll', throttledHandleScroll);
      };
    }
  }, [activeItemIndex]);

  // Khởi tạo active item đầu tiên
  useEffect(() => {
    const timer = setTimeout(() => {
      const centerItemIndex = findCenterItem();
      setActiveItemIndex(centerItemIndex);
      setMorphIndex(data[centerItemIndex].morph);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const handleMorphChange = (newIndex: number) => {
    setMorphIndex(newIndex);
  };

  // Hàm xử lý khi click vào item
  const handleItemClick = (item: typeof data[0], clickedIndex: number) => {
    const actualIndex = data.findIndex(d => d.id === item.id);
    
    // Tìm item gần nhất với vị trí hiện tại để scroll tới
    const screenCenter = window.innerHeight / 2;
    let bestRef: HTMLDivElement | null = null;
    let minDistance = Infinity;

    allItemRefs.current.forEach((ref, refIndex) => {
      if (ref && refIndex % data.length === actualIndex) {
        const rect = ref.getBoundingClientRect();
        const distance = Math.abs(rect.top + rect.height / 2 - screenCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          bestRef = ref;
        }
      }
    });
    
    if (bestRef && lenisRef.current?.lenis) {
      const rect = (bestRef as HTMLDivElement).getBoundingClientRect();
      const targetScroll = window.scrollY + rect.top + (rect.height / 2) - screenCenter;
      
      lenisRef.current.lenis.scrollTo(targetScroll, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    }
  };

  // Component cho từng item
  const ItemComponent = ({ item, index, isClone = false, refIndex }: { 
    item: typeof data[0], 
    index: number, 
    isClone?: boolean,
    refIndex: number
  }) => {
    const actualIndex = index % data.length;
    const isActive = activeItemIndex === actualIndex;
    
    return (
      <div 
        ref={(el) => { allItemRefs.current[refIndex] = el }}
        className={`flex items-center gap-10 cursor-pointer transition-all duration-500 hover:scale-105 ${
          isActive ? 'opacity-100 scale-105' : 'opacity-60 hover:opacity-90'
        }`}
        key={`${isClone ? 'clone-' : ''}${refIndex}`}
        onClick={() => handleItemClick(item, index)}
      >
        <div>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`w-20 transition-all duration-500 ${isActive ? 'drop-shadow-lg' : ''}`}
            viewBox="0 0 39 39" 
            fill="none"
          >
            <path 
              d="M19.4727 1.38538C9.51215 1.38538 1.4375 9.46002 1.4375 19.4205C1.4375 29.381 9.51215 37.4557 19.4727 37.4557C29.4332 37.4557 37.5078 29.381 37.5078 19.4205C37.5078 9.46002 29.4335 1.38538 19.4727 1.38538ZM32.1455 21.1033L21.1554 32.0934C20.226 33.0229 18.719 33.0229 17.7899 32.0934L6.79982 21.1033C5.87032 20.1738 5.87032 18.6669 6.79982 17.7377L17.7899 6.74769C18.7194 5.8182 20.2263 5.8182 21.1554 6.74769L32.1455 17.7377C33.075 18.6672 33.075 20.1742 32.1455 21.1033Z" 
              fill={isActive ? "#FFB800" : "#999999"}
              className="transition-colors duration-500"
            />
          </svg>
        </div>
        <div className="">
          <p className={`md:text-[70px] font-bold transition-all duration-500 ${
            isActive ? 'text-[#FFB800] drop-shadow-md' : 'text-[#999999]'
          }`}>
            {item.name}
          </p>
          <p className={`md:text-[20px] font-bold transition-all duration-500 ${
            isActive ? 'text-[#FFB800] drop-shadow-sm' : 'text-[#999999]'
          }`}>
            {item.text}
          </p>
        </div>
      </div>
    );
  };

  return (
    <main className="w-full h-screen overflow-hidden">
       <ReactLenis root options={{ autoRaf: false, infinite: true,
	syncTouch: true, wheelMultiplier: 0.07 }} ref={lenisRef} />
      <ParticleScene config={SCENE_CONFIGS.venture} indexMorph={morphIndex} />
      <div className="flex justify-end absolute inset-0 font-bold">
        <div className="w-1/2 space-y-20">
          {data.map((item, index) => (
            <ItemComponent 
              key={`original-${item.id}`} 
              item={item} 
              index={index} 
              refIndex={index}
            />
          ))}
          
          {/* Clone for lenis infinite */}
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

export default HomePage;