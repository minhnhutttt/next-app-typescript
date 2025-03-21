"use client"
import React, { useEffect, useRef, useState } from 'react';

// Define media types
export type MediaType = "image" | "video";

export interface MediaItemData {
  type: MediaType;
  src: string;
}

// Utility function to move array elements
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
  
  // Track positions with refs to avoid re-renders
  const positionRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const lastTimeRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);
  
  // Grid layout parameters
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

  // Grid structure refs
  const rowsRef = useRef<HTMLDivElement[]>([]);
  const imgRepRef = useRef<HTMLDivElement[][]>([]);
  const rowArrayRef = useRef<HTMLDivElement[]>([]);
  
  const imgMidIndex = Math.floor(imgNum / 2);
  const rowMidIndex = Math.floor(rowNum / 2);
  
  const lastCenteredElemRef = useRef<HTMLDivElement | null>(null);
  
  // References to control video playback based on visibility
  const videoRefs = useRef<{[key: string]: HTMLVideoElement}>({});
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // To toggle play/pause based on visibility
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return;
    
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const video = entry.target as HTMLVideoElement;
        
        if (entry.isIntersecting) {
          // When video becomes visible and is in viewport center region
          if (video.paused && video.dataset.autoplay === 'true') {
            video.play().catch(err => console.log('Auto-play prevented:', err));
          }
        } else {
          // When video is not visible
          if (!video.paused) {
            video.pause();
          }
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // 50% visibility required
    });
    
    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Update video elements observing when refs update
  useEffect(() => {
    // Reobserve videos when they're created/updated
    Object.values(videoRefs.current).forEach(video => {
      if (observerRef.current) {
        observerRef.current.observe(video);
      }
    });
    
    return () => {
      // Pause all videos on cleanup
      Object.values(videoRefs.current).forEach(video => {
        video.pause();
      });
    };
  }, [rowNum, imgNum]);
  
  // Check and update positions
  const checkPositions = (elem: HTMLDivElement) => {
    if (!elem) return;
    
    const imgRep = imgRepRef.current;
    const rowArray = rowArrayRef.current;
    const { boxWidth, boxHeight, gutter } = dimensionsRef.current;
    
    // Find the location in our array of the element
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
    
    // Element not found, return
    if (rowIndex === -1) return;
    
    // Reposition elements as necessary so that our element is in the center
    // Reposition the rows as necessary
    if (rowIndex < rowMidIndex) {
      for (let i = rowIndex; i < rowMidIndex; i++) {
        // Update the row's actual position
        if (rowArray.length === 0) continue;
        
        const firstRow = rowArray[0];
        const lastRow = rowArray[rowArray.length - 1];
        
        if (!firstRow || !lastRow) continue;
        
        const firstRowTransform = window.getComputedStyle(firstRow).transform;
        const matrix = new DOMMatrix(firstRowTransform === 'none' ? 'matrix(1, 0, 0, 1, 0, 0)' : firstRowTransform);
        const rowY = matrix.m42; // Y transform value
        
        if (rowArray.length % 2 === 1) { // Odd number of rows means we have to handle offset
          const lastRowTransform = window.getComputedStyle(lastRow).transform;
          const lastMatrix = new DOMMatrix(lastRowTransform === 'none' ? 'matrix(1, 0, 0, 1, 0, 0)' : lastRowTransform);
          const lastRowX = lastMatrix.m41; // X transform value
          
          const isOffset = lastRow.dataset.offset === "true";
          
          if (isOffset) {
            lastRow.style.transform = `translate(${lastRowX + boxWidth / 2}px, ${rowY - gutter - boxHeight}px)`;
            lastRow.dataset.offset = "false";
          } else {
            lastRow.style.transform = `translate(${lastRowX - boxWidth / 2}px, ${rowY - gutter - boxHeight}px)`;
            lastRow.dataset.offset = "true";
          }
        } else { // Equal number of rows; don't have to handle offset
          const lastRowTransform = window.getComputedStyle(lastRow).transform;
          const lastMatrix = new DOMMatrix(lastRowTransform === 'none' ? 'matrix(1, 0, 0, 1, 0, 0)' : lastRowTransform);
          const lastRowX = lastMatrix.m41; // X transform value
          
          lastRow.style.transform = `translate(${lastRowX}px, ${rowY - gutter - boxHeight}px)`;
        }
        
        // Update our representations
        moveArrayIndex(imgRep, imgRep.length - 1, 0);
        moveArrayIndex(rowArray, rowArray.length - 1, 0);
      }
    } else if (rowIndex > rowMidIndex) {
      for (let i = rowMidIndex; i < rowIndex; i++) {
        // Update the row's actual position
        if (rowArray.length === 0) continue;
        
        const firstRow = rowArray[0];
        const lastRow = rowArray[rowArray.length - 1];
        
        if (!firstRow || !lastRow) continue;
        
        const lastRowTransform = window.getComputedStyle(lastRow).transform;
        const matrix = new DOMMatrix(lastRowTransform === 'none' ? 'matrix(1, 0, 0, 1, 0, 0)' : lastRowTransform);
        const rowY = matrix.m42; // Y transform value
        
        if (rowArray.length % 2 === 1) { // Odd number of rows means we have to handle offset
          const firstRowTransform = window.getComputedStyle(firstRow).transform;
          const firstMatrix = new DOMMatrix(firstRowTransform === 'none' ? 'matrix(1, 0, 0, 1, 0, 0)' : firstRowTransform);
          const firstRowX = firstMatrix.m41; // X transform value
          
          const isOffset = firstRow.dataset.offset === "true";
          
          if (isOffset) {
            firstRow.style.transform = `translate(${firstRowX - boxWidth / 2}px, ${rowY + gutter + boxHeight}px)`;
            firstRow.dataset.offset = "false";
          } else {
            firstRow.style.transform = `translate(${firstRowX + boxWidth / 2}px, ${rowY + gutter + boxHeight}px)`;
            firstRow.dataset.offset = "true";
          }
        } else { // Equal number of rows; don't have to handle offset
          const firstRowTransform = window.getComputedStyle(firstRow).transform;
          const firstMatrix = new DOMMatrix(firstRowTransform === 'none' ? 'matrix(1, 0, 0, 1, 0, 0)' : firstRowTransform);
          const firstRowX = firstMatrix.m41; // X transform value
          
          firstRow.style.transform = `translate(${firstRowX}px, ${rowY + gutter + boxHeight}px)`;
        }
        
        // Update our representations
        moveArrayIndex(imgRep, 0, imgRep.length - 1);
        moveArrayIndex(rowArray, 0, rowArray.length - 1);
      }
    }
    
    // Reposition the images as necessary
    if (imgIndex < imgMidIndex) {
      for (let rowNum = 0; rowNum < rowsRef.current.length; rowNum++) { // Do it for every row
        const row = imgRep[rowNum];
        if (!row || row.length === 0) continue;
        
        for (let i = imgIndex; i < imgMidIndex; i++) {
          // Update the images's actual position
          const firstImg = row[0];
          const lastImg = row[row.length - 1];
          if (!firstImg || !lastImg) continue;
          
          const firstImgTransform = window.getComputedStyle(firstImg).transform;
          const matrix = new DOMMatrix(firstImgTransform === 'none' ? 'matrix(1, 0, 0, 1, 0, 0)' : firstImgTransform);
          const imgX = matrix.m41; // X transform value
          
          lastImg.style.transform = `translate(${imgX - gutter - boxWidth}px, 0)`;
          
          // Update our representation
          moveArrayIndex(row, row.length - 1, 0);
        }
      }
    } else if (imgIndex > imgMidIndex) {
      for (let rowNum = 0; rowNum < rowsRef.current.length; rowNum++) { // Do it for every row
        const row = imgRep[rowNum];
        if (!row || row.length === 0) continue;
        
        for (let i = imgMidIndex; i < imgIndex; i++) {
          // Update the images's actual position
          const lastImg = row[row.length - 1];
          const firstImg = row[0];
          if (!lastImg || !firstImg) continue;
          
          const lastImgTransform = window.getComputedStyle(lastImg).transform;
          const matrix = new DOMMatrix(lastImgTransform === 'none' ? 'matrix(1, 0, 0, 1, 0, 0)' : lastImgTransform);
          const imgX = matrix.m41; // X transform value
          
          firstImg.style.transform = `translate(${imgX + gutter + boxWidth}px, 0)`;
          
          // Update our representation
          moveArrayIndex(row, 0, row.length - 1);
        }
      }
    }
  };
  
  // Update the currently centered element
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
  
  // Apply inertia effect with heavier, smoother feel like Lenis
  const applyInertia = () => {
    if (!containerRef.current) return;
    
    const now = Date.now();
    const elapsed = Math.min(now - lastTimeRef.current, 64); // Cap at 64ms to prevent huge jumps
    
    // Use a much slower decay rate for heavier, more viscous feel
    // Higher power means slower initial decay but longer tail
    const decay = Math.pow(0.97, elapsed / 16); 
    
    // Smooth damping with easing (similar to Lenis)
    velocityRef.current.x *= decay;
    velocityRef.current.y *= decay;
    
    // Apply some additional easing to make large movements more pleasant
    const easeFactor = 0.95;
    
    // Stop if velocity is very small - using a lower threshold for longer trail
    if (Math.abs(velocityRef.current.x) < 0.3 && Math.abs(velocityRef.current.y) < 0.3) {
      cancelAnimationFrame(animationFrameRef.current!);
      animationFrameRef.current = null;
      return;
    }
    
    // Calculate the movement delta for this frame with easing
    const deltaX = velocityRef.current.x * easeFactor;
    const deltaY = velocityRef.current.y * easeFactor;
    
    // Apply velocity to position with smooth easing
    positionRef.current.x += deltaX;
    positionRef.current.y += deltaY;
    
    // Update transform with smooth easing using cubic-bezier style timing
    // The cubic-bezier effect is simulated by how we apply the velocity
    containerRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
    
    // Check for central element changes
    updateCenterElem();
    
    // Continue inertia
    lastTimeRef.current = now;
    animationFrameRef.current = requestAnimationFrame(applyInertia);
  };
  
  // Mouse/touch event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Cancel any ongoing animation
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    
    isDraggingRef.current = true;
    startPosRef.current = { 
      x: e.clientX - positionRef.current.x, 
      y: e.clientY - positionRef.current.y 
    };
    velocityRef.current = { x: 0, y: 0 };
    lastTimeRef.current = Date.now();
    
    // Add global mouse move/up listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    
    const now = Date.now();
    const elapsed = Math.min(now - lastTimeRef.current, 64); // Cap elapsed time to prevent jumps
    
    // Calculate new position
    const newX = e.clientX - startPosRef.current.x;
    const newY = e.clientY - startPosRef.current.y;
    
    // Apply some smoothing during the drag itself (not just during inertia)
    // This makes the drag feel heavier and more controlled
    const dragSmoothingFactor = 0.2; // Lower = more smoothing/heaviness
    
    // Calculate smoothed position with lerp
    const smoothedX = positionRef.current.x + (newX - positionRef.current.x) * dragSmoothingFactor;
    const smoothedY = positionRef.current.y + (newY - positionRef.current.y) * dragSmoothingFactor;
    
    // Calculate velocity (pixels per millisecond) with some dampening
    if (elapsed > 0) {
      // Calculate raw velocity
      const rawVelocityX = (newX - positionRef.current.x) / elapsed * 16;
      const rawVelocityY = (newY - positionRef.current.y) / elapsed * 16;
      
      // Apply smoothing to velocity (typical for Lenis-like behavior)
      // Blend previous velocity with new velocity for smoothness
      const velocityBlendFactor = 0.6; // Higher = more responsive to changes
      velocityRef.current = {
        x: velocityRef.current.x * (1 - velocityBlendFactor) + rawVelocityX * velocityBlendFactor,
        y: velocityRef.current.y * (1 - velocityBlendFactor) + rawVelocityY * velocityBlendFactor,
      };
    }
    
    // Update position reference (using the raw position for calculations)
    positionRef.current = { x: newX, y: newY };
    
    // Apply transform (using smoothed position for actual display)
    containerRef.current.style.transform = `translate3d(${smoothedX}px, ${smoothedY}px, 0)`;
    
    // Check for central element changes
    updateCenterElem();
    
    lastTimeRef.current = now;
  };
  
  const handleMouseUp = () => {
    isDraggingRef.current = false;
    
    // Remove global mouse move/up listeners
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
    
    // Always apply inertia for a more consistent feel
    // This makes even small movements have a slight trail
    // Typical of Lenis-like smoothing
    animationFrameRef.current = requestAnimationFrame(applyInertia);
  };
  
  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    
    // Cancel any ongoing animation
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
    
    // Add global touch move/end listeners
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
  };
  
  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    
    if (!isDraggingRef.current || !containerRef.current || e.touches.length !== 1) return;
    
    const touch = e.touches[0];
    const now = Date.now();
    const elapsed = Math.min(now - lastTimeRef.current, 64); // Cap elapsed time to prevent jumps
    
    // Calculate new position
    const newX = touch.clientX - startPosRef.current.x;
    const newY = touch.clientY - startPosRef.current.y;
    
    // Apply some smoothing during the drag itself (not just during inertia)
    // This makes the drag feel heavier and more controlled
    const dragSmoothingFactor = 0.2; // Lower = more smoothing/heaviness
    
    // Calculate smoothed position with lerp
    const smoothedX = positionRef.current.x + (newX - positionRef.current.x) * dragSmoothingFactor;
    const smoothedY = positionRef.current.y + (newY - positionRef.current.y) * dragSmoothingFactor;
    
    // Calculate velocity (pixels per millisecond) with some dampening
    if (elapsed > 0) {
      // Calculate raw velocity
      const rawVelocityX = (newX - positionRef.current.x) / elapsed * 16;
      const rawVelocityY = (newY - positionRef.current.y) / elapsed * 16;
      
      // Apply smoothing to velocity (typical for Lenis-like behavior)
      // Blend previous velocity with new velocity for smoothness
      const velocityBlendFactor = 0.6; // Higher = more responsive to changes
      velocityRef.current = {
        x: velocityRef.current.x * (1 - velocityBlendFactor) + rawVelocityX * velocityBlendFactor,
        y: velocityRef.current.y * (1 - velocityBlendFactor) + rawVelocityY * velocityBlendFactor,
      };
    }
    
    // Update position reference (using the raw position for calculations)
    positionRef.current = { x: newX, y: newY };
    
    // Apply transform (using smoothed position for actual display)
    containerRef.current.style.transform = `translate3d(${smoothedX}px, ${smoothedY}px, 0)`;
    
    // Check for central element changes
    updateCenterElem();
    
    lastTimeRef.current = now;
  };
  
  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    
    // Remove global touch move/end listeners
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
    
    // Always apply inertia for a more consistent feel
    // This makes even small movements have a slight trail
    // Typical of Lenis-like smoothing
    animationFrameRef.current = requestAnimationFrame(applyInertia);
  };
  
  // Resize handler
  const resize = () => {
    if (typeof window === 'undefined') return;
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const winMidX = windowWidth / 2;
    const winMidY = windowHeight / 2;
    
    const boxWidth = windowWidth * 0.35;
    const boxHeight = windowHeight * 0.35;
    const gutter = windowWidth * 0.05;
    
    const horizSpacing = boxWidth + gutter;
    const vertSpacing = boxHeight + gutter;
    const horizOffset = -(imgMidIndex * horizSpacing + boxWidth / 2) + windowWidth / 2;
    const vertOffset = -(rowMidIndex * vertSpacing + boxHeight / 2) + windowHeight / 2;
    
    // Update dimensions ref
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
    
    // Reset our container
    positionRef.current = { x: 0, y: 0 };
    velocityRef.current = { x: 0, y: 0 };
    if (containerRef.current) {
      containerRef.current.style.transform = `translate3d(0px, 0px, 0)`;
    }
    
    // Update positions for rows and images
    rowsRef.current.forEach((row, i) => {
      if (!row) return;
      
      // Set data-offset attribute
      const isOffset = i % 2 !== 0;
      row.dataset.offset = isOffset ? "true" : "false";
      
      // Position the row
      const rowX = isOffset ? horizOffset - boxWidth / 2 : horizOffset;
      const rowY = i * vertSpacing + vertOffset;
      
      row.style.transform = `translate(${rowX}px, ${rowY}px)`;
      
      // Position images within the row
      const images = Array.from(row.querySelectorAll('.sliderImage')) as HTMLDivElement[];
      images.forEach((img, index) => {
        img.style.width = `${boxWidth}px`;
        img.style.height = `${boxHeight}px`;
        img.style.transform = `translate(${index * horizSpacing}px, 0)`;
      });
      
      // Update our representation
      rowArrayRef.current[i] = row;
    });
    
    // Set the initial centered element
    if (rowsRef.current.length > rowMidIndex - 1 && 
        rowsRef.current[rowMidIndex - 1]?.querySelectorAll('.sliderImage').length > imgMidIndex) {
      lastCenteredElemRef.current = rowsRef.current[rowMidIndex - 1]?.querySelectorAll('.sliderImage')[imgMidIndex] as HTMLDivElement || null;
    }
  };
  
  // Get media item at a specific index
  const getMediaItem = (index: number): MediaItemData => {
    if (mediaItems.length === 0) {
      // If no media items provided, generate a random image
      const randImgSize = Math.floor(Math.max(typeof window !== 'undefined' ? window.innerWidth : 1000, 
                                             typeof window !== 'undefined' ? window.innerHeight : 1000) / 3);
      return {
        type: "image",
        src: `https://picsum.photos/${randImgSize}/${randImgSize}?random=${index}`
      };
    }
    
    // Return the media item at the specified index (with wrapping)
    return mediaItems[index % mediaItems.length];
  };
  
  // Create media element based on type
  const createMediaElement = (item: MediaItemData, key: string) => {
    if (item.type === "video") {
      return (
        <video
          ref={(el) => {
            if (el) {
              videoRefs.current[key] = el;
              
              // Observe for autoplay
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
  
  // Initialize the grid
  useEffect(() => {
    // Create image representation
    imgRepRef.current = Array(rowNum).fill(0).map(() => []);
    
    // Setup resize handler and initial layout
    resize();
    window.addEventListener('resize', resize);
    
    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);
  
  // Update row references and image representation when DOM is ready
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
      className="overflow-hidden w-full h-screen cursor-grab"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* Draggable container */}
      <div className="overflow-hidden w-full h-screen">
      <div
        ref={containerRef}
        className=" will-change-transform touch-none inset-0"
      >
        {/* Rows */}
        <div className="w-screen h-screen overflow-hidden">
        {Array.from({ length: rowNum }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            ref={(el) => { if (el) rowsRef.current[rowIndex] = el; }}
            className="row absolute"
            data-offset={rowIndex % 2 !== 0 ? "true" : "false"}
          >
            {/* Images in each row */}
            {Array.from({ length: imgNum }).map((_, imgIndex) => {
              const mediaIndex = rowIndex * imgNum + imgIndex;
              const mediaItem = getMediaItem(mediaIndex);
              
              return (
                <div
                  key={`media-${rowIndex}-${imgIndex}`}
                  className="sliderImage absolute top-0 left-0 overflow-hidden"
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