// components/AnimatedCanvas.tsx
"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ArticleProps {
    icon: string,
    title: string,
    text: string,
    example: string,
}

const Article = ({icon, title, text, example}: ArticleProps) => {
    return (
        <div className="bg-[#FFFCE2] min-[1200px]:max-w-[263px] h-[255px] p-3">
            <div className="flex items-center gap-3 mb-2.5">
                <figure>
                    <img src={icon} alt="" />
                </figure>
                <div className="md:text-[20px] font-semibold">{title}</div>
            </div>
            <div className="bg-white p-2.5 h-[152px] border border-[#D6D6D6]">
                <p className="text-[15px] border-b border-black/30 pb-2">{text}</p>
                <div className="flex text-[13px] py-2.5 leading-[1.2]">
                    <p>例：</p>
                    <p>{example}</p>
                </div>
            </div>
        </div>
    )
}
const Skill = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d")!;
    canvas.width = 1440;
    canvas.height = 1024;

    const frameCount = 300;
    const currentFrame = (index: number) =>
      `/assets/images/skill/AI-reskilling${index.toString().padStart(3, "0")}.png`;

    const images: HTMLImageElement[] = [];
    const animationObject = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);
    }

    gsap.to(animationObject, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: ".canvas-container",
        start: "top top",
        end: "+=3500",
        pin: ".pin",
        scrub: 0.5,
      },
      onUpdate: render,
    });

    images[0].onload = render;

    function render() {
        if (!canvas) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[animationObject.frame], 0, 0);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-[#174D59]">
        <div className="overflow-hidden">
            <div className=" pin relative  w-screen h-screen">
            <div className="canvas-container w-full h-screen flex justify-center items-center">
                <canvas ref={canvasRef} className="max-w-[100vw] aspect-[1440/1024]"/>
            </div>
        </div>
        <div className="px-5 md:pb-[120px] pb-20">
            <div className="w-full md:max-w-[700px] min-[1200px]:max-w-[1110px] max-w-[400px] mx-auto">
            <div className="w-full py-10 flex items-center justify-center flex-1 min-[1200px]:hidden">
                        <img className="md:max-w-[300px] max-w-[200px]" src="/assets/images/ai-skill-btn.png" alt="" />
                    </div>
                <div className="grid min-[1200px]:grid-cols-4 md:grid-cols-2 justify-center gap-4">
                    <Article icon="/assets/images/skill-01.png" title="経営戦略" text="市場動向のリアルタイム分析により、より迅速な意思決定が可能に。" example="競合の価格変更に即日対応し、売上の落ち込みを防止。" />
                    <Article icon="/assets/images/skill-02.png" title="商品開発" text="顧客の声や市場トレンドを AIが分析し、開発の方向性を提案。" example="SNSの話題から新アイデアを抽出し、商品化のリードタイムを短縮。" />
                    <Article icon="/assets/images/skill-03.png" title="マーケティング" text="顧客セグメントごとの反応を予測し、効果的な広告配信を実現。" example="AIによる配信最適化で、同じ予算でのリーチ数が1.5倍に。" />
                    <Article icon="/assets/images/skill-04.png" title="営業支援" text="顧客の行動パターンを分析し、最適なアプローチのタイミングを提案。" example="見込み客の Web サイト閲覧履歴から興味を推測し、的確な提案が可能に。" />
                </div>
                <div className="flex max-md:flex-col gap-4 py-4">
                    <div className="max-md:w-full max-[1199px]:w-1/2 min-[1200px]:max-w-[263px]">
                        <Article icon="/assets/images/skill-05.png" title="財務管理" text="請求書や経費精算書の異常を自動検出し、不正や誤りを未然に防止。" example="経費精算の承認プロセスが半自動化され、処理時間が40%短縮。" />
                    </div>
                    <div className="h-[255px] flex items-center justify-center flex-1 max-w-[549px] max-[1199px]:hidden">
                        <img src="/assets/images/ai-skill-btn.png" alt="" />
                    </div>
                    <div className="max-md:w-full max-[1199px]:w-1/2 min-[1200px]:max-w-[263px]">
                        <Article icon="/assets/images/skill-06.png" title="市場分析" text="SNSや口コミデータの分析から、新たな顧客ニーズを早期に発見。" example="特定地域での需要増加を察知し、的確な在庫配置を実現。" />
                    </div>
                </div>
                <div className="grid min-[1200px]:grid-cols-4 md:grid-cols-2 justify-center gap-4">
                    <Article icon="/assets/images/skill-07.png" title="業務自動化" text="定型的な文書作成やデータ入力作業を AI が代行。" example="請求書処理時間が従来の3分の1に短縮、入力ミスも大幅に減少。" />
                    <Article icon="/assets/images/skill-08.png" title="業務効率化" text="会議の音声をリアルタイムで文字起こし、要約作成を自動化。" example="1時間の会議の要点を5分で共有可能に、情報伝達のスピードが向上。" />
                    <Article icon="/assets/images/skill-09.png" title="顧客対応" text="AIチャットボットによる24時間対応で、顧客満足度が向上。" example="夜間の問い合わせ対応率が100%に、翌日の対応遅れがゼロに。" />
                    <Article icon="/assets/images/skill-10.png" title="データ分析" text="大量の非構造化データから、有用な情報を短時間で抽出。" example="数千件の顧客レビューから、製品改善のヒントを数分で発見。" />
                </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Skill;
