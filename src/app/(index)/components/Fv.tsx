"use client";

import useScrollAnimations from "@/app/hooks/useScrollAnimations";

const Fv = () => {
  const ref = useScrollAnimations(); 
    return (
      <div ref={ref} className="relative pt-32">
        <h2 className="text-center leading-[1.3] [text-shadow:0px_4px_10px_#FFF4F2]">
            <p className="md:text-[40px] text-[24px] font-medium">あなたの</p>
            <p>
                <span className="md:text-[48px] text-[32px] font-bold bg-[#F6D4E2]">投稿</span>
                <span className="md:text-[40px] text-[24px] font-medium">も</span>
                <span className="md:text-[48px] text-[32px] font-bold bg-[#F6D4E2]">いいね</span>
                <span className="md:text-[40px] text-[24px] font-medium">も</span>
            </p>
            <p className="">
            <span className="md:text-[48px] text-[32px] font-bold">"</span>
            <span className="md:text-[64px] text-[36px] font-bold text-[#DA5A85]">資産</span>
            <span className="md:text-[48px] text-[32px] font-bold">"</span>
            <span className="md:text-[40px] text-[24px] font-medium">になる</span>
            </p>
        </h2>
      </div>
    );
  };
  
  export default Fv;
  