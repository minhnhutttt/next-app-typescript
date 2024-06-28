"use client"
import { ReactNode} from 'react';

interface ButtonProps {
  rect?: string;
  children: ReactNode
}

const Title = ({ rect, children }: ButtonProps) => {

  return (
    <div data-splitting className={`animation-title font-anton ${rect}`}>
        {children}
    </div>
  );
};

export default Title;
