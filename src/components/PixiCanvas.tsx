import React, { useEffect, useRef } from 'react';
import { Sprite, Stage, Container } from '@pixi/react';
import * as PIXI from 'pixi.js';
import gsap from "gsap";

const PixiCanvas = () => {
  const displacementRef = useRef<PIXI.Sprite>(null);

  useEffect(() => {
    if (displacementRef.current) {
      // Tạo displacement filter
      const displacementFilter = new PIXI.filters.DisplacementFilter(displacementRef.current);
      displacementRef.current.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;

      // Áp dụng filter vào stage
      const app = displacementRef.current.parent;
      if (app) {
        app.filters = [displacementFilter];

        // Di chuyển displacement sprite để tạo hiệu ứng wave
        let dx = 0;
        let dy = 0;
        const animate = () => {
          dx += 3 * 0.15; // Tốc độ di chuyển ngang
          dy += 1; // Tốc độ di chuyển dọc
          displacementRef.current!.x = dx;
          displacementRef.current!.y = dy;
          requestAnimationFrame(animate);
        };
        animate();
      }
    }
  }, []);

  

  return (
    <div>
      <Stage
        options={{
          backgroundColor: 0x2419e6,
          width: 1000,
          height: 1000,
          resolution: 2,
        }}
      >
        {/* Lớp chứa các sprite */}
        <Container>
          {/* Ảnh chính */}
          <Sprite
            image="/assets/images/text.png"
            width={800}
            height={500}
            x={0} // Đặt vị trí x
            y={0} // Đặt vị trí y
          />

          {/* Ảnh displacement */}
          <Sprite
            image="/assets/images/clouds.jpg"
            ref={displacementRef} // Đặt ref để truy cập sprite
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

export default PixiCanvas;
