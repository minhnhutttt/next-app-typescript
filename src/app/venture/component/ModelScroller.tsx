'use client';

import React, { useState, useEffect, useRef } from 'react';

interface ModelScrollerProps {
  modelCount: number;
  onModelSwitch: (index: number) => void;
  currentModelIndex: number;
  isLoading?: boolean;
}

const ModelScroller: React.FC<ModelScrollerProps> = ({
  modelCount,
  onModelSwitch,
  currentModelIndex,
  isLoading = false
}) => {
  const [activeItem, setActiveItem] = useState(currentModelIndex);
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelBlockRef = useRef(false);
  const wheelTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Create model array
  const models = Array.from({ length: modelCount }, (_, i) => i);
  
  // Handle wheel events with controlled item-by-item scrolling
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    
    // If we're already processing a wheel event, ignore this one
    if (wheelBlockRef.current) return;
    
    // Block wheel events temporarily
    wheelBlockRef.current = true;
    
    // Get direction (positive = down, negative = up)
    const direction = Math.sign(e.deltaY);
    
    // Calculate new index with wrapping
    let newIndex = activeItem + direction;
    
    // Handle wrapping for infinite scroll effect
    if (newIndex < 0) {
      newIndex = modelCount - 1; // Wrap to last item
    } else if (newIndex >= modelCount) {
      newIndex = 0; // Wrap to first item
    }
    
    // Update active item
    setActiveItem(newIndex);
    onModelSwitch(newIndex);
    
    // Unblock wheel events after a delay
    if (wheelTimeoutRef.current) {
      clearTimeout(wheelTimeoutRef.current);
    }
    
    wheelTimeoutRef.current = setTimeout(() => {
      wheelBlockRef.current = false;
    }, 300); // 300ms delay between scrolls
  };
  
  // Handle manual selection
  const handleItemClick = (index: number) => {
    if (index === activeItem) return;
    
    setActiveItem(index);
    onModelSwitch(index);
  };

  return (
    <div 
      ref={containerRef}
      className="fixed right-10 md:right-20 top-1/2 -translate-y-1/2 z-30 h-[300px] pointer-events-auto"
      onWheel={handleWheel}
    >
      {/* Scroll indicator */}
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="w-[1px] h-12 bg-white opacity-30"></div>
        <div className="w-2 h-2 rounded-full bg-[#D8C115] my-2 animate-pulse"></div>
        <div className="w-[1px] h-12 bg-white opacity-30"></div>
      </div>
      
      {/* Scroll mask with gradient fades */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      
      {/* Label for scrolling instruction */}
      <div className="absolute -top-8 left-0 right-0 text-center text-xs text-white opacity-60 uppercase tracking-wider">
        Scroll to switch
      </div>
      
      {/* Model Items - Fixed positions rather than scrolling */}
      <div className="relative h-full px-4 flex flex-col items-center justify-center">
        {models.map((index) => {
          const position = index - activeItem;
          
          // Calculate visual position
          // 0 = center (active), -1 = above, 1 = below, etc.
          const visualPosition = ((position % modelCount) + modelCount) % modelCount;
          
          // Determine if this is the shortest path visually
          // For a modelCount of 3, if visualPosition is 2, it's actually -1 in shortest path
          const shortestPathPosition = visualPosition > modelCount / 2 
            ? visualPosition - modelCount 
            : visualPosition;
            
          // Calculate translationY based on position
          const translationY = shortestPathPosition * 80; // 80px between items
          
          // Scale and opacity based on distance from center
          const scale = 1 - Math.min(Math.abs(shortestPathPosition) * 0.1, 0.2);
          const opacity = 1 - Math.min(Math.abs(shortestPathPosition) * 0.3, 0.6);
          
          const isActive = index === activeItem;
          
          return (
            <div
              key={index}
              className={`absolute py-4 transition-all duration-300 transform`}
              style={{
                transform: `translateY(${translationY}px) scale(${scale})`,
                opacity,
                zIndex: isActive ? 2 : 1
              }}
              onClick={() => handleItemClick(index)}
            >
              <div 
                className={`w-[120px] h-[60px] flex items-center justify-center uppercase font-medium tracking-wider text-sm transition-all duration-300 select-none cursor-pointer relative overflow-hidden ${
                  isActive ? 'bg-[#D8C115] text-black model-active' : 'border border-white text-white'
                }`}
              >
                {/* Background pattern for active item */}
                {isActive && (
                  <div className="absolute inset-0 opacity-20">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i} 
                        className="absolute bg-black" 
                        style={{ 
                          width: '120%',
                          height: '1px',
                          top: `${20 * i}%`,
                          left: '-10%',
                          transform: `rotate(${i % 2 ? 5 : -5}deg)`
                        }}
                      ></div>
                    ))}
                  </div>
                )}
                
                <span className={isActive ? 'relative z-10' : ''}>Model {index + 1}</span>
                
                {/* Animated border for active item */}
                {isActive && (
                  <>
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-black animation-slide-right"></div>
                    <div className="absolute top-0 right-0 w-[2px] h-full bg-black animation-slide-down"></div>
                    <div className="absolute bottom-0 right-0 w-full h-[2px] bg-black animation-slide-left"></div>
                    <div className="absolute bottom-0 left-0 w-[2px] h-full bg-black animation-slide-up"></div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Add CSS for animations */}
      <style jsx>{`
        @keyframes slideRight {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(0); }
        }
        
        @keyframes slideLeft {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
        
        @keyframes slideUp {
          0% { transform: translateY(100%); }
          100% { transform: translateY(0); }
        }
        
        .animation-slide-right {
          animation: slideRight 0.5s ease-out;
        }
        
        .animation-slide-down {
          animation: slideDown 0.5s ease-out;
        }
        
        .animation-slide-left {
          animation: slideLeft 0.5s ease-out;
        }
        
        .animation-slide-up {
          animation: slideUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ModelScroller;