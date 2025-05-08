'use client'
import { gsap } from "gsap";
import LineButton from '@/components/lineButton'
import Title from '@/components/title'
import useScrollAnimations from '@/hooks/useScrollAnimations'
import { useRef } from 'react'

const Introduction = () => {
  const ref = useScrollAnimations()
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const arrowRef = useRef(null);
  const triangleRef = useRef(null);
  const isClosedRef = useRef(true);
  const handleExpanderClick = () => {
    const $content = contentRef.current;
    const $arrow = arrowRef.current;
    const $title = titleRef.current;
    const $triangle = triangleRef.current;
    if (isClosedRef.current) {
      gsap.set($content, { height: "auto" });
      gsap.from($content, { duration: 0.2, height: 0 });
      gsap.to($title, { duration: 0.2, yPercent: 100 });
      gsap.to($triangle, { duration: 0.2, yPercent: 100, opacity: 1 });
      gsap.to($arrow, { duration: 0.1, rotation: 0 });
    } else {
      gsap.to($content, { duration: 0.2, height: 0 });
      gsap.to($title, { duration: 0.2, yPercent: 0 });
      gsap.to($triangle, { duration: 0.2, yPercent: 0, opacity: 0 });
      gsap.to($arrow, {
        duration: 0.1,
        rotation: -90,
        transformOrigin: "center",
      });
    }
    isClosedRef.current = !isClosedRef.current;
  };
  return (
    <section ref={ref} className="px-5 pt-10 md:pt-[52px]">
      <div className="fade-up flex justify-center">
        <a
          href="https://17.live/s/u/9ef2c16f-e1cc-49c6-b4f0-0bf6c6c60089"
          target="_blank"
          className="relative flex h-[95px] w-full max-w-[315px] flex-col items-center justify-center overflow-hidden rounded-[10px] p-0.5 duration-150 [box-shadow:0px_4px_40px_0px_rgba(255,_125,_211,_0.20)] hover:opacity-80"
        >
          <span className="absolute h-[500px] w-[500px] animate-[border-animation_5s_linear_infinite] overflow-hidden rounded-[10px] bg-[conic-gradient(_transparent_0%12.5%,_transparent_12.5%25%,_#FF7DD3_25%37.5%,_#FF7DD3_37.5%50%,_transparent_50%62.5%,_transparent_62.5%75%,_#3CE8FF_75%87.5%,_#3CE8FF_87.5%100%_)]"></span>
          <div className="relative h-full w-full overflow-hidden rounded-[10px] bg-white bg-[linear-gradient(90deg,_rgba(255,125,211,1)_0%,_rgba(60,232,255,1)_100%)] p-px">
            <div className="relative h-full w-full  bg-white pt-4">
              <h4 className="text-center text-[20px] font-bold tracking-widest md:text-[24px]">
                .mike.ꪔ̤
              </h4>
              <p className="text-center text-[14px] font-black text-[#3CE8FF] md:text-[16px]">
                プロフィールはこちら
              </p>
            </div>
          </div>
        </a>
      </div>
      <div className="md:pt-[60px] pt-10">
        <div className="h-[5px] bg-[linear-gradient(90deg,_#FF7DD3_0%,_#3CE8FF_100%)]"></div>
        <div className="md:pt-[76px] pt-[50px]">
          <div className="fade-up relative mx-auto flex w-full max-w-[414px] pb-[36px]">
            <div className="absolute md:top-[-75px] top-[-55px] left-0">
              <img
                className="max-md:w-[90px]"
                src="/assets/images/crown.svg"
                alt=""
              />
            </div>
            <h4>
              <img src="/assets/images/top-1-title.svg" alt="全日本1位を獲得" />
            </h4>
          </div>
        </div>
        <div>
          <video autoPlay muted loop playsInline preload="auto" className="">
            <source
              src="/assets/videos/Goodfellows_17LIVE_no1.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="md:py-[47px] py-8">
          <button
            className="flex justify-between gap-5 w-full border border-[#D2953F] bg-[url(/assets/images/bg-top.png)] bg-cover bg-no-repeat relative"
            onClick={handleExpanderClick}
          >
            <div className="overflow-hidden flex-1">
            <h5 ref={titleRef} className="text-left md:text-[18px] text-[16px] font-bold leading-[1.3] p-2">
              このたび開催されました、『戦国時代天下布武!!
              エージェンシー合戦!!!』 において、弊社は
              全国第１位 という栄誉ある賞を賜りました。
            </h5>
            </div>
            <div className="bg-[#FFC9C9] flex justify-center items-center md:w-20 w-12">
              <span className="w-4 h-0.5 bg-black"></span>
              <span
                ref={arrowRef}
                className="w-4 h-0.5 bg-black absolute rotate-90"
              ></span>
            </div>
            <span ref={triangleRef} className="absolute opacity-0 -translate-y-full top-full left-10 aspect-[3/2] w-[30px] bg-[url(/assets/images/bg-top-arrow.png)] bg-cover"></span>
          </button>
          <div ref={contentRef} className="overflow-hidden h-0 bg-[url(/assets/images/bg-cup.png)] bg-cover bg-no-repeat text-[16px] md:text-[20px] font-medium">
          <p className="px-3 py-10">
            このたび開催されました、
            <br />
            『戦国時代天下布武!! エージェンシー合戦!!!』 において、弊社は
            全国第１位 という栄誉ある賞を賜りました。
            <br />
            <br />
            この快挙は、日々配信に全力で取り組んでくださるライバーの皆さま、
            <br />
            温かい応援をお寄せくださるリスナーの皆さま、
            <br />
            そして 17LIVE を陰で支えてくださる運営スタッフの皆さま
            のご支援の賜物にほかなりません。
            <br />
            <br />
            心より御礼申し上げます。
            <br />
            <br />
            今後とも、微力ながら17LIVE及びライブ配信業界の発展に寄与すべく精進してまいる所存でございます。
            <br />
            <br />
            引き続き、皆さまのご指導ご鞭撻とご支援を賜りますよう、何卒よろしくお願い申し上げます。
            <br />
            <br />
            皆さま本当にありがとうございました！！
            </p>
          </div>
        </div>
        <div className="h-[5px] bg-[linear-gradient(90deg,_#FF7DD3_0%,_#3CE8FF_100%)]"></div>
      </div>
      <div className="mt-8 md:hidden">
        <LineButton />
      </div>
      <div className="py-10 font-bold leading-[1.2] md:py-[60px]">
        <h4 className="fade-up flex items-center justify-center">
          <img src="/assets/images/17live-logo.svg" alt="" />
        </h4>
        <p className="fade-up text-center text-[24px] md:text-[42px]">
          公認パートナー
        </p>
        <p className="fade-up mt-5 text-center text-[20px] tracking-widest md:mt-7 md:text-[32px]">
          所属ライバーが
          <br />
          累計3000人を突破 !!
        </p>
        <p className="fade-up mt-9 text-center text-[20px] tracking-widest md:mt-14 md:text-[32px]">
          ライバーになりたい方
          <br />
          随時募集中 !
        </p>
      </div>
      <div className="mt-4">
        <Title>Good Fellows とは</Title>
        <p className="fade-up mx-auto w-full max-w-[425px] py-5 text-[15px] md:text-[18px]">
          17LIVEにおいてOfficial Business Partnerの最高ランクである【Gold
          Partner】及び【Silver
          Partner】に認定された実績を持ち、所属累計は3000名以上。育成実績日本一の実績を持つ17LIVEを代表するトップ事務所です。
        </p>
      </div>
    </section>
  )
}

export default Introduction
