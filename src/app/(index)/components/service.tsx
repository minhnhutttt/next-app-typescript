"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});
const data = [
  {
    id: "01",
    title:
      (<>御社とユーザーには<span className="text-black">モダン技術</span>が必要です。ウェブを通じた<span className="text-black">ユーザーとの対話を実装</span>しましょう。</>),
    label: "ウェブサイト制作",
    image: "/assets/images/service-05.svg",
    color: '#FFE1CB'
  },
  {
    id: "02",
    title:
      (<><span className="text-black">単なる情報発信</span>では、もう不十分です。ユーザーの行動を導く、<span className="text-black">直感的な体験</span>を。</>),
    label: "ランディングペイジ制作",
    image: "/assets/images/service-01.svg",
    color: '#d1ffff'
  },
  {
    id: "03",
    title:
      (<>成長の鍵は、<span className="text-black">効率化された業務環境</span>にあります。<span className="text-black">スピーディーな意思決定</span>を可能にするシステムを。</>),
    label: "システム開発",
    image: "/assets/images/service-04.svg",
    color: '#ffffc6'
  },
  {
    id: "04",
    title:
      (<>AI活用は、もはや選択肢ではありません。御社の<span className="text-black">強みを最大化</span>する、<span className="text-black">必然の一手</span>です。</>),
    label: "AI事業開発",
    image: "/assets/images/service-02.svg",
    color: '#e2c6ff'
  },
  {
    id: "05",
    title:
      (<>効果のない広告に、価値はありません。<span className="text-black">データと技術</span>で、<span className="text-black">確実な成果</span>を生み出します。</>),
    label: "広告運用",
    image: "/assets/images/service-03.svg",
    color: '#ffc6ff'
  },
];

const Service = () => {
  const animationRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".panel");
      const sliderContainer = sliderRef.current;
      const container = containerRef.current;
  
      if (!sliderContainer || !container) return;
  
      const panelWidths = panels.map((panel, index) => -panel.offsetWidth * index);
  
      panels.forEach((panel, index) => {
        gsap.set(panel, {left: panelWidths[index] + "px" });
      });
  
      const endValue = () => "+=" + sliderContainer.offsetWidth;
  
      gsap.to(panels, {
        left: 0,
        scrollTrigger: {
          trigger: animationRef.current,
          start: "top top",
        },
      });
  
      gsap.to(panels, {
        x: -sliderContainer.offsetWidth + window.innerWidth,
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          start: "center center",
          end: endValue,
        },
      });
    }, containerRef);
  
    return () => ctx.revert();
  }, []);
  
  
  
  

  return (
    <section ref={animationRef} className="md:pt-[9em] pt-[3em] overflow-hidden">
      <div className="md:px-[2em] px-[1em]">
      <div className="md:mb-[1em] text-[1em] font-medium uppercase text-gray-500">
        Services
      </div>
      <div className="mb-[2em] md:mb-[3em]">
        <h2 className="md:text-[3em] text-[1.3em] font-bold leading-[1.3]">
          新しい技術<span className="text-[#c4c4c4]">で作られるサービスは</span>世界のスタンダード<span className="text-[#c4c4c4]">に。</span>
          <br />
          古い技術<span className="text-[#c4c4c4]">のままでは</span>使いづらいサービスの代表格<span className="text-[#c4c4c4]">に。</span>
        </h2>
      </div>
      </div>
      <div ref={containerRef} className="flex items-center">
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex items-center w-[calc(((16em_*_5)_+_(4vw_*_4))_+_41vw)] gap-[4vw] md:w-[calc(((23.25em_*_5)_+_(3vw_*_4))_+_80vw)] mx-[10vw] md:gap-[3vw] my-[7rem] h-[60rem] md:max-h-[calc(100vh-10rem)] max-h-[calc(100vh-8rem)]"
          >
            {data.map((item, index) => (
              <div
                key={index}
                className="panel !w-[16em] md:!w-[23.25em] h-full relative overflow-hidden max-md:max-h-[550px]"
              >
                <div className="relative shake  rounded-[0.75em] w-full h-full" 
                style={{backgroundColor: item.color}}
                >
                  <div className="text-black p-[1em] h-full">
                    <h3 className="md:text-[clamp(15px,2.889vmin,26px)] text-[clamp(10px,5vmin,20px)] font-bold mb-[1em] text-[#848484]">
                      {item.title}
                    </h3>
                    <div className="flex justify-center mt-[1em]">
                    <p className="border-black border inline-block py-[.25em] px-[1em] rounded-full text-[0.8em] md:text-[1em] font-medium">
                      {item.label}
                    </p>
                    </div>
                    <div className="flex w-full h-[60%] max-h-[60%] justify-center mt-2 md:mt-6">
                    <img
                      className="object-contain h-full w-full"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
