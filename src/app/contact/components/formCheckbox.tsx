import { useState } from 'react'

interface ItemProps {
  label: string
  name: string
}

interface FormCheckboxProps {
  name: string
  options: string[]
  error?: string
}

const Item = ({ label, name }: ItemProps) => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <label className="flex cursor-pointer items-center gap-1 md:gap-2">
      <div className="relative flex items-center rounded-full p-3">
        <input
          type="checkbox"
          className="before:content[''] border-blue-gray-200 before:bg-blue-gray-500 peer relative h-6 w-6 cursor-pointer appearance-none border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
          name={name}
          id={name}
          value={label}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="white"
            stroke="white"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </div>
      <div className="mt-px cursor-pointer select-none text-[16px] tracking-widest md:text-[18px]">
        {label}
      </div>
    </label>
  )
}

const FormCheckbox = ({ name, options, error = '' }: FormCheckboxProps) => {
  return (
    <div className="fade-down mb-12 flex justify-center md:mb-24">
      <div className="space-y-1 py-8">
        {options.map((item, index) => (
          <Item name={name} label={item} key={index} />
        ))}
      </div>
    </div>
  )
}

export default FormCheckbox
