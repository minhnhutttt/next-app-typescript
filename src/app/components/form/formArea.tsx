import React, { ChangeEvent } from "react";

interface InputFormProps {
  label: string;
  required?: boolean;
  sm?: boolean;
  name: string;
  value: string;
  placeholder?: string;
}
export default function FormArea({
  label,
  required,
  name,
  value,
  placeholder,
}: InputFormProps) {
  return (
    <div>
      <p className="md:text-[20px] text-[16px] font-bold">
        {label}
        {required && (
          <span className="md:text-[26px] text-[20px] font-bold relative ml-1 top-1 text-[#ED002B]">
            *
          </span>
        )}
      </p>
      <div className="mt-2">
        <textarea
          name={name}
          value={value}
          placeholder={placeholder}
          className="w-full h-[120px] md:h-[190px] rounded-[10px] px-4 md:px-7 py-4 md:text-[18px] text-[14px] placeholder-[#B9B9B9] bg-[#EFF2F6]"
        ></textarea>
      </div>
    </div>
  );
}
