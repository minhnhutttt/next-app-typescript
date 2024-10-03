"use client";
import { Fragment, ReactNode, useState } from 'react';

const BackgroundGradient = ({children}:{children: ReactNode}) => {
  const [bgPosition, setBgPosition] = useState<string>('center top');
  const colorOne = '#005FD7';
  const colorTwo = '#B5E4FF';

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const X = e.pageX - el.offsetLeft;
    const Y = e.pageY - el.offsetTop;
    const pos = `${X}px ${Y}px`;
    
    setBgPosition(pos);
  };

  return (
    <div
    className="duration-75"
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `radial-gradient(circle at ${bgPosition}, ${colorOne}, ${colorTwo})`,
      }}
    >
        {Array.from({ length: 3 }).map((_, index) => (
          <Fragment key={index}>
          <div className="bubble bg-[url('/assets/images/bubble-ss.png')] bg-cover aspect-[119/121]"></div>
          <div className="bubble bg-[url('/assets/images/bubble-s.png')] bg-cover aspect-[183/187]"></div>
          <div className="bubble bg-[url('/assets/images/bubble-m.png')] bg-cover aspect-[222/226]"></div>
          <div className="bubble bg-[url('/assets/images/bubble-l.png')] bg-cover aspect-[260/265]"></div>
          </Fragment>
      ))}
      <div className="relative">
      {children}
      </div>
    </div>
  );
};

export default BackgroundGradient;
