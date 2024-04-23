import React, { ChangeEvent } from "react";

interface InputFormProps {
  label: string;
  required?: boolean;
  sm?: boolean;
  type: string;
  name: string;
  placeholder?: string;
}
export default function FormInput({
  label,
  required,
  sm,
  type,
  name,
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
      <div className={`mt-2 ${sm && "w-[170px]"}`}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-full h-[50px] md:h-[70px] rounded-[10px] px-4 md:px-7 md:text-[18px] text-[14px] placeholder-[#B9B9B9] bg-[#EFF2F6]"
        />
      </div>
    </div>
  );
}
