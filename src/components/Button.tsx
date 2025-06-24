"use client";

import React from 'react';

type ButtonSize = "default" | "sm";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  size?: ButtonSize;
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  size = "default", 
  href = "https://lin.ee/sQ5Hh6G", 
  children = "メッセージを作る",
  className = "",
  ...props 
}) => {
  const sizeClasses: Record<ButtonSize, { button: string; icon: string }> = {
    default: {
      button: "md:w-[560px] h-20 md:h-[120px] text-[24px] md:text-[40px] px-10",
      icon: "md:w-10 w-6"
    },
    sm: {
      button: "md:w-[280px] h-12 md:h-[60px] text-[15px] md:text-[20px] px-5",
      icon: "md:w-5 w-4"
    }
  };

  const currentSize = sizeClasses[size] || sizeClasses.default;

  return (
    <a
      href={href}
      target="_blank"
      className={`flex items-center justify-center relative  text-white tracking-widest bg-[linear-gradient(49deg,_#012200_2.87%,_#00320D_24.24%,_#003F18_46.58%,_#004914_52.41%,_#00650C_71.83%,_#007606_87.37%,_#007C05_100%)] ${currentSize.button} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <img
        src="/assets/images/ic_arrow-right.svg"
        alt=""
        className={`absolute right-0.5 ${currentSize.icon}`}
      />
    </a>
  );
};

export default Button;