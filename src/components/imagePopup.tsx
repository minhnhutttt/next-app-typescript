import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Sprite, Stage, Container } from '@pixi/react';
import * as PIXI from 'pixi.js';
import gsap from "gsap";
import { useMediaQuery } from '@/hooks/useMediaQuery';

const ImagePopup = ({imageSrc, isHovered} : {imageSrc: string, isHovered: boolean}) => {
  const displacementRef = useRef<PIXI.Sprite>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)", false);
 const [stageSize, setStageSize] = useState({ width: 0, height: 0 });

 const updateStageSize = useCallback(()=> {
  const width = Math.min(window.innerWidth * 0.8, 800);
  const height = width / 16 * 9;
  setStageSize({ width, height });
 },[isMobile])

 useEffect(() => {
   updateStageSize();
   window.addEventListener("resize", updateStageSize); 
   return () => {
     window.removeEventListener("resize", updateStageSize);
   };
 }, []);
  useEffect(() => {
    if (displacementRef.current) {
      const displacementFilter = new PIXI.filters.DisplacementFilter(displacementRef.current);
      displacementRef.current.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  
      const scaleX = 2000;
      const scaleY = 2000;
      const app = displacementRef.current.parent;
      if (app) {
        app.filters = [displacementFilter];
  
        let dx = 0;
        let dy = 0;
        displacementFilter.scale.x = scaleX;
        displacementFilter.scale.y = scaleY;
        displacementRef.current.anchor.set(0);
  
        const animate = () => {
          dx += 5;
          dy -= 5;
          displacementRef.current!.x = dx;
          displacementRef.current!.y = dy;
          requestAnimationFrame(animate);
        };
        animate();
      }
  
      if (isHovered) {
        gsap.to(wrapperRef.current, {
          opacity: 1,
          duration: 1,
        });
  
        gsap.to(displacementFilter.scale, {
          x: 0,
          y: 0,
          duration: 0.5,
        });
      } else {
        gsap.to(wrapperRef.current, {
          opacity: 0,
          duration: 1,
        });
  
        gsap.to(displacementFilter.scale, {
          x: scaleX,
          y: scaleY,
          duration: 0.5,
        });
      }
    }
  }, [isHovered]);
  

  return (
    <div ref={wrapperRef}>
      <Stage
      width={stageSize.width}
      height={stageSize.height}
        options={{
          backgroundAlpha: 0,
          resolution: 1,
        }}
      >
        <Container>
          <Sprite
            image={imageSrc}
            width={stageSize.width}
            height={stageSize.height}
            x={0}
            y={0}
          />

          <Sprite
            image="/assets/images/clouds.jpg"
            ref={displacementRef}
            x={0}
            y={0}
          />
        </Container>
      </Stage>
    </div>
  );
};

export default ImagePopup;
