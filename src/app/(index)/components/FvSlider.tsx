import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Pagination, Navigation } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Định nghĩa kiểu dữ liệu
type MediaType = "image" | "video";

interface MediaItemData {
  type: MediaType;
  src: string;
}

// Dữ liệu media
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

const FvSlider: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  // Component hiển thị media dựa vào loại (image/video)
  const MediaItem: React.FC<{ item: MediaItemData, index: number }> = ({ item, index }) => {
    const isOddRow = Math.floor(index / 3) % 2 === 1; // Xác định nếu slide nằm ở hàng lẻ

    return (
      <div className={`media-item bg-gray-100 rounded-lg overflow-hidden shadow-md ${isOddRow ? "mt-8" : ""}`}>
        {item.type === "image" ? (
          <img 
            src={item.src} 
            alt={`Media item ${index + 1}`} 
            className="w-full h-full object-cover"
          />
        ) : (
          <video 
            src={item.src} 
            className="w-full h-full object-cover" 
            controls
            muted
            loop
            playsInline
          />
        )}
      </div>
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Media Gallery</h2>
      
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Grid, Pagination, Navigation]}
        grid={{
          rows: 2,
          fill: 'row',
        }}
        spaceBetween={20}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="staggered-grid-swiper"
      >
        {ALL_MEDIA_ITEMS.map((item, index) => (
          <SwiperSlide key={index}>
            <MediaItem item={item} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .staggered-grid-swiper {
          padding-bottom: 60px;
        }
        
        .media-item {
          aspect-ratio: 16/9;
          height: 200px;
        }
        
        /* Tùy chỉnh các nút điều hướng */
        .swiper-button-next,
        .swiper-button-prev {
          color: #333;
          background: rgba(255, 255, 255, 0.8);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 18px;
        }
      `}</style>
    </div>
  );
};

export default FvSlider;