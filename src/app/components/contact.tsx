"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Contact = () => {
  const ref = useScrollAnimations();

  return (
    <section ref={ref} className="relative overflow-hidden px-7 md:pt-[30px] pt-5 pb-[100px] pb-20">
        <div className="fade-up relative w-full md:max-w-[960px] max-w-[500px] mx-auto bg-white rounded-[20px] md:border-[4px] border-2 border-[#2334C8] px-5 flex md:pt-14 pt-10 pb-16 md:pb-[90px]">
            <div className="fade-up w-full md:max-w-[730px] max-w-[400px] mx-auto flex items-center max-md:flex-col md:gap-[90px] gap-10">
                <div className="leading-none">
                    <p className="font-inter md:text-[64px] text-[40px] font-medium tracking-wide max-md:text-center">Contact</p>
                    <p className="md:text-[24px] text-[17px] font-medium tracking-[0.3em] mt-4 max-md:text-center">お問い合わせ</p>
                </div>
                <p className="md:text-[20px] text-[15px] font-medium leading-relaxed max-md:text-center">
                    画面右下のチャットから <br />
                    お気軽にお問い合わせください。
                </p>
            </div>
            <span className="absolute lg:-bottom-[50px] -bottom-[80px] md:-right-[25px] -right-3 drop-shadow-[2px_2px_40px_rgba(0,0,0,0.07)]">
                <img className="fade-up max-lg:w-[180px] max-lg:w-[140px]" src="/assets/images/img-contact.png" alt="" />
            </span>
        </div>
    </section>
  );
};

export default Contact;
