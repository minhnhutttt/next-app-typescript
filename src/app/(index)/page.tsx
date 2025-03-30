"use client"
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Contact from './components/Contact';
import Apply from './components/Apply';
import Company from './components/Company';

const Fv = dynamic(() => import('./components/Fv'), {ssr: false})
const Introduction = dynamic(() => import('./components/Introduction'), {ssr: false})
const News = dynamic(() => import('./components/News'), {ssr: false})
const BoardMember = dynamic(() => import('./components/BoardMember'), {ssr: false})
const Artist = dynamic(() => import('./components/Artist'), {ssr: false})
const Showcase = dynamic(() => import('./components/Showcase'), {ssr: false})
const Message = dynamic(() => import('./components/Message'), {ssr: false})


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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [loadedItems, setLoadedItems] = useState<MediaItemData[]>([]);
  const [loadedImageItems, setLoadedImageItems] = useState<MediaItemData[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const preloadAllMedia = async () => {
  let loaded = 0;
  const totalItems = ALL_MEDIA_ITEMS.length;
  const updatedItems: MediaItemData[] = [];
  const updatedImageItems: MediaItemData[] = [];

  for (const item of ALL_MEDIA_ITEMS) {
    if (item.type === "image") {
      await new Promise<void>((resolve) => {
        const img = new Image();
        
        img.onload = () => {
          loaded++;
          const progress = Math.floor((loaded / totalItems) * 100);
          setLoadProgress(progress);
          
          updatedItems.push(item);
          setLoadedItems([...updatedItems]);
          
          updatedImageItems.push(item);
          setLoadedImageItems([...updatedImageItems]);
          
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
    } else if (item.type === "video") {
      await new Promise<void>((resolve) => {
        const video = document.createElement('video');
        
        video.onloadeddata = () => {
          loaded++;
          const progress = Math.floor((loaded / totalItems) * 100);
          setLoadProgress(progress);
          
          updatedItems.push(item);
          setLoadedItems([...updatedItems]);
          
          resolve();
        };
        
        video.onerror = () => {
          console.error(`Failed to load video: ${item.src}`);
          loaded++;
          const progress = Math.floor((loaded / totalItems) * 100);
          setLoadProgress(progress);
          resolve();
        };
        
        const timeout = setTimeout(() => {
          console.warn(`Video loading timeout: ${item.src}`);
          loaded++;
          const progress = Math.floor((loaded / totalItems) * 100);
          setLoadProgress(progress);
          updatedItems.push(item);
          setLoadedItems([...updatedItems]);
          resolve();
        }, 10000);
        
        video.onloadeddata = () => {
          clearTimeout(timeout);
          loaded++;
          const progress = Math.floor((loaded / totalItems) * 100);
          setLoadProgress(progress);
          
          updatedItems.push(item);
          setLoadedItems([...updatedItems]);
          
          resolve();
        };
        
        video.preload = 'auto';
        video.src = item.src;
        video.load();
      });
    }
  }

  setLoadProgress(100);
  
  setTimeout(() => {
    setIsLoading(false);
  }, 500);
};

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

  useEffect(() => {
    preloadAllMedia();
    
    const preloadComponents = async () => {
      await Promise.all([
        import('./components/News'),
        import('./components/BoardMember'),
        import('./components/Artist'),
        import('./components/Showcase'),
        import('./components/Message'),
      ]);
    };
    
    preloadComponents();
  }, []);


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
            <>
              <Fv mediaItems={ALL_MEDIA_ITEMS} />
              <div className="bg-[linear-gradient(180deg,_#FFF_0%,_#FF711C_100%)]">
                <Introduction />
                <News />
              </div>
              <BoardMember />
              <Artist />
              <Showcase />
              <Message />
              <Contact />
              <Apply />
              <Company />
            </>
        </main>
    </>
  );
}