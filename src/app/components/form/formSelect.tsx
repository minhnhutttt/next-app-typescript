// components/SelectOption.tsx
import React, { ChangeEvent, ReactNode } from 'react';

interface SelectOptionProps {
    label: string,
    name: string;
  options: { value: string; label: string }[];
  selectedValue: string;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
}
export default function FormSelect({
    label,
    options,
    name,
  selectedValue,
  onChange,
  placeholder = 'お選びください',
    }: SelectOptionProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(name, e.target.value);
  };

  return (
    <>
    <p className="md:text-[24px] text-[16px] font-bold">{label}</p>
    <div className="mt-2 md:mt-4 relative">
        <span className="absolute right-6 top-1/2 -translate-y-1/2">
        <svg className="max-md:w-3" width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 15L0.339746 -1.63133e-06L17.6603 -1.17124e-07L9 15Z" fill="black"/>
        </svg>
        </span>
        <select value={selectedValue} onChange={handleChange} className='w-full h-[60px] md:h-[84px] rounded-[10px] border-2 border-[#E1E1DC] px-4 md:px-7 md:text-[24px] text-[16px] placeholder-[#E1E1DC]'>
        <option value="" disabled hidden>
        {placeholder}
      </option>
        {options.map((option) => (
            <option key={option.value} value={option.value} >
            {option.label}
            </option>
        ))}
        </select>
    </div>
    </>
  );
};

