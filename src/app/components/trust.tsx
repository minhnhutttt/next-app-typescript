"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Trust = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="overflow-hidden pb-5">
      <div className="fade-up bg-[url('/assets/images/bg-title-04.png')] bg-[length:auto_100%] md:bg-cover bg-no-repeat bg-[center_left_-60px] md:bg-left-bottom h-[100px] md:h-[197px] bg-[#092FB3]/[0.7] relative flex items-center max-dt:pl-[361px] max-md:justify-center dt:justify-center max-md:px-5 max-md:flex-col max-md:py-10">
        <p className="font-serif text-white font-black md:text-[2.708vw] dt:text-[39px] text-[clamp(14px,4vw,22px)] w-full md:max-w-[51.389vw] dt:max-w-[740px] max-md:text-center">
          日本初「産官学」<br className="md:hidden" />で支える信頼の絆
        </p>
        <span className="md:absolute bottom-4 right-4 dt:right-28 max-md:w-full max-md:mt-5 max-md:hidden">
          <img
            className="dt:w-[361px] md:w-[25.069vw] w-[50vw] ml-auto"
            src="/assets/images/sign-title-01.png"
            alt=""
          />
        </span>
      </div>
      <div className="w-full max-w-[1440px] mx-auto mt-4 md:pl-7">
        <div className="bg-[#BDDDF4] bg-[url('/assets/images/bg-trust.png')] bg-no-repeat bg-right-bottom pb-[60vw] max-md:bg-[length:100%_auto] md:pb-[140px] pt-7 px-5">
          <div className="w-full max-w-[1252px] mx-auto">
            <div className="fade-up w-full py-6 border-b border-black/50 text-[#0E0E0E] md:text-[28px] text-[19px] font-bold font-serif max-md:px-3 max-md:text-center md:pl-10">
              愛するペットとの絆が、
              <br className="lg:hidden" />
              デジタルの世界で復活する。
            </div>
            <div className="fade-up md:px-10 py-7">
              <div className="md:text-[17px] text-[14px] max-w-[862px] leading-[1.3]">
                そんな新しい体験を提供する「メタでペット供養」。でも、本当に安心して利用できるのか不安を感じる方もいらっしゃるかもしれません。
                <br />
                <br />
                そんなあなた様に、自信を持ってお伝えします。『メタでペット供養』は、日本初の産官学連携によって生まれた、信頼のサービスです。
              </div>
            </div>
            <div className="bg-white md:pt-[88px] pt-12 md:px-10 px-5 md:pb-[70px] pb-10 md:mt-[100px] mt-16">
                <figure className="fade-up md:mb-[88px] mb-[50px]">
                    <img src="/assets/images/sanzu.png" alt="" />
                </figure>
                <div className="fade-up w-full max-w-[966px] mx-auto bg-[#FFF4CD] border border-[#CDA474] rounded-[35px] flex items-center md:py-[37px] md:px-[55px] py-6 px-8 max-md:flex-col md:gap-[65px] gap-7">
                    <figure>
                        <img src="/assets/images/img-trust.png" alt="" />
                    </figure>
                    <div className="flex-1 md:text-[16px] text-[13px] font-medium">
                    『メタでペット供養』は、<br />
                    沖縄県宮古島市狩俣自治会・琉球大学島嶼地域科学研究所、そしてメタロポリス社<br /><br />これら3つの組織が手を携えて生み出したサービスです。各組織が持つ専門性とペット供養への想いが結集し、ペットとの絆を大切にする方々に寄り添うことで誕生しました。
                    </div>
                </div>
            </div>
            <div className="fade-up w-full max-w-[916px] mx-auto bg-white/50 border-2 border-[#2C87E3] rounded-[36px] md:pt-[35px] md:mt-10 mt-7 pt-5 px-7 md:pb-12 pb-6 md:px-16">
                <p className="md:text-[20px] text-[16px] font-semibold md:mb-5">安心と永続性を、未来へ</p>
                <p className="md:text-[16px] text-[13px]">
                産官学の連携によって生まれた『メタでペット供養』は、安心して利用できるサービスであると同時に、その先の未来も見据えて設計されています。
                <br /><br />
                狩俣自治会の地域に根差した活動、琉球大学島嶼地域科学研究所の学術的な裏付け、そしてメタロポリス社の技術力が融合することで、時代が変わっても色褪せない価値を提供し続けます。
                </p>
            </div>
            <div className="fade-up text-center font-serif md:text-[18px] text-[14px] font-semibold md:mt-24 mt-14 leading-[2]">
            <span className="md:text-[25px] text-[17px]">愛するペットとの絆の復活。</span><br />
                それを紡ぎなおすもう一つの人生に心をゆだねる<br />あなた様が不安にかられることのないように。<br /><br />『メタでペット供養』は<br />
                日本初の<span className="md:text-[25px] text-[17px]">産官学連携</span>による英知を結集し、<br />
                <span className="md:text-[25px] text-[17px]">信頼</span>のおけるサービスとして<br />
                あなた様と前に進んでいきます。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
