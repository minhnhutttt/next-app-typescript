"use client";

import React, { ReactNode } from "react";

interface ButtonProps {
  kind?: "link" | "button";
  href?: string; 
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = ({ kind = "link", href, children, onClick, type="button" }: ButtonProps) => {
  if (kind === "link") {
    return (
      <a
        href={href}
        className="size-[90px] md:size-[clamp(10px,13.672vmin,140px)] flex items-center justify-center md:text-[clamp(10px,1.758vmin,18px)] text-[13px] font-semibold text-white text-center bg-[url(/assets/images/bg-btn.png)] bg-cover bg-center"
      >
        {children}
      </a>
    );
  }

  return (
    <button
    type={type}
      onClick={onClick}
      className="size-[90px] md:size-[clamp(10px,13.672vmin,140px)] flex items-center justify-center md:text-[clamp(10px,1.758vmin,18px)] text-[13px] font-semibold text-white text-center bg-[url(/assets/images/bg-btn.png)] bg-cover bg-center"
    >
      {children}
    </button>
  );
};

export default Button;
