"use client";

import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Contact = () => {
    const ref = useScrollAnimations();
  return (
    <section ref={ref} className="md:h-[600px] h-[440px] bg-[url('/assets/images/bg-contact.png')] bg-cover px-5 bg-center">
        <div className="w-full max-w-[1108px] h-full mx-auto max-md:bg-[#F25B54]/[0.2] md:bg-[url('/assets/images/bg-contact-op.png')] bg-[length:100%_100%] flex items-center justify-center">
            <div>
                <div className="fade-up flex justify-center">
                    <div className="flex justify-center items-center relative flex-col">
                        <h3 className="lg:text-[48px] md:text-[3vw] text-[clamp(20px,5.4vw,32px)] font-black tracking-[0.2em] px-5 max-md:pt-2">各種お問い合わせはこちら</h3>
                        <p className="text-center md:text-[16px] text-[13px] font-bold mt-3">お気軽にご連絡ください。</p>
                    </div>
                </div>
                <div className="fade-up flex gap-6 md:mt-9 mt-6 max-md:flex-col justify-center items-center">
                <Button href="/" text="資料請求" imgSrc="/assets/images/ic-document.svg" rect="bg-[#F25B54]" size="lg" />
                <Button href="/" text="代理店募集" imgSrc="/assets/images/ic-building.svg" rect="bg-black" size="lg" />
                <Button href="/" text="お問い合わせ" imgSrc="/assets/images/ic-line.svg" rect="bg-[#01B202]" size="lg" />
                </div>
            </div>

        </div>
    </section>
  );
};

export default Contact;
