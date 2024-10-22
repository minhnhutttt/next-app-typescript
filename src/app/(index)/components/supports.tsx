"use client";
import UnderlineText from "@/components/underlineText";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});
const Item = ({title, text}: {title: string, text: string}) => (
  <div className=" fade-up flex w-full gap-1 md:w-1/2 mb-2.5">
    <div className="md:text-[14px] text-[17px] fot-bold">❌</div>
    <div className="flex-1">
      <p className="md:text-[14px] text-[17px] font-bold">{title}</p>
      <p className="text-[12px] font-medium">{text}</p>
    </div>
  </div>
)

const Supports = () => {
  const supportRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const container = document.getElementById("rippleContainer");
    if (!container) return;

    const hexagons = container.querySelectorAll(".hexagon");
    const hexagonElements = Array.from(hexagons);

    const ripple = (target: HTMLElement) => {
      if (container.classList.contains("show-ripple")) {
        return;
      }
      const targetRect = target.getBoundingClientRect();
      const data = hexagonElements
        .map((element: any) => {
          const rect = element.getBoundingClientRect();
          const centerX = rect.x + rect.width / 2;
          const centerY = rect.y + rect.height / 2;
          const distance = Math.round(
            Math.sqrt(
              Math.pow(rect.x - targetRect.x, 2) +
                Math.pow(rect.y - targetRect.y, 2)
            )
          );
          return { element, rect, centerX, centerY, distance };
        })
        .sort((a, b) => (a.distance > b.distance ? 1 : -1));

      const [max] = data.slice(-1);
      data.forEach((item) =>
        item.element.style.setProperty(
          "--ripple-factor",
          `${(item.distance * 100) / max.distance}`
        )
      );
      container.classList.toggle("show-ripple");
      const cleanUp = () => {
        requestAnimationFrame(() => {
          container.classList.remove("show-ripple");
          data.forEach((item) =>
            item.element.style.removeProperty("--ripple-factor")
          );
          max.element.removeEventListener("animationend", cleanUp);
        });
      };
      max.element.addEventListener("animationend", cleanUp);
    };
    ScrollTrigger.create({
      trigger: supportRef.current,
      start: "top top",
      once: true, 
      onEnter: () => {
        ripple(hexagonElements[0] as HTMLElement);
      },
    });
    hexagons.forEach((hexagon) => {
      hexagon.addEventListener("click", () => {
        ripple(hexagon as HTMLElement);
      });
    });


    setTimeout(() => {
      ripple(hexagonElements[0] as HTMLElement);
      setTimeout(() => {
        setTimeout(() => {
          ripple(hexagonElements[0] as HTMLElement);
        }, 600);
      }, 900);
    }, 300);

    return () => {
      hexagons.forEach((hexagon) =>
        hexagon.removeEventListener("click", () => {
          ripple(hexagon as HTMLElement);
        })
      );
    };
  }, []);
  
  return (
    <section ref={supportRef} className="relative px-5 md:pt-[170px] pt-[100px] md:pb-[140px] pb-[80px] border-b border-[#838383]">
      <div className="w-full max-w-[793px] mx-auto">
          <div className="flex justify-center max-lg:px-5">
            <div>
                <h3 className="fade-up md:text-[42px] text-[22px] font-black leading-[1.3] relative tracking-[-0.018em]">
                多業界対応。もちろん<UnderlineText>あなたの業界も</UnderlineText>
                </h3>
                <p className="fade-up text-[16px] md:text-[23px] font-bold mt-2">
                クオリティアップに業界特化が必要なのは人間だけ。
                </p>
            </div>
          </div>
          <div className="fade-up flex flex-col mt-10 md:mt-12">
            
            <div className="relative flex justify-center rippleContainer z-10 max-md:mt-[10%] max-md:mb-[30%]" id="rippleContainer">
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[44%] md:left-[48%] md:top-[-1%] top-[-10%] text-[#DF3939]/[0.8] border-[#E66161]">不動産仲介業</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 md:left-[34%] left-[20%] md:top-[4%] top-[-2%] text-[#FF6C1D]/[0.8] border-[#FF6C1D]">美容院・理髪店</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 md:left-[55%] left-[57%] md:top-[4%] top-[-2%] text-[#DC9004]/[0.8] border-[#DC9004]">歯科医院</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30  left-[37%] md:top-[9%] top-[5%] text-[#DC9004]/[0.8] border-[#DC9004]">整骨院・接骨院</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 md:left-[26%] left-[20%] md:top-[11%] top-[10%] text-[#9AA000]/[0.8] border-[#9AA000]">学習塾</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[38%] md:left-[42%] md:top-[14%] top-[12%] text-[#289D34]/[0.8] border-[#289D34]">飲食店</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[56%] md:left-[53%] md:top-[14%] top-[12%] text-[#FF6C1D]/[0.8] border-[#FF6C1D]">エステサロン</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[5%] md:left-[20%] md:top-[19%] top-[18%] text-[#269E78]/[0.8] border-[#269E78]">法律事務所</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30  md:left-[36%] left-[30%] md:top-[20%] top-[19%] text-[#269E78]/[0.8] border-[#269E78]">税理士事務所</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[60%] md:left-[54%] md:top-[20%] top-[19%] text-[#0C749D]/[0.8] border-[#0C749D]">自動車販売店</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[25%] md:left-[36%] top-[25.5%] text-[#1B41B3]/[0.7] border-[#0C309D]">家電量販店</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[52%] top-[25.5%] text-[#1B41B3]/[0.7] border-[#0C309D]">ホテル・旅館</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[0%] md:left-[9%] md:top-[31%] top-[32%] text-[#8E6CEB] border-[#8E6CEB]">フィットネスクラブ</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[38%] md:left-[35%] md:top-[31%] top-[32%] text-[#0DA40F]/[0.8] border-[#0DA40F]">工務店</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.2vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[54%] md:left-[47%] md:top-[31%] top-[32%] text-[#DC9004]/[0.8] border-[#DC9004]">内科・小児科クリニック</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[60%] md:left-[76%] md:top-[34%] top-[46%] text-[#686B6C]/[0.8] border-[#686B6C]">ペットショップ</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 md:left-[14%] left-[1%] md:top-[35.8%] top-[39%] text-[#4E32DB]/[0.8] border-[#694DF2]">結婚式場</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[20%] md:left-[28%] md:top-[35.8%] top-[39%] text-[#694DF2]/[0.8] border-[#4E32DB]">葬儀社</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[36%] md:left-[40%] md:top-[35.8%] top-[39%] text-[#9AA000]/[0.8] border-[#9AA000]">塾・予備校</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[60%] md:left-[56%] md:top-[35.8%] top-[39%] text-[#0C749D]/[0.8] border-[#0C749D]">中古車販売店</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[10%] md:left-[34%] md:top-[40.7%] top-[46%] text-[#1B41B3]/[0.8] border-[#0C309D]">家具・インテリアショップ</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30  left-[6%] md:top-[43%] top-[53%] text-[#1B41B3]/[0.8] border-[#0C309D]">アパレルショップ</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30  left-[40%] md:left-[46%] md:top-[46%] top-[55%] text-[#0DA40F]/[0.8] border-[#0DA40F]">リフォーム会社</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[70%] md:left-[67%] md:top-[44%] top-[53%] text-[#BA1E3D]/[0.9] border-[#DF2C35]">写真スタジオ</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[1%] md:left-[21%] md:top-[51.5%] top-[62%] text-[#952269]/[0.8] border-[#952269]">旅行代理店</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[24%] md:left-[37%] md:top-[51.5%] top-[62%] text-[#AB5D6C]/[0.9] border-[#AB5D6C]">引越し業者</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[47%] md:left-[53%] md:top-[51.5%] top-[62%] text-[#A71633]/[0.8] border-[#A71633]">保険代理店</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.2vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[70%] md:left-[70%] md:top-[51.5%] top-[62%] text-[#DF3939]/[0.8] border-[#E66161]">不動産管理会社</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[0%] md:left-[5%] md:top-[57%] top-[69%] text-[#FF6C1D]/[0.8] border-[#FF6C1D]">ネイルサロン</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[27%]  md:left-[23%] md:top-[57%] top-[69%] text-[#FF6C1D]/[0.8] border-[#FF6C1D]">マッサージ店</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[54%] md:left-[41%] md:top-[57%] top-[69%] text-[#CA70DB] border-[#D853F0]">ヨガスタジオ</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[81%] md:left-[59%] md:top-[57%] top-[69%] text-[#CA70DB] border-[#D853F0]">ゴルフ場</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30  left-[72%] md:top-[59.5%] top-[76%] text-[#CA70DB] border-[#D853F0]">スキー場</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[12%] md:left-[20%] md:top-[62%] top-[77%] text-[#9AA000]/[0.8] border-[#9AA000]">英会話教室</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30  left-[36%] md:top-[62%] top-[77%] text-[#0C749D]/[0.8] border-[#0C749D]">自動車整備工場</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[26%] md:left-[30%] md:top-[67%] top-[84%] text-[#DC9004]/[0.8] border-[#DC9004]">薬局</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30  left-[39%] md:top-[67%] top-[84%] text-[#DC9004]/[0.8] border-[#DC9004]">眼科</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[52%] md:left-[48%] md:top-[67%] top-[84%] text-[#DC9004]/[0.8] border-[#DC9004]">皮膚科</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[34%] md:left-[41%] md:top-[72%] top-[92%] text-[#1B41B3]/[0.7] border-[#0C309D]">花屋</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[47%] md:left-[50%] md:top-[72%] top-[92%] text-[#1B41B3]/[0.7] border-[#0C309D]">楽器店</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[63%] md:left-[61%] md:top-[72%] top-[92%] text-[#1B41B3]/[0.7] border-[#0C309D]">スポーツ用品店</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[12%] md:left-[26%] md:top-[77%] top-[100%] text-[#9AA000]/[0.8] border-[#9AA000]">パソコン教室</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[40%] md:left-[45%] md:top-[77%] top-[100%] text-[#DC9004]/[0.8] border-[#DC9004]">介護サービス</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[68%] md:left-[64%] md:top-[77%] top-[100%] text-[#BA1E3D]/[0.9] border-[#DF2C35]">貸衣装店</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30  left-[38%] md:top-[83%] top-[107%] text-[#686B6C]/[0.8] border-[#686B6C]">ペットサロン</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30  left-[30%] md:top-[89%] top-[116%] text-[#1B41B3]/[0.8] border-[#0C309D]">靴屋</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30  left-[53%] md:top-[88%] top-[114%] text-[#BA1E3D]/[0.9] border-[#DF2C35]">クリーニング店</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30 left-[27%] md:left-[36%] md:top-[94%] top-[122%] text-[#1B41B3]/[0.8] border-[#0C309D]">時計・宝飾店</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30  left-[55%] md:top-[94%] top-[122%] text-[#1B41B3]/[0.8] border-[#0C309D]">文房具店</div>
                <div className="hexagon flex items-center bg-white justify-center font-black absolute rounded-[15px] border min-[860px]:text-[19px] md:text-[2.209vw] text-[3.4vw] px-[1.395vw] min-[860px]:px-3 md:h-[3.721vw] h-[5vw] min-[860px]:h-8 z-30  left-[48%] md:top-[100%] top-[129%] text-[#0C749D]/[0.8] border-[#0C749D]">カーディーラー</div>
                <figure className="fade-up max-[860px]:w-[92.209vw]">
                    <img src="/assets/images/globular.png" alt="" />
                </figure>
            </div>
          </div>
          <div className="md:mt-24 mt-16">
            <p className="text-center md:text-[23px] text-[17px] font-bold">※当然ですが念のため。禁止カテゴリー</p>
            <div className="flex flex-wrap w-full md:max-w-[550px] max-w-[350px] mx-auto mt-5 md:mt-8">
              <Item title="違法なモノやサービス" text="麻薬、盗品、偽造品、無許可の薬" />
              <Item title="ギャンブルと依存性の高いもの" text="違法カジノ、非公認ギャンブル、危険ドラッグ" />
              <Item title="大人向けの過激なコンテンツ" text="ポルノ、風俗店、アダルトグッズ" />
              <Item title="危険な製品やサービス" text="銃器、爆発物、違法な車両改造" />
              <Item title="詐欺や悪質商法" text="霊感商法、ネズミ講、誇大広告" />
              <Item title="他人の権利を侵害するもの" text="個人情報売買、著作権侵害品、盗撮器具" />
            </div>
          </div>
      </div>
    </section>
  );
};

export default Supports;
