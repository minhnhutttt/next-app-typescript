"use client";
import Button from "@/components/button";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Memories = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="overflow-hidden md:pb-[150px] pb-24">
      <div className="bg-[url('/assets/images/bg-memories.png')] bg-[length:100%_auto] bg-top bg-no-repeat">
      <div className="fade-up bg-[url('/assets/images/bg-title-05.png'),linear-gradient(90deg,_#FF5A78_0%,_#7E1373_100%)] bg-[length:auto_100%] md:bg-cover bg-no-repeat bg-[position:center_left_-70px,center] md:bg-left-bottom h-[130px] md:h-[197px] relative flex items-center max-dt:pl-[361px] max-md:justify-center dt:justify-center max-md:px-5 max-md:flex-col max-md:py-10">
        <p className="font-serif text-white font-black md:text-[2.708vw] dt:text-[39px] text-[clamp(14px,3.8vw,20px)] w-full md:max-w-[51.389vw] dt:max-w-[740px] max-md:text-center">
            愛するペットとの &quot;おもいで&quot; を <br />
            風化させないために、&quot;今&quot;できること
        </p>
        <span className="md:absolute bottom-4 right-4 dt:right-28 max-md:w-full max-md:mt-5 max-md:hidden">
          <img
            className="dt:w-[361px] md:w-[25.069vw] w-[50vw] ml-auto"
            src="/assets/images/sign-title-01.png"
            alt=""
          />
        </span>
      </div>
      <div className="px-5 md:pt-[190px] pt-[100px] pb-5">
        <div className="flex justify-center flex-col">
            <figure className="fade-up">
                <img src="/assets/images/memories-text_01.png" alt="" />
            </figure>
            <figure className="fade-up">
                <img src="/assets/images/memories-text_02.png" alt="" />
            </figure>
            <figure className="fade-up">
                <img src="/assets/images/memories-text_03.png" alt="" />
            </figure>
            <figure className="fade-up">
                <img src="/assets/images/memories-text_04.png" alt="" />
            </figure>
        </div>
        <div className="text-center font-serif md:text-[24px] text-[16px] font-bold text-[#333] mt-[120px] md:mt-[270px] leading-[1.7]">
            ペットとの“おもいで”を <br />
            もっと生き生きと残せる方法があったら...<br />
            ペットロスの悲しみを和らげ、<br />
            癒しをもたらしてくれる方法があったら..
        </div>
        <div className="text-center font-serif md:text-[52px] text-[28px] font-bold md:mt-[90px] mt-16 leading-[1.7] u-text-gradient animate-[hue_10s_infinite_linear]">
            そんな奇跡を <br />
            『メタでペット供養』 <br />
            が実現します。
        </div>
      </div>
      </div>
      <div className="md:bg-[url('/assets/images/bg-memories-02.png')] bg-[url('/assets/images/bg-memories-02-sp.png')] bg-cover bg-top md:pt-[200px] pt-[150px] px-5 bg-white">
        <div className="w-full max-w-[1130px] mx-auto">
            <h3 className="md:mb-[60px] mb-[30px]">
                <img className="max-md:w-[400px] max-md:w-full" src="/assets/images/memories-title.png" alt="" />
            </h3>
            <div className="relative md:bottom-[-120px] bottom-[-60px] fade-up w-full md:max-w-[910px] max-w-[440px] mx-auto md:border-[6px] border-[3px] border-white md:rounded-[63px] rounded-[32px] bg-[linear-gradient(155deg,_#CFE449_-20.55%,_#53A63E_119.29%)] md:pb-[34px] pb-5">
            <div className="flex px-4 gap-2 max-md:flex-col">
            <figure className="md:-mt-12 -mt-8 relative">
              <img
                className="max-md:w-[130px]"
                src="/assets/images/circle.png"
                alt=""
              />
              <img
                className="max-md:w-[130px] absolute inset-0 animate-[fadeIn_1s_ease_infinite]"
                src="/assets/images/circle-c.png"
                alt=""
              />
            </figure>
                <div className="flex-1 md:pt-9 pt-2">
                <h3 className="">
                    <img
                    className="max-md:w-full max-md:max-w-[400px]"
                    src="/assets/images/title.png"
                    alt="メモリアルモニター受付中 !!"
                    />
                </h3>
                <p className="md:text-[20px] text-[16px] font-black md:pt-5 pt-3 font-zen">
                    今ならモニターとしての参加で、先行利用特典や初期費用・
                    年会費の割引クーポンをご提供！供養の新たな選択肢に魅力を感じるあなたを全面的にバックアップいたします。
                </p>
                </div>
            </div>
            <div className="flex justify-center md:gap-8 gap-5 md:mt-7 mt-5 max-md:flex-col items-center px-4">
                <Button
                href="#"
                rect="flex md:w-[328px] w-[280px] md:h-[98px] h-20 bg-[#0176FF] items-center justify-center"
                >
                <span>
                    <img
                    className="max-md:w-14"
                    src="/assets/images/ic-btn-01.png"
                    alt=""
                    />
                </span>
                <span className="md:text-[19px] text-[16px] font-extrabold ">
                    メモリアルモニター <br />
                    として参加する
                </span>
                </Button>
                <Button
                href="/price"
                rect="flex md:w-[328px] w-[280px] md:h-[98px] h-20 bg-[#BB66FF] items-center justify-center"
                >
                <span>
                    <img
                    className="max-md:w-14"
                    src="/assets/images/ic-btn-02.png"
                    alt=""
                    />
                </span>
                <span className="md:text-[19px] text-[16px] font-extrabold ">
                    メモリアルモニター <br />
                    の詳細が知りたい
                </span>
                </Button>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Memories;
