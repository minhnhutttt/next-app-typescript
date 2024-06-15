"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";

const Message = () => {
  const ref = useScrollAnimations();
  return (
    <section ref={ref} className="overflow-hidden md:pt-[120px] pt-[60px]">
      <div className="bg-[url('/assets/images/bg-message.png')] xl:bg-[length:100%_100%] bg-cover bg-no-repeat md:pt-[120px] pt-[60px] px-5">
        <div className="fade-up w-full max-w-[705px] mx-auto rounded-[20px] bg-white/70 md:pt-8 pt-6 pb-5 bg-[url('/assets/images/osenkou.png')] bg-no-repeat bg-[bottom_38px_right_68px] px-5">
          <p className="text-center md:text-[22px] text-[17px] font-bold [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
            【追　伸】
            <br />
            ここまでお読みいただいた方限定特典のご案内
            <br />
            <span className="text-gradient-01">
              ー ペットちゃんを弔うお線香アイテムが一生涯無料に ー
            </span>
          </p>
          <p className="md:text-[16px] text-[13px] font-medium w-full max-w-[600px] mx-auto mt-10 leading-[1.3]">
            現在「お線香をあげる」という体験を開発中です。
            <br />
            <br />
            <span className="bg-[linear-gradient(to_top,_#FFD84C_25%,_transparent_25%)]">
              仮想の線香を手に取り、ペットの霊前で線香に火を灯します。リアルな線香の煙の動きも表現され、故ペットを弔う体験を提供します。
            </span>
            <br />
            <br />
            お線香はバーチャル空間上で使用するアイテムみたいなものですので、現実でお線香を買うように消耗品として毎回購入が必要になりますが、
            <br />
            <br />
            <span className="bg-[linear-gradient(to_top,_#FFD84C_25%,_transparent_25%)]">
              このページからお申し込みいただいた方は、このお線香アイテムの費用を当社が「一生涯」負担いたします。
            </span>
            真剣に向き合うあなた様を応援させてください。
            <br />
            <br />
            <span className="md:text-[12px] text-[10px]">
              ※お申込み後に「お線香特典希望」とスタッフへお伝えください。
            </span>
          </p>
        </div>

        <div className="fade-up px-5 mt-10">
          <div className="flex justify-center items-center flex-col">
            <p className="md:text-[22px] text-[16px] font-black text-center [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] tracking-[0.2em] mb-4">
              お線香が一生涯無料
            </p>
            <figure>
              <img src="/assets/images/line-title-02.png" alt="" />
            </figure>
            <a
              href="/"
              className="flex items-center justify-center md:w-[500px] w-[320px] h-20 md:h-[114px] gradient-03 [box-shadow:0px_0px_40px_0px_rgba(100,_0,_136,_0.20)] border border-white rounded-[70px] md:text-[22px] text-[17px] font-bold text-white gap-3 duration-150 hover:opacity-75"
            >
              <figure>
                <img
                  className="md:size-[73px] size-[50px]"
                  src="/assets/images/ic-btn-01.png"
                  alt=""
                />
              </figure>
              <span>
                メモリアルモニター
                <br className="md:hidden" />
                に応募する
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex md:pt-16 pt-12">
        <img className="w-full" src="/assets/images/img-message.png" alt="" />
      </div>
    </section>
  );
};

export default Message;
