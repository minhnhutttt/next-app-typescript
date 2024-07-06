'use client'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const Trust = () => {
  const ref = useScrollAnimations()
  return (
    <section ref={ref} className="overflow-hidden pb-5" id="trust">
      <div className="fade-up relative flex h-[100px] items-center bg-[#092FB3]/[0.7] bg-[url('/assets/images/bg-title-04.png')] bg-[length:auto_100%] bg-[center_left_-60px] bg-no-repeat max-dt:pl-[361px] max-md:flex-col max-md:justify-center max-md:px-5 max-md:py-10 md:h-[197px] md:bg-cover md:bg-left-bottom dt:justify-center">
        <p className="w-full font-serif text-[clamp(14px,4vw,22px)] font-black text-white max-md:text-center md:max-w-[51.389vw] md:text-[2.708vw] dt:max-w-[740px] dt:text-[39px]">
          日本初「産官学」
          <br className="md:hidden" />
          で支える信頼の絆
        </p>
        <span className="bottom-4 right-4 max-md:mt-5 max-md:hidden max-md:w-full md:absolute dt:right-28">
          <img
            className="ml-auto w-[50vw] md:w-[25.069vw] dt:w-[361px]"
            src="/assets/images/sign-title-01.png"
            alt=""
          />
        </span>
      </div>
      <div className="mx-auto mt-4 w-full max-w-[1440px] md:pl-7">
        <div className="bg-[#BDDDF4] bg-[url('/assets/images/bg-trust.png')] bg-right-bottom bg-no-repeat px-5 pb-[60vw] pt-7 max-md:bg-[length:100%_auto] md:pb-[140px]">
          <div className="mx-auto w-full max-w-[1252px]">
            <div className="fade-up w-full border-b border-black/50 py-6 font-serif text-[19px] font-bold text-[#0E0E0E] max-md:px-3 max-md:text-center md:pl-10 md:text-[28px]">
              愛するペットとの絆が、
              <br className="lg:hidden" />
              デジタルの世界で復活する。
            </div>
            <div className="fade-up py-7 md:px-10">
              <div className="max-w-[862px] text-[14px] leading-[1.3] md:text-[17px]">
                そんな新しい体験を提供する「メタでペット供養」。でも、本当に安心して利用できるのか不安を感じる方もいらっしゃるかもしれません。
                <br />
                <br />
                そんなあなた様に、自信を持ってお伝えします。『メタでペット供養』は、日本初の産官学連携によって生まれた、信頼のサービスです。
              </div>
            </div>
            <div className="mt-16 bg-white px-5 pb-10 pt-12 md:mt-[100px] md:px-10 md:pb-[70px] md:pt-[88px]">
              <figure className="fade-up mb-[50px] md:mb-[88px]">
                <img
                  className="max-md:hidden"
                  src="/assets/images/sanzu.png"
                  alt=""
                />
                <img
                  className="max-md:mx-auto max-md:w-full max-md:max-w-[400px] md:hidden"
                  src="/assets/images/sanzu-sp.png"
                  alt=""
                />
              </figure>
              <div className="fade-up mx-auto flex w-full max-w-[966px] items-center gap-7 rounded-[35px] border border-[#CDA474] bg-[#FFF4CD] px-8 py-6 max-md:flex-col md:gap-[65px] md:px-[55px] md:py-[37px]">
                <figure>
                  <img src="/assets/images/img-trust.png" alt="" />
                </figure>
                <div className="flex-1 text-[13px] font-medium md:text-[16px]">
                『メタでペット供養』は、沖縄県宮古島市狩俣自治会と株式会社メタロポリスが中心となって企画したサービスです。さらに地域問題研究の一環で、琉球大学島嶼地域科学研究所が学術顧問として知見を提供しています。
                  <br />
                  <br />
                  各組織の専門性とペット供養への想いが結集し、従来にない新しい形のペット供養サービスを実現出来ました。『メタでペット供養』は、大切なペットとの絆を守り続けたいと願う方々に寄り添うことを目指しています。
                </div>
              </div>
            </div>
            <div className="fade-up mx-auto mt-7 w-full max-w-[916px] rounded-[36px] border-2 border-[#2C87E3] bg-white/50 px-7 pb-6 pt-5 md:mt-10 md:px-16 md:pb-12 md:pt-[35px]">
              <p className="mb-5 text-[16px] font-semibold md:text-[20px]">
                安心と永続性を、未来へ
              </p>
              <p className="text-[13px] md:text-[16px]">
                産官学の連携によって生まれた『メタでペット供養』は、安心して利用できるサービスであると同時に、その先の未来も見据えて設計されています。
                <br />
                <br />
                狩俣自治会の地域に根差した活動、琉球大学島嶼地域科学研究所の学術的な裏付け、そしてメタロポリス社の技術力が融合することで、時代が変わっても色褪せない価値を提供し続けます。
              </p>
            </div>
            <div data-scroll="out">
              <div
                data-splitting=""
                className="text--fading mt-14 text-center font-serif text-[14px] font-semibold leading-[2] md:mt-24 md:text-[18px]"
              >
                <span className="text-[17px] md:text-[25px]">
                  愛するペットとの絆の復活。
                </span>
                <br />
                それを紡ぎなおすもう一つの人生に心をゆだねる
                <br />
                あなた様が不安にかられることのないように。
                <br />
                <br />
                『メタでペット供養』は
                <br />
                日本初の
                <span className="text-[17px] md:text-[25px]">産官学連携</span>
                による英知を結集し、
                <br />
                <span className="text-[17px] md:text-[25px]">信頼</span>
                のおけるサービスとして
                <br />
                あなた様と前に進んでいきます。
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Trust
