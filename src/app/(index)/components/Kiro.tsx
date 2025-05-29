"use client";

import useScrollAnimations from "@/hooks/useScrollAnimations";

const Kiro = () => {
  const ref = useScrollAnimations();

  return (
    <section
      ref={ref}
      className="overflow-hidden pt-[38vw] md:pt-[290px] md:space-y-[310px] space-y-[40vw] pb-[240px] md:pb-[453px]"
    >
      <div>
        <div className="relative h-[40vw] md:h-[300px] flex items-center justify-center">
          <div className="zoom-out rotate-[10deg] origin-center absolute h-full left-[-20%] top-0 w-[140%] bg-[linear-gradient(180deg,_#FBBC05_0%,_#957003_100%)] [box-shadow:0px_4px_80px_0px_rgba(8,_90,_29,_0.60)]"></div>
          <h3 className="fade-up md:text-[40px] text-[5.5vw] font-bold text-center md:leading-loose tracking-[0.3em] relative">
            経営の岐路に立つあなたへ
          </h3>
        </div>
        <div className="px-5 -mt-[8vw] md:-mt-[74px]">
          <div className="fade-up w-full max-w-[680px] mx-auto bg-black/60 md:py-[50px] py-[30px] px-5 md:px-10 text-[3.5vw] md:text-[20px] border border-[#FBBC05] relative leading-loose tracking-widest">
            経営に「絶対解」はありません。
            <br />
            しかし、
            <span className="font-black">あなたと企業だけの「最適解」</span>
            は必ず存在します。
            <br />
            <br />
            成長の壁に直面したとき、次の一手が見えないとき。
            <br />
            実は、その答えはすでにあなた自身の中に、
            <br />
            そしてあなたの会社のあらゆるところに散らばっています。
            <br />
            <br />
            経愛は、あなたとあなたの会社の中に散らばっている
            <br />
            答えの断片を丁寧に組み上げて、
            <br />
            鮮やかな未来への提案へと変える伴走者です。
            <br />
            <br />
            本質を見抜く「眼力」と、決断を実行に移す「勇気」。
            <br />
            その両方を支える存在として
            <br />
            経愛は常にあなたの側にいます。
            <br />
            孤独な決断の瞬間にも、あなたは一人ではありません。
            <br />
            <br />
            わずか3分の手軽さを、得られる効果のインパクトを、
            <br />
            目の前がひらけていく感動を、まずは味わってください。
            <br />
            次の一手はもう、あなたの手の中にあります。
          </div>
          <div className="fade-up mt-[5vw] md:mt-14 flex justify-center">
            <a
              href="/"
              className="flex items-center justify-center relative w-[80vw] md:w-[440px] h-[16vw] md:h-[100px] before:bg-[#FBBC05] text-black font-semibold text-[6vw] md:text-[36px] gap-2 before:absolute before:-skew-x-[20deg] before:w-full before:h-full before:border before:border-black after:absolute after:top-px after:left-px after:h-[calc(100%-2px)] after:bg-white after:w-0 after:z-0 hover:after:w-[calc(100%-2px)] after:transition-[width] after:duration-200 after:-skew-x-[20deg]"
            >
              <div className="flex justify-center items-center relative gap-2.5 z-10">
                <span>今すぐ診断</span>
                <img src="/assets/images/arrow-black.svg" alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kiro;
