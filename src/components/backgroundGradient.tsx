"use client";
import { ReactNode, useState } from 'react';

const BackgroundGradient = ({children}:{children: ReactNode}) => {
  const [bgPosition, setBgPosition] = useState<string>('center top');
  const colorOne = '#FF9BC5';
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
    className=' h-[4000px] duration-75'
      onMouseMove={handleMouseMove}
      style={{
        backgroundImage: `radial-gradient(circle at ${bgPosition}, ${colorOne}, ${colorTwo})`,
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundGradient;
