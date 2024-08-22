"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Line = () => {
    const ref = useScrollAnimations();
    return (
        <section ref={ref} className="relative overflow-hidden bg-[#01B202] md:py-[50px] py-8 px-5">
            <div className="w-full max-w-[520px] mx-auto bg-white rounded-[30px] md:px-[50px] px-8 md:py-9 py-6 flex items-center md:gap-9 gap-6 max-md:flex-col max-md:justify-center">
                <figure>
                    <img src="/assets/images/fujita.png" alt="" />
                </figure>
                <div className="">
                    <p className="md:text-[34px] text-[22px] font-extrabold underline max-md:text-center">お問い合わせ</p>
                    <div className="flex justify-center mt-2 mb-4">
                        <p className="md:text-[18px] text-[16px] leading-loose">
                        公式LINEからお気軽に <br />
                        お問い合わせください。
                        </p>
                    </div>
                    <a href="https://lin.ee/fMZCQsF" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/btn-line-02.png" alt="" /></a>
                </div>
            </div>
        </section>
    );
};

export default Line;
