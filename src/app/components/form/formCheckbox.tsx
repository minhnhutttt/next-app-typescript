"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";
import React, { useState } from "react";

type CheckboxProps = {
  label: string;
  name: string;
};

export default function FormCheckbox({ label, name }: CheckboxProps) {
  const animateRefs = useScrollAnimation("fadeDown");
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div ref={animateRefs} className="opacity-0 flex items-center gap-2">
      <label
        className="relative flex items-center px-1 py-3 md:p-3 rounded-full cursor-pointer"
        htmlFor={name}
      >
        <input
          type="checkbox"
          className="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none border border-[#333333] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#22ABF3] checked:bg-[#22ABF3] checked:before:bg-[#F9F9F9] hover:before:opacity-10"
          id={name}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="white"
            stroke="white"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label
        className="mt-px text-[13px] md:text-[18px] font-bold cursor-pointer select-none tracking-widest"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
}
