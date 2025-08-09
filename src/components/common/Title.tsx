import { ReactNode } from "react";

export const Title = ({ title, icon }: { title: string, icon: ReactNode }) => {
  
  return <div className="fade-up flex items-center justify-center gap-4">
    <span>{icon}</span>
    <h3 className="md:text-[40px] text-[24px] font-bold">{title}</h3>
    </div>;
};