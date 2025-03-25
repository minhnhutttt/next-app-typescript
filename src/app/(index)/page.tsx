"use client"
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import BoardMember from './components/BoardMember';

const News = dynamic(() => import('./components/News'), {
  ssr: false
})

const Fv = dynamic(() => import('./components/Fv'), {
  ssr: false
})
const Introduction = dynamic(() => import('./components/Introduction'), {
  ssr: false
})

type MediaType = "image" | "video";

interface MediaItemData {
  type: MediaType;
  src: string;
}

const ALL_MEDIA_ITEMS: MediaItemData[] = [
  { type: "image", src: "/assets/images/fv-01.png" },
  { type: "video", src: "/assets/images/fv-02.mp4" },
  { type: "image", src: "/assets/images/fv-03.png" },
  { type: "image", src: "/assets/images/fv-04.png" },
  { type: "video", src: "/assets/images/fv-05.mp4" },
  { type: "image", src: "/assets/images/fv-06.png" },
  { type: "image", src: "/assets/images/fv-07.png" },
  { type: "video", src: "/assets/images/fv-08.mp4" },
  { type: "image", src: "/assets/images/fv-09.png" },
  { type: "image", src: "/assets/images/fv-10.png" },
  { type: "image", src: "/assets/images/fv-11.png" },
  { type: "image", src: "/assets/images/fv-12.png" },
  { type: "image", src: "/assets/images/fv-13.png" },
  { type: "image", src: "/assets/images/fv-14.png" },
  { type: "video", src: "/assets/images/fv-15.mp4" },
  { type: "image", src: "/assets/images/fv-16.png" },
  { type: "image", src: "/assets/images/fv-17.png" },
  { type: "video", src: "/assets/images/fv-18.mp4" },
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [currentDisplayIndex, setCurrentDisplayIndex] = useState(0);
  const [loadedItems, setLoadedItems] = useState<MediaItemData[]>([]);
  const [componentsReady, setComponentsReady] = useState(false);

  const preloadAllMedia = async () => {
    const imageItems = ALL_MEDIA_ITEMS.filter(item => item.type === "image");
    
    let loaded = 0;
    const totalItems = ALL_MEDIA_ITEMS.length;
    const updatedItems: MediaItemData[] = [];

    for (const item of imageItems) {
      await new Promise<void>((resolve) => {
        const img = new Image();
        
        img.onload = () => {
          loaded++;
          const progress = Math.floor((loaded / totalItems) * 100);
          setLoadProgress(progress);
          
          const loadedItem = { ...item, loaded: true };
          updatedItems.push(loadedItem);
          setLoadedItems([...updatedItems]);
          
          resolve();
        };
        
        img.onerror = () => {
          console.error(`Failed to load image: ${item.src}`);
          loaded++;
          const progress = Math.floor((loaded / totalItems) * 100);
          setLoadProgress(progress);
          resolve();
        };
        
        img.src = item.src;
      });
    }

    setLoadProgress(100);
    
    setComponentsReady(true);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  useEffect(() => {
    if (isLoading && loadedItems.length > 0) {
      const interval = setInterval(() => {
        setCurrentDisplayIndex((prevIndex) => 
          prevIndex < loadedItems.length - 1 ? prevIndex + 1 : 0
        );
      }, 150);
      
      return () => clearInterval(interval);
    }
  }, [isLoading, loadedItems.length]);

  useEffect(() => {
    setComponentsReady(false);
    preloadAllMedia();
    
    const preloadComponents = async () => {
      await Promise.all([
        import('./components/News'),
        import('./components/BoardMember'),
      ]);
    };
    
    preloadComponents();
  }, []);

  const renderCurrentItem = () => {
    if (loadedItems.length === 0) return null;
    
    const item = loadedItems[currentDisplayIndex];
    
    if (item.type === "image") {
      return (
        <div className="w-[100px] h-[100px] md:w-[168px] md:h-[168px] overflow-hidden rounded-md shadow-lg relative">
          <img 
            src={item.src} 
            alt="Loading preview" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      );
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50">
          <div className="flex flex-col items-center">
            {loadedItems.length > 0 && (
              <div className="mb-8 transition-all duration-500 ease-in-out transform hover:scale-105">
                {renderCurrentItem()}
              </div>
            )}
          </div>
        </div>
      ) }
      <main className="relative">
            <>
              <Fv />
              <div className="bg-[linear-gradient(180deg,_#FFF_0%,_#FF711C_100%)]">
                <Introduction />
                <News />
              </div>
              <BoardMember />
            </>
        </main>
    </>
  );
}