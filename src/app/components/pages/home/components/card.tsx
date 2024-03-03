"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import { ReactNode } from "react";

type CardPropsType = {
  image: string;
  title: string;
  children: ReactNode;
  color?: string;
};
export default function Card({ image, title, children, color }: CardPropsType) {
  const animateUpRefs = useScrollAnimation("fadeUp");
  return (
    <div
      ref={animateUpRefs}
      className="opacity-0 font-bold md:min-h-[480px] md:max-w-[420px] max-w-[380px] lg:rounded-[60px] rounded-[30px] md:border-[5px] border-[3px] p-3 lg:p-5"
      style={{ borderColor: color ?? "#0055A3" }}
    >
      <figure>
        <img className="lg:rounded-[40px] rounded-[20px]" src={image} alt="" />
      </figure>
      <div className="pt-5 md:pt-8 px-2 lg:px-4">
        <h5 className="text-center md:text-[18px] text-[16px] font-bold mb-3">
          {title}
        </h5>
        <p className="md:text-[16px] text-[14px]">{children}</p>
      </div>
    </div>
  );
}
