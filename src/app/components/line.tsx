"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Line = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="relative md:mt-[165px] mt-[100px] md:mb-[230px] mb-[150px] px-5">
        <div className="fade-up flex justify-center items-center flex-col">
            <h3 className="md:text-[30px] text-[20px] font-serif font-black">お問い合わせ</h3>
            <p className="max-w-[623px] md:text-[20px] text-[16px] md:mt-14 mt-10 md:mb-24 mb-12">
            製品やサービスに関することなど、お気軽にお問い合わせください。後ほど、担当者よりご連絡させていただきます。
            </p>
            <a href="https://lin.ee/bDgs0V3" className="flex items-center justify-center w-[300px] md:w-[415px] h-[64px] md:h-[100px] rounded-[50px] bg-[#66D04B] md:text-[30px] text-[20px] font-bold text-black" target="_blank">
            LINE
            </a>
        </div>
    </section>
  );
};

export default Line;
