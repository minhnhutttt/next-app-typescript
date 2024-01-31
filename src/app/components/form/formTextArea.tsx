// components/SelectOption.tsx
import React, { ChangeEvent } from "react";

interface TextAreaFormProps {
  label: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (name: string, value: string) => void;
}
export default function FormTextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
}: TextAreaFormProps) {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <>
      <p className="md:text-[24px] text-[16px] font-bold">{label}</p>
      <div className="mt-2 md:mt-4">
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full rounded-[10px] border-2 border-[#E1E1DC] p-7 md:text-[24px] text-[16px] placeholder-[#E1E1DC] md:h-[356px] h-[200px]"
        ></textarea>
      </div>
    </>
  );
}
