"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

export default function Company() {
    const ref = useScrollAnimations();
  return (
    <main>
      <section ref={ref} className="relative pl-[80px] md:pl-[215px]">
        <div className="bg-[url('/assets/images/bg-company.png')] bg-cover md:pb-[300px] pb-[150px]">
            <div className="lg:pl-[34px] pl-5 pt-[38px] pr-5 w-full max-w-[1400px] mx-auto">
                <div className="w-full max-w-[974px]">
                    <div className="relative">
                        <span className="w-px h-20 md:h-[255px] bg-black absolute left-10 lg:left-20 top-0"></span>
                        <h3 className="md:text-[32px] text-[24px] font-serif border-b border-black pl-14 lg:pl-[103px] pt-6 md:pt-10 leading-[1.1]">Company</h3>
                    </div>
                </div>
                <div className="w-full max-w-[823px] lg:pl-[150px] md:pl-[80px] mt-[70px]">
                    <p className="md:text-[19px] text-[14px] font-bold">会社概要</p>
                    <div className="bg-white p-4 md:p-10 lg:p-20 mt-6 md:mt-8 h-[380px] lg:h-[450px]">
                        <div className="md:text-[16px] text-[13px] space-y-6 md:tracking-[0.2em]">
                            <div className="flex">
                                <p className="lg:w-[160px] w-14">社名</p>
                                <p className="flex-1">株式会社Sake Supreme</p>
                            </div>
                            <div className="flex">
                                <p className="lg:w-[160px] w-14">住所</p>
                                <p className="flex-1">〒451-0045<br />愛知県名古屋市西区名駅二丁目<br />1番18号スエヒロビル３Ｆ</p>
                            </div>
                            <div className="flex">
                                <p className="lg:w-[160px] w-14">連絡先</p>
                                <p className="flex-1">info@sakesupreme.co.jp</p>
                            </div>
                            <div className="flex">
                                <p className="lg:w-[160px] w-14">代表者</p>
                                <p className="flex-1">橘 秀希</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </main>
  );
}
