interface InputProps {
  label: string
  name: string
  type?: string
  placeholder?: string
  error?: string
}

const FormInput = ({
  label,
  name,
  type = 'text',
  placeholder = '',
  error = '',
}: InputProps) => {
  return (
    <div className="fade-down">
      <p className="mb-1 text-[16px] md:mb-2">{label}</p>
      <div>
        <input
          type={type}
          name={name}
          className="w-full border-0 border-b border-[#BFC9CE] bg-transparent pb-4 text-[15px] placeholder-[#676767] outline-0"
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default FormInput
