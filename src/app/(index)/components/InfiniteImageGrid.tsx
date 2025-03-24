"use client"
import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
export type MediaType = "image" | "video";
export interface MediaItemData {
  type: MediaType;
  src: string;
}
function moveArrayIndex<T>(array: T[], oldIndex: number, newIndex: number) {
  if (newIndex >= array.length) {
    newIndex = array.length - 1;
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  return array;
}
interface InfiniteImageGridProps {
  rowNum?: number;
  imgNum?: number;
  mediaItems?: MediaItemData[];
}
const InfiniteImageGrid: React.FC<InfiniteImageGridProps> = ({
  rowNum = 5,
  imgNum = 9,
  mediaItems = [],
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const positionRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  const lastScrollYRef = useRef(0);
  const mousePositionRef = useRef({ x: 0, y: 0 });
  const parallaxAnimationRef = useRef<number | null>(null);
  const dimensionsRef = useRef({
    boxWidth: 0,
    boxHeight: 0,
    gutter: 0,
    horizSpacing: 0,
    vertSpacing: 0,
    horizOffset: 0,
    vertOffset: 0,
    winMidX: 0,
    winMidY: 0
  });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const rowsRef = useRef<HTMLDivElement[]>([]);
  const imgRepRef = useRef<HTMLDivElement[][]>([]);
  const rowArrayRef = useRef<HTMLDivElement[]>([]);
  
  const imgMidIndex = Math.floor(imgNum / 2);
  const rowMidIndex = Math.floor(rowNum / 2);
  
  const lastCenteredElemRef = useRef<HTMLDivElement | null>(null);
  
  const videoRefs = useRef<{[key: string]: HTMLVideoElement}>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement;
        
        if (entry.isIntersecting) {
          if (video.paused && video.dataset.autoplay === 'true') {
            video.play().catch(err => console.log('Auto-play prevented:', err));
          }
        } else {
          if (!video.paused) {
            video.pause();
          }
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    Object.values(videoRefs.current).forEach(video => {
      if (observerRef.current) {
        observerRef.current.observe(video);
      }
    });
    
    return () => {
      Object.values(videoRefs.current).forEach(video => {
        video.pause();
      });
    };
  }, [rowNum, imgNum]);
  
  const checkPositions = (elem: HTMLDivElement) => {
    if (!elem) return;
    
    const imgRep = imgRepRef.current;
    const rowArray = rowArrayRef.current;
    const { boxWidth, boxHeight, gutter } = dimensionsRef.current;
    
    let rowIndex = -1;
    let imgIndex = -1;
    
    imgRep.forEach((row, i) => {
      row.forEach((img, j) => {
        if (elem === img) {
          rowIndex = i;
          imgIndex = j;
        }
      });
    });
    
    if (rowIndex === -1) return;
    
    if (rowIndex < rowMidIndex) {
      for (let i = rowIndex; i < rowMidIndex; i++) {
        if (rowArray.length === 0) continue;
        
        const firstRow = rowArray[0];
        const lastRow = rowArray[rowArray.length - 1];
        
        if (!firstRow || !lastRow) continue;
        
        const firstRowTransform = window.getComputedStyle(firstRow).transform;
        const matrix = new DOMMatrix(firstRowTransform === 'none' ? 'matrix(1, 0, 0, 1, 0, 0)' : firstRowTransform);
        const rowY = matrix.m42; 
        
        if (rowArray.length % 2 === 1) {
          const lastRowTransform = window.getComputedStyle(lastRow).transform;
          const lastMatrix = new DOMMatrix(lastRowTransform === 'none' ? 'matrix(1, 0, 0, 1, 0, 0)' : lastRowTransform);
          const lastRowX = lastMatrix.m41; 
          
          const isOffset = lastRow.dataset.offset === "true";
          
          if (isOffset) {
            lastRow.style.transform = `translate(${lastRowX + boxWidth / 2}px, ${rowY - gutter - boxHeight}px)`;
            lastRow.dataset.offset = "false";
          } else {
            lastRow.style.transform = `translate(${lastRowX - boxWidth / 2}px, ${rowY - gutter - boxHeight}px)`;
            lastRow.dataset.offset = "true";
          }
        } else { 
          const lastRowTransform = window.getComputedStyle(lastRow).transform;
          const lastMatrix = new DOMMatrix(lastRowTransform === 'none' ? 'matrix(1, 0, 0, 1, 0, 0)' : lastRowTransform);
          const lastRowX = lastMatrix.m41;
          
          lastRow.style.transform = `translate(${lastRowX}px, ${rowY - gutter - boxHeight}px)`;
        }
        
        moveArrayIndex(imgRep, imgRep.length - 1, 0);
        moveArrayIndex(rowArray, rowArray.length - 1, 0);
      }
    } else if (rowIndex > rowMidIndex) {
      for (let i = rowMidIndex; i < rowIndex; i++) {
        if (rowArray.length === 0) continue;
        
        const firstRow = rowArray[0];
        const lastRow = rowArray[rowArray.length - 1];
        
        if (!firstRow || !lastRow) continue;
        
        const lastRowTransform = window.getComputedStyle(lastRow).transform;
        const matrix = new DOMMatrix(lastRowTransform === 'none' ? 'matrix(1, 0, 0, 1, 0, 0)' : lastRowTransform);
        const rowY = matrix.m42; 
        
        if (rowArray.length % 2 === 1) { 
          const firstRowTransform = window.getComputedStyle(firstRow).transform;
          const firstMatrix = new DOMMatrix(firstRowTransform === 'none' ? 'matrix(1, 0, 0, 1, 0, 0)' : firstRowTransform);
          const firstRowX = firstMatrix.m41;
          
          const isOffset = firstRow.dataset.offset === "true";
          
          if (isOffset) {
            firstRow.style.transform = `translate(${firstRowX - boxWidth / 2}px, ${rowY + gutter + boxHeight}px)`;
            firstRow.dataset.offset = "false";
          } else {
            firstRow.style.transform = `translate(${firstRowX + boxWidth / 2}px, ${rowY + gutter + boxHeight}px)`;
            firstRow.dataset.offset = "true";
          }
        } else { 
          const firstRowTransform = window.getComputedStyle(firstRow).transform;
          const firstMatrix = new DOMMatrix(firstRowTransform === 'none' ? 'matrix(1, 0, 0, 1, 0, 0)' : firstRowTransform);
          const firstRowX = firstMatrix.m41; 
          
          firstRow.style.transform = `translate(${firstRowX}px, ${rowY + gutter + boxHeight}px)`;
        }
        
        moveArrayIndex(imgRep, 0, imgRep.length - 1);
        moveArrayIndex(rowArray, 0, rowArray.length - 1);
      }
    }
    
    if (imgIndex < imgMidIndex) {
      for (let rowNum = 0; rowNum < rowsRef.current.length; rowNum++) { 
        const row = imgRep[rowNum];
        if (!row || row.length === 0) continue;
        
        for (let i = imgIndex; i < imgMidIndex; i++) {
          const firstImg = row[0];
          const lastImg = row[row.length - 1];
          if (!firstImg || !lastImg) continue;
          
          const firstImgTransform = window.getComputedStyle(firstImg).transform;
          const matrix = new DOMMatrix(firstImgTransform === 'none' ? 'matrix(1, 0, 0, 1, 0, 0)' : firstImgTransform);
          const imgX = matrix.m41; 
          
          lastImg.style.transform = `translate(${imgX - gutter - boxWidth}px, 0)`;
          
          moveArrayIndex(row, row.length - 1, 0);
        }
      }
    } else if (imgIndex > imgMidIndex) {
      for (let rowNum = 0; rowNum < rowsRef.current.length; rowNum++) { 
        const row = imgRep[rowNum];
        if (!row || row.length === 0) continue;
        
        for (let i = imgMidIndex; i < imgIndex; i++) {
          const lastImg = row[row.length - 1];
          const firstImg = row[0];
          if (!lastImg || !firstImg) continue;
          
          const lastImgTransform = window.getComputedStyle(lastImg).transform;
          const matrix = new DOMMatrix(lastImgTransform === 'none' ? 'matrix(1, 0, 0, 1, 0, 0)' : lastImgTransform);
          const imgX = matrix.m41; 
          
          firstImg.style.transform = `translate(${imgX + gutter + boxWidth}px, 0)`;
          
          moveArrayIndex(row, 0, row.length - 1);
        }
      }
    }
  };
  
  const updateCenterElem = () => {
    if (typeof document === 'undefined') return;
    
    const { winMidX, winMidY } = dimensionsRef.current;
    const elems = document.elementsFromPoint(winMidX, winMidY);
    
    for (const elem of elems) {
      if (elem.classList.contains('sliderImage') && elem !== lastCenteredElemRef.current) {
        lastCenteredElemRef.current = elem as HTMLDivElement;
        checkPositions(lastCenteredElemRef.current);
        break;
      }
    }
  };
  
  const applyInertia = () => {
    if (!containerRef.current) return;
    
    const now = Date.now();
    const elapsed = Math.min(now - lastTimeRef.current, 64); 
    
    const decay = Math.pow(0.97, elapsed / 16); 
    
    velocityRef.current.x *= decay;
    velocityRef.current.y *= decay;
    
    const easeFactor = 0.95;
    
    if (Math.abs(velocityRef.current.x) < 0.3 && Math.abs(velocityRef.current.y) < 0.3) {
      cancelAnimationFrame(animationFrameRef.current!);
      animationFrameRef.current = null;
      return;
    }
    
    const deltaX = velocityRef.current.x * easeFactor;
    const deltaY = velocityRef.current.y * easeFactor;
    
    positionRef.current.x += deltaX;
    positionRef.current.y += deltaY;
    
    updateTransform();
    updateCenterElem();
    
    lastTimeRef.current = now;
    animationFrameRef.current = requestAnimationFrame(applyInertia);
  };
  
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    
    if (parallaxAnimationRef.current) {
      cancelAnimationFrame(parallaxAnimationRef.current);
      parallaxAnimationRef.current = null;
    }
    
    isDraggingRef.current = true;
    startPosRef.current = { 
      x: e.clientX - positionRef.current.x, 
      y: e.clientY - positionRef.current.y 
    };
    velocityRef.current = { x: 0, y: 0 };
    lastTimeRef.current = Date.now();
    
    window.addEventListener('mousemove', handleDragMove);
    window.addEventListener('mouseup', handleMouseUp);
  };
  
  const handleDragMove = (e: MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    
    const now = Date.now();
    const elapsed = Math.min(now - lastTimeRef.current, 64);
    
    const newX = e.clientX - startPosRef.current.x;
    const newY = e.clientY - startPosRef.current.y;
    
    if (elapsed > 0) {
      const rawVelocityX = (newX - positionRef.current.x) / elapsed * 16;
      const rawVelocityY = (newY - positionRef.current.y) / elapsed * 16;
      
      const velocityBlendFactor = 0.6;
      velocityRef.current = {
        x: velocityRef.current.x * (1 - velocityBlendFactor) + rawVelocityX * velocityBlendFactor,
        y: velocityRef.current.y * (1 - velocityBlendFactor) + rawVelocityY * velocityBlendFactor,
      };
    }
    
    positionRef.current = { x: newX, y: newY };
    updateTransform();
    updateCenterElem();
    lastTimeRef.current = now;
    
    mousePositionRef.current = { x: e.clientX, y: e.clientY };
  };
  
  const handleMouseUp = () => {
    isDraggingRef.current = false;
    
    window.removeEventListener('mousemove', handleDragMove);
    window.removeEventListener('mouseup', handleMouseUp);
    if (!parallaxAnimationRef.current) {
      parallaxAnimationRef.current = requestAnimationFrame(updateParallaxEffect);
    }
    
    animationFrameRef.current = requestAnimationFrame(applyInertia);
  };
  
  
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    
    const touch = e.touches[0];
    isDraggingRef.current = true;
    startPosRef.current = { 
      x: touch.clientX - positionRef.current.x, 
      y: touch.clientY - positionRef.current.y 
    };
    velocityRef.current = { x: 0, y: 0 };
    lastTimeRef.current = Date.now();
    
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
  };
  
  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    
    if (!isDraggingRef.current || !containerRef.current || e.touches.length !== 1) return;
    
    const touch = e.touches[0];
    const now = Date.now();
    const elapsed = Math.min(now - lastTimeRef.current, 64);
    
    const newX = touch.clientX - startPosRef.current.x;
    const newY = touch.clientY - startPosRef.current.y;
    
    const dragSmoothingFactor = 0.2; 
    
    const smoothedX = positionRef.current.x + (newX - positionRef.current.x) * dragSmoothingFactor;
    const smoothedY = positionRef.current.y + (newY - positionRef.current.y) * dragSmoothingFactor;
    
    if (elapsed > 0) {
      const rawVelocityX = (newX - positionRef.current.x) / elapsed * 16;
      const rawVelocityY = (newY - positionRef.current.y) / elapsed * 16;
      
      const velocityBlendFactor = 0.6;
      velocityRef.current = {
        x: velocityRef.current.x * (1 - velocityBlendFactor) + rawVelocityX * velocityBlendFactor,
        y: velocityRef.current.y * (1 - velocityBlendFactor) + rawVelocityY * velocityBlendFactor,
      };
    }
    
    positionRef.current = { x: newX, y: newY };
    
    containerRef.current.style.transform = `translate3d(${smoothedX}px, ${smoothedY}px, 0)`;
    
    updateCenterElem();
    
    lastTimeRef.current = now;
  };
  
  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
    
    animationFrameRef.current = requestAnimationFrame(applyInertia);
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    mousePositionRef.current = { 
      x: e.clientX, 
      y: e.clientY 
    };
    
    if (!isDraggingRef.current && !animationFrameRef.current && !parallaxAnimationRef.current) {
      parallaxAnimationRef.current = requestAnimationFrame(updateParallaxEffect);
    }
  };
  
  const updateTransform = () => {
    if (!containerRef.current) return;
    
    let finalX = positionRef.current.x;
    let finalY = positionRef.current.y;
    
    if (!isDraggingRef.current) {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      
      const relativeX = (mousePositionRef.current.x / windowWidth) * 2 - 1;
      const relativeY = (mousePositionRef.current.y / windowHeight) * 2 - 1;
      
      const parallaxFactor = 15;
      
      finalX += -relativeX * parallaxFactor;
      finalY += -relativeY * parallaxFactor;
    }
    
    containerRef.current.style.transform = `translate3d(${finalX}px, ${finalY}px, 0)`;
  };
  
  const updateParallaxEffect = () => {
    if (!containerRef.current || isDraggingRef.current || animationFrameRef.current) {
      parallaxAnimationRef.current = null;
      return;
    }
    
    updateTransform();
    parallaxAnimationRef.current = requestAnimationFrame(updateParallaxEffect);
  };
  
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    
    if (!containerRef.current) return;
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    
    const diagonalRatio = 5.0;
    
    const deltaY = e.deltaY;
    const speed = 0.01;
    let deltaX, moveY;
    
    if (deltaY > 0) {
      deltaX = -Math.abs(deltaY) * diagonalRatio * speed;
      moveY = -Math.abs(deltaY) * speed;
    } else {
      deltaX = Math.abs(deltaY) * diagonalRatio * speed;
      moveY = Math.abs(deltaY) * speed;
    }
    
    positionRef.current.x += deltaX;
    positionRef.current.y += moveY;
    
    velocityRef.current = {
      x: velocityRef.current.x * 0.4 + deltaX * 0.6,
      y: velocityRef.current.y * 0.4 + moveY * 0.6,
    };
    
    updateTransform();
    
    updateCenterElem();
    
    const { winMidX, winMidY } = dimensionsRef.current;
    const elems = document.elementsFromPoint(winMidX, winMidY);
    
    let centerElem = null;
    for (const elem of elems) {
      if (elem.classList.contains('sliderImage')) {
        centerElem = elem as HTMLDivElement;
        break;
      }
    }
    
    if (centerElem) {
      checkPositions(centerElem);
      
      if (Math.abs(deltaY) > 50) {
        setTimeout(() => checkPositions(centerElem!), 100);
      }
    }
    
    lastTimeRef.current = Date.now();
    animationFrameRef.current = requestAnimationFrame(applyInertia);
  };
  
  const resize = () => {
    if (typeof window === 'undefined') return;
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const winMidX = windowWidth / 2;
    const winMidY = windowHeight / 2;
    
    const boxWidth = isMobile ? windowWidth * 0.3 : 160;
    const boxHeight = isMobile ? windowWidth * 0.3 : 160;
    const gutter = windowWidth * 0.05;
    
    const horizSpacing = boxWidth + gutter;
    const vertSpacing = boxHeight + gutter;
    const horizOffset = -(imgMidIndex * horizSpacing + boxWidth / 2) + windowWidth / 2;
    const vertOffset = -(rowMidIndex * vertSpacing + boxHeight / 2) + windowHeight / 2;
    
    dimensionsRef.current = {
      boxWidth,
      boxHeight,
      gutter,
      horizSpacing,
      vertSpacing,
      horizOffset,
      vertOffset,
      winMidX,
      winMidY
    };
    
    positionRef.current = { x: 0, y: 0 };
    velocityRef.current = { x: 0, y: 0 };
    if (containerRef.current) {
      containerRef.current.style.transform = `translate3d(0px, 0px, 0)`;
    }
    
    positionRef.current = { x: 0, y: 0 };
    
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    
    if (parallaxAnimationRef.current) {
      cancelAnimationFrame(parallaxAnimationRef.current);
      parallaxAnimationRef.current = null;
    }
    
    rowsRef.current.forEach((row, i) => {
      if (!row) return;
      
      const isOffset = i % 2 !== 0;
      row.dataset.offset = isOffset ? "true" : "false";
      
      const rowX = isOffset ? horizOffset - boxWidth / 2 : horizOffset;
      const rowY = i * vertSpacing + vertOffset;
      
      row.style.transform = `translate(${rowX}px, ${rowY}px)`;
      
      const images = Array.from(row.querySelectorAll('.sliderImage')) as HTMLDivElement[];
      images.forEach((img, index) => {
        img.style.width = `${boxWidth}px`;
        img.style.height = `${boxHeight}px`;
        img.style.transform = `translate(${index * horizSpacing}px, 0)`;
      });
      
      rowArrayRef.current[i] = row;
    });
    
    if (rowsRef.current.length > rowMidIndex - 1 && 
        rowsRef.current[rowMidIndex - 1]?.querySelectorAll('.sliderImage').length > imgMidIndex) {
      lastCenteredElemRef.current = rowsRef.current[rowMidIndex - 1]?.querySelectorAll('.sliderImage')[imgMidIndex] as HTMLDivElement || null;
    }
  };
  
  const getMediaItem = (index: number): MediaItemData => {
    return mediaItems[index % mediaItems.length];
  };
  
  const createMediaElement = (item: MediaItemData, key: string) => {
    if (item.type === "video") {
      return (
        <video
          ref={(el) => {
            if (el) {
              videoRefs.current[key] = el;
              
              if (observerRef.current) {
                observerRef.current.observe(el);
              }
            }
          }}
          src={item.src}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          data-autoplay="true"
        />
      );
    } else {
      return (
        <div 
          className="w-full h-full bg-cover bg-center" 
          style={{ backgroundImage: `url(${item.src})` }}
        />
      );
    }
  };
  
  useEffect(() => {
    imgRepRef.current = Array(rowNum).fill(0).map(() => []);
    
    resize();
    window.addEventListener('resize', resize);
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('wheel', handleWheel);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      if (parallaxAnimationRef.current) {
        cancelAnimationFrame(parallaxAnimationRef.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (rowsRef.current.length === rowNum) {
      rowsRef.current.forEach((row, i) => {
        if (!row) return;
        
        const images = Array.from(row.querySelectorAll('.sliderImage')) as HTMLDivElement[];
        imgRepRef.current[i] = images;
      });
      
      rowArrayRef.current = [...rowsRef.current];
    }
  }, [rowNum]);

  
  return (
    <div 
      className="overflow-hidden w-full h-[200vh] cursor-grab"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div className="overflow-hidden w-full h-[200vh]">
      <div
        ref={containerRef}
        className="will-change-transform touch-none inset-0 "
      >
        <div className="w-screen h-[200vh] overflow-hidden">
        {Array.from({ length: rowNum }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            ref={(el) => { if (el) rowsRef.current[rowIndex] = el; }}
            className="row absolute"
            data-offset={rowIndex % 2 !== 0 ? "true" : "false"}
          >
            {Array.from({ length: imgNum }).map((_, imgIndex) => {
              const mediaIndex = rowIndex * imgNum + imgIndex;
              const mediaItem = getMediaItem(mediaIndex);
              
              return (
                <div
                  key={`media-${rowIndex}-${imgIndex}`}
                  className="sliderImage absolute top-0 left-0 overflow-hidden rounded-[20px]"
                >
                  {createMediaElement(mediaItem, `media-${mediaIndex}`)}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      </div>
      </div>
    </div>
  );
};

export default InfiniteImageGrid;