"use client"
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Kizuna = () => {
    const ref = useScrollAnimations();
    return (
      <section ref={ref} className="overflow-hidden gradient-02 md:pt-[160px] md:pb-[187px] pt-20 pb-24">
        <div className="w-full max-w-[1440px] mx-auto bg-white xl:rounded-[200px] lg:rounded-[100px] rounded-[20vw] md:pt-20 pt-14 md:px-[70px] px-6 overflow-hidden">
            <div className="fade-up md:text-[48px] text-[24px] font-bold text-center">日本初「産官学」で <br className="md:hidden" />支える信頼の絆</div>
            <div className="md:mt-[91px] mt-16 gradient-03 md:rounded-[80px] rounded-[10vw] [filter:drop-shadow(0px_4px_100px_rgba(78,_64,_162,_0.30))] w-full md:max-w-[1300px] max-w-[1300px] mx-auto xl:px-[197px] md:px-[100px] px-6 md:pt-[100px] md:pb-[111px] py-[60px] relative">
                <span className="absolute md:left-[-32px] left-[-10px] md:top-[-40px] top-[-60px]">
                    <img className="fade-up max-md:w-[100px] max-xl:w-[140px]" src="/assets/images/slider-animal-07.png" alt="" />
                </span>
                <span className="absolute md:left-[-70px] left-[-20px] md:top-[260px] max-md:bottom-[-64px]">
                    <img className="fade-up max-md:w-[110px] max-xl:w-[150px]" src="/assets/images/slider-animal-08.png" alt="" />
                </span>
                <p className="fade-up md:text-[24px] text-[16px] text-white font-bold md:max-w-[908px] max-w-[540px] mx-auto w-full leading-[2.1]">
                    <span className="md:text-[36px] text-[22px]">愛するペットとの絆が、デジタルの世界で復活する。</span><br />
                    <br />
                    そんな新しい体験を提供する「メタでペット供養」。でも、本当に安心して利用できるのか不安を感じる方もいらっしゃるかもしれません。<br />
                    <br />
                    そんなあなた様に、自信を持ってお伝えします。『メタでペット供養』は、日本初の産官学連携によって生まれた、信頼のサービスです。
                </p>
                <span className="absolute md:right-[-70px] right-[-20px] xl:bottom-[-120px] md:bottom-[-70px] bottom-[-90px]">
                    <img className="fade-up max-md:w-[140px] max-xl:w-[200px]" src="/assets/images/slider-animal-09.png" alt="" />
                </span>
            </div>
            <div className="w-full max-w-[1022px] mx-auto md:pt-[150px] pt-32">
                <div className="fade-up flex justify-center">
                    <h5 className="md:w-[621px] w-[432px] h-20 md:h-[115px] bg-[url('/assets/images/bg-title.png')] flex items-center justify-center text-white font-bold md:text-[32px] text-[18px] tracking-widest bg-[length:100%_100%]">自治会・大学・企業の英知が結集</h5>
                </div>
                <div className="fade-up md:pt-[76px] pt-12 md:space-y-10 space-y-7 px-2 pb-7">
                    <div>
                        <p className="text-gradient-03 md:text-[24px] text-[16px] font-bold">狩俣自治会</p>
                        <p className="md:text-[16px] text-[13px] font-medium mt-2">KARIMATA(狩俣)供養所の提供、地域社会との連携</p>
                    </div>
                    <div>
                        <p className="text-gradient-03 md:text-[24px] text-[16px] font-bold">琉球大学島嶼地域科学研究所</p>
                        <p className="md:text-[16px] text-[13px] font-medium mt-2">狩俣地域の遊休資産活用やペット供養に関する学術的知見の提供</p>
                    </div>
                    <div>
                        <p className="text-gradient-03 md:text-[24px] text-[16px] font-bold">株式会社んみゃーち</p>
                        <p className="md:text-[16px] text-[13px] font-medium mt-2">狩俣自治会と琉球大学島嶼地域科学研究所の共同運営会社、KARIMATA(狩俣)供養所の運営・管理、地域問題解決</p>
                    </div>
                    <div>
                        <p className="text-gradient-03 md:text-[24px] text-[16px] font-bold">株式会社メタロポリス</p>
                        <p className="md:text-[16px] text-[13px] font-medium mt-2">メタバースの開発・運営、メタでペット供養に関連する全般的なサービスの企画・運用・管理</p>
                    </div>
                </div>
                <div className="fade-up gradient-03 md:p-10 p-6 rounded-[20px] md:text-[18px] text-[14px] font-bold text-white">
                『メタでペット供養』は、<br />
                沖縄県宮古島市狩俣自治会、琉球大学島嶼地域科学研究所、そして株式会社メタロポリス<br />
                <br />
                の3つの組織が手を携えて生み出したサービスです。各組織が持つ専門性とペット供養への想いが結集し、ペットとの絆を大切にする方々に寄り添うことで誕生しました。
                </div>
                <div className="fade-up flex justify-center items-center md:mt-[86px] mt-14">
                    <img src="/assets/images/serif.png" alt="" />
                </div>
                <div className="fade-up w-full md:max-w-[913px] max-w-[540px] mx-auto md:text-[18px] text-[14px] font-medium mt-10 md:mt-16">
                    産官学の連携によって生まれた『メタでペット供養』は、安心して利用できるサービスであると同時に、その先の未来も見据えて設計されています。<br /><br />狩俣自治会の地域に根差した活動、琉球大学島嶼地域科学研究所の学術的な裏付け、そしてメタロポリス社の技術力が融合することで、時代が変わっても色褪せない価値を提供し続けます。
                </div>
                <div className="fade-up md:h-[490px] h-[70vw] overflow-hidden">
                    <div className="lg:size-[653px] md:size-[620px] size-[85vw] overflow-hidden rounded-full gradient-03 flex justify-center mx-auto text-white mt-10 md:pt-[110px] pt-[10vw]">
                        <p className="w-full max-w-[442px] mx-auto md:text-[18px] text-[2.8vw] text-center font-bold md:leading-[1.9] leading-[1.7]">
                            <span className="md:text-[24px] text-[3.2vw] leading-none">愛するペットとの絆の復活。</span><br />
                            <br />
                            それを紡ぎなおすもう一つの人生に<br className="md:hidden" />心をゆだねるあなた様が<br className="md:hidden" />不安にかられることのないように。<br /><br />『メタでペット供養』は<br />
                            日本初の産官学連携による英知を結集し、<br />
                            信頼のおけるサービスとして<br />
                            あなた様と前に進んでいきます。
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    );
  };
  
  export default Kizuna;
  