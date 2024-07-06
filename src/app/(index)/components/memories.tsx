'use client'
import Button from '@/components/button'
import { useModal } from '@/context/ModalContext'
import useScrollAnimations from '@/hooks/useScrollAnimations'

const Memories = () => {
  const ref = useScrollAnimations()
  const { openModal } = useModal()
  return (
    <section ref={ref} className="overflow-hidden pb-24 md:pb-[150px]">
      <div className="bg-[url('/assets/images/bg-memories.png')] bg-[length:100%_auto] bg-top bg-no-repeat">
        <div className="fade-up relative flex h-[130px] items-center bg-[url('/assets/images/bg-title-05.png'),linear-gradient(90deg,_#FF5A78_0%,_#7E1373_100%)] bg-[length:auto_100%] bg-[position:center_left_-70px,center] bg-no-repeat max-dt:pl-[361px] max-md:flex-col max-md:justify-center max-md:px-5 max-md:py-10 md:h-[197px] md:bg-cover md:bg-left-bottom dt:justify-center">
          <p className="w-full font-serif text-[clamp(14px,3.8vw,20px)] font-black text-white max-md:text-center md:max-w-[51.389vw] md:text-[2.708vw] dt:max-w-[740px] dt:text-[39px]">
            愛するペットとの &quot;おもいで&quot; を <br />
            風化させないために、&quot;今&quot;できること
          </p>
          <span className="bottom-4 right-4 max-md:mt-5 max-md:hidden max-md:w-full md:absolute dt:right-28">
            <img
              className="ml-auto w-[50vw] md:w-[25.069vw] dt:w-[361px]"
              src="/assets/images/sign-title-01.png"
              alt=""
            />
          </span>
        </div>
        <div className="px-5 pb-5 pt-[100px] md:pt-[190px]">
          <div className="flex flex-col items-center justify-center">
            <figure className="show">
              <img src="/assets/images/memories-text_01.png" alt="" />
            </figure>
            <figure className="show">
              <img src="/assets/images/memories-text_02.png" alt="" />
            </figure>
            <figure className="show">
              <img src="/assets/images/memories-text_03.png" alt="" />
            </figure>
            <figure className="show relative">
              <span className="absolute left-[70px] top-[20px] md:left-[160px]">
                <img
                  className="max-md:w-full max-md:max-w-[440px]"
                  src="/assets/images/bg-memories-text.png"
                  alt=""
                />
              </span>
              <img
                className="relative"
                src="/assets/images/memories-text_04.png"
                alt=""
              />
            </figure>
          </div>
          <div className="show relative mt-[120px] text-center font-serif text-[16px] font-bold leading-[1.7] text-[#333] md:mt-[270px] md:text-[24px]">
            ペットとの“おもいで”を <br />
            もっと生き生きと残せる方法があったら...
            <br />
            ペットロスの悲しみを和らげ、
            <br />
            癒しをもたらしてくれる方法があったら..
          </div>
          <div className="show u-text-gradient mt-16 animate-[hue_10s_infinite_linear] text-center font-serif text-[28px] font-bold leading-[1.7] md:mt-[90px] md:text-[52px]">
            そんな奇跡を <br />
            『メタでペット供養』 <br />
            が実現します。
          </div>
        </div>
      </div>
      <div className="bg-white bg-[url('/assets/images/bg-memories-02-sp.png')] bg-cover bg-top px-5 pt-[150px] md:bg-[url('/assets/images/bg-memories-02.png')] md:pt-[200px]">
        <div className="mx-auto w-full max-w-[1130px]">
          <h3 className="mb-[30px] md:mb-[60px]">
            <img
              className="max-md:w-[400px] max-md:w-full"
              src="/assets/images/memories-title.png"
              alt=""
            />
          </h3>
          <div className="fade-up relative bottom-[-60px] mx-auto w-full max-w-[440px] rounded-[32px] border-[3px] border-white bg-[linear-gradient(155deg,_#CFE449_-20.55%,_#53A63E_119.29%)] pb-5 md:bottom-[-120px] md:max-w-[910px] md:rounded-[63px] md:border-[6px] md:pb-[34px]">
            <div className="flex gap-2 px-4 max-md:ml-[-40px] max-md:justify-center">
              <figure className="relative -mt-8 md:-mt-12">
                <img
                  className="max-md:w-[110px]"
                  src="/assets/images/circle.png"
                  alt=""
                />
                <img
                  className="absolute inset-0 animate-[fadeIn_1s_ease_infinite] max-md:w-[110px]"
                  src="/assets/images/circle-c.png"
                  alt=""
                />
              </figure>
              <div className="flex-1 pt-2 md:pt-9">
                <h3 className="">
                  <img
                    className="max-md:hidden max-md:w-full max-md:max-w-[400px]"
                    src="/assets/images/title.png"
                    alt="メモリアルモニター受付中 !!"
                  />
                  <img
                    className="max-md:w-full max-md:max-w-[240px] md:hidden"
                    src="/assets/images/title-sp.png"
                    alt="メモリアルモニター受付中 !!"
                  />
                </h3>
                <p className="pt-4 font-zen text-[16px] font-black max-md:ml-[-75px] md:pt-5 md:text-[20px]">
                  今ならモニターとしての参加で、先行利用特典や初期費用・
                  年会費の割引クーポンをご提供！供養の新たな選択肢に魅力を感じるあなたを全面的にバックアップいたします。
                </p>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-center gap-5 px-4 max-md:flex-col md:mt-7 md:gap-8">
              <Button
                onclick={openModal}
                rect="flex md:w-[328px] w-[280px] md:h-[98px] h-20 bg-[#0176FF] items-center justify-center rounded-[60px] border-2 border-white"
              >
                <span>
                  <img
                    className="max-md:w-14"
                    src="/assets/images/ic-btn-01.png"
                    alt=""
                  />
                </span>
                <span className="text-[16px] font-extrabold md:text-[19px] ">
                  メモリアルモニター <br />
                  として参加する
                </span>
              </Button>
              <Button
                href="/price"
                rect="flex md:w-[328px] w-[280px] md:h-[98px] h-20 bg-[#BB66FF] items-center justify-center rounded-[60px] border-2 border-white"
              >
                <span>
                  <img
                    className="max-md:w-14"
                    src="/assets/images/ic-btn-02.png"
                    alt=""
                  />
                </span>
                <span className="text-[16px] font-extrabold md:text-[19px] ">
                  メモリアルモニター <br />
                  の詳細が知りたい
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Memories
