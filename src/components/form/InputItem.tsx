import React from "react";

interface InputITemProps {
    label: string;
  value: string;
  required?: boolean;
  placeholder: string;
  onChange: (value: string) => void;
}

const InputITem =({ label, value, required = false, placeholder = '', onChange }: InputITemProps) => {
  return (
    <div className="w-full max-w-lg">
      <label className="flex items-center gap-2 mb-1">
        <span className="">{label}</span>
        {required &&
        <span className=" text-white text-xs px-2 py-0.5 rounded">
          必須
        </span>
        }
      </label>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputITem;
