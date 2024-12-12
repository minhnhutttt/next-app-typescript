import React, { useEffect, useRef, useState } from 'react';
import { Sprite, Stage, Container } from '@pixi/react';
import * as PIXI from 'pixi.js';
import gsap from "gsap";
import { useMediaQuery } from '@/hooks/useMediaQuery';

const WaterEffect = () => {
  const isMobile = useMediaQuery("(max-width: 768px)", false);
  const displacementRef = useRef<PIXI.Sprite>(null);
  const containerRef = useRef<PIXI.Sprite>(null);

  const [stageSize, setStageSize] = useState({ width: 0, height: 0 });

  const updateStageSize = () => {
    const baseWidth = 822;
    const baseHeight = 312;
    const aspectRatio = baseHeight / baseWidth;

    const width = window.innerWidth < baseWidth ? window.innerWidth - 20 : baseWidth - 20;
    const height = width * aspectRatio - 20;

    setStageSize({ width, height });
  };

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

      const app = displacementRef.current.parent;
      var mouseX, mouseY,
      intt = 0
      if (app) {
        app.filters = [displacementFilter];

        let dx = 0;
        let dy = 0;
        const animate = () => {
          dx += 3 * 0.15;
          dy += 1.5;
          displacementRef.current!.x = dx;
          displacementRef.current!.y = dy;
          requestAnimationFrame(animate);
        };
        animate();
      }

      const rotateSprite = () => {
        displacementRef.current!.rotation += 0.0005;
        intt = requestAnimationFrame(rotateSprite);
      }
      const sprite = containerRef.current;

        if (sprite) {
          sprite.interactive = true;
          
          sprite.on('pointerover', (mouseData: any) => {
            mouseX = mouseData.data.global.x;
            mouseY = mouseData.data.global.y;

            console.log(mouseData.data.global)
            gsap.to(displacementFilter.scale,{
              duration: 1.3,
              x: `+=${Math.sin(mouseX) * 20}` + '',
              y: `+=${Math.cos(mouseY) * 20}` + '',
            });
            rotateSprite()
          });

          sprite.on('pointerout', () => {
            gsap.to(displacementFilter.scale, { duration: 2.3, x: 20, y: 20 });
            cancelAnimationFrame(intt);
          });
        }
    }
  }, []);

  return (
    <div>
      <Stage
        width={stageSize.width}
      height={stageSize.height}
        options={{
          backgroundAlpha: 0,
          resolution: 2,
        }}
      >
        <Container>
          <Sprite
            ref={containerRef}
            image="/assets/images/DIVER-Time-Network.png"
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

export default WaterEffect;
