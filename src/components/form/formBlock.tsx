"use client";

import React, { ReactNode } from "react";
import FormLabel from "./formLabel";

interface FormBlockProps {
  id: string;
  number: string;
  label: string;
  inputText: string;
  children: ReactNode;
  required?: boolean;
  textarea?: boolean
}

const FormBlock = ({ id, number, label, inputText, children, required, textarea }: FormBlockProps) => {
  return (
    <>
      <FormLabel number={number} label={label} />
      <label
        htmlFor={id}
        className={`relative w-full block text-[13px] transition rounded-md duration-300 ease border shadow-sm overflow-hidden px-2 pt-1.5 ${required ? 'bg-[#FFFCDD] border-[#FF513E] ' : 'border-[#2687E2] bg-[#EBFCFE]'} ${textarea ? 'min-h-[90px]' : 'min-h-[60px]'}`}
      >
        <span className="block mb-1">{inputText}</span>
        {children}
      </label>
    </>
  );
};

export default FormBlock;
