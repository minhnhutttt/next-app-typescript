interface FqaTabProps {
  children: string;
  active: boolean;
  onClick?: () => void;
}

export const FqaTab = ({ children, active, onClick }: FqaTabProps) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer relative md:h-[112px] h-[95px] rounded-[20px] p-3 flex items-center justify-center md:text-[24px] text-[18px] font-bold border-[#666] border after:aspect-[22/18] after:w-[22px] after:bg-[url(/assets/images/faq-tri.png)] after:bg-cover after:absolute after:top-full leading-[1.2] text-center after:opacity-0 ${
        active ? "bg-[#666] text-white after:opacity-100" : ""
      }`}
    >
      {children}
    </div>
  );
};
