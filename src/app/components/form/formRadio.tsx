"use client"
import { useEffect, useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface FormRadioProps {
  options: Option[];
  checkedValue: string;
  onChange: (value: string) => void;
}

export default function FormRadio({ options, checkedValue, onChange }: FormRadioProps) {
  const [selectedValue, setSelectedValue] = useState<string>(checkedValue);

  useEffect(() => {
    setSelectedValue(checkedValue);
  }, [checkedValue]);

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
      <div className="mt-3 w-full flex justify-between md:mt-6 md:gap-10">
        {options.map((option, index) => (
          <div className="inline-flex items-center" key={index}>
            <label
              className="relative flex cursor-pointer items-center rounded-full p-2 md:p-3"
              htmlFor={option.value}
            >
              <input
                name="type"
                type="radio"
                className="before:content[''] before:bg-blue-gray-500 peer relative h-[30px] w-[30px] cursor-pointer appearance-none rounded-full border-2 border-[#4D9FFF] text-[#4D9FFF] transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-[#4D9FFF] checked:before:bg-gray-900 hover:before:opacity-10 md:h-[30px] md:w-[30px]"
                id={option.value}
                value={option.value}
                checked={option.value === selectedValue}
                onChange={() => handleRadioChange(option.value)}
              />
              <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-[#4D9FFF] opacity-0 transition-opacity peer-checked:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-3 w-3 md:h-4 md:w-4"
                  viewBox="0 0 16 16"
                  fill="#4D9FFF"
                >
                  <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                </svg>
              </span>
            </label>
            <label
              className="mt-px cursor-pointer select-none text-[16px] font-bold md:text-[18px]"
              htmlFor={option.value}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
  );
}
