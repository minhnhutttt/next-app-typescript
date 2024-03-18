interface InputProps {
  label: string
  name: string
  placeholder?: string
  error?: string
}

const FormTextArea = ({
  label,
  name,
  placeholder = '',
  error = '',
}: InputProps) => {
  return (
    <div className="fade-down">
      <p className="mb-1 text-[16px] md:mb-2">{label}</p>
      <div>
        <textarea
          name={name}
          className="h-24 w-full border-0 border-b border-[#BFC9CE] bg-transparent pb-4 text-[15px] placeholder-[#676767] outline-0 md:h-20"
          placeholder={placeholder}
        ></textarea>
      </div>
    </div>
  )
}

export default FormTextArea
