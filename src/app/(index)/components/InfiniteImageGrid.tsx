"use client"
import React, { useEffect, useRef, useState } from 'react';

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
  imgURLArray?: string[];
}

const InfiniteImageGrid: React.FC<InfiniteImageGridProps> = ({
  rowNum = 5,
  imgNum = 9,
  imgURLArray = null,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  
  // Track positions with refs to avoid re-renders
  const positionRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef({ x: 0, y: 0 });
  
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
    if (containerRef.current) {
      containerRef.current.style.transform = `translate(0px, 0px)`;
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
  
  // Mouse/touch event handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    
    isDraggingRef.current = true;
    startPosRef.current = { 
      x: e.clientX - positionRef.current.x, 
      y: e.clientY - positionRef.current.y 
    };
    
    // Add global mouse move/up listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingRef.current || !containerRef.current) return;
    
    // Calculate new position
    const newX = e.clientX - startPosRef.current.x;
    const newY = e.clientY - startPosRef.current.y;
    
    // Update position
    positionRef.current = { x: newX, y: newY };
    
    // Apply transform
    containerRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
    
    // Check for central element changes
    updateCenterElem();
  };
  
  const handleMouseUp = () => {
    isDraggingRef.current = false;
    
    // Remove global mouse move/up listeners
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };
  
  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    
    const touch = e.touches[0];
    isDraggingRef.current = true;
    startPosRef.current = { 
      x: touch.clientX - positionRef.current.x, 
      y: touch.clientY - positionRef.current.y 
    };
    
    // Add global touch move/end listeners
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
  };
  
  const handleTouchMove = (e: TouchEvent) => {
    e.preventDefault();
    
    if (!isDraggingRef.current || !containerRef.current || e.touches.length !== 1) return;
    
    const touch = e.touches[0];
    
    // Calculate new position
    const newX = touch.clientX - startPosRef.current.x;
    const newY = touch.clientY - startPosRef.current.y;
    
    // Update position
    positionRef.current = { x: newX, y: newY };
    
    // Apply transform
    containerRef.current.style.transform = `translate(${newX}px, ${newY}px)`;
    
    // Check for central element changes
    updateCenterElem();
  };
  
  const handleTouchEnd = () => {
    isDraggingRef.current = false;
    
    // Remove global touch move/end listeners
    window.removeEventListener('touchmove', handleTouchMove);
    window.removeEventListener('touchend', handleTouchEnd);
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
  
  // Create random image URLs if none provided
  const getImageUrl = (index: number) => {
    if (imgURLArray && imgURLArray.length > 0) {
      return imgURLArray[index % imgURLArray.length];
    } else {
      const randImgSize = Math.floor(Math.max(typeof window !== 'undefined' ? window.innerWidth : 1000, typeof window !== 'undefined' ? window.innerHeight : 1000) / 3);
      return `https://picsum.photos/${randImgSize}/${randImgSize}?random=${index}`;
    }
  };
  
  return (
    <div 
      className="overflow-hidden w-full h-screen cursor-grab"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      {/* Draggable container */}
      <div
        ref={containerRef}
        className="absolute will-change-transform touch-none"
      >
        {/* Rows */}
        {Array.from({ length: rowNum }).map((_, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            ref={(el) => { if (el) rowsRef.current[rowIndex] = el; }}
            className="row absolute"
            data-offset={rowIndex % 2 !== 0 ? "true" : "false"}
          >
            {/* Images in each row */}
            {Array.from({ length: imgNum }).map((_, imgIndex) => (
              <div
                key={`img-${rowIndex}-${imgIndex}`}
                className="sliderImage absolute top-0 left-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${getImageUrl(rowIndex * imgNum + imgIndex)})`,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteImageGrid;