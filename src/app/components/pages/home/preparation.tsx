"use client";
import useScrollAnimation from "@/app/hooks/useScrollAnimation";

export default function Preparation() {
  const animateZoomRefs = useScrollAnimation("zoom");
  return (
    <section className="relative px-5 md:mb-20 mb-16">
      <div
        ref={animateZoomRefs}
        className="opacity-0 w-full max-w-[1123px] mx-auto p-3 md:p-[22px] relative rounded-[40px] overflow-hidden"
      >
        <span className="absolute md:animate-[rotate_30s_linear_infinite] animate-[rotate_20s_linear_infinite] w-[300vmax] -top-1/2 -left-1/2 aspect-square md:bg-[repeating-linear-gradient(_-60deg,_#FFE178,_#FFE178_20px,_#000_20px,_#000_40px_)] bg-[repeating-linear-gradient(_-60deg,_#FFE178,_#FFE178_15px,_#000_15px,_#000_30px_)]"></span>
        <div className="w-full h-full bg-[#FFD900] lg:px-[60px] md:px-10 px-6 py-5 rounded-[40px] relative">
          <div className="flex justify-center mb-2">
            <img className="max-md:w-10" src="/images/ic-2.png " alt="" />
          </div>
          <h5 className="md:text-[48px] text-[24px] font-bold md:border-b-[10px] border-b-[5px] max-md:pb-1 border-black text-center tracking-wider">
            不測の事態への備え、<br className="md:hidden" />できていますか？
          </h5>
          <div className="flex justify-center mt-5">
            <p className="md:text-[18px] text-[14px] font-medium max-w-[801px]">
              火事や事故、災害など、何が起きるかわからない世の中です。
              <br />
              何かが起きても耐えられる仕組みを取り入れておくことは、組織に属する人々に安心感を与えてくれます。
            </p>
          </div>
          <div className="flex justify-center mt-3">
            <div className="md:text-[24px] text-[15px] font-medium space-y-5 py-3">
              <div className="flex items-center gap-2">
                <figure>
                  <img
                    className="max-md:w-6"
                    src="/images/ic-check.svg"
                    alt=""
                  />
                </figure>
                <p className="flex-1">デジタルなので安全に保管される</p>
              </div>
              <div className="flex items-center gap-2">
                <figure>
                  <img
                    className="max-md:w-6"
                    src="/images/ic-check.svg"
                    alt=""
                  />
                </figure>
                <p className="flex-1">NFTだからデータが消えない</p>
              </div>
              <div className="flex items-center gap-2">
                <figure>
                  <img
                    className="max-md:w-6"
                    src="/images/ic-check.svg"
                    alt=""
                  />
                </figure>
                <p className="flex-1">すぐにデータを復元できる</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-6 md:mt-8">
            <p className="md:text-[16px] text-[13px] font-medium max-w-[692px]">
              ※一般的なデジタル資産は通常、中央のサーバーに蓄積され保管されるのでサーバーに不測の事態が起きた際の復元力が弱いと言えます。次世代証明書なら安心して運用できます。
            </p>
          </div>
          <p className="text-center md:text-[28px] font-bold text-[18px] md:mt-6 mt-4">
            次世代証明書で<br className="md:hidden" />組織運営者としての責任を<br className="md:hidden" />果たしましょう！
          </p>
        </div>
      </div>
    </section>
  );
}
