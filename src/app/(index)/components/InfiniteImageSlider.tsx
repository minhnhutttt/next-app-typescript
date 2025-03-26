"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SlideItem {
  id: number;
  imageSrc: string;
}

const InfiniteImageSlider = () => {
  // Tăng số lượng ảnh lên 10
  const imagesList: SlideItem[] = [
    { id: 1, imageSrc: "/assets/images/fv-01.png" },
    { id: 2, imageSrc: "/assets/images/fv-02.png" },
    { id: 3, imageSrc: "/assets/images/fv-03.png" },
    { id: 4, imageSrc: "/assets/images/fv-04.png" },
    { id: 5, imageSrc: "/assets/images/fv-05.png" },
    { id: 6, imageSrc: "/assets/images/fv-06.png" },
    { id: 7, imageSrc: "/assets/images/fv-07.png" },
    { id: 8, imageSrc: "/assets/images/fv-08.png" },
    { id: 9, imageSrc: "/assets/images/fv-09.png" },
    { id: 10, imageSrc: "/assets/images/fv-10.png" },
  ];

  const [slides, setSlides] = useState<SlideItem[]>(imagesList);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  
  // Số lượng slide hiển thị tối đa
  const maxVisibleSlides = 6;
  
  // Hàm để tính position dựa vào index
  const getPosition = (index: number): number => {
    return index * 50;
  };

  // Hàm để chuyển slide
  const rotateSlides = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    // Đợi animation hoàn thành rồi cập nhật thứ tự slides
    setTimeout(() => {
      setSlides(prevSlides => {
        const newSlides = [...prevSlides];
        // Lấy slide cuối và đưa nó lên đầu
        const lastSlide = newSlides.pop()!;
        return [lastSlide, ...newSlides];
      });
      
      setIsAnimating(false);
    }, 500);
  };

  // Tự động chuyển slide sau một khoảng thời gian
  useEffect(() => {
    const intervalId = setInterval(() => {
      rotateSlides();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [isAnimating]);

  return (
    <section className="relative flex justify-center">
      <div className="w-[320px] relative h-[420px]">
        <AnimatePresence>
          {slides.slice(0, maxVisibleSlides).map((slide, index) => {
            // Tính vị trí dựa trên index
            const position = getPosition(index);
            
            return (
              <motion.div
                key={slide.id}
                className="size-[320px] absolute inset-0"
                initial={{ y: position }}
                animate={{ 
                  y: index === maxVisibleSlides - 1 && isAnimating ? position + 100 : position,
                  opacity: index === maxVisibleSlides - 1 && isAnimating ? 0 : 1
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ zIndex: index }}
              >
                <img 
                  src={slide.imageSrc} 
                  alt={`Slide ${slide.id}`} 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default InfiniteImageSlider;