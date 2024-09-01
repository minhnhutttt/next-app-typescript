"use client";

const Line = () => {
    return (
        <section className="relative overflow-hidden bg-white md:py-[50px] py-8 px-5 skew-x-[0deg] skew-y-[-10deg]">
            <div className="w-full max-w-[619px] mx-auto md:px-[10px] px-6 md:py-9 py-6 flex items-center md:gap-9 gap-6 max-md:flex-col max-md:justify-center skew-x-[0deg] skew-y-[10deg]">
                <figure>
                    <img src="/assets/images/person-contact.png" alt="" />
                </figure>
                <div className="">
                    <p className="md:text-[28px] text-[22px] max-md:text-center border-b-[1px] border-black font-noto font-bold">お問い合わせ</p>
                    <div className="mt-2 md:mb-[50px] mb-6">
                        <p className="md:text-[19px] text-[16px] leading-normal font-noto md:text-left text-center md:ml-[7px]">
                        公式LINEからお気軽に <br />
                        お問い合わせください。
                        </p>
                    </div>
                    <a href="https://lin.ee/fMZCQsF" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/images/btn-line02.png" alt="" /></a>
                </div>
            </div>
        </section>
    );
};

export default Line;
