'use client'
import Button from '@/components/button'
import { useModal } from '@/context/ModalContext'
import useScrollAnimations from '@/hooks/useScrollAnimations'
import Banner from './banner'

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
      <div className="bg-white bg-[url('/assets/images/bg-memories-02-sp.png')] bg-cover bg-top md:px-5 pt-[150px] md:bg-[url('/assets/images/bg-memories-02.png')] md:pt-[200px]">
        <div className="mx-auto w-full max-w-[1130px]">
          <h3 className="mb-[30px] md:mb-[60px] max-md:px-5">
            <img
              className="max-md:w-[400px] max-md:w-full"
              src="/assets/images/memories-title.png"
              alt=""
            />
          </h3>
          <div className="fade-up relative bottom-[-60px] px-5 w-full max-md:mx-auto max-md:max-w-[440px] pb-5 md:bottom-[-120px] md:pb-[34px]">
          <Banner />

          </div>
        </div>
      </div>
    </section>
  )
}

export default Memories
