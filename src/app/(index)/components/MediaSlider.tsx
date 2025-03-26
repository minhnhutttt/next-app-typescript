import { Swiper, SwiperSlide } from 'swiper/react';
import {  Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { MediaItemData } from './InfiniteImageGrid';

interface MediaSliderProps {
  items: MediaItemData[];
}

const MediaSlider: React.FC<MediaSliderProps> = ({ items }) => {
  return (
    <div className="w-full flex justify-center mx-auto">
      <Swiper
        effect={'cards'}
        grabCursor={true}
        loop={true}
        modules={[Autoplay, EffectCards]}
        speed={500}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        className="w-[320px]"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="rounded-lg overflow-hidden">
            {item.type === 'image' ? (
              <div className="relative size-[320px]">
                <img
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ) : (
              <div className="relative size-[320px]">
                <video
                  src={item.src}
                  className="w-full h-full object-cover"
                  autoPlay
            muted
            playsInline
            loop
            preload="auto"
                  controls={false}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MediaSlider;