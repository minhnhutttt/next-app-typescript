// components/SelectOption.tsx
import React, { ChangeEvent } from 'react';

interface InputFormProps {
    label: string,
    type: string;
    name: string;
    value: string;
    placeholder?: string;
    onChange: (name: string, value: string) => void;
  }
export default function FormInput({
    label, type, name, value, onChange, placeholder
    }: InputFormProps) {
        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            onChange(name, e.target.value);
          };

  return (
    <>
    <p className="md:text-[24px] text-[16px] font-bold">{label}</p>
    <div className="mt-2 md:mt-4">
        <input type={type} name={name} value={value} onChange={handleChange} placeholder={placeholder} className="w-full h-[60px] md:h-[84px] rounded-[10px] border-2 border-[#E1E1DC] px-4 md:px-7 md:text-[24px] text-[16px] placeholder-[#E1E1DC]" />
    </div>
    </>
  );
};

