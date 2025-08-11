interface RangeSliderProps {
  minValue: number;
  maxValue: number;
  setMinValue: (value: number) => void;
  setMaxValue: (value: number) => void;
}

export default function RangeSlider({
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
}: RangeSliderProps) {
  const sliderMax = 10000;

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative h-1 bg-gray-300 rounded my-2.5">
        <div
          className="absolute h-1 bg-[#3E7976] rounded"
          style={{
            left: `${(minValue / sliderMax) * 100}%`,
            width: `${((maxValue - minValue) / sliderMax) * 100}%`,
          }}
        ></div>

        <input
          type="range"
          min={0}
          max={sliderMax}
          value={minValue}
          onChange={(e) =>
            setMinValue(Math.min(Number(e.target.value), maxValue - 1))
          }
          className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none"
          style={{ zIndex: minValue > sliderMax - 10 ? 5 : 3 }}
        />
        <input
          type="range"
          min={0}
          max={sliderMax}
          value={maxValue}
          onChange={(e) =>
            setMaxValue(Math.max(Number(e.target.value), minValue + 1))
          }
          className="absolute w-full h-1 appearance-none bg-transparent pointer-events-none"
          style={{ zIndex: 4 }}
        />
      </div>

      <div className="flex justify-between mt-4">
        <span className="md:text-[18px] text-[16px] font-bold">
          {minValue}円以下
        </span>
        <span className="md:text-[18px] text-[16px] font-bold">
          {maxValue}円以上
        </span>
      </div>
    </div>
  );
}
