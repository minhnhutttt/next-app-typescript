"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Solutions = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="relative overflow-hidden sm:px-[30px] px-4 pb-[110px]"
    >
        <div className="relative">
            <h3 className="fade-up sm:text-[48px] text-[28px] font-bold text-center sm:border-b-[15px] border-b-[8px] border-[#3A86FF]">なぜ今、FAVEなのか</h3>
            <div className="fade-up mt-6">
                <img src="/assets/images/solution-img.png" alt="" />
            </div>
            <div className="flex gap-[20px]">
                <div className="w-1/2 space-y-5">
                    <p className="fade-up pt-5 pb-0 text-center sm:text-[36px] text-[22px] font-medium">現状の課題</p>
                    {[
                        'SNS依存による収益制限',
                        '一方向のファンコミュニケーション',
                        '暗号資産の難解さと使いにくさ',
                    ].map((item,index)=> (
                        <p className="fade-up px-3 sm:px-5 py-6 sm:py-[50px] sm:text-[28px] text-[16px] relative flex items-center" key={index}>
                            {item}
                            <img className="absolute left-full max-md:w-3" src="/assets/images/ar.png" alt="" />
                        </p>
                    ))}
                </div>
                <div className="w-1/2 space-y-5">
                    <p className="fade-up pt-5 pb-0 text-center sm:text-[36px] text-[22px] font-bold underline sm:underline-offset-4 underline-offset-2 decoration-[2px] decoration-[#FF46DC]">FAVEによる解決</p>
                    {[
                        'FAVEコインによる収益拡張',
                        '投げ銭を通じた双方向の価値交換',
                        '日本語と直感的UXで誰でも使える',
                    ].map((item,index)=> (
                        <p className="fade-up px-3 sm:px-5 py-6 sm:py-[50px] sm:text-[28px] text-[16px] font-medium relative flex items-center bg-[#FF46DC]/[0.2] rounded-[20px]" key={index}>
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
};

export default Solutions;
