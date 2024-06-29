"use client"
import { ReactNode} from 'react';

interface TitleProps {
  rect?: string;
  children: ReactNode
}

const Title = ({ rect, children }: TitleProps) => {

  return (
    <div data-splitting className={`animation-title font-anton ${rect}`}>
        {children}
    </div>
  );
};

export default Title;
