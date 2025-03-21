import dynamic from 'next/dynamic';
import Fv from './components/Fv';

const DynamicFv = dynamic(() => import('./components/Fv'), {
  ssr: false
})
const DynamicIntroduction = dynamic(() => import('./components/Introduction'), {
  ssr: false
})
const InfiniteImageGrid = dynamic(
  () => import('./components/InfiniteImageGrid'),
  { ssr: false }
);
type MediaType = "image" | "video";

interface MediaItemData {
  type: MediaType;
  src: string;
}
const MEDIA_ITEMS: MediaItemData[] = [
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
  
  return (
    <main className="">
      <div className="w-full h-screen overflow-hidden" style={{ scrollbarWidth: 'none' }}>
      <InfiniteImageGrid
        rowNum={5}
        imgNum={9}
        mediaItems={MEDIA_ITEMS}
      />
    </div>
    <DynamicFv />
      <DynamicIntroduction />
  </main>

  );
}