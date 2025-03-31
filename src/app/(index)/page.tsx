"use client"
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Company from './components/Company';

const Fv = dynamic(() => import('./components/Fv'), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-white"></div>
})
const Introduction = dynamic(() => import('./components/Introduction'), {ssr: false})
const News = dynamic(() => import('./components/News'), {ssr: false})
const BoardMember = dynamic(() => import('./components/BoardMember'), {ssr: false})
const Artist = dynamic(() => import('./components/Artist'), {ssr: false})
const Showcase = dynamic(() => import('./components/Showcase'), {ssr: false})
const Message = dynamic(() => import('./components/Message'), {ssr: false})
const Contact = dynamic(() => import('./components/Contact'), {ssr: false})

type MediaType = "image" | "video";

interface MediaItemData {
  type: MediaType;
  src: string;
}

const ALL_MEDIA_ITEMS: MediaItemData[] = [
  { type: "image", src: "/assets/images/fv-01.png" },
  { type: "video", src: "/assets/images/fv-02.mp4" },
  { type: "image", src: "/assets/images/fv-03.png" },
  { type: "video", src: "/assets/images/fv-04.mp4" },
  { type: "image", src: "/assets/images/fv-05.png" },
  { type: "video", src: "/assets/images/fv-06.mp4" },
  { type: "image", src: "/assets/images/fv-07.png" },
  { type: "image", src: "/assets/images/fv-08.png" },
  { type: "image", src: "/assets/images/fv-09.png" },
  { type: "video", src: "/assets/images/fv-10.mp4" },
  { type: "image", src: "/assets/images/fv-11.png" },
  { type: "image", src: "/assets/images/fv-12.png" },
  { type: "image", src: "/assets/images/fv-13.png" },
  { type: "video", src: "/assets/images/fv-14.mp4" },
  { type: "image", src: "/assets/images/fv-15.png" },
  { type: "image", src: "/assets/images/fv-16.png" },
  { type: "video", src: "/assets/images/fv-17.mp4" },
  { type: "image", src: "/assets/images/fv-18.png" },
  { type: "video", src: "/assets/images/fv-19.mp4" },
  { type: "video", src: "/assets/images/fv-20.mp4" },
];

const PRIORITY_MEDIA_ITEMS = ALL_MEDIA_ITEMS.slice(0, 20);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [loadedItems, setLoadedItems] = useState<MediaItemData[]>([]);
  const [loadedImageItems, setLoadedImageItems] = useState<MediaItemData[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFv, setShowFv] = useState(false);

  const preloadPriorityMedia = async () => {
    let loaded = 0;
    const totalItems = PRIORITY_MEDIA_ITEMS.length;
    const updatedItems: MediaItemData[] = [];
    const updatedImageItems: MediaItemData[] = [];

    const loadPromises = PRIORITY_MEDIA_ITEMS.map(item => {
      return new Promise<void>((resolve) => {
        if (item.type === "image") {
          const img = new Image();
          
          img.onload = () => {
            loaded++;
            const progress = Math.floor((loaded / totalItems) * 100);
            setLoadProgress(progress);
            
            updatedItems.push(item);
            updatedImageItems.push(item);
            
            resolve();
          };
          
          img.onerror = () => {
            console.error(`Failed to load image: ${item.src}`);
            loaded++;
            setLoadProgress(Math.floor((loaded / totalItems) * 100));
            resolve();
          };
          
          img.src = item.src;
        } else {
          const video = document.createElement('video');
          video.preload = 'metadata';
          video.src = item.src;
          
          setTimeout(() => {
            loaded++;
            setLoadProgress(Math.floor((loaded / totalItems) * 100));
            updatedItems.push(item);
            resolve();
          }, 600);
        }
      });
    });

    await Promise.all(loadPromises);
    
    setLoadedItems(updatedItems);
    setLoadedImageItems(updatedImageItems.filter(item => item.type === "image"));
    
    setShowFv(true);
    
    setTimeout(() => {
      setIsLoading(false);
      preloadRemainingMedia();
    }, 500);
  };

  const preloadRemainingMedia = () => {
    const remainingItems = ALL_MEDIA_ITEMS.slice(PRIORITY_MEDIA_ITEMS.length);
    
    remainingItems.forEach(item => {
      if (item.type === "image") {
        const img = new Image();
        img.src = item.src;
      } else if (item.type === "video") {
        const video = document.createElement('video');
        video.preload = 'metadata';
        video.src = item.src;
      }
    });
  };

  useEffect(() => {
    preloadPriorityMedia();
    
    const preloadComponents = async () => {
      await Promise.allSettled([
        import('./components/News'),
      ]);
    };
    
    preloadComponents();
  }, []);

  useEffect(() => {
    if (isLoading && loadedImageItems.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex < loadedImageItems.length - 1 ? prevIndex + 1 : 0
        );
      }, 150);
      
      return () => clearInterval(interval);
    }
  }, [isLoading, loadedImageItems.length]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
          <div className="flex flex-col items-center">
            <div className="w-[150px] md:w-[200px] rounded-full h-2.5 mb-2">
              <div 
                className="bg-[#F34927] h-2.5 rounded-full transition-all duration-300" 
                style={{ width: `${loadProgress}%` }}
              ></div>
            </div>
            
            <div className="text-black text-sm font-medium">
              {loadProgress}%
            </div>
          </div>
        </div>
      )}
      <main className="relative">
        {showFv && (
          <>
            <Fv mediaItems={loadedItems.length > 0 ? loadedItems : PRIORITY_MEDIA_ITEMS} />
            <div className="bg-[linear-gradient(180deg,_#FFF_0%,_#FF711C_100%)]">
              <Introduction />
              <News />
            </div>
            <BoardMember />
            <Artist />
            <Showcase />
            <Message />
            <Contact />
            <Company />
          </>
        )}
      </main>
    </>
  );
}