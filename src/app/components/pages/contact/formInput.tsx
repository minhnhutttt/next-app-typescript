"use client";
import useScrollAnimation from "@/app/_hooks/useScrollAnimation";

type InputProps = {
  label: string;
  name: string;
  placeholder: string;
}

export default function FormInput({ label, name, placeholder }: InputProps) {
    const animateRefs = useScrollAnimation("fadeDown");
  return (
    <div ref={animateRefs} className="opacity-0">
        <p className="md:text-[14px] text-[11px] text-white mb-2">{label}</p>
        <div className="">
            <input type="text" name={name} className="w-full text-white md:text-[13px] text-[11px] border-0 border-b border-[#BFC9CE] placeholder-[#676767] bg-transparent pb-4" placeholder={placeholder} />
        </div>
    </div>
  );
};
