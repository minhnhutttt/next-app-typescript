import React, { useState } from "react";
import Slider from '@mui/material/Slider';

interface RangeSliderProps {
  min: number;
  max: number;
  step: number;
  initialValue: number;
  onChange: (value: number) => void;
}

const FormSlider: React.FC<RangeSliderProps> = ({
  min,
  max,
  step,
  initialValue,
  onChange,
}) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = (newValue: number) => {
    const clampedValue = Math.min(max, Math.max(min, newValue));
    setValue(clampedValue);
    onChange(clampedValue);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-4 w-full">
        <button
          type="button"
          className="size-10 md:size-[55px] flex items-center justify-center bg-white rounded-full border border-[#3383C8]"
          onClick={() => handleChange(value - step)}
          disabled={value <= min}
        >
          <svg
            width="13"
            height="2"
            viewBox="0 0 13 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line y1="1.02429" x2="13" y2="1.02429" stroke="#3383C8" />
          </svg>
        </button>
          <div className="flex-1">
          <Slider 
            defaultValue={0} 
            min={min} 
            max={max} 
            value={value}
            onChange={(e: any) =>
            handleChange(Number(e.target.value))} 
          />
          </div>
        <button
          type="button"
          className="size-10 md:size-[55px] flex items-center justify-center bg-white rounded-full border border-[#3383C8]"
          onClick={() => handleChange(value + step)}
          disabled={value >= max}
        >
          <svg
            width="11"
            height="12"
            viewBox="0 0 11 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.825 5.1501V6.6801H6.265V11.2401H4.735V6.6801H0.175V5.1501H4.735V0.590097H6.265V5.1501H10.825Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
      <span className="w-[83px] h-11 flex items-center justify-center text-[23px] font-semibold bg-white rounded-[25px] border border-[#3383C8]">{value}</span>
    </div>
  );
};

export default FormSlider;
