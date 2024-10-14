"use client";
import useScrollAnimations from "@/hooks/useScrollAnimations";
import { ReactNode, useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "@/components/button";
import UnderlineText from "@/components/underlineText";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

const Item = ({
  step,
  title,
  list,
  children,
  rect,
}: {
  step: string;
  title: string;
  list: string[];
  children: ReactNode;
  rect?: string;
}) => (
  <div
    className={`${rect} step-item absolute inset-0 w-[320px] md:w-[657px] h-[434px] max-md:flex-col bg-white border border-black rounded-[51px] pt-5 md:pt-[34px] md:pb-[42px] pb-6 flex`}
  >
    <div className="md:w-[225px] md:border-r border-black flex items-center justify-center">
      <img className="max-md:h-20" src={step} alt="" />
    </div>
    <div className="flex-1 pr-4 md:pr-8 pl-4 flex flex-col justify-between">
      <div className="">
        <h5 className="md:text-[26px] text-[18px] font-bold">{title}</h5>
        <div className="mt-2">
          {list.map((item, index) => (
            <p
              className="flex md:text-[19px] text-[14px] font-medium"
              key={index}
            >
              <span>・</span>
              <span>{item}</span>
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-end">{children}</div>
    </div>
  </div>
);

const Steps = () => {
  const ref = useScrollAnimations();
  const stepsRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      if (stepsRef.current) {
        const stepItems = stepsRef.current.querySelectorAll(".step-item");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stepsRef.current,
            pin: true,
            start: "top top",
            end: "+=4000",
            scrub: true,
          },
        });

        stepItems.forEach((item, index) => {
          tl.to(
            item,
            {
              y: "-100vh",
              rotate: "-3deg",
              duration: 1,
              ease: "power2.out",
            },
            index * 0.5
          );
        });
      }
    });

    return () => ctx.revert();
  }, []);
  return (
    <section ref={ref} className="relative bg-[#C5E1E5] overflow-hidden ">
      <div className="w-full mx-auto md:pt-[84px] pt-[60px] overflow-hidden ">
        <div className="w-full max-w-[834px] mx-auto px-5">
          <h3 className="fade-up flex md:text-[42px] text-[24px] font-black leading-[1.3] relative tracking-[-0.018em]">
            7ステップ、10クリック、<UnderlineText>3分で広告出稿。</UnderlineText>
          </h3>
          <p className="fade-up text-[16px] md:text-[23px] font-bold mt-2">
            用意するのはLPのURLとGoogle広告アカウントだけ。
          </p>
        </div>
        <div
          ref={stepsRef}
          className="md:py-24 py-14 w-full h-screen bg-[url('/assets/images/step-number.svg')] max-md:bg-[length:160px_auto] bg-right-bottom bg-no-repeat max-md:px-5 flex flex-col justify-center"
        >
          <div className="bg-[url('/assets/images/step-bg.svg')] max-md:bg-[length:100%_100%] bg-no-repeat bg-center pb-4">
            <div className="relative w-[320px] md:w-[657px] h-[434px] mx-auto">
              <Item
                rect="z-[10] rotate-[2deg]"
                step="/assets/images/step-01.svg"
                title="Google広告アカウント連携"
                list={[
                  "ボタン「Googleアカウント連携」をクリックしてください。",
                ]}
              >
                <img src="/assets/images/step-img-01.png" alt="" />
              </Item>
              <Item
                rect="z-[9] rotate-[4deg]"
                step="/assets/images/step-02.svg"
                title="広告運用の基本方針を選択"
                list={[
                  "好きな基本方針をクリックしてください。",
                  "ボタン「次へ」をクリックしてください。",
                ]}
              >
                <img src="/assets/images/step-img-02.png" alt="" />
              </Item>
              <Item
                rect="z-[8] rotate-[1deg]"
                step="/assets/images/step-03.svg"
                title="広告を出したLPのURLを貼り付ける"
                list={[
                  "URL入力欄にLPのURLを貼りけてください。",
                  "ボタン「次へ」をクリックしてください。",
                ]}
              >
                <img src="/assets/images/step-img-03.png" alt="" />
              </Item>
              <Item
                rect="z-[7] rotate-[3deg]"
                step="/assets/images/step-04.svg"
                title="あなたの正解広告エージェントが誕生！"
                list={[
                  "URL入力欄にLPのURLを貼りけてください。",
                  "ボタン「次へ」をクリックしてください。",
                ]}
              >
                <img src="/assets/images/step-img-04.png" alt="" />
              </Item>
              <Item
                rect="z-[6] rotate-[0deg]"
                step="/assets/images/step-05.svg"
                title="広告予算と出稿期間を設定"
                list={[
                  "広告予算と出稿期間を設定してください。",
                  "ボタン「次へ」をクリックしてください。",
                ]}
              >
                <img src="/assets/images/step-img-05.png" alt="" />
              </Item>
              <Item
                rect="z-[5] rotate-[-1deg]"
                step="/assets/images/step-06.svg"
                title="広告審査"
                list={[
                  "設定情報をもとにAIが複雑な広告設定を完了。",
                  "審査中はあなたのLPの内容をフィードバック。",
                ]}
              >
                <img src="/assets/images/step-img-06.png" alt="" />
              </Item>
              <Item
                rect="z-[4] rotate-[-2deg] !bg-[#FFFCE0]"
                step="/assets/images/step-07.svg"
                title="おめでとうございます！"
                list={[
                  "たったこれだけで広告出稿スタート。",
                  "24時間365日体制で本物のコンバージョンをあなたにもたらせるよう頑張ります！",
                  "ところでお客様が押し寄せる準備はできていますか？",
                ]}
              >
                <img src="/assets/images/step-img-07.png" alt="" />
              </Item>
            </div>
          </div>
          <div className="flex justify-center md:mt-20 mt-12">
            <Button href="/">ステップ4で待ってます</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
