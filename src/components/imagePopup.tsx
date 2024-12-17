import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Sprite, Stage, Container } from "@pixi/react";
import * as PIXI from "pixi.js";
import gsap from "gsap";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const ImagePopup = ({
  id,
  videoSrc01,
  videoSrc02,
  videoSrc03,
  isHovered,
}: {
  id: string;
  videoSrc01: string;
  videoSrc02: string;
  videoSrc03: string;
  isHovered: boolean;
}) => {
  const displacementRef = useRef<PIXI.Sprite>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 768px)", false);
  const [stageSize, setStageSize] = useState({ width: 0, height: 0 });
  const [isPlay, setIsPlay] = useState(false);

  const video01Ref= useRef<HTMLVideoElement>(null);
  const video02Ref= useRef<HTMLVideoElement>(null);
  const video03Ref= useRef<HTMLVideoElement>(null);

  const updateStageSize = useCallback(() => {
    const width = Math.min(window.innerWidth * 0.9, 1200);
    const height = (width / 16) * 9;
    setStageSize({ width, height });
  }, [isMobile]);

  useEffect(() => {
    updateStageSize();
    window.addEventListener("resize", updateStageSize);
    return () => {
      window.removeEventListener("resize", updateStageSize);
    };
  }, []);
  useLayoutEffect(() => {
    if (video01Ref.current && video02Ref.current && video03Ref.current) {
      video01Ref.current.pause();
      video02Ref.current.pause();
      video03Ref.current.pause();
    }
    if (displacementRef.current) {
      const displacementFilter = new PIXI.filters.DisplacementFilter(
        displacementRef.current
      );
      displacementRef.current.texture.baseTexture.wrapMode =
        PIXI.WRAP_MODES.REPEAT;

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
        setIsPlay(true);
        
    if (video01Ref.current && video02Ref.current && video03Ref.current) {
      video01Ref.current.play();
      video02Ref.current.play();
      video03Ref.current.play();
    }

      } else {
        setIsPlay(false);
        
        gsap.to(wrapperRef.current, {
          opacity: 0,
          duration: 1,
        });

        gsap.to(displacementFilter.scale, {
          x: scaleX,
          y: scaleY,
          duration: 0.5,
        });
        
    if (video01Ref.current && video02Ref.current && video03Ref.current) {
      video01Ref.current.pause();
      video02Ref.current.pause();
      video03Ref.current.pause();
    }
      }
    }
  }, [isHovered]);

  return (
    <div ref={wrapperRef}>
      <video
        id={`video-main-${id}`}
        ref={video01Ref}
        muted
        loop
        className="opacity-0 absolute pointer-events-none"
      >
        <source src={videoSrc01} type="video/mp4" />
      </video>
      <video
        id={`video-left-${id}`}
        ref={video02Ref}
        muted
        loop
        className="opacity-0 absolute pointer-events-none"
      >
        <source src={videoSrc02} type="video/mp4" />
      </video>
      <video
        id={`video-right-${id}`}
        ref={video03Ref}
        muted
        loop
        className="opacity-0 absolute pointer-events-none"
      >
        <source src={videoSrc03} type="video/mp4" />
      </video>
      <Stage
        width={stageSize.width}
        height={stageSize.height}
        options={{
          backgroundAlpha: 0,
          resolution: 1,
        }}
      >
        <Container>
          {isPlay && (
            <>
            <Sprite
              source={
                (document.querySelector("#video-main-" + id) as any)
              }
              width={stageSize.width * 0.7}
              height={stageSize.height * 0.7}
              x={(stageSize.width - (stageSize.width * 0.7)) / 2}
              y={(stageSize.height - (stageSize.height * 0.7)) / 2}
            />
            <Sprite
              source={
                (document.querySelector("#video-left-" + id) as any)
              }
              width={stageSize.width / 3}
              height={stageSize.height / 3}
              x={0}
              y={0}
            />
            <Sprite
              source={
                (document.querySelector("#video-right-" + id) as any)
              }
              width={stageSize.width / 3}
              height={stageSize.height / 3}
              x={stageSize.width * 2/3}
              y={stageSize.height * 2/3}
            />
            </>
          )}

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
