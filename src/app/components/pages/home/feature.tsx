"use client";
import SectionTitle from "../../common/sectionTitle";
import Card from "./components/card";

export default function Feature() {
  return (
    <section className="bg-[#F7F7F7] px-5 pt-10 pb-14 md:pt-16 md:pb-20">
      <div className="w-full max-w-[420px] md:max-w-[1320px] mx-auto">
        <SectionTitle subTitle="現実世界とデジタル世界を橋渡し">
          RWAタグの特徴
        </SectionTitle>
        <div className="grid md:grid-cols-3 justify-center gap-5 lg:gap-[30px] mt-6">
          <Card
            title="フィジカルとデジタルの融合"
            image="/images/feature-01.jpg"
            color="#FEBB08"
          >
            NFTタグとRWAタグの連携によって、物理的なアイテムとデジタルアイテムのシームレスな統合が実現！展示会やイベントでは、タッチするだけでアートの情報やストーリーを共有できます。
          </Card>
          <Card
            title="簡単・シンプル"
            image="/images/feature-02.jpg"
            color="#EA4335"
          >
            高速通信と直感的な操作でNFTをRWAタグにセット。ワンタッチでNFTを転送できます。
          </Card>
          <Card
            title="安全・安心"
            image="/images/feature-03.jpg"
            color="#34A853"
          >
            RWAタグは暗号化通信に対応しており、NFTのブロックチェーン技術と組み合わせることで、より強固なセキュリティと安全性を提供します。
          </Card>
        </div>
      </div>
    </section>
  );
}
