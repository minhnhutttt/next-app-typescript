"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Story = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="overflow-hidden md:pb-[150px] pb-24">
      <div className="fade-up md:bg-[url('/assets/images/bg-title-03.png')] md:bg-cover bg-no-repeat bg-left-bottom md:h-[197px] bg-[#2FB4AC] relative flex items-center max-dt:pl-[361px] max-md:justify-center dt:justify-center max-md:px-5 max-md:flex-col max-md:py-10">
        <p className="font-serif text-white font-black md:text-[2.708vw] dt:text-[39px] text-[5vw] w-full md:max-w-[51.389vw] dt:max-w-[740px]">
          「メタでペット供養」が紡いだ <br />
          ペットとの新たな物語
        </p>
        <span className="md:absolute bottom-4 right-4 dt:right-28 max-md:w-full max-md:mt-5">
          <img
            className="dt:w-[361px] md:w-[25.069vw] w-[50vw] ml-auto"
            src="/assets/images/sign-title-01.png"
            alt=""
          />
        </span>
      </div>
      <div className="px-5">
        <div className="w-full md:max-w-[1332px] max-w-[480px] mx-auto md:mt-[100px] mt-10 relative flex md:pr-[116px] pr-[60px] mb-[80px] md:mb-[140px]">
          <div className="relative">
            <div className="fade-up z-20 w-full max-w-[1216px] border border-[#707070] bg-white relative md:pt-10 pt-6 pb-4 md:px-9 px-5">
              <span className="absolute md:right-5 right-2 md:top-6 top-3">
                <img className="max-md:h-8" src="/assets/images/number-1.png" alt="" />
              </span>
              <div className="flex gap-5 mb-2 max-md:flex-col max-md:items-center">
                <figure>
                  <img src="/assets/images/img-story-01.png" alt="" />
                </figure>
                <div className="flex-1">
                  <h5 className=" font-bold text-[20px] md:text-[32px] leading-none pr-5">
                    もう二度と会えない」絶望から、再会の喜びへ
                  </h5>
                  <div className="flex md:mt-9 mt-5 lg:pl-14 md:gap-8 gap-4 max-lg:flex-wrap">
                    <div className="w-full max-w-[383px] border border-[#6F9D23] bg-[#F7FCEC]">
                      <div className="flex pl-1">
                        <figure>
                          <img
                            className="max-md:w-6"
                            src="/assets/images/quote.png"
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="flex justify-center md:px-5 px-3 py-3">
                        <p className="md:text-[17px] text-[13px] leading-[1.7] font-medium">
                          こんなに美しい場所で、愛する我が子のために手を合わせられるなんて…。
                          <br />
                          KARIMATA(狩俣)供養所での時間は、悲しみを乗り越える力をくれるんです。
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="md:text-[16px] text-[14px] pr-3 pb-2 inline-block">
                          (60代女性)
                        </span>
                      </div>
                    </div>
                    <div className="w-full max-w-[383px] border border-[#6F9D23] bg-[#F7FCEC]">
                      <div className="flex pl-1">
                        <figure>
                          <img
                            className="max-md:w-6"
                            src="/assets/images/quote.png"
                            alt=""
                          />
                        </figure>
                      </div>
                      <div className="flex justify-center md:px-5 px-3 py-3">
                        <p className="md:text-[17px] text-[13px] leading-[1.7] font-medium">
                          こんなに美しい場所で、愛する我が子のために手を合わせられるなんて…。
                          <br />
                          KARIMATA(狩俣)供養所での時間は、悲しみを乗り越える力をくれるんです。
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="md:text-[16px] text-[14px] pr-3 pb-2 inline-block">
                          (60代女性)
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="md:text-[17px] text-[14px] font-medium mt-4">
                  大切なペットとの別れは、誰もが経験する悲しみ。「メタでペット供養」は、そんな悲しみに寄り添いながら、ペットとの新たな絆を紡ぐ機会を提供してくれているようです。
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <a href="/" className="w-[236px] h-[66px] rounded-[36px] flex items-center justify-center bg-[#0176FF]">
                </a>
              </div>
            </div>
            <div className="fade-up z-10 absolute inset-0 md:top-[32px] top-[20px] md:left-[60px] left-[30px] w-full h-full max-w-[1216px] border border-[#707070] bg-white md:pt-10 pt-6 pb-4 md:px-9 px-5">
            <span className="absolute md:right-5 right-2 md:top-6 top-3">
                <img className="max-md:h-6" src="/assets/images/number-2.png" alt="" />
              </span>
            </div>
            <div className="fade-up absolute inset-0 md:top-[69px] top-[44px] md:left-[116px] left-[60px] w-full h-full max-w-[1216px] border border-[#707070] bg-white md:pt-10 pt-6 pb-4 md:px-9 px-5">
            <span className="absolute md:right-5 right-2 md:top-6 top-3">
                <img className="max-md:h-6" src="/assets/images/number-3.png" alt="" />
              </span>
            </div>
          </div>
        </div>
      <div className="fade-up flex justify-center">
        <a
          href="/"
          className="md:w-[700px] md:h-[118px] w-[320px] h-20 font-sns text-white font-bold md:text-[32px] text-[20px] flex items-center justify-center md:rounded-[60px] rounded-[40px] bg-[#F12929]"
        >
          価格・キャンペーンを確認する
        </a>
      </div>
      </div>
    </section>
  );
};

export default Story;
