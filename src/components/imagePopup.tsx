import React, { useEffect, useRef } from 'react';
import { Sprite, Stage, Container } from '@pixi/react';
import * as PIXI from 'pixi.js';
import gsap from "gsap";

const ImagePopup = ({imageSrc, isHovered} : {imageSrc: string, isHovered: boolean}) => {
  const displacementRef = useRef<PIXI.Sprite>(null);
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (displacementRef.current) {
      const displacementFilter = new PIXI.filters.DisplacementFilter(displacementRef.current);
      displacementRef.current.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  
      const app = displacementRef.current.parent;
      if (app) {
        app.filters = [displacementFilter];
  
        let dx = 0;
        let dy = 0;
        const scaleX = 2000;
        const scaleY = 2000;
        displacementFilter.scale.x = scaleX;
        displacementFilter.scale.y = scaleY;
        displacementRef.current.anchor.set(0.5);
  
        const animate = () => {
          dx -= 5;
          dy += 3;
          displacementRef.current!.x = -dx;
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
          x: 2000,
          y: 2000,
          duration: 0.5,
        });
      }
    }
  }, [isHovered]);
  

  return (
    <div ref={wrapperRef}>
      <Stage
        options={{
          backgroundColor: 'transparent',
          backgroundAlpha: 0,
          width: 1000,
          height: 1000,
          resolution: 2,
        }}
      >
        <Container>
          <Sprite
            image={imageSrc}
            width={800}
            height={500}
            x={0}
            y={0}
          />

          <Sprite
            image="/assets/images/clouds.jpg"
            ref={displacementRef}
            width={1000}
            height={1000}
            x={0}
            y={0}
          />
        </Container>
      </Stage>
    </div>
  );
};

export default ImagePopup;
